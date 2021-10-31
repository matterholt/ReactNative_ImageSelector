import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import { Box, Button, Center, Text, AddIcon } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';

const ImageNavtive = ({ imagePath }) => {
  return <Image source={{ uri: imagePath }} style={styles.logo} />;
};
const ImageBase = ({ imagePath }) => {
  return <Image source={{ uri: imagePath }} alt="Alternate Text" size="2xl" />;
};

const styles = StyleSheet.create({
  logo: {
    width: 320,
    height: 320,
  },
});

const ImageSelection = ({ setAlbumImageSelected, pickerPicture }) => (
  <Button onPress={() => pickerPicture()}>
    <Center w="100%" h="100%">
      <AddIcon m="10" />
      <Text>Select a Picture ...</Text>
    </Center>
  </Button>
);

function ViewedImage({ imagePath }) {
  console.log('viewed image for', imagePath);
  return <Image source={imagePath} alt="Alternate Text" size="xl" />;
}

export function AlbumSelect({ albumImageSelected, setAlbumImageSelected }) {
  const pickerPicture = () => {
    ImagePicker.openPicker({
      width: 320,
      height: 320,
      cropping: true,
    }).then((image) => {
      console.log(image.path);
      // SetUri(image.path);
      // props.onChange?.(image);
      setAlbumImageSelected(image.path);
    });
  };

  return albumImageSelected ? (
    <Center w="100%" h="100%" bg="red.100">
      <ImageNavtive imagePath={albumImageSelected} />
      {/* <ImageBase imagePath={albumImageSelected}/> */}
      {/* <Text>{albumImageSelected}</Text> */}

      <Button onPress={() => console.log('fond')}>Reset</Button>
    </Center>
  ) : (
    <ImageSelection pickerPicture={pickerPicture} />
  );
}
