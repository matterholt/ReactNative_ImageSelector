import React from 'react';

import { Pressable, Text, Box, Flex } from 'native-base';

const Press = () => (
  <Pressable>
    <Flex
      w={256}
      align="center"
      justify="center"
      p="5"
      rounded="8"
      bg="white"
      border={2}
      borderColor="primary.500"
      borderWidth={7}
    >
      <Text>{title}</Text>
      {svgIcon}
    </Flex>
  </Pressable>
);

const NavButton = (props) => {
  const { title, navigation, navigateTo, svgIcon, selected } = props;

  return (
    <Pressable
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    >
      {({ isFocused, isPressed }) => {
        return (
          <Box
            bg={isPressed ? 'brand.lightColor' : 'white'}
            rounded="8"
            p="40px"
            style={{
              transform: [
                {
                  scale: isPressed ? 1 : 0.9,
                },
              ],
            }}
          >
            <Flex justify="center" align="center" h="20" w="100">
              {svgIcon}
              <Text mt="5" color="gray.600" fontSize="xs">
                {title}
              </Text>
            </Flex>
          </Box>
        );
      }}
    </Pressable>
  );
};

export { NavButton };
