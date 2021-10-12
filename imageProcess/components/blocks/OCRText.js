import React from 'react';

import {Text} from 'react-native';
export const OCRText = ({ocrResults})=>{
    return(
        <Text style={{fontSize:15,margin:15}}>{ocrResults}</Text>
    )
}