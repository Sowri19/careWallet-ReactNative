import React, { useState } from 'react';
import {
  Container,
  WelcomeText,
  PageTitle,
  Button,
  ButtonText,
  RegisterSection,
  BelowInputText,
  RegisterText,
  StyledImage,
  SafeAreaContainer,
} from './Styles';
import InputTypeOne from '../../../../../../Components/InputTypeOne';
import InputPasswordTypeOne from '../../../../../../Components/InputPasswordTypeOne';
import {
  useAppDispatch,
  // useAppSelector,
} from '../../../../../../ReduxStore/hooks';
import {
  setState as setStepOneState,
  StepOneState,
} from '../../../../../../ReduxStore/Slices/Register/stepOne';

// Define a type for the navigation prop
interface RegisterPageOneProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
}

const RegisterPageOne: React.FC<RegisterPageOneProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumberLocal] = useState<string>('');
  const [email, setEmailLocal] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [newPassword, setNewPasslocal] = useState<string>('');
  const dispatch = useAppDispatch();
  const updateStepOneState = (update: StepOneState) => {
    dispatch(setStepOneState(update));
  };
  const setPhoneNumber = (text: string) => {
    setPhoneNumberLocal(text);
  };
  const setEmail = (text: string) => {
    setEmailLocal(text);
  };
  const setNewPassword = (text: string) => {
    setNewPasslocal(text);
  };

  const checkifDetailsFilled: boolean =
    phoneNumber !== '' &&
    email !== '' &&
    newPassword !== '' &&
    confirmPassword !== '' &&
    newPassword === confirmPassword;

  const handleNext = async (): Promise<void> => {
    updateStepOneState({
      phoneNumber: phoneNumber,
      email: email,
      newPassword: newPassword,
    });
    navigation.navigate('RegisterPageTwo');
  };
  return (
    <SafeAreaContainer>
      <Container>
        <StyledImage
          source={require('../../../../../../utilities/CareWalletLogo.png')}
        />
        <WelcomeText>Welcome!</WelcomeText>
        <PageTitle>Sign Up</PageTitle>

        <InputTypeOne
          inputName={'Phone Number'}
          inputValue={phoneNumber}
          onChangeEvent={(newText) => setPhoneNumber(newText)}
          placeHolderValue={'Enter your number'}
        />

        <InputTypeOne
          inputName={'Email'}
          inputValue={email}
          onChangeEvent={(newText) => setEmail(newText)}
          placeHolderValue={'Enter your email'}
        />

        <InputPasswordTypeOne
          inputName={'Password'}
          inputValue={newPassword}
          onChangeEvent={setNewPassword}
          placeHolderValue={'Enter Password'}
        />

        <InputPasswordTypeOne
          inputName={'Confirm Password'}
          inputValue={confirmPassword}
          onChangeEvent={setConfirmPassword}
          placeHolderValue={'Confirm Password'}
        />

        <Button disabled={!checkifDetailsFilled} onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </Button>

        <RegisterSection>
          <BelowInputText>Already have an account? </BelowInputText>
          <RegisterText onPress={() => navigation.navigate('Log in')}>
            Login
          </RegisterText>
        </RegisterSection>
      </Container>
    </SafeAreaContainer>
  );
};

export default RegisterPageOne;
