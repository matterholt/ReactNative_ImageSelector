import React from 'react';
import { SelectImage } from './SelectImage';
import { ImageDisplay } from './ImageDisplay';

export function ImageContainer({ selectedImage, pickerPicture }) {
  return selectedImage ? (
    <ImageDisplay selectedImage={selectedImage} />
  ) : (
    <SelectImage pickerPicture={pickerPicture} />
  );
}
