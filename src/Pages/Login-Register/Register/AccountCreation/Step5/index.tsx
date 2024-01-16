import React from 'react';
import * as FileSystem from 'expo-file-system';
import CustomCamera from '../../../../../Components/Camera/index';
import { Photo } from '../../../../../utilities/CommonTypes';
import { Container } from '../../../../../Shared/Styles/Styles';

const FaceVerification = () => {
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
      <CustomCamera
        onPictureTaken={handlePictureTaken}
        initialCameraType={2}
        camera={1}
      />
    </Container>
  );
};

export default FaceVerification;
