import React from 'react';
import { PagesProps } from '../../../../utilities/CommonTypes';
import {
  ButtonStyleTwo,
  ButtonText,
  CentralImage,
  Container,
  FontBoldSecond,
  FormContainerStyleTwo,
  LogoImageHolder,
  LogoImageHolderBottomTwo,
  LogoImageThree,
} from '../../../../Shared/Styles/Styles';
import { HeaderText } from './Styles';
import { BelowInputText, RegisterSection } from '../../Login/Styles';

const PasswordUpdated: React.FC<PagesProps> = ({ navigation }) => {
  return (
    <Container>
      <FormContainerStyleTwo>
        <HeaderText>Password Updated</HeaderText>
        <LogoImageHolder>
          <CentralImage
            source={require('../../../../Shared/Media/Images/password_updated_icon.png')}
          />
        </LogoImageHolder>
        <ButtonStyleTwo onPress={() => navigation.navigate('Log in')}>
          <ButtonText>Login</ButtonText>
        </ButtonStyleTwo>
        <RegisterSection>
          <BelowInputText onPress={() => navigation.navigate('Sign Up')}>
            Don't have an account ? <FontBoldSecond>Register</FontBoldSecond>
          </BelowInputText>
        </RegisterSection>
      </FormContainerStyleTwo>
      <LogoImageHolderBottomTwo>
        <LogoImageThree
          source={require('../../../../Shared/Media/Images/CareWallet-Logo-Transparent.png')}
        />
      </LogoImageHolderBottomTwo>
    </Container>
  );
};

export default PasswordUpdated;
