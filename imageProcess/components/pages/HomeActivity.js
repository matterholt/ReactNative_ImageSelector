import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import {ActionSheet, Root} from 'native-base';
// import ImagePicker from "react-native-image-crop-picker";

export const HomeActivity =()=> {

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

        <View style={styles.container}>
            <Text style={styles.highlight}>HOME PAGE</Text>
            
        </View>

 
    )
}


const styles = StyleSheet.create({
    highlight: {
      fontWeight: '700',
    },
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
  });