
   
/* eslint-disable no-console */
import React, { useMemo ,useState} from 'react';
import { Text, Button ,Image, Center,ScrollView} from 'native-base';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from 'react-native';

import Camera from "./Camera"

// TODO -> inorder to move file need permisson. 

const TextInImageCamera = ({initialState}) => {
  const [capturedImage, setCapturedImage] = useState("")
  const [caputedText, setCapturedText] =useState("")
  if(capturedImage === ""){
    return <Camera 
    setCapturedImage={setCapturedImage} 
    setCapturedText={setCapturedText}/>
  }else{
    return (
      <Center >
        <Image
              source={{
        uri: capturedImage,
      }}
      alt="Alternate Text"
      size="xl"
        />
        <Button onPress={()=>setCapturedImage("")}>clear</Button>
        <ScrollView
              _contentContainerStyle={{
                px: "20px",
                mb: "4",
                minW: "72",
              }}
        >
        <Text>
          {JSON.stringify(caputedText)}
        </Text>
        </ScrollView>
      </Center>
    );
  }};


  export default TextInImageCamera