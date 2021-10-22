
   
/* eslint-disable no-console */
import React, { useMemo ,useState} from 'react';
import { Text, Button ,Image, Center,ScrollView, Container,Box,VStack} from 'native-base';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from 'react-native';

import Camera from "./Camera"
import Review from './Review'

// TODO -> inorder to move file need permisson. 

const TextInImageCamera = ({initialState}) => {
  const [capturedImage, setCapturedImage] = useState("")
  const [textBlocks, setCapturedText] =useState([])
  if(capturedImage === ""){
    return <Camera 
    setCapturedImage={setCapturedImage} 
    setCapturedText={setCapturedText}/>
  }else{
    return(
    <Review 
    setCapturedImage={setCapturedImage}
     textBlocks =  {textBlocks}
     capturedImage ={capturedImage}
    />
    )
  }};


  export default TextInImageCamera