import React, { useState, useEffect, useCallback } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import { Box, Button, Text, ScrollView } from 'native-base';
import { useSetStatus } from '../Hooks/useSetStatus';

// UI Componet Library

// Components
import { ScreenLayout, LoadingStatus } from '../Components/common';
import { ImageContainer, OCRResults, NoImageSelected } from '../Components/ImageProcessing';

export function PictureFromAlbum({ route, navigation }) {
  const [selectedImage, setSelectedImage] = useSetStatus({ status: 'inital' });
  const [albumImageSelected, setAlbumImageSelected] = useState(undefined);

  const selectImageFromAlbum = useCallback(() => {
    ImagePicker.openPicker({
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
    selectImageFromAlbum();
  }, [selectImageFromAlbum, setSelectedImage]);

  const resetImage = () => {
    // setAlbumImageSelected(undefined);
    setSelectedImage({ type: 'loading' });
    selectImageFromAlbum();
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
