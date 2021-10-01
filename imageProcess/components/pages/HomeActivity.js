import React from 'react';
import {
    StyleSheet,
    Text,
    View,Button
  } from 'react-native';
  import {ActionSheet, Root} from 'native-base';
// import ImagePicker from "react-native-image-crop-picker";
import {ActionButton,PageLayout}from "../index"


export const HomeActivity =({ navigation })=> {

  function selectImages(){
    const buttons = ['Camera','Photo Library', 'Cancel']
    ActionSheet.show(
      {
        options: buttons,
        cancelButtonIndex:2
      },
      buttonIndex =>{
        switch(buttonIndex){
          case 0 :
            takePhotoFromCamera();
            break;
          case 1 :
            chosePhotosFromGallary();
            break;
          default:
            break;
        }
      }
    )
  }
  return(
    <PageLayout>
      <ActionButton
        textInput ="View Images"
        toNavigate ="Images"
        navigation={navigation}
      />
      </PageLayout>

  )
}


const styles = StyleSheet.create({
  });