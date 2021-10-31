import React, { useState, useEffect } from 'react';

import { Button, Center, Text } from 'native-base';

import { ScreenLayout } from '../Components/common';
import { ImageContainer } from '../Components/ImageProcessing';

const toxinIngredient = ['cat', 'dog'];

const CameraSelect = () => {};

export function TakePicture() {
  const [albumImageSelected, setAlbumImageSelected] = useState();
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

  function MakeBad() {
    setExtractedIngredients([...extractedIngredients, ...toxinIngredient]);
  }

  return (
    <ScreenLayout>
      {albumImageSelected ? (
        <Center w="100%" h="100%" bg="white">
          <Text>Select a Picture ...</Text>
          <Button onPress={() => setAlbumImageSelected('')}>Reset</Button>
        </Center>
      ) : (
        <ImageContainer setAlbumImageSelected={setAlbumImageSelected} />
      )}

      <Text>Take Picture and checkout the text in image</Text>
    </ScreenLayout>
  );
}
