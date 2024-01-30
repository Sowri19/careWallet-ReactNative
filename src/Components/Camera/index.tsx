// IDScanner.js
import React, { useRef, useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPictureImageUri,
  setIsUploading,
  setCameraPermission,
} from '../../ReduxStore/Slices/CameraSlice/CameraSlice';
import {
  ContainerStyle,
  Logo,
  CameraButton,
  CameraStyled,
  OverlayImage1,
  FrontID,
  CameraText,
  TopBorder,
  BottomBorder,
  LeftBorder,
  RightBorder,
  BackButton,
  ButtonText,
} from './styles';
import Loader from '../../Components/Loader/index';
import positioningRectangleImage from '../../Shared/Media/Images/Scan-positioning-rectangle.png';
import { RootState } from '../../ReduxStore/Setup/store';
import compressorUploader from '../../utilities/ImageUploader';
import CareWalletTextandLogo from '../../Shared/Media/Images/CareWalletTextandLogo.png';
import { CustomCameraProps, PagesProps } from '../../utilities/CommonTypes';
import { Photo } from '../../utilities/CommonTypes';
const IDScanner: React.FC<PagesProps & CustomCameraProps> = ({
  navigation,
  scanText,
  backTo,
  fileName,
  imageType,
  type,
  navigateTo,
}) => {
  const dispatch = useDispatch();

  const isUploading = useSelector(
    (state: RootState) => state.camera.isUploading
  );
  const cameraRef = useRef<Camera | null>(null);
  const [cameraReady, setCameraReady] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      dispatch(setCameraPermission(cameraStatus.status === 'granted'));
    })();
  }, [dispatch]);

  const handlePictureTaken = async (
    photo: Photo,
    fileName: string,
    type: string,
    imageType: string,
    navigateTo: string
  ) => {
    await compressorUploader(
      photo,
      fileName,
      type,
      imageType,
      navigation,
      navigateTo,
      () => {
        dispatch(setIsUploading(false));
      }
    );
  };

  const takePicture = async () => {
    if (!cameraReady) {
      return;
    }
    if (cameraRef.current) {
      dispatch(setIsUploading(true));
      const photo = await cameraRef.current.takePictureAsync();
      dispatch(setPictureImageUri(photo.uri));
      handlePictureTaken(photo, fileName, type, imageType, navigateTo);
    }
  };
  const handleBack = () => {
    if (backTo) {
      navigation.navigate(backTo);
    }
  };

  return (
    <ContainerStyle>
      <BackButton onPress={handleBack}>
        <ButtonText>{'< Back'}</ButtonText>
      </BackButton>
      <FrontID>
        <CameraStyled ref={cameraRef} type={1} ratio="4:3" onCameraReady={() => setCameraReady(true)} />
        <TopBorder />
        <BottomBorder />
        <LeftBorder />
        <RightBorder />

        <OverlayImage1 source={positioningRectangleImage} />
      </FrontID>
      <CameraText>{scanText}</CameraText>
      {isUploading ? (
        <Loader />
      ) : (
        <CameraButton onPress={takePicture}>
          <ButtonText>Next</ButtonText>
        </CameraButton>
      )}
      <Logo source={CareWalletTextandLogo} alt="CareWalletTextandLogo" />
    </ContainerStyle>
  );
};

export default IDScanner;
