import React from 'react';
import {

    StyleSheet,
    Text,
    View,
  } from 'react-native';

export const ViewPhotoActivity =()=> {
    return(

      <View style={styles.container}>
            <Text style={styles.highlight}>View Photos PAGE</Text>
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