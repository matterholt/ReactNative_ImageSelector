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
  const { data } = route.params;


  function navToPhotosText(selectedImage){
    navigation.navigate('FindText', {
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
              <View>
              <Text>{item.fileName}</Text>
              <Image
              style={{width: 166,height: 158,}}
                  source={{
                    uri: item.filePath
                  }}
                />
                <Button
                onPress={()=>navToPhotosText(item)}
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