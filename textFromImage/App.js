/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Center, Button, Text ,Heading} from 'native-base';

import {TakePicture, SelectPicture} from "./Screens/index"


const NavButton = ({title,navigation,navigateTo})=>{
  return(
  <Button onPress={()=>{navigation.navigate(navigateTo)}}>
  <Text>{title}</Text>
</Button>
)}
function HomeScreen({navigation}) {
  return (
    <Center >
      <Heading>Home Screen</Heading>
      <NavButton 
        title = "Take Picture"
        navigateTo ={"Take Picture"}
        navigation={navigation}
      />
      <NavButton 
        title = "Select Picture"
        navigateTo ={"Select Picture"}
        navigation={navigation}
      />

    </Center>
  );
}
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
