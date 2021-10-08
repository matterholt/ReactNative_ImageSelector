import React from 'react';

import {Image} from 'react-native';
export const ViewedImage = ({imagePath})=>{
    return(
    <Image 
        style={{width: 300,height: 250, borderRadius:5}}
        source={{uri: imagePath}}
        />

    )
}