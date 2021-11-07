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
  return (
    <ScreenLayout>
      <Heading p="5" my="10">
        Lilly's Ingredient Checker
      </Heading>
      <VStack mb="100">
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
