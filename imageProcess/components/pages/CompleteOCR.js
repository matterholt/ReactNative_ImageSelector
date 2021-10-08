
import React,{useState, useEffect} from'react'
import { Center} from 'native-base';


import {ImageHeader,ViewedImage,OCRText} from "../blocks"



export const CompleteOCR = ({route})=>{
    const { selectedImage } = route.params;
    const {fileName,filePath}=selectedImage

    const [imageText, setImageText] = useState("testing")


    return(
        <Center>
            <ImageHeader fileTitle={fileName}/>
            <ViewedImage imagePath={filePath}/>
            <OCRText ocrResults={imageText}/>
        </Center>
    )
}
