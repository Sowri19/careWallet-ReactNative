import React, { useEffect } from 'react';
import axiosInstance from '../../utilities/axiosInstance';

const SetupConfig: React.FC<any> = ({ navigationRef }) => {
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const currentRoute = navigationRef.current?.getCurrentRoute();
        const currentRouteName = currentRoute?.name;
        if (currentRouteName !== 'Log in') {
          console.log(`thrown out of auth`);
          navigationRef.current?.navigate('Log in');
        }
        return error;
      }
    );
  }, []);
  return <></>;
};

export default SetupConfig;
