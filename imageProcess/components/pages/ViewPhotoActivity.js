import React from 'react';
import {
    StyleSheet,
  } from 'react-native';

  import {ActionButton,PageLayout}from "../index"

export const ViewPhotoActivity =({navigation})=> {
    return(

      <PageLayout>
        <ActionButton
          textInput ="Back Home"
          toNavigate ="Home"
          navigation={navigation}
        />
        </PageLayout>
 
    )
}


const styles = StyleSheet.create({

  });