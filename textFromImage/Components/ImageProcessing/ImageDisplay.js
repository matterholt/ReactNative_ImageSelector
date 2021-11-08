import React from 'react';

import { Center, Image, Text } from 'native-base';
// import { Image } from 'react-native';

export function ImageDisplay({ selectedImage }) {
  const { path, width, height } = selectedImage;

  return (
    <Center w="100%" h="100%">
      <Image
        size="xl"
        resizeMode="cover"
        source={{ uri: path }}
        alt={'Alternate Text '}
        // style={{ width: width, height: height }}
      />
    </Center>
  );
}
