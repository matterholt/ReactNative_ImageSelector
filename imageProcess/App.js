// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeActivity} from './components/pages/HomeActivity';
import {ViewPhotoActivity} from './components/pages/ViewPhotoActivity';
import {TextInImages} from './components/pages/TextInImages'
import {CompleteOCR} from "./components/pages/CompleteOCR"

import { NativeBaseProvider} from 'native-base';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeActivity} />
        <Stack.Screen name="Images" component={ViewPhotoActivity} />
        <Stack.Screen name="Find Text" component={TextInImages} />
        <Stack.Screen name="Raw OCR Text" component={CompleteOCR} />

        
      </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;