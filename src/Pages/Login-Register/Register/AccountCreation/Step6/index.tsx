import React from 'react';
import * as FileSystem from 'expo-file-system';
import CustomCamera from '../../../../../Components/Camera/index';
import { ContainerStyle, Logo } from './styles';
import { Photo } from '../../../../../utilities/CommonTypes';
import CareWalletTextandLogo from '../../../../../Shared/Media/Images/CareWalletTextandLogo.png';
import { PagesProps } from '../../../../../utilities/CommonTypes';

const IDFront: React.FC<PagesProps> = ({ navigation }) => {
  const handlePictureTaken = async (photo: Photo) => {
    console.log(photo.uri);

    try {
      const fileUri = FileSystem.documentDirectory + 'photo.jpg';

      await FileSystem.moveAsync({
        from: photo.uri,
        to: fileUri,
      });
      navigation.navigate('IDBack');
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
        position={'front'}
      />
      <Logo source={CareWalletTextandLogo} alt="CareWalletTextandLogo" />
    </ContainerStyle>
  );
};

export default IDFront;
