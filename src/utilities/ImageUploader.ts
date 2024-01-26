import { Photo } from '../utilities/CommonTypes';
import * as ImageManipulator from 'expo-image-manipulator';
import axios from 'axios';
import { PagesProps } from '../utilities/CommonTypes';
import axiosInstance from '../utilities/axiosInstance';

const compressorUploader = async (
  photo: Photo,
  fileName: string,
  type: string,
  imageType: string,
  navigation: PagesProps['navigation'],
  navigateTo: string,
  onUploadComplete: () => void
) => {
  console.log('Photo URI:', photo.uri);

  const compressImage = async (uri: string): Promise<string> => {
    const compressedImage: ImageManipulator.ImageResult =
      await ImageManipulator.manipulateAsync(uri, [], {
        compress: 0.6,
        format: ImageManipulator.SaveFormat.JPEG,
      });
    return compressedImage.uri;
  };

  const triggerVerificationApi = async () => {
    try {
      const url = '/patient/onboarding/triggerVerification.ns';
      const response = await axiosInstance.get(url);
      const data = response.data;
      console.log('Verification triggered:', data);
    } catch (error) {
      console.error('Error triggering verification:', error);
    }
  };
  const uploadImage = async (compressedUri: string) => {
    const formData = new FormData();
    formData.append('file-carewallet', {
      uri: compressedUri,
      name: fileName,
      type: type,
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
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      if (
        ['insurance-front', 'user-photo', 'govID-front', 'govID-back'].includes(
          imageType
        )
      ) {
        onUploadComplete();
        navigation.navigate(navigateTo);
      } else if (imageType === 'insurance-back') {
        triggerVerificationApi();
        onUploadComplete();
        navigation.navigate(navigateTo);
      }
    }
  };

  try {
    const compressedUri = await compressImage(photo.uri);
    console.log('Compressed Image URI:', compressedUri);
    await uploadImage(compressedUri);
  } catch (error) {
    console.error('Error processing the image:', error);
  }
};

export default compressorUploader;
