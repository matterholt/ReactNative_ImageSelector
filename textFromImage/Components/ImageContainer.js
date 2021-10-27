import React from 'react';
import { Button, Center, Text, AddIcon } from 'native-base';

export function ImageContainer({ setAlbumImageSelected }) {
  return (
    <Button onPress={() => setAlbumImageSelected('Image from Ablum')}>
      <Center w="100%" h="100%">
        <AddIcon m="10" />
        <Text>Select a Picture ...</Text>
      </Center>
    </Button>
  );
}
