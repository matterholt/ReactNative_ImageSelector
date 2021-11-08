import React, { useState } from 'react';
import { useSetStatus } from '../../Hooks/useSetStatus';
import { LoadingStatus } from '../common';
import { WordContainer } from './WordContainer';
import MlkitOcr from 'react-native-mlkit-ocr';
import { Box, Button, HStack, Container, Text, Center, Heading, FlatList } from 'native-base';

const WORD_NG_TOXIC = ['write', 'text'];

const WordList = () => {};

export function OCRResults({ selectedImagePath, reset, navigation }) {
  const [imageOCR, setImageOCR] = useSetStatus();
  const [extractedIngredients, setExtractedIngredients] = useState([]);

  const findWords = () => {
    //todo Improve funciton clean code up
    async function FindText() {
      const resultFromUri = await MlkitOcr.detectFromFile(selectedImagePath);
      const textOnly = resultFromUri.map((x) => x.text.split(' ')).flat();
      if (textOnly.length === 0) {
        // Kick out when no words are found
        setImageOCR({ type: 'notFound' });
      } else {
        const wordAnalysis = await textOnly.map((x, y) => {
          const toxicIngredient = WORD_NG_TOXIC.find((word) => word.toUpperCase() === x);

          return {
            id: y,
            word: x,
            isToxic: toxicIngredient ? true : false,
          };
        });
        setExtractedIngredients(wordAnalysis);
        setImageOCR({ type: 'showResults' });
      }
    }

    setImageOCR({ type: 'loading' });

    FindText().catch((error) => {
      console.log(error);
      setImageOCR({ type: 'error', message: 'App has an issue, try again' });
    });
  };

  //* Once component is mounted then should have an image selected and woudl be able to check if has words

  // useEffect(() => {
  //   async function FindText() {
  //     const resultFromUri = await MlkitOcr.detectFromFile(albumImageSelected.path);
  //     const textOnly = resultFromUri.map((x) => x.text.split(' ')).flat();
  //     if (textOnly !== []) {
  //       setExtractedIngredients(textOnly);
  //     }
  //     setImageOCR({ type: 'notFound' });
  //   }

  //   if (!route) {
  //     setAlbumImageSelected(undefined);
  //   } else {
  //     setAlbumImageSelected(route.params.image);
  //     FindText();
  //   }
  //   console.log('use effect should not be');
  //   setImageOCR({ type: 'loading' });

  //   FindText().catch((e) => setImageOCR({ type: 'error' }));
  //   setImageOCR({ type: 'showResults' });
  // }, []);

  if (imageOCR.status === 'inital') {
    return <Button onPress={() => findWords()}>Find words</Button>;
  }
  if (imageOCR.status == 'loading') {
    return <LoadingStatus />;
  }
  if (imageOCR.status === 'error') {
    return (
      <Center>
        <Button onPress={() => navigation.navigate('Home')}>ERROR try something else</Button>
        <Text>{imageOCR.message}</Text>
      </Center>
    );
  }
  if (imageOCR.status === 'notFound') {
    return (
      <Center>
        <Heading> No Words found in the Image</Heading>
        <Button onPress={() => reset()}>Try Another image </Button>
      </Center>
    );
  }
  if (imageOCR.status === 'showResults') {
    return (
      <Container w="100%">
        <Heading>Found {extractedIngredients.length} indgredients</Heading>
        <WordContainer data={extractedIngredients} />
      </Container>
    );
  }
  return null;
}
