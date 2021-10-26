import React from 'react';
import {
  Flex,
  Center,
  Container,
  Heading,
  AddIcon,
  Spacer,
  VStack,
  HStack,
  Text,
  Icon,
  Box,
  Stack,
} from 'native-base';

import { NavButton } from '../Components';

import { AlbumIcon, CameraIcon, InfoIcon, SearchIcon } from '../Components/SvgComs';

const ScreenContainer = ({ children }) => {
  return (
    <Stack space={3} alignItems="center" direction="column">
      {children}
    </Stack>
  );
};

function HomeScreen({ navigation }) {
  return (
    <ScreenContainer>
      <Heading p="5" my="10">
        Lilly's Ingredient Checker
      </Heading>

      <HStack space={2} alignItems="center">
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
      </HStack>
      <HStack space={2} alignItems="center">
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
      </HStack>
    </ScreenContainer>
  );
}
export { HomeScreen };
