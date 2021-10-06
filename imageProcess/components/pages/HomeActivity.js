import React from 'react';
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

  function takePhotoFromCamera (){
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
  })
      .then(image => {
          let imageData = [image];
          if (imageData.length > 0) {
              this.navigateToViewPhotos(imageData);
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
                this.navigateToViewPhotos(images);
            }
        })
        .catch(err => {
            console.log(' Error fetching images from gallery ', err);
        }
        )
      }
  


  const { isOpen, onOpen, onClose } = useDisclose()
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item onPress={takePhotoFromCamera}>takePhotoFromCamera</Actionsheet.Item>
          <Actionsheet.Item onPress={takePhotoFromCamera}>choosePhotosFromGallery</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  )
}


const styles = StyleSheet.create({
  });