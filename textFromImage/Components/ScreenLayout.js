import React from 'react';
import { Stack, Box } from 'native-base';
export function ScreenLayout({ children }) {
  return (
    <Stack space={3} alignItems="center" direction="column">
      {children}
    </Stack>
  );
}
