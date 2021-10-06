import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,Pressable,TouchableOpacity
  } from 'react-native';
  import { 
     Button,
     Actionsheet,
     useDisclose} from 'native-base';
     import ImagePicker from "react-native-image-crop-picker";
     
     
     export const HomeActivity =({ navigation })=> {
       const { isOpen, onOpen, onClose } = useDisclose()
       

  function navToSelectedPhotos(data){
    navigation.navigate('Images', {
     data
    });
    onClose()
  }

  function takePhotoFromCamera (){
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
  })
      .then(image => {
          let imageData = [image];
          if (imageData.length > 0) {
            navToSelectedPhotos(imageData);
          }
      })
      .catch(err => {
          console.log('Error fetching image from Camera roll', err);
      });
  }


  function  choosePhotosFromGallery() {
    ImagePicker.openPicker({
        width: 300,
        height: 200,
        multiple: true,
    })
        .then(images => {
            console.log(images)
            if (images.length > 0) {
              navToSelectedPhotos(images);
            }
        })
        .catch(err => {
            console.log(' Error fetching images from gallery ', err);
        }
        )

      }
  


  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>


      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item onPress={takePhotoFromCamera}>takePhotoFromCamera</Actionsheet.Item>
          <Actionsheet.Item onPress={choosePhotosFromGallery}>choosePhotosFromGallery</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  )
}


const styles = StyleSheet.create({
  });