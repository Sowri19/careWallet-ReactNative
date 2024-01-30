import React, { useRef, useState } from 'react';
import { Photo, PagesProps } from '../../../../../utilities/CommonTypes';
import {
  ContainerStyle,
  LoadingContainer,
  SubHeaderBoldLoading,
  ActivityIndicatorStyle,
  CameraButton,
  CameraView,
  CameraStyled,
  OverlayImage,
  Indicator,
} from './styles';
import { ButtonText, LogoImageTwo } from '../../../../../Shared/Styles/Styles';
import { View, ActivityIndicator } from 'react-native';
import compressorUploader from '../../../../../utilities/ImageUploader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../ReduxStore/Setup/store';
import { Camera } from 'expo-camera';
import {
  setPictureImageUri,
  setIsUploading,
  setCameraPermission,
} from '../../../../../ReduxStore/Slices/CameraSlice/CameraSlice';
import { stylePrimaryColor } from '../../../../../Styles/AppWideConstants/Styles';
import careWalletLogoImage from '../../../../../Shared/Media/Images/CareWalletTextandLogo.png';
import facialRekogImage from '../../../../../Shared/Media/Images/FacialRekog.png';
import { useFocusEffect } from '@react-navigation/native';
import { getCameraPermission } from '../../../../../utilities/commonUtilFunctions';

const FaceVerification: React.FC<PagesProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const isUploading = useSelector(
    (state: RootState) => state.camera.isUploading
  );
  const cameraRef = useRef<Camera | null>(null);
  const [cameraReady, setCameraReady] = useState<boolean>(false);
  const cameraPermission = useSelector(
    (state: RootState) => state.camera.hasCameraPermission
  );

  const handlePictureTaken = async (
    photo: Photo,
    fileName: string,
    type: string,
    imageType: string,
    navigateTo: string
  ) => {
    compressorUploader(
      photo,
      fileName,
      type,
      imageType,
      navigation,
      navigateTo,
      () => dispatch(setIsUploading(false))
    );
  };

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

  const takePicture = async () => {
    if (!cameraReady) {
      return;
    }
    if (cameraRef.current) {
      dispatch(setIsUploading(true));
      const photo = await cameraRef.current.takePictureAsync();
      dispatch(setPictureImageUri(photo.uri));
      handlePictureTaken(
        photo,
        'UserPhoto.jpg',
        'image/jpeg',
        'user-photo',
        'IDFront'
      );
    }
  };

  return (
    <ContainerStyle>
      <LogoImageTwo source={careWalletLogoImage} />
      <CameraView>
        <CameraStyled ref={cameraRef} type={2} ratio="4:3" onCameraReady={() => setCameraReady(true)} />
      </CameraView>
      <OverlayImage source={facialRekogImage} />

      {isUploading ? (
        <Indicator>
          <View style={LoadingContainer}>
            <SubHeaderBoldLoading>Verifying</SubHeaderBoldLoading>
            <ActivityIndicator
              style={ActivityIndicatorStyle}
              color={stylePrimaryColor}
            />
          </View>
        </Indicator>
      ) : (
        <CameraButton onPress={takePicture}>
          <ButtonText>Next</ButtonText>
        </CameraButton>
      )}
    </ContainerStyle>
  );
};

export default FaceVerification;
