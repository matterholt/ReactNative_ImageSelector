import React,{useEffect, useState} from 'react';

import { Button} from 'native-base';
import {
    StyleSheet,Text,
      View,
      Platform,
      FlatList,
      Image,SafeAreaView,
  } from 'react-native';

  import {PageLayout}from "../blocks"



export const ViewPhotoActivity =({route,navigation})=> {
  const [selectedImages, setSelectedImages] = useState()
  const { data } = route.params;


  function navToPhotosText(selectedImage){
    navigation.navigate('Find Text', {
     selectedImage
    });
  }
  function navToRawText(selectedImage){
    navigation.navigate('Raw OCR Text', {
     selectedImage
    });
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
        <SafeAreaView>
          <FlatList
            data={selectedImages}

            renderItem={({item}) =>{ 
              return(
              <View style={{marginBottom:50}}>
              <Text style={{textAlign:'center', fontWeight:"700",fontSize:20,marginBottom:10}}>{item.fileName}</Text>
              <Image
              style={{width: 250,height: 200}}
                  source={{
                    uri: item.filePath
                  }}
                />
                <Button
                style={{marginTop:20}}
                onPress={()=>navToPhotosText(item)}
                >Basic OCR</Button>
                <Button
                style={{marginTop:10}}
                onPress={()=>navToRawText(item)}
                >RAW OCR</Button>
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