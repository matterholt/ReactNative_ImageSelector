import React, { useState } from 'react';
import { useSetStatus } from '../../Hooks/useSetStatus';
import { LoadingStatus } from '../common';
import MlkitOcr from 'react-native-mlkit-ocr';
import {
  Box,
  Button,
  HStack,
  Container,
  Text,
  AddIcon,
  Icon,
  Flex,
  Center,
  Heading,
  FlatList,
} from 'native-base';
const TEMPRESULTS = [
  { id: 1, isToxic: true, word: 'Ftech' },
  { id: 2, isToxic: false, word: 'ínc.' },
  { id: 3, isToxic: true, word: 'Corporate' },
  { id: 4, isToxic: false, word: 'Slogan' },
  { id: 5, isToxic: false, word: 'Better' },
  { id: 6, isToxic: false, word: 'than' },
  { id: 7, isToxic: false, word: 'Ever.' },
  { id: 8, isToxic: false, word: '14th' },
  { id: 9, isToxic: false, word: 'Midterm' },
  { id: 10, isToxic: false, word: 'Business' },
  { id: 11, isToxic: false, word: 'Plan' },
  { id: 12, isToxic: false, word: 'Plan11' },
  { id: 13, isToxic: false, word: '~Basic' },
  { id: 14, isToxic: false, word: 'Policy~' },
  { id: 15, isToxic: false, word: "Let's" },
  { id: 16, isToxic: false, word: 'exceed' },
  { id: 17, isToxic: true, word: 'our' },
  { id: 18, isToxic: false, word: 'limits!' },
  { id: 19, isToxic: true, word: 'We' },
  { id: 20, isToxic: false, word: 'will,' },
  { id: 21, isToxic: false, word: 'without' },
  { id: 22, isToxic: false, word: 'compromise,' },
  { id: 23, isToxic: false, word: 'produce' },
  { id: 24, isToxic: false, word: 'the' },
  { id: 25, isToxic: false, word: 'Best' },
  { id: 26, isToxic: false, word: 'One"' },
  { id: 27, isToxic: false, word: 'ior' },
  { id: 28, isToxic: false, word: 'all' },
  { id: 29, isToxic: false, word: 'our' },
  { id: 30, isToxic: false, word: 'customers' },
];

const WordList = ({ data }) => {
  return (
    <FlatList
      w="100%"
      data={data}
      renderItem={({ item }) => (
        <Box
          borderBottomWidth="1"
          _dark={{
            borderColor: 'gray.600',
          }}
          borderColor="coolGray.200"
          pl="4"
          pr="5"
          py="2"
        >
          <HStack space={3} justifyContent="space-between">
            <Text
              _dark={{
                color: 'warmGray.100',
              }}
              color="coolGray.900"
              bold
            >
              {item.word}
            </Text>
            <Text
              _dark={{
                color: 'warmGray.100',
              }}
              color="coolGray.500"
              bold
            >
              {item.isToxic ? 'TOXIC' : 'OK'}
            </Text>
          </HStack>
        </Box>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export function OCRResults({ selectedImagePath, reset, navigation }) {
  const [imageOCR, setImageOCR] = useSetStatus();
  const [extractedIngredients, setExtractedIngredients] = useState([]);

  const findWords = () => {
    async function FindText() {
      const resultFromUri = await MlkitOcr.detectFromFile(selectedImagePath);
      const textOnly = resultFromUri.map((x) => x.text.split(' ')).flat();
      if (textOnly.length === 0) {
        // Kick out when no words are found
        setImageOCR({ type: 'notFound' });
      } else {
        const wordAnalysis = await textOnly.map((x, y) => {
          return {
            id: y,
            word: x,
            isToxic: false,
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
        {imageOCR.status}
        <WordList data={extractedIngredients} />
      </Container>
    );
  }
  return <Text>{JSON.stringify(imageOCR)}</Text>;
}
