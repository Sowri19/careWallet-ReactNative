import React, { useState } from 'react';
import { PagesProps } from '../../../../utilities/CommonTypes';
import {
  BackButtonDummy,
  Button,
  ButtonText,
  Container,
  FontBoldSecond, ForgotHeaderText,
  FormContainerStyleOne,
  LogoImage, LogoImageHolder
} from "../../../Shared/Styles/Styles";
import InputPasswordTypeOne from '../../../../Components/Fields/InputPasswordTypeOne';
import {
  chkConfirmPassValid,
  chkPassValid,
  chkPhoneValid,
} from '../../../../utilities/ValidationUtils';
import { BelowInputText, RegisterSection } from '../../Login/Styles';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../ReduxStore/Setup/hooks';
import {
  forgotSlice,
  selectIsEmail,
  selectUsername,
  setNewPassword as setStateAction,
} from '../../../../ReduxStore/Slices/ForgotPassword/forgotSlice';

const updatePassApiHit = (apiObj: {
  newPassword: string;
  username: string;
  isEmail: boolean;
  callback: (data: any) => void;
}) => {};

const ForgotNewPassword: React.FC<PagesProps> = ({ navigation }) => {
  const [newPassword, setNewPasswordLocal] = useState<string>('');
  const [newPassErr, setNewPassErr] = useState<string>('');
  const [confirmPassword, setConfirmPasswordLocal] = useState<string>('');
  const [confirmPassErr, setConfirmPassErr] = useState<string>('');
  const username = useAppSelector(selectUsername);
  const isEmail = useAppSelector(selectIsEmail);
  const dispatch = useAppDispatch();

  const updateState = (update: string) => {
    dispatch(setStateAction(update));
  };

  const blurUsername = () => {
    setNewPassErr(chkPassValid(newPassword));
  };

  const blurConfirmPass = () => {
    setConfirmPassErr(chkConfirmPassValid(confirmPassword, newPassword));
  };

  const chkDetails = () => {
    let result = true;
    let error = chkPassValid(newPassword);
    if (error) {
      setNewPassErr(error);
      result = false;
    }
    error = chkConfirmPassValid(confirmPassword, newPassword);
    if (error) {
      setConfirmPassErr(error);
      result = false;
    }
    return result;
  };

  const updatePassword = () => {
    if (!chkDetails()) {
      return;
    }
    updateState(newPassword);
    updatePassApiHit({
      username,
      newPassword,
      isEmail,
      callback: (data: any) => {},
    });
  };
  return (
    <Container>
      <FormContainerStyleOne>
        <BackButtonDummy />
        <LogoImageHolder>
          <LogoImage
            source={require('../../../../utilities/CareWalletLogo.png')}
          />
        </LogoImageHolder>
        <ForgotHeaderText>New Password</ForgotHeaderText>

        <InputPasswordTypeOne
          inputName={''}
          inputValue={newPassword}
          onChangeEvent={setNewPasswordLocal}
          placeHolderValue={'New Password'}
          errorString={newPassErr}
          onBlur={blurUsername}
          onEndEditing={blurUsername}
          onFocus={() => setNewPassErr('')}
          leftIconClass={'lock-closed'}
        />

        <InputPasswordTypeOne
          inputName={''}
          inputValue={confirmPassword}
          onChangeEvent={setConfirmPasswordLocal}
          placeHolderValue={'Confirm Password'}
          errorString={confirmPassErr}
          onBlur={blurConfirmPass}
          onEndEditing={blurConfirmPass}
          onFocus={() => setConfirmPassErr('')}
          leftIconClass={'lock-closed'}
        />
        <Button onPress={updatePassword}>
          <ButtonText>Update Password</ButtonText>
        </Button>
        <RegisterSection>
          <BelowInputText onPress={() => navigation.navigate('Sign Up')}>
            Don't have an account ? <FontBoldSecond>Register</FontBoldSecond>
          </BelowInputText>
        </RegisterSection>
      </FormContainerStyleOne>
    </Container>
  );
};

export default ForgotNewPassword;
