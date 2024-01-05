import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Image } from 'react-native';
import {
  CameraView,
  CameraStyled,
  ButtonText,
  Text,
  OverlayContainer,
  CameraButton,
  CenterFaceButton,
  ButtonText1,
} from './styles';
import { CustomCameraProps } from '../../utilities/CommonTypes';

const CustomCamera = ({
  onPictureTaken,
  initialCameraType,
}: CustomCameraProps) => {
  const [hasCameraPermission, setHasCameraPermission] = useState<
    boolean | null
  >(null);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === null) {
    return <></>;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      onPictureTaken(photo);
    }
  };

  return (
    <OverlayContainer>
      <CameraView>
        <CameraStyled
          ref={cameraRef}
          type={initialCameraType || 1}
          ratio="4:3"
        />
      </CameraView>

      <CenterFaceButton onPress={takePicture}>
        <ButtonText1>Center your Face</ButtonText1>
      </CenterFaceButton>
      <CameraButton onPress={takePicture}>
        <ButtonText>Next</ButtonText>
      </CameraButton>
      <Image
        source={require('../../utilities/FacialRecognitionOverlay.png')}
        style={{
          position: 'absolute',
          top: '30%',
          left: '22.5%',
          width: 250,
          height: 250,
          marginLeft: -50,
          marginTop: -50,
          zIndex: 1,
        }}
      />
    </OverlayContainer>
  );
};

export default CustomCamera;
