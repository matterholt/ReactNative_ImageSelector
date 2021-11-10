import React, { useEffect } from 'react';

import { Box, Button, Text, ScrollView } from 'native-base';
import { useSetStatus } from '../Hooks/useSetStatus';

// UI Componet Library

// TODO -> album and camera have simular layouts only issue is the function that is called
//* create a option that can be set in parent and what ever is set determins

// Components
import { ScreenLayout, LoadingStatus } from './common';
import { ImageContainer, OCRResults, NoImageSelected } from './ImageProcessing';

// eslint-disable-next-line import/prefer-default-export
export function SelectingImageOCR({ imageSelecter, albumImageSelected }) {
  const [selectedImage, setSelectedImage] = useSetStatus({ status: 'inital' });

  useEffect(() => {
    // ? Not sure how to really handle this, only want it to run once on mount.
    setSelectedImage({ type: 'loading' });
    imageSelecter();
  }, [imageSelecter, setSelectedImage]);

  const resetImage = () => {
    // setAlbumImageSelected(undefined);
    setSelectedImage({ type: 'loading' });
    imageSelecter();
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
