import React, { useState, useEffect } from 'react';

import { Button, Center, Text } from 'native-base';

import { ScreenLayout, ImageContainer } from '../Components';
import { ImageSectionContainer } from '../Components/ImageSectionContainer';

const toxinIngredient = ['cat', 'dog'];
/*


*/

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
      <ImageSectionContainer
        extractedIngredients={extractedIngredients}
        isToxic={isToxic}
        MakeBad={MakeBad}
        albumImageSelected={albumImageSelected}
      >
        {albumImageSelected ? (
          <Center w="100%" h="100%" bg="white">
            <Text>Select a Picture ...</Text>
            <Button onPress={() => setAlbumImageSelected('')}>Reset</Button>
          </Center>
        ) : (
          <ImageContainer setAlbumImageSelected={setAlbumImageSelected} />
        )}

        <Text>Take Picture and checkout the text in image</Text>
      </ImageSectionContainer>
    </ScreenLayout>
  );
}
