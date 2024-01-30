import axiosInstance from './axiosInstance';
import { Camera } from 'expo-camera';

export const getImageUrlfromBinaryAPI = async (params: { url: string }) => {
  try {
    const { url } = params;
    const response = await axiosInstance.get(url);
    const blobOptions: BlobOptions = {
      type: response.headers['Content-Type'] || 'image/jpg',
    };
    const blob = new Blob([response.data], blobOptions);
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  } catch (error) {
    return '';
  }
};

export const getCameraPermission = async () => {
  const cameraStatus = await Camera.requestCameraPermissionsAsync();
  return cameraStatus;
};

export const loadAllImages = async (params: any = {}) => {
  const promises = [];
  for (const key of Object.keys(params)) {
    console.log(params[key]);
    promises.push(
      new Promise((resolve, reject) => {
        axiosInstance
          .get(params[key], {
            responseType: 'text',
          })
          .then((response) => {
            try {
              // console.log(response);
              // const urlString = URL.createObjectURL(response);
              // resolve(urlString);
              resolve(`data:${response.headers['content-type']};base64,${response.data}`);
            } catch (error) {
              resolve('');
            }
          })
          .catch((error) => {
            reject(error);
          });
      })
    );
  }
  const blobs = await Promise.all(promises);
  const result = {
    ...params,
  };
  let counter = 0;
  for (const key of Object.keys(params)) {
    result[key] = blobs[counter];
    counter++;
  }
  return result;
};
