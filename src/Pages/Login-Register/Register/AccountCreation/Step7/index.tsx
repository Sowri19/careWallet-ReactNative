import React from 'react';
import * as FileSystem from 'expo-file-system';
import CustomCamera from '../../../../../Components/Camera/index';
import { ContainerStyle, Logo } from './styles';
import { Photo } from '../../../../../utilities/CommonTypes';
import CareWalletTextandLogo from '../../../../../Shared/Media/Images/CareWalletTextandLogo.png';

const IDBack = () => {
  const handlePictureTaken = async (photo: Photo) => {
    console.log(photo.uri);

    try {
      const fileUri = FileSystem.documentDirectory + 'photo.jpg';

      await FileSystem.moveAsync({
        from: photo.uri,
        to: fileUri,
      });

      console.log('Image saved to:', fileUri);
    } catch (error) {
      console.error('Error saving the image file:', error);
    }
  };

  return (
    <ContainerStyle>
      <CustomCamera
        onPictureTaken={handlePictureTaken}
        initialCameraType={1}
        position={'back'}
      />
      <Logo source={CareWalletTextandLogo} alt="CareWalletTextandLogo" />
    </ContainerStyle>
  );
};

export default IDBack;
