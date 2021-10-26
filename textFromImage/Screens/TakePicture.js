import React from 'react';
import { Box, Button, Center, Container, Text, AddIcon, Icon, Flex, Heading } from 'native-base';

import { ScreenLayout } from '../Components';

import { ImageSectionContainer } from '../Components/ImageSectionContainer';
export function TakePicture() {
  return (
    <ScreenLayout>
      <ImageSectionContainer>
        <Text>Take Picture and checkout the text in image</Text>
      </ImageSectionContainer>
    </ScreenLayout>
  );
}
