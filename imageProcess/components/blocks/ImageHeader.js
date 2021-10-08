import React from 'react';

import {Text} from 'react-native';


export const ImageHeader = ({fileTitle="testing"})=>{
    return(
        <Text style={{textAlign:'center', fontWeight:"700",fontSize:20,marginTop:10,marginBottom:5}}>{fileTitle}</Text>
    )
}