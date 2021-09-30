// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeActivity} from './components/pages/HomeActivity';
import {ViewPhotoActivity} from './components/pages/ViewPhotoActivity';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeActivity} />
        <Stack.Screen name="Images" component={ViewPhotoActivity} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;