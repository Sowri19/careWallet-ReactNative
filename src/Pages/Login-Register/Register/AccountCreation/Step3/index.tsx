import React, { useState } from 'react';
import {
  Button,
  ButtonText,
  Container,
  BackButton,
  FormContainerStyleOne,
  LogoImageTwo,
} from '../../../../Shared/Styles/Styles';
import InputTypeOne from '../../../../../Components/Fields/InputTypeOne';
import InputPasswordTypeOne from '../../../../../Components/Fields/InputPasswordTypeOne';
import {
  useAppDispatch,
  useAppSelector,
  // useAppSelector,
} from '../../../../../ReduxStore/Setup/hooks';
import {
  selectEmail,
  selectNewPassword,
  selectPhoneNumber,
  setState as setStepThreeState,
  SignUpStepThreeState,
} from '../../../../../ReduxStore/Slices/Register/stepThree';
import {
  chkPassValid,
  chkEmailValid,
  chkPhoneValid,
  chkConfirmPassValid,
} from '../../../../../utilities/ValidationUtils';

// Define a type for the navigation prop
interface RegisterPageOneProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
}

const RegisterPageOne: React.FC<RegisterPageOneProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumberLocal] = useState<string>(
    useAppSelector(selectPhoneNumber)
  );
  const [phoneErr, setPhoneErr] = useState<string>('');
  const [email, setEmailLocal] = useState<string>(useAppSelector(selectEmail));
  const [emailErr, setEmailErr] = useState<string>('');
  const [confirmPassword, setConfirmPasswordLocal] = useState<string>(
    useAppSelector(selectNewPassword)
  );
  const [confirmPassErr, setConfirmPassErr] = useState<string>('');
  const [newPassword, setNewPasslocal] = useState<string>(
    useAppSelector(selectNewPassword)
  );
  const [newPassErr, setNewPassErr] = useState<string>('');
  const dispatch = useAppDispatch();
  const updateStepThreeState = (update: SignUpStepThreeState) => {
    dispatch(setStepThreeState(update));
  };
  const setPhoneNumber = (text: string) => {
    setPhoneNumberLocal(text);
  };
  const blurPhoneNumber = () => {
    setPhoneErr(chkPhoneValid(phoneNumber));
  };
  const setEmail = (text: string) => {
    setEmailLocal(text);
  };
  const blurEmail = () => {
    setEmailErr(chkEmailValid(email));
  };
  const setNewPassword = (text: string) => {
    setNewPasslocal(text);
  };
  const blurNewPass = () => {
    setNewPassErr(chkPassValid(newPassword));
  };
  const setConfirmPassword = (text: string) => {
    setConfirmPasswordLocal(text);
  };
  const blurConfirmPass = () => {
    setConfirmPassErr(chkConfirmPassValid(confirmPassword, newPassword));
  };

  const handleBack = async (): Promise<void> => {
    updateStepThreeState({
      phoneNumber: '',
      email: '',
      newPassword: '',
    });
    navigation.navigate('SignDOB');
  };

  const chkDetails = () => {
    let result = true;
    let error = chkPhoneValid(phoneNumber);
    setPhoneErr(error);
    if (error !== '') {
      result = false;
    }
    error = chkEmailValid(email);
    setEmailErr(error);
    if (error !== '') {
      result = false;
    }
    error = chkPassValid(newPassword);
    setNewPassErr(error);
    if (error !== '') {
      result = false;
    }
    error = chkConfirmPassValid(confirmPassword, newPassword);
    setConfirmPassErr(error);
    if (error !== '') {
      result = false;
    }
    return result;
  };

  const handleNext = async (): Promise<void> => {
    if (!chkDetails()) {
      return;
    }
    updateStepThreeState({
      phoneNumber: phoneNumber,
      email: email,
      newPassword: newPassword,
    });
    navigation.navigate('RegisterPageTwo');
  };
  return (
    <Container>
      <FormContainerStyleOne>
        <BackButton onPress={handleBack}>
          <ButtonText>{`< Back`}</ButtonText>
        </BackButton>
        <InputTypeOne
          inputName={'Phone Number'}
          inputValue={phoneNumber}
          onChangeEvent={(newText) => setPhoneNumber(newText)}
          placeHolderValue={'Enter your number'}
          keyboardType={'number-pad'}
          onBlur={blurPhoneNumber}
          onEndEditing={blurPhoneNumber}
          errorString={phoneErr}
          onFocus={() => setPhoneErr('')}
        />

        <InputTypeOne
          inputName={'Email'}
          inputValue={email}
          onChangeEvent={(newText) => setEmail(newText)}
          placeHolderValue={'Enter your email'}
          keyboardType={'email-address'}
          onBlur={blurEmail}
          onEndEditing={blurEmail}
          errorString={emailErr}
          onFocus={() => setEmailErr('')}
        />

        <InputPasswordTypeOne
          inputName={'Password'}
          inputValue={newPassword}
          onChangeEvent={setNewPassword}
          placeHolderValue={'Enter Password'}
          onBlur={blurNewPass}
          onEndEditing={blurNewPass}
          errorString={newPassErr}
          onFocus={() => setNewPassErr('')}
        />

        <InputPasswordTypeOne
          inputName={'Confirm Password'}
          inputValue={confirmPassword}
          onChangeEvent={setConfirmPassword}
          placeHolderValue={'Confirm Password'}
          onBlur={blurConfirmPass}
          onEndEditing={blurConfirmPass}
          errorString={confirmPassErr}
          onFocus={() => setConfirmPassErr('')}
        />

        <Button onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </Button>
      </FormContainerStyleOne>
      <LogoImageTwo
        source={require('../../../../../utilities/CareWalletLogo.png')}
      />
    </Container>
  );
};

export default RegisterPageOne;
