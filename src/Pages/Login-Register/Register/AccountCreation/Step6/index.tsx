import React from 'react';
import * as FileSystem from 'expo-file-system';
import CustomCamera from '../../../../../Components/Camera/index';
import { Container } from './styles';
import { Photo } from '../../../../../utilities/CommonTypes';

const IDVerification = () => {
  const handlePictureTaken = async (photo: Photo) => {
    console.log(photo.uri);

    try {
      const fileUri = FileSystem.documentDirectory + 'photo.jpg';

      await FileSystem.moveAsync({
        from: photo.uri,
        to: fileUri,
      });

      console.log('Image saved to:', fileUri);
    } catch (error) {
      console.error('Error saving the image file:', error);
    }
  };

  return (
    <Container>
      <CustomCamera onPictureTaken={handlePictureTaken} initialCameraType={1} />
    </Container>
  );
};

export default IDVerification;
