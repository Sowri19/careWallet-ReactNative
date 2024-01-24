import React from 'react';
import IDScanner from '../../../../../Components/Camera/index';
import { PagesProps } from '../../../../../utilities/CommonTypes';

const IDFront: React.FC<PagesProps> = ({ navigation }) => {
  return (
    <IDScanner
      navigation={navigation}
      scanText="Position the FRONT of your Government Identification card in the frame to scan it."
      backTo="FaceVerification"
      fileName="GovernmentIDFront.jpg"
      imageType="govID-front"
      type="image/jpeg"
      navigateTo="IDBack"
    />
  );
};

export default IDFront;
