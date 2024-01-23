import React from 'react';
import CustomCamera from '../../../../../Components/Camera/index';
import { Photo } from '../../../../../utilities/CommonTypes';
import { PagesProps } from '../../../../../utilities/CommonTypes';
import { ContainerStyle } from './styles';
import * as MediaLibrary from 'expo-media-library';
import * as ImageManipulator from 'expo-image-manipulator';
import axios from 'axios';

const FaceVerification: React.FC<PagesProps> = ({ navigation }) => {
  const compressImage = async (uri: string): Promise<string> => {
    const compressedImage: ImageManipulator.ImageResult =
      await ImageManipulator.manipulateAsync(uri, [], {
        compress: 0.7,
        format: ImageManipulator.SaveFormat.JPEG,
      });
    return compressedImage.uri;
  };

  const handlePictureTaken = async (photo: Photo, imageType: string) => {
    console.log('Photo URI:', photo.uri);

    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permissions to access media library were denied');
        return;
      }

      const compressedUri = await compressImage(photo.uri);
      console.log('Compressed Image URI:', compressedUri);
      const asset = await MediaLibrary.createAssetAsync(compressedUri);
      console.log('Photo saved to gallery:', asset);
      await uploadImage(compressedUri, imageType);
    } catch (error) {
      console.error('Error processing the image:', error);
    }
  };

  const uploadImage = async (fileUri: string, imageType: string) => {
    const formData = new FormData();
    formData.append('file-carewallet', {
      uri: fileUri,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    try {
      const response = await axios.post(
        `https://0pqjojts5c.execute-api.us-east-1.amazonaws.com/dev/resource-patient/upload/image.ns?type=${imageType}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Image uploaded:', response.data);

      navigation.navigate('IDFront');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <ContainerStyle>
      <CustomCamera
        onPictureTaken={(photo) => handlePictureTaken(photo, 'user-photo')}
        initialCameraType={2}
      />
    </ContainerStyle>
  );
};

export default FaceVerification;
