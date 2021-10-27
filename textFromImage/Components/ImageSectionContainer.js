import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Container, Text, AddIcon, Icon, Flex, Heading } from 'native-base';

import { ScreenLayout, ImageResults } from '../Components';

export function ImageSectionContainer(props) {
  const { albumImageSelected, extractedIngredients, isToxic, MakeBad, children } = props;

  useEffect(() => {}, []);

  //* The only thing that would be different from the camera screen is the AlbumSelect and posibile a few items

  return (
    <ScreenLayout>
      <Box m="5" h="300" w="300" bg="red.100">
        {children}
      </Box>

      {albumImageSelected ? (
        <ImageResults
          extractedIngredients={extractedIngredients}
          isToxic={isToxic}
          MakeBad={MakeBad}
        />
      ) : (
        <Text>Search Personal Album</Text>
      )}
    </ScreenLayout>
  );
}
