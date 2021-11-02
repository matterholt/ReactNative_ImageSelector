import React from 'react';
import { SelectImage } from './SelectImage';
import { ImageDisplay } from './ImageDisplay';

export function ImagingOCR({ albumImageSelected, setAlbumImageSelected, pickerPicture }) {
  return albumImageSelected ? (
    <ImageDisplay imagePath={albumImageSelected} />
  ) : (
    <SelectImage pickerPicture={pickerPicture} />
  );
}
