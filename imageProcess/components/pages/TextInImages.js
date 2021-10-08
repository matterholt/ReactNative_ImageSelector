import React,{useState, useEffect} from'react'
import TextRecognition from 'react-native-text-recognition';
import {
    StyleSheet,Text,
      View,
      Platform,
      FlatList,Button,
      Image,SafeAreaView,
  } from 'react-native';


export const TextInImages =({route,navigation})=>{
    const { selectedImage } = route.params;
    const [imageText, setImageText] = useState()


    useEffect(()=>{
        async function processIamgeText(item){
            // new on JS ability to have top level async
            const {filePath} = item
              try{
            // const result = await TextRecognition.recognize('/private/var/mobile/Containers/Data/Application/F7714AF4-4373-4DB8-AB3C-84AF3CB5E1D4/tmp/react-native-image-crop-picker/DF09B18A-B45C-458E-9880-A164F52FC162.jpg');
            const result = await TextRecognition.recognize(filePath);
            setImageText(result)
          }catch(error){
            console.error(error)
          }
        }
       processIamgeText(selectedImage)
    },[])

    
    return(
        <View>
            <Text>{route.fileName}</Text>
            <Image
              style={{width: 166,height: 158,}}
                  source={{
                    uri: route.filePath
                  }}
                />
            <Text>{imageText}</Text>
        </View>

    )

}