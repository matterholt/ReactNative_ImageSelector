import React, { useState, useEffect } from 'react';
import { Box, Button, Text } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import { GenerateWords } from '../Components/GenerateWords';

import { ScreenLayout } from '../Components/common';
import { ImagingOCR, ImageResults, NoImageFound } from '../Components/ImageProcessing';

export function PictureFromAlbum() {
  const [albumImageSelected, setAlbumImageSelected] = useState(undefined);
  const [isToxic, setIsToxic] = useState(true);
  const [extractedIngredients, setExtractedIngredients] = useState([
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ]);

  const selectImageFromAlbum = () => {
    ImagePicker.openPicker({
      width: 420,
      height: 420,
      cropping: true,
      freeStyleCropEnabled: true,
    })
      .then((image) => {
        console.log(image);
        setAlbumImageSelected(image);
      })
      .catch((error) => {
        // set error and return back to main
        console.log(error);
      });
  };

  return (
    <ScreenLayout>
      <Box m="5" h="300" w="300">
        <ImagingOCR
          pickerPicture={selectImageFromAlbum}
          setAlbumImageSelected={setAlbumImageSelected}
          albumImageSelected={albumImageSelected}
        />
      </Box>
      {albumImageSelected ? (
        <ImageResults extractedIngredients={extractedIngredients.text.split()} isToxic={isToxic} />
      ) : null}
      <NoImageFound />
      <GenerateWords
        imagePath={albumImageSelected}
        setExtractedIngredients={setExtractedIngredients}
      />
    </ScreenLayout>
  );
}
