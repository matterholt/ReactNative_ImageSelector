import React from 'react';
import { Box, Button, Center, Container, Text, AddIcon, Icon, Flex, Heading } from 'native-base';

const IngredientList = ({ extractedIngredients }) => {
  return (
    <Flex wrap flexDirection="row" px={10}>
      {extractedIngredients.map((x) => (
        <Text fontSize="lg" m="2">
          {x}
        </Text>
      ))}
    </Flex>
  );
};

export function ImageResults({ extractedIngredients, isToxic }) {
  return (
    <Container>
      <Heading>Found {extractedIngredients.length} indgredients</Heading>
      <IngredientList extractedIngredients={extractedIngredients} />
      {isToxic ? <Text>Product is NG</Text> : <Text>Product is good</Text>}
      <Button>Check Ingredients</Button>
    </Container>
  );
}
