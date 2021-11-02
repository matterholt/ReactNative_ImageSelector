import React from 'react';

import { Center } from 'native-base';
import { Image } from 'react-native';

export function ImageDisplay({ imagePath }) {
  const { path, w, h } = imagePath;
  return (
    <Center w="100%" h="100%">
      <Image source={{ uri: path }} style={{ width: w, height: h }} />
    </Center>
  );
}
