import React from 'react';
import {

    StyleSheet,
    Text,
    View,Button,Pressable
  } from 'react-native';

export const ActionButton =(props)=> {
const {navigation,textInput,toNavigate } =props
    return(
            <Pressable style={styles.highlight} onPress={() => navigation.navigate(toNavigate)}>
                <Text style={styles.buttonText}>{textInput}</Text>
          </Pressable>
    )
}


const styles = StyleSheet.create({
  buttonText:{
    fontWeight: '700',
    color:'white',
    fontSize:25
  },
    highlight: {
      
      borderColor:'black',
      borderStyle:"solid",
      borderRadius: 5,
      backgroundColor:"#06384d",
      padding:10,
    },
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
  });