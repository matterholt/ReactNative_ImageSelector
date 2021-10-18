import React from 'react';
import { NativeBaseProvider, Text, Box,Button ,Center} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/core';
import TextInImageCamera from './components/Recognition/TextInImageCamera'


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



const TextInImage = ()=>{
  // const isFocused = useIsFocused();
  // if (hasCameraPermission === false) {
  //   return <Text>No access to camera</Text>;
  // } else if (hasCameraPermission !== null && isFocused) {
    return (<TextInImageCamera />)
  // } else {
  //   return null;
  // }

}
const Tab = createBottomTabNavigator();

const App= () => {
  return(
  <NavigationContainer>
    <NativeBaseProvider>
      <Tab.Navigator>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="Text Image" component={TextInImage} />


      </Tab.Navigator>
    </NativeBaseProvider>
  </NavigationContainer>
)};



export default App;
