import React from 'react';
import { Button, Center, Text, AddIcon } from 'native-base';

export function SelectImage({ pickerPicture }) {
  return (
    <Button onPress={() => pickerPicture()}>
      <Center w="100%" h="100%">
        <AddIcon m="10" />
        <Text>Select a Picture ...</Text>
      </Center>
    </Button>
  );
}
