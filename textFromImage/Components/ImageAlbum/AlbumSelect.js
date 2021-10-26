import React from 'react';
import { Box, Button, Center, Text, AddIcon } from 'native-base';

const ImageSelection = ({ setAlbumImageSelected }) => (
  <Button onPress={() => setAlbumImageSelected('Image from Ablum')}>
    <Center w="100%" h="100%">
      <AddIcon m="10" />
      <Text>Select a Picture ...</Text>
    </Center>
  </Button>
);

export function AlbumSelect({ albumImageSelected, setAlbumImageSelected }) {
  return albumImageSelected ? (
    <Center w="100%" h="100%" bg="white">
      <Text>Select a Picture ...</Text>
      <Button onPress={() => setAlbumImageSelected('')}>Reset</Button>
    </Center>
  ) : (
    <ImageSelection setAlbumImageSelected={setAlbumImageSelected} />
  );
}
