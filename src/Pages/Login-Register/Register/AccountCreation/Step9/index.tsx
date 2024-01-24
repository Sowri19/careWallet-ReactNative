import React from 'react';
import IDScanner from '../../../../../Components/Camera/index';
import { PagesProps } from '../../../../../utilities/CommonTypes';

const InsuranceBack: React.FC<PagesProps> = ({ navigation }) => {
  return (
    <IDScanner
      navigation={navigation}
      scanText="Position the BACK of your Insurance card in the frame to scan it."
      backTo="InsuranceFront"
      fileName="InsuranceIDBack.jpg"
      imageType="insurance-back"
      type="image/jpeg"
      navigateTo="InsuranceSignUpOne"
    />
  );
};

export default InsuranceBack;
