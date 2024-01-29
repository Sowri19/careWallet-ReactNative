import React from 'react';
import IDScanner from '../../../../../Components/Camera/index';
import { PagesProps } from '../../../../../utilities/CommonTypes';

const IDBack: React.FC<PagesProps> = ({ navigation }) => {
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
