/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NativeBaseProvider, Center } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeScreen,TakePicture, SelectPicture} from "./Screens/index"



const Stack = createNativeStackNavigator();

const App = () =>  {

  return (
    <NavigationContainer>
      <NativeBaseProvider>
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Take Picture" component={TakePicture} />
        <Stack.Screen name="Select Picture" component={SelectPicture} />
      </Stack.Navigator>
 
      </NativeBaseProvider>
    </NavigationContainer>
  )
};


export default App;
