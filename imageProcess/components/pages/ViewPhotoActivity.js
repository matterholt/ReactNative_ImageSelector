import React,{useEffect, useState} from 'react';
import TextRecognition from 'react-native-text-recognition';

import {
    StyleSheet,Text,
      View,
      Platform,
      FlatList,Button,
      Image,SafeAreaView,
  } from 'react-native';

  import {ActionButton,PageLayout}from "../index"

export const ViewPhotoActivity =({route,navigation})=> {
  const [selectedImages, setSelectedImages] = useState()
  const [imageText, setImageText] = useState()
  const { data } = route.params;


  function processIamgeText(item){
    // new on JS ability to have top level async
    const {filePath} = item
    console.log(`Image filePath
    ${JSON.stringify(item)}`)

    async function  textifyImage(){
      try{
    // const result = await TextRecognition.recognize('/private/var/mobile/Containers/Data/Application/F7714AF4-4373-4DB8-AB3C-84AF3CB5E1D4/tmp/react-native-image-crop-picker/DF09B18A-B45C-458E-9880-A164F52FC162.jpg');
    const result = await TextRecognition.recognize(filePath);
    
    console.log(result)
    // setImageText(result)
  }catch(error){
    console.error(error)
  }


}
  textifyImage()


}



    useEffect(()=>{
      const imageList = data.map((x,y)=>{
        let imgDetail ={id: String(y),
        contentType: x.mime,
        fileSize: x.size,
        filePath: x.path,
      }

      if (Platform.OS === 'ios') {
        imgDetail.fileName = x.filename;
    } else {
        let path = x.path.split('/');
        imgDetail.fileName = path[path.length - 1];
    }
    
      return imgDetail
      })
      setSelectedImages(imageList)
      

      
    },[])

    return(
      <PageLayout>
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        {/* <Text>itemId: {JSON.stringify(selectedImages)}</Text> */}
        <SafeAreaView>
          <FlatList
            data={selectedImages}
            renderItem={({item}) =>{ 


              return(
              <View>
              <Text>{item.fileName}</Text>
              <Text>{}</Text>
              <Image
              style={{    width: 166,
                height: 158,}}
                  source={{
                    uri: item.filePath
                  }}
                />
                <Button
                onPress={processIamgeText(item)}
                title="text search"
                color="#841584"
                />
              </View>


          )}}
          keyExtractor={item => item.id}
          />
          </SafeAreaView>
        </View>
        </PageLayout>
 
    )
}


const styles = StyleSheet.create({

  });