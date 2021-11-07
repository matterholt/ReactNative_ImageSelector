import React from 'react';
import { Box, Heading, Center } from 'native-base';

export function LoadingStatus(props) {
  const { message } = props;
  return (
    <Center h="100%">
      <Heading>{message}</Heading>
    </Center>
  );
}
