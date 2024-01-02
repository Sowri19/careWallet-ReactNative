import React, { useState } from 'react';
import {
  BackButton,
  Button,
  ButtonText,
  Container,
  FontBoldOne, ForgotHeaderText,
  FormContainerStyleOne,
  LogoImage,
  LogoImageHolder
} from "../../../Shared/Styles/Styles";
import InputTypeOne from '../../../../Components/Fields/InputTypeOne';
import {
  BelowInputTextForgot,
  RegisterSectionForgot,
  BelowInputTextForgot2,
} from './Styles';
import {
  chkEmailValid,
  chkPhoneValid,
} from '../../../../utilities/ValidationUtils';
import { setStepOne as setStateAction } from '../../../../ReduxStore/Slices/ForgotPassword/forgotSlice';
import { useAppDispatch } from '../../../../ReduxStore/Setup/hooks';
import { PagesProps } from '../../../../utilities/CommonTypes';

const resetApihit = async (params: { username: string }) => {};

const ForgotPassStepOne: React.FC<PagesProps> = ({ navigation }) => {
  const [username, setUsernameLocal] = useState<string>('');
  const [usernameErr, setUsernameErr] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const updateState = (update: { username: string; isEmail: boolean }) => {
    dispatch(setStateAction(update));
  };

  const chkDetails = () => {
    let result = true;
    let error = '';
    if (isEmail) {
      error = chkEmailValid(username);
    } else {
      error = chkPhoneValid(username);
    }
    if (error) {
      setUsernameErr(error);
      result = false;
    }
    return result;
  };
  const handleBack = async () => {
    updateState({
      username: '',
      isEmail: false,
    });
    navigation.navigate('Log in');
  };
  const blurUsername = () => {};

  const resetPasswordAction = () => {
    if (!chkDetails()) {
      return;
    }
    updateState({
      username,
      isEmail,
    });
    resetApihit({
      username,
    });
    navigation.navigate('ForgotOTP');
    // navigation.navigate('ForgotNewPass');
  };
  const switchUsername = (isEmail: boolean) => {
    setIsEmail(isEmail);
    setUsernameErr('');
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
        <ForgotHeaderText>Forgot Password?</ForgotHeaderText>
        <InputTypeOne
          leftIconClass={isEmail ? 'mail' : 'call'}
          inputName={isEmail ? `What's your email?` : `What's your phone #?`}
          inputValue={username}
          onChangeEvent={setUsernameLocal}
          placeHolderValue={isEmail ? `Email ID` : `Phone #`}
          errorString={usernameErr}
          onBlur={blurUsername}
          onEndEditing={blurUsername}
          onFocus={() => setUsernameErr('')}
        />
        <Button onPress={resetPasswordAction}>
          <ButtonText>Reset Password</ButtonText>
        </Button>
        <RegisterSectionForgot>
          {isEmail ? (
            <>
              <BelowInputTextForgot onPress={() => switchUsername(false)}>
                Not sure about email ?{`\n`}
              </BelowInputTextForgot>
              <BelowInputTextForgot2 onPress={() => switchUsername(false)}>
                <FontBoldOne>Choose Phone # Instead.</FontBoldOne>
              </BelowInputTextForgot2>
            </>
          ) : (
            <>
              <BelowInputTextForgot onPress={() => switchUsername(true)}>
                Not sure about phone #?{`\n`}
              </BelowInputTextForgot>
              <BelowInputTextForgot2 onPress={() => switchUsername(true)}>
                <FontBoldOne>Choose Email Instead.</FontBoldOne>
              </BelowInputTextForgot2>
            </>
          )}
        </RegisterSectionForgot>
      </FormContainerStyleOne>
    </Container>
  );
};

export default ForgotPassStepOne;
