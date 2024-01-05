import React from 'react';
import * as FileSystem from 'expo-file-system';
import CustomCamera from '../../../../../Components/Camera/index'; // Adjust the import path as needed
import { Container } from './styles';
import { Photo } from '../../../../../utilities/CommonTypes';

const IDVerification = () => {
  const handlePictureTaken = async (photo: Photo) => {
    console.log(photo.uri);

    try {
      // Define the path where the image will be saved
      const fileUri = FileSystem.documentDirectory + 'photo.jpg'; // You can change 'photo.jpg' to a dynamic name if needed

      // Move the temporary image file to the permanent file path
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
      <CustomCamera onPictureTaken={handlePictureTaken} initialCameraType={2} />
    </Container>
  );
};

export default IDVerification;
