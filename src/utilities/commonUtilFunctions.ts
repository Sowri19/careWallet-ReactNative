import axiosInstance from './axiosInstance';
import { Camera } from 'expo-camera';

export const getCameraPermission = async () => {
  const cameraStatus = await Camera.requestCameraPermissionsAsync();
  return cameraStatus;
};

const readFile = async (params: any = {}) => {
  const { response } = params;
  return new Promise<any>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(response.data);
    reader.onload = (event) => {
      resolve(event.target?.result);
    };
    reader.onerror = () => {
      reject(reader.error);
    };
  });
};

export const loadAllImagesSync = async (params: any = {}) => {
  const result = {
    ...params,
  };
  for (const key of Object.keys(params)) {
    const response = await axiosInstance.get(params[key], {
      responseType: 'blob',
    });
    result[key] = await readFile({
      response,
    });
  }
  return result;
};

export const loadAllImages = async (params: any = {}) => {
  const promises = [];
  for (const key of Object.keys(params)) {
    promises.push(
      new Promise((resolve, reject) => {
        axiosInstance
          .get(params[key], {
            responseType: 'blob',
          })
          .then((response) => {
            readFile({
              response,
            })
              .then((res) => {
                resolve(res);
              })
              .catch((err) => {
                reject(err);
              });
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

export const loadAccountData = async (params: any = {}) => {
  const responseAcc = await axiosInstance.get(
    '/patient/dashboard/account-home.ns'
  );
  const {
    email,
    phoneNumber,
    dob,
    firstName,
    lastName,
    state,
    zipcode,
    address,
    city,
    insuranceID,
    insuranceName,
    validityDate,
    profilePictureUrl,
    idFrontUrl,
    idBackUrl,
    healthCardBackUrl,
    healthCardFrontUrl,
    isActive,
  } = responseAcc.data.data;
  return {
    healthCard1Url: healthCardFrontUrl,
    healthCard2Url: healthCardBackUrl,
    insuranceUrl: healthCardFrontUrl,
    isActive,
    licenseUrl: idFrontUrl,
    profilePictureUrl: profilePictureUrl,
    validityDate,
    email,
    phoneNumber,
    dateOfBirth: dob,
    firstName,
    lastName,
    address: {
      state,
      postal_code: zipcode,
      street_address: address,
      locality: city,
      country: 'US',
    },
    insuranceID,
    insuranceName,
  };
};
