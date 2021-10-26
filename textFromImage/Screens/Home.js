import React from 'react';
import { Flex, Center, Container, Heading, AddIcon, Spacer, VStack, Text } from 'native-base';

import { NavButton } from '../Components';

const ScreenContainer = ({ children }) => {
  return (
    <Center
      flex={1}
      bg="tertiary.100"
      _text={{
        color: 'warmGray.50',
        fontWeight: '700',
        fontSize: 'xs',
      }}
    >
      <Text>TESTING</Text>
      {children}
    </Center>
  );
};

function HomeScreen({ navigation }) {
  return (
    <ScreenContainer>
      <NavButton
        selected={true}
        title="Take Picture"
        navigateTo={'Take Picture'}
        navigation={navigation}
        svgIcon={<AddIcon size="5" mt="0.5" color="primary.500" />}
      />
      <NavButton
        title="Select Picture"
        navigateTo={'Select Picture'}
        navigation={navigation}
        svgIcon={<AddIcon size="5" mt="0.5" color="primary.500" />}
      />
      <NavButton
        title="Search Toxins"
        navigateTo={'Search Toxins'}
        navigation={navigation}
        svgIcon={<AddIcon size="5" mt="0.5" color="primary.500" />}
      />
      <NavButton
        title="App Info"
        navigateTo={'App Info'}
        navigation={navigation}
        svgIcon={<AddIcon size="5" mt="0.5" color="primary.500" />}
      />
    </ScreenContainer>
  );
}
export { HomeScreen };
