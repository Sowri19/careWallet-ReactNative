import React from 'react';
import * as FileSystem from 'expo-file-system';
import CustomCamera from '../../../../../Components/Camera/index';
import { Photo } from '../../../../../utilities/CommonTypes';
import { Container } from '../../../../../Shared/Styles/Styles';

const FaceVerification = () => {
  const handlePictureTaken = async (photo: Photo, imageType: string) => {
    console.log('Photo URI:', photo.uri);

    try {
      const fileUri = FileSystem.documentDirectory + 'originalPhoto.jpg';
      await FileSystem.moveAsync({
        from: photo.uri,
        to: fileUri,
      });
      console.log('Original image saved to:', fileUri);
      await uploadImage(fileUri, imageType);
    } catch (error) {
      console.error('Error processing the image file:', error);
    }
  };

  const uploadImage = async (fileUri: string, imageType: string) => {
    const apiUrl = `https://0pqjojts5c.execute-api.us-east-1.amazonaws.com/dev/resource-patient/upload/image.ns?type=${imageType}`;
    const formData = new FormData();
    formData.append('file-carewallet', {
      uri: fileUri,
      name: 'originalPhoto.jpg',
      type: 'image/jpeg',
    });

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Upload result:', result);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <Container style={{ backgroundColor: 'white' }}>
      <CustomCamera
        onPictureTaken={(photo) => handlePictureTaken(photo, 'user-photo')}
        initialCameraType={2}
      />
    </Container>
  );
};

export default FaceVerification;
