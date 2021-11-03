import React, { useState, useEffect } from 'react';
import { Box, Button, Text } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import { NativeModules } from 'react-native';

import { ScreenLayout } from '../Components/common';
import { ImagingOCR, ImageResults, NoImageFound } from '../Components/ImageProcessing';

export function PictureFromAlbum() {
  const [albumImageSelected, setAlbumImageSelected] = useState('');
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
        console.log('Image DATA --->', { h: image.height, w: image.width, path: image.path });
        // SetUri(image.path);
        // props.onChange?.(image);
        setAlbumImageSelected({ h: image.height, w: image.width, path: image.path });
      })
      .catch((error) => {
        // set error and return back to main
        console.log(error);
      });
  };

  function WordsFromImage() {
    try {
      let OCRresults = NativeModules.TextOCR.recognize(albumImageSelected.path);
      setExtractedIngredients(OCRresults);
    } catch (err) {
      console.log(`there is an issue ${err}`);
    }
  }

  return (
    <ScreenLayout>
      <Box m="5" h="300" w="300">
        <ImagingOCR
          pickerPicture={selectImageFromAlbum}
          setAlbumImageSelected={setAlbumImageSelected}
          albumImageSelected={albumImageSelected}
        />
      </Box>
      {/* {albumImageSelected ? (
        <ImageResults extractedIngredients={extractedIngredients} isToxic={isToxic} />
      ) : null} */}
      <NoImageFound />
      <Text>{JSON.stringify(extractedIngredients)}</Text>
      <Button onPress={() => WordsFromImage()}>WORDS</Button>
    </ScreenLayout>
  );
}
