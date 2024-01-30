import React from 'react';
import IDScanner from '../../../../../Components/Camera/index';
import { PagesProps } from '../../../../../utilities/CommonTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../ReduxStore/Setup/store';
import { useFocusEffect } from '@react-navigation/native';
import { getCameraPermission } from '../../../../../utilities/commonUtilFunctions';
import { setCameraPermission } from '../../../../../ReduxStore/Slices/CameraSlice/CameraSlice';

const InsuranceFront: React.FC<PagesProps> = ({ navigation }) => {
  const cameraPermission = useSelector(
    (state: RootState) => state.camera.hasCameraPermission
  );
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(async () => {
        if (!cameraPermission) {
          const cameraStatus = await getCameraPermission();
          dispatch(setCameraPermission(cameraStatus.status === 'granted'));
        }
      });
      return () => {};
    }, [])
  );
  return (
    <IDScanner
      navigation={navigation}
      scanText="Position the FRONT of your Insurance card in the frame to scan it."
      backTo="IDBack"
      fileName="InsuranceIDFront.jpg"
      imageType="insurance-front"
      type="image/jpeg"
      navigateTo="InsuranceBack"
    />
  );
};

export default InsuranceFront;
