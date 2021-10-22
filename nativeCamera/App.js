import React from 'react';
import { NativeBaseProvider, Text, Box,Button ,Center} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TextInImageCamera from './components/Recognition/TextInImageCamera'
import PhotoReview from './components/Photo/PhotoReview'


const HomeScreen = ()=>{
  return (  
    <Center flex={1} px="3">
      <Box bg="#fff" alignItems="center" justifyContent="center">
        <Text>Start Using the ML Camera stuff</Text>
      </Box>
      <Button onPress={() => console.log("hello world")}>Primary</Button>
    </Center>
    );
}


const Tab = createBottomTabNavigator();

const App= () => {
  return(
  <NavigationContainer>
    <NativeBaseProvider>
      <Tab.Navigator>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="Text Image" component={TextInImageCamera} />
        <Tab.Screen name="PhotoReview" component={PhotoReview} />
      </Tab.Navigator>
    </NativeBaseProvider>
  </NavigationContainer>
)};



export default App;
