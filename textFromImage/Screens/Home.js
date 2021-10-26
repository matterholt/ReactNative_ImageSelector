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

import { NavButton, ScreenLayout } from '../Components';

import { AlbumIcon, CameraIcon, InfoIcon, SearchIcon } from '../Components/SvgComs';

const RowStack = ({ children }) => (
  <HStack space="2xs" alignItems="center" justifyContent="space-evenly">
    {children}
  </HStack>
);

function HomeScreen({ navigation }) {
  return (
    <ScreenLayout>
      <Heading p="5" my="10">
        Lilly's Ingredient Checker
      </Heading>
      <VStack w="100%">
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
