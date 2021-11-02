/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  HomeScreen,
  PictureFromCamera,
  PictureFromAlbum,
  SearchToxins,
  AppInfo,
} from './Screens/index';

const Stack = createNativeStackNavigator();

const App = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      brand: {
        lightColor: '#D3EFBD',
      },
    },
  });
  const baseColor = theme.colors.brand.lightColor;

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Toxin Finder',
              headerStyle: {
                backgroundColor: { baseColor },
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="Take Picture" component={PictureFromCamera} />
          <Stack.Screen name="Select Picture" component={PictureFromAlbum} />
          <Stack.Screen name="Search Toxins" component={SearchToxins} />
          <Stack.Screen name="App Info" component={AppInfo} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
