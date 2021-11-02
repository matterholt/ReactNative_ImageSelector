import React, { useState, useEffect } from 'react';
import { Box } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import { ScreenLayout } from '../Components/common';
import { ImagingOCR, ImageResults, NoImageFound } from '../Components/ImageProcessing';

export function PictureFromCamera() {
  const [albumImageSelected, setAlbumImageSelected] = useState('');
  const [toxinIngredient, setToxinIngredient] = useState(['cat', 'dog']);
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

  const selectImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
    })
      .then((image) => {
        // need to match
        setAlbumImageSelected({ h: image.height, w: image.width, path: image.path });
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
          pickerPicture={selectImageFromCamera}
          setAlbumImageSelected={setAlbumImageSelected}
          albumImageSelected={albumImageSelected}
        />
      </Box>

      {albumImageSelected ? (
        <ImageResults extractedIngredients={extractedIngredients} isToxic={isToxic} />
      ) : null}
      <NoImageFound />
    </ScreenLayout>
  );
}
