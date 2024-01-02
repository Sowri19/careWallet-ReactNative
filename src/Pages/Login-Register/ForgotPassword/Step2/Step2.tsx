import React from 'react';
import { PagesProps } from '../../../../utilities/CommonTypes';
import {
  BackButton,
  ButtonText,
  Container,
  FontBoldSecond,
  ForgotHeaderText,
  FormContainerStyleOne,
  LogoImage,
  LogoImageHolder,
} from '../../../Shared/Styles/Styles';
import { BelowInputText, RegisterSection } from '../../Login/Styles';
import { OtpInputContainer, OtpInputStyle } from "./Styles";
import { TextInput } from 'react-native';

const OtpConfirmation: React.FC<PagesProps> = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate('ForgotStepOne');
  };
  return (
    <Container>
      <FormContainerStyleOne>
        <BackButton onPress={handleBack}>
          <ButtonText>{`< Back`}</ButtonText>
        </BackButton>
        <LogoImageHolder>
          <LogoImage
            source={require('../../../../utilities/CareWalletLogo.png')}
          />
        </LogoImageHolder>
        <ForgotHeaderText>Verification Code</ForgotHeaderText>
        <OtpInputContainer>
          <TextInput style={OtpInputStyle} />
          <TextInput style={OtpInputStyle} />
          <TextInput style={OtpInputStyle} />
          <TextInput style={OtpInputStyle} />
        </OtpInputContainer>
        <RegisterSection>
          <BelowInputText onPress={() => navigation.navigate('Sign Up')}>
            Didn't receive the code? <FontBoldSecond>Resend</FontBoldSecond>
          </BelowInputText>
        </RegisterSection>
      </FormContainerStyleOne>
    </Container>
  );
};

export default OtpConfirmation;
