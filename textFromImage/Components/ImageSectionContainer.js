import React, { useState, useEffect } from 'react';
import { Box, Text } from 'native-base';

import { ScreenLayout, ImageResults } from '../Components';

export function ImageSectionContainer(props) {
  const { selectedImage, extractedIngredients, isToxic, MakeBad, children } = props;

  useEffect(() => {}, []);

  return (
    <ScreenLayout>
      <Box m="5" h="300" w="300">
        {children}
      </Box>

      {selectedImage ? (
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
