import React from 'react';
import MlkitOcr, { MlkitOcrResult } from 'react-native-mlkit-ocr';

import { Box, Text, Button } from 'native-base';

export function GenerateWords({ imagePath, setExtractedIngredients }) {
  function WordsFromImage() {
    async function FindText() {
      const resultFromUri = await MlkitOcr.detectFromFile(imagePath.path);
      const textOnly = resultFromUri.map((x) => x.text.split(' '));

      setExtractedIngredients(textOnly.flat());
    }
    if (imagePath !== null) {
      FindText().catch((e) => console.log('error', e));
    } else console.log('ERROR', typeof imagePath);
  }
  return (
    <Box>
      <Button onPress={() => WordsFromImage()}>WORDS</Button>
    </Box>
  );
}
