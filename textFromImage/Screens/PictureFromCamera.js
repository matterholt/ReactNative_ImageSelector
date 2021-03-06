import React, { useState, useEffect, useCallback } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import { Box, Button, Text, ScrollView } from 'native-base';
import { useSetStatus } from '../Hooks/useSetStatus';

import { ScreenLayout, LoadingStatus } from '../Components/common';
import { ImageContainer, OCRResults, NoImageSelected } from '../Components/ImageProcessing';
// eslint-disable-next-line import/prefer-default-export
export function PictureFromCamera({ route, navigation }) {
  const [selectedImage, setSelectedImage] = useSetStatus({ status: 'inital' });
  const [albumImageSelected, setAlbumImageSelected] = useState(undefined);

  const selectImageFromCamera = useCallback(() => {
    ImagePicker.openCamera({
      width: 420,
      height: 420,

      scropping: true,
      freeStyleCropEnabled: true,
    })
      .then((image) => {
        setAlbumImageSelected(image);
        setSelectedImage({ type: 'showResults' });
      })
      .catch(() => {
        navigation.navigate('Home');
      });
  }, [navigation, setSelectedImage]);

  useEffect(() => {
    // ? Not sure how to really handle this, only want it to run once on mount.
    setSelectedImage({ type: 'loading' });
    selectImageFromCamera();
  }, [selectImageFromCamera, setSelectedImage]);

  const resetImage = () => {
    // setAlbumImageSelected(undefined);
    setSelectedImage({ type: 'loading' });
    selectImageFromCamera();
  };

  if (selectedImage.status === 'error') {
    return (
      <Text>
        Error, yeah try another picture
        <Button onPress={() => resetImage()}>RESET</Button>
      </Text>
    );
  }
  if (selectedImage.status === 'loading') {
    return <LoadingStatus />;
  }
  if (selectedImage.status === 'notFound') {
    return <NoImageSelected />;
  }
  if (selectedImage.status === 'showResults') {
    return (
      <ScrollView>
        <Box m="5" h="300" w="300">
          <ImageContainer selectedImage={albumImageSelected} pickerPicture={resetImage} />
        </Box>
        <OCRResults selectedImagePath={albumImageSelected.path} reset={resetImage} />
      </ScrollView>
    );
  }
  return null;
}
