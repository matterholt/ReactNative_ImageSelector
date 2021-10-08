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


  function processIamgeText(imageFilePath){
    // new on JS ability to have top level async
    console.log("convert image to text")

    async function  textifyImage(){
      try{
    const result = await TextRecognition.recognize(imageFilePath);
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
              const path = item.filePath
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
                onPress={(path)=>processIamgeText(path)}
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