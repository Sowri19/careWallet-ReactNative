import React, { useRef } from 'react';
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
} from '../../../../../ReduxStore/Slices/CameraSlice/CameraSlice';
import { stylePrimaryColor } from '../../../../../Styles/AppWideConstants/Styles';
import careWalletLogoImage from '../../../../../Shared/Media/Images/CareWalletTextandLogo.png';
import facialRekogImage from '../../../../../Shared/Media/Images/FacialRekog.png';

const FaceVerification: React.FC<PagesProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const isUploading = useSelector(
    (state: RootState) => state.camera.isUploading
  );
  const cameraRef = useRef<Camera | null>(null);

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

  const takePicture = async () => {
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
        <CameraStyled ref={cameraRef} type={2} ratio="4:3" />
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
