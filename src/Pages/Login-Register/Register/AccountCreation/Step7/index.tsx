import React from 'react';
import IDScanner from '../../../../../Components/Camera/index';
import { PagesProps } from '../../../../../utilities/CommonTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../ReduxStore/Setup/store';
import { useFocusEffect } from '@react-navigation/native';
import { getCameraPermission } from '../../../../../utilities/commonUtilFunctions';
import { setCameraPermission } from '../../../../../ReduxStore/Slices/CameraSlice/CameraSlice';

const IDBack: React.FC<PagesProps> = ({ navigation }) => {
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
      scanText="Position the BACK of your Government Identification card in the frame to scan it."
      backTo="IDFront"
      fileName="GovernmentIDBack.jpg"
      imageType="govID-back"
      type="image/jpeg"
      navigateTo="InsuranceFront"
    />
  );
};

export default IDBack;
