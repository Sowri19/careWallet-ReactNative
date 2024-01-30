import axiosInstance from './axiosInstance';
import { Camera } from 'expo-camera';

export const getImageUrlfromBinaryAPI = async (params: { url: string }) => {
  try {
    const { url } = params;
    const response = await axiosInstance.get(url);
    const blobOptions: BlobOptions = {
      type: response.headers['Content-Type'] || `image/jpg`,
    };
    const blob = new Blob([response.data], blobOptions);
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  } catch (error) {
    return ``;
  }
};

export const getCameraPermission = async () => {
  const cameraStatus = await Camera.requestCameraPermissionsAsync();
  return cameraStatus;
};
