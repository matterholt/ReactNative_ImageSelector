import React, { useState } from 'react';
import { Heading, VStack, HStack, Button } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import { NavButton, ScreenLayout } from '../Components/common';
import { AlbumIcon, CameraIcon, InfoIcon, SearchIcon } from '../Components/SvgComs';

const RowStack = ({ children }) => (
  <HStack m="0.5" space="2xs" alignItems="center" justifyContent="space-evenly">
    {children}
  </HStack>
);

function HomeScreen({ navigation }) {
  const [image, setImage] = useState(undefined

  const selectImageFromAlbum = () => {
    ImagePicker.openPicker({
      width: 420,
      height: 420,
      cropping: true,
      freeStyleCropEnabled: true,
    })
      .then((image) => {
        setImage(image);
        navigation.navigate('Select Picture', { image });
      })
      .catch((error) => {
        // set error and return back to main
        // if error have a pop up saying there is an issue try again
        console.log(error);
      });
  };

  return (
    <ScreenLayout>
      <Heading p="5" my="10">
        Lilly's Ingredient Checker
      </Heading>
      <VStack mb="100">
        <Button onPress={() => selectImageFromAlbum()}>Direct to the Album</Button>
        <RowStack>
          <NavButton
            selected={true}
            title="Take Picture"
            navigateTo={'Take Picture'}
            navigation={navigation}
            svgIcon={<CameraIcon />}
          />
          <NavButton
            title="Select Picture"
            navigateTo={'Select Picture'}
            navigation={navigation}
            svgIcon={<AlbumIcon />}
          />
        </RowStack>
        <RowStack>
          <NavButton
            title="Search Toxins"
            navigateTo={'Search Toxins'}
            navigation={navigation}
            svgIcon={<SearchIcon />}
          />
          <NavButton
            title="App Info"
            navigateTo={'App Info'}
            navigation={navigation}
            svgIcon={<InfoIcon />}
          />
        </RowStack>
      </VStack>
    </ScreenLayout>
  );
}
export { HomeScreen };
