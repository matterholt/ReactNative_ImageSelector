import React from 'react';

import { Pressable, Text, Box, Flex } from 'native-base';

const NavButton = (props) => {
  const { title, navigation, navigateTo, svgIcon } = props;

  return (
    <Pressable
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    >
      {({ isPressed }) => (
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
      )}
    </Pressable>
  );
};

export { NavButton };
