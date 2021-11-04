import React, { useState, useEffect } from 'react';
import { Box, Button, Text } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import MlkitOcr, { MlkitOcrResult } from 'react-native-mlkit-ocr';

import { GenerateWords } from '../Components/GenerateWords';

import { ScreenLayout } from '../Components/common';
import { ImagingOCR, ImageResults, NoImageFound } from '../Components/ImageProcessing';

export function PictureFromAlbum() {
  const [albumImageSelected, setAlbumImageSelected] = useState(undefined);
  const [isToxic, setIsToxic] = useState(true);
  const [extractedIngredients, setExtractedIngredients] = useState([
    {id:1,isToxic:true,word:'Ftech'},
    {id:2,isToxic:false,word:'ínc.'},
    {id:3,isToxic:true,word:'Corporate'},
    {id:4,isToxic:false,word:'Slogan'},
    {id:5,isToxic:false,word:'Better'},
    {id:6,isToxic:false,word:'than'},
    {id:7,isToxic:false,word:'Ever.'},
    {id:8,isToxic:false,word:'14th'},
    {id:9,isToxic:false,word:'Midterm'},
    {id:10,isToxic:false,word:'Business'},
    {id:11,isToxic:false,word:'Plan'},
    {id:12,isToxic:false,word:'Plan11'},
    {id:13,isToxic:false,word:'~Basic'},
    {id:14,isToxic:false,word:'Policy~'},
    {id:15,isToxic:false,word:"Let's"},
    {id:16,isToxic:false,word:'exceed'},
    {id:17,isToxic:true,word:'our'},
    {id:18,isToxic:false,word:'limits!'},
    {id:19,isToxic:true,word:'We'},
    {id:20,isToxic:false,word:'will,'},
    {id:21,isToxic:false,word:'without'},
    {id:22,isToxic:false,word:'compromise,'},
    {id:23,isToxic:false,word:'produce'},
    {id:24,isToxic:false,word:'the'},
    {id:25,isToxic:false,word:'Best'},
    {id:26,isToxic:false,word:'One"'},
    {id:27,isToxic:false,word:'ior'},
    {id:28,isToxic:false,word:'all'},
    {id:29,isToxic:false,word:'our'},
    {id:30,isToxic:false,word:'customers'},
  ]);

  const selectImageFromAlbum = () => {
    ImagePicker.openPicker({
      width: 420,
      height: 420,
      cropping: true,
      freeStyleCropEnabled: true,
    })
      .then((image) => {
        console.log(image);
        setAlbumImageSelected(image);
      })
      .catch((error) => {
        // set error and return back to main
        console.log(error);
      });
  };

  useEffect(() => {
    async function FindText() {
      const resultFromUri = await MlkitOcr.detectFromFile(albumImageSelected.path);
      const textOnly = resultFromUri.map((x) => x.text.split(' '));
      console.log(textOnly.flat());
      setExtractedIngredients(textOnly.flat());
    }
    FindText().catch((e) => console.log('error', e));
  }, [albumImageSelected]);

  return (
    <ScreenLayout>
      <Box m="5" h="300" w="300">
        <ImagingOCR
          pickerPicture={selectImageFromAlbum}
          setAlbumImageSelected={setAlbumImageSelected}
          albumImageSelected={albumImageSelected}
        />
      </Box>

      {albumImageSelected ? (
        <ImageResults extractedIngredients={extractedIngredients} isToxic={isToxic} />
      ) : (
        <ImageResults extractedIngredients={extractedIngredients} isToxic={isToxic} />
      )}

      <NoImageFound />
    </ScreenLayout>
  );
}
