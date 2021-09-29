/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
// import {createAppContainer, createSwitchNavigator}from 'react-navigation'

import {HomeActivity} from './components/pages/HomeActivity';
import {ViewPhotoActivity} from './components/pages/ViewPhotoActivity';

// const NavigationStackInit = createSwitchNavigator(
// {
//   Home: {screen: HomeActivity},
//   ViewPhotos :{screen: ViewPhotoActivity}
// },{
//   initalRouteName:'Home'
// }
// )


// const NavigationContainer = createAppContainer(NavigationStackInit)


 const App: () => Node = () => {

 
   return (<HomeActivity/>)
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 