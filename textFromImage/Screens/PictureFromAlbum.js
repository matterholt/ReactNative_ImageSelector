import React, { useState, useEffect, useReducer } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import MlkitOcr, { MlkitOcrResult } from 'react-native-mlkit-ocr';

// UI Componet Library
import { Box, Button, Text } from 'native-base';

// Components
import { ScreenLayout } from '../Components/common';
import { ImagingOCR, ImageResults, NoImageSelected } from '../Components/ImageProcessing';

const ControlWordsFoundInImage = ({
  wordResultViewState,
  extractedIngredients,
  setWordResultViewState,
}) => {
  if (wordResultViewState.status == 'loading') {
    return <Text>Loading</Text>;
  }
  if (wordResultViewState.status == 'error') {
    return (
      <Text>
        Error, yeah try another picture{' '}
        <Button onPress={() => setWordResultViewState({ type: 'inital' })}>RESET</Button>
      </Text>
    );
  }
  if (wordResultViewState.status == 'showResults') {
    return <ImageResults extractedIngredients={extractedIngredients} />;
  }
  if (wordResultViewState.status == 'notFound') {
    return <Text>No words found in images, try again</Text>;
  }
  if (wordResultViewState.status == 'inital') {
    return <NoImageSelected />;
  }
  return null;
};

// image control hook useReducer
const initalView = 'inital';
function reducerImageControl(state, action) {
  switch (action.type) {
    case 'inital':
      return { status: 'intal' };
    case 'error':
      return { status: 'error' };
    case 'showResults':
      return { status: 'showResults' };
    case 'notFound':
      return { status: 'notFound' };
    case 'loading':
      return { status: 'loading' };
    default:
      throw new Error();
  }
}

export function PictureFromAlbum() {
  const [appState, setAppState] = useState(''); // error, loading, results, inital
  const [wordResultViewState, setWordResultViewState] = useReducer(reducerImageControl, initalView);
  const [albumImageSelected, setAlbumImageSelected] = useState(undefined);
  const [isToxic, setIsToxic] = useState(true);
  const [extractedIngredients, setExtractedIngredients] = useState([
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
  ]);

  // TODO: Extract out into a component so that it can be used for camera,

  const selectImageFromAlbum = () => {
    ImagePicker.openPicker({
      width: 420,
      height: 420,
      cropping: true,
      freeStyleCropEnabled: true,
    })
      .then((image) => {
        console.log(image);
        setAlbumImageSelected(image);
      })
      .catch((error) => {
        // set error and return back to main
        console.log(error);
      });
  };

  useEffect(() => {
    console.log('use effect should not be');
    setWordResultViewState({ type: 'loading' });
    async function FindText() {
      const resultFromUri = await MlkitOcr.detectFromFile(albumImageSelected.path);
      const textOnly = resultFromUri.map((x) => x.text.split(' ')).flat();
      if (textOnly !== []) {
        setExtractedIngredients(textOnly);
      }
      setWordResultViewState({ type: 'notFound' });
    }
    FindText().catch((e) => setWordResultViewState({ type: 'error' }));
    setWordResultViewState({ type: 'showResults' });
  }, []);

  return (
    <ScreenLayout>
      <Box m="5" h="300" w="300">
        <ImagingOCR
          pickerPicture={selectImageFromAlbum}
          setAlbumImageSelected={setAlbumImageSelected}
          albumImageSelected={albumImageSelected}
        />
      </Box>
      <ControlWordsFoundInImage
        wordResultViewState={wordResultViewState}
        setWordResultViewState={setWordResultViewState}
        extractedIngredients={extractedIngredients}
      />
    </ScreenLayout>
  );
}
