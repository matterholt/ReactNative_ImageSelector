import React from 'react';
import {  Text, Box,Button ,Center} from 'native-base';

const PhotoReview = ()=>{
    return (  
      <Center flex={1} px="3">
        <Box bg="#fff" alignItems="center" justifyContent="center">
          <Text>select from album</Text>
        </Box>
        <Button onPress={() => console.log("select photos from libaray")}>Primary</Button>
      </Center>
      );
  }
  


  export default PhotoReview