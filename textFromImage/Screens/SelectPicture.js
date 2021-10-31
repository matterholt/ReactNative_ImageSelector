import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Container, Text, AddIcon, Icon, Flex, Heading } from 'native-base';

import { ScreenLayout } from '../Components/common';
import { AlbumSelect, ImageResults } from '../Components/ImageProcessing';

export function SelectPicture() {
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

  //* The only thing that would be different from the camera screen is the AlbumSelect and posibile a few items

  return (
    <ScreenLayout>
      <Box m="5" h="300" w="300">
        <AlbumSelect
          setAlbumImageSelected={setAlbumImageSelected}
          albumImageSelected={albumImageSelected}
        />
      </Box>

      {albumImageSelected ? (
        <ImageResults extractedIngredients={extractedIngredients} isToxic={isToxic} />
      ) : (
        <Text>Search Personal Album</Text>
      )}
    </ScreenLayout>
  );
}
