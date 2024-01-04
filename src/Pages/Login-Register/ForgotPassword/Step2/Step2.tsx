import React, { useState } from 'react';
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
  LogoImageHolderBottomTwo,
  LogoImageThree,
  PageContentHolder,
} from '../../../../Shared/Styles/Styles';
import { BelowInputText, RegisterSection } from '../../Login/Styles';
import { setOTP as setState } from '../../../../ReduxStore/Slices/ForgotPassword/forgotSlice';
import OtpContainer from '../../../../Components/Fields/OtpContainer';
import {
  SubHeaderBoldErrorOne,
  SubHeaderBoldOne,
  SubHeaderOne,
  ActivityIndicatorStyle,
  LoadingContainer,
  SubHeaderBoldLoading,
} from './Styles';
import axios from 'axios';
import { View, ActivityIndicator } from 'react-native';
import { stylePrimaryColor } from '../../../../Styles/AppWideConstants/Styles';
import { useAppDispatch } from '../../../../ReduxStore/Setup/hooks';

const otpVerification = async (request: {
  otp: string;
  callback: (data: any) => void;
}) => {
  const { otp, callback } = request;
  //TODO: Integrate Api
  // const response = await axios.get(`${encodeURIComponent(otp)}`);
  // callback(response);
  callback({});
};

const OtpConfirmation: React.FC<PagesProps> = ({ navigation }) => {
  const [otp, setOTPLocal] = useState<string>('');
  const [error, setErrorLocal] = useState<string>('');
  const [attemptsRemaining, setAttemptsRemainingLocal] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dipatch = useAppDispatch();
  const updateState = (otp: string) => {
    setState(otp);
  };

  const setOTPValue = (text: string) => {
    setOTPLocal(text);
  };
  const setErrorValue = (text: string) => {
    setErrorLocal(text);
  };
  const handleBack = () => {
    updateState('');
    navigation.navigate('ForgotStepOne');
  };
  let subHeaderStatus = (
    <SubHeaderBoldOne>{`${attemptsRemaining}x Attempts Available`}</SubHeaderBoldOne>
  );
  if (error) {
    subHeaderStatus = <SubHeaderBoldErrorOne>{error}</SubHeaderBoldErrorOne>;
  } else if (isLoading) {
    subHeaderStatus = (
      <View style={LoadingContainer}>
        <SubHeaderBoldLoading>Verifying</SubHeaderBoldLoading>
        <ActivityIndicator
          style={ActivityIndicatorStyle}
          color={stylePrimaryColor}
        />
      </View>
    );
  }

  const inputCallback = (otp: string) => {
    setIsLoading(true);
    otpVerification({
      otp,
      callback: (data: any) => {
        setTimeout(() => {
          setIsLoading(false);
          updateState(otp);
          navigation.navigate('ForgotNewPass');
        }, 3000);
      },
    });
  };

  return (
    <Container>
      <FormContainerStyleOne>
        <BackButton onPress={handleBack}>
          <ButtonText>{`< Back`}</ButtonText>
        </BackButton>
        <LogoImageHolder>
          <LogoImage
            source={require('../../../../Shared/Media/Images/forget_password_icon.png')}
          />
        </LogoImageHolder>
        <View style={PageContentHolder}>
          <ForgotHeaderText>Verification Code</ForgotHeaderText>
          <SubHeaderOne>Code sent to your device.</SubHeaderOne>
          {subHeaderStatus}
          <OtpContainer
            otp={otp}
            error={error}
            setOTPValue={setOTPValue}
            setErrorValue={setErrorValue}
            inputCallback={inputCallback}
          />
          <RegisterSection>
            <BelowInputText onPress={() => navigation.navigate('Sign Up')}>
              Didn't receive the code? <FontBoldSecond>Resend</FontBoldSecond>
            </BelowInputText>
          </RegisterSection>
        </View>
      </FormContainerStyleOne>
      <LogoImageHolderBottomTwo>
        <LogoImageThree
          source={require('../../../../Shared/Media/Images/CareWallet-Logo-Transparent.png')}
        />
      </LogoImageHolderBottomTwo>
    </Container>
  );
};

export default OtpConfirmation;
