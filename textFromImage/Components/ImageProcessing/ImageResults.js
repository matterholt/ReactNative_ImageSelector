import React from 'react';
import {
  Box,
  Button,
  HStack,
  Container,
  Text,
  AddIcon,
  Icon,
  Flex,
  Heading,
  FlatList,
} from 'native-base';

const WordList = ({ data }) => {
  return (
    <FlatList
      w="100%"
      data={data}
      renderItem={({ item }) => (
        <Box
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
              color="coolGray.900"
              bold
            >
              {item.word}
            </Text>
            <Text
              _dark={{
                color: 'warmGray.100',
              }}
              color="coolGray.500"
              bold
            >
              {item.isToxic ? 'TOXIC' : 'OK'}
            </Text>
          </HStack>
        </Box>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export function ImageResults({ extractedIngredients, isToxic }) {
  return (
    <Container w="100%">
      <Heading>Found {extractedIngredients.length} indgredients</Heading>
      {/* <IngredientList extractedIngredients={extractedIngredients} /> */}
      <WordList data={extractedIngredients} />
      {isToxic ? <Text>Product is NG</Text> : <Text>Product is good</Text>}
      <Button>Check Ingredients</Button>
    </Container>
  );
}
