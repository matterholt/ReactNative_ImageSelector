import React from 'react';
import { Spinner, Center } from 'native-base';

export function LoadingStatus() {
  return (
    <Center h="100%">
      <Spinner accessibilityLabel="Loading posts" size="lg" />
    </Center>
  );
}
