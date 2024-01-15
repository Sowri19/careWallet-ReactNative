// CustomCamera.tsx
import React, { useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Text } from 'react-native';
import { CameraView, CameraStyled, CameraButton, OverlayImage } from './styles';
import { ButtonText, LogoImageTwo } from '../../Shared/Styles/Styles';
import { useDispatch, useSelector } from 'react-redux'; // Import the necessary functions
import {
  setCameraPermission,
  setPictureImageUri,
} from '../../ReduxStore/Slices/CameraSlice/CameraSlice';
import { RootState } from '../../ReduxStore/Setup/store';
import { CustomCameraProps } from '../../Shared/Interfaces/Camera';

const CustomCamera: React.FC<CustomCameraProps> = ({
  onPictureTaken,
  initialCameraType,
  camera,
}: CustomCameraProps) => {
  const dispatch = useDispatch();
  const hasCameraPermission = useSelector(
    (state: RootState) => state.camera.hasCameraPermission
  );

  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      dispatch(setCameraPermission(cameraStatus.status === 'granted'));
    })();
  }, [dispatch]);

  if (hasCameraPermission === null) {
    return <></>;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      dispatch(setPictureImageUri(photo.uri));
      onPictureTaken(photo);
    }
  };

  return (
    <>
      <LogoImageTwo
        source={require('../../Shared/Media/Images/CareWalletTextandLogo.png')}
      />
      <CameraView>
        <CameraStyled
          ref={cameraRef}
          type={initialCameraType || 1}
          ratio="4:3"
        />
      </CameraView>

      <CameraButton onPress={takePicture}>
        <ButtonText>Next</ButtonText>
      </CameraButton>
      <OverlayImage
        camera={camera}
        source={
          camera === 1
            ? require('../../Shared/Media/Images/FacialRekog.png')
            : camera === 2
              ? require('../../Shared/Media/Images/Scan-positioning-rectangle.png')
              : null
        }
      />
      <OverlayImage1
        camera={camera}
        source={require('../../Shared/Media/Images/Scan-positioning-rectangle.png')}
      />
    </>
  );
};

export default CustomCamera;
