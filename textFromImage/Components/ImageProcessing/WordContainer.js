import React from 'react';
import { Box, HStack, Text } from 'native-base';

const RowStack = ({ item }) => (
  <Box
    bg={item.isToxic ? 'error.300' : null}
    borderBottomWidth="1"
    _dark={{
      borderColor: 'gray.600',
    }}
    borderColor="coolGray.200"
    pl="4"
    pr="5"
    py="2"
  >
    <HStack space={3} justifyContent="space-between">
      <Text
        _dark={{
          color: 'warmGray.100',
        }}
        color={item.isToxic ? 'error.800' : 'coolGray.900'}
        bold
      >
        {item.word}
      </Text>
      <Text
        _dark={{
          color: 'warmGray.100',
        }}
        color={item.isToxic ? 'error.800' : 'coolGray.500'}
        bold
      >
        {item.isToxic ? 'TOXIC' : 'OK'}
      </Text>
    </HStack>
  </Box>
);

export function WordContainer({ data }) {
  return data.map((x) => <RowStack item={x} />);
}
