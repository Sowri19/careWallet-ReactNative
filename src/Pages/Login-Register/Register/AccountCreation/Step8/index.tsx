import React from 'react';
import IDScanner from '../../../../../Components/Camera/index';
import { PagesProps } from '../../../../../utilities/CommonTypes';

const InsuranceFront: React.FC<PagesProps> = ({ navigation }) => {
  return (
    <IDScanner
      navigation={navigation}
      scanText="Position the FRONT of your Insurance card in the frame to scan it."
      backTo="IDBack"
      fileName="InsuranceIDFront"
      imageType="govID-back"
      type="image/jpeg"
      navigateTo="InsuranceBack"
    />
  );
};

export default InsuranceFront;
