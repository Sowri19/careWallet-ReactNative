import React, { useState } from 'react';
import axios from 'axios';
import { View, TouchableOpacity } from 'react-native';
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
  useAppSelector,
} from '../../../../../../ReduxStore/hooks';
import {
  setPhoneNumber as setPhoneAction,
  setEmail as setEmailAction,
  setNewPassword as setPasswordAction,
} from '../../../../../../ReduxStore/Slices/Register/stepOne';

// Define a type for the navigation prop
interface RegisterPageOneProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
}

const RegisterPageOne: React.FC<RegisterPageOneProps> = ({ navigation }) => {
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const phoneNumber = useAppSelector((state) => state.stepOneState.phoneNumber);
  const email = useAppSelector((state) => state.stepOneState.email);
  const newPassword = useAppSelector((state) => state.stepOneState.newPassword);
  const [sharedData] = useState<string>('Shared data to be passed');
  const dispatch = useAppDispatch();
  const setPhoneNumber = (text: string) => {
    dispatch(setPhoneAction(text));
  };
  const setEmail = (text: string) => {
    dispatch(setEmailAction(text));
  };
  const setNewPassword = (text: string) => {
    dispatch(setPasswordAction(text));
  };

  const checkifDetailsFilled: boolean =
    phoneNumber !== '' &&
    email !== '' &&
    newPassword !== '' &&
    confirmPassword !== '' &&
    newPassword === confirmPassword;

  const handleNext = async (): Promise<void> => {
    const formData = {
      phoneNumber,
      email,
      newPassword,
    };

    try {
      const response = await axios.post(
        'http://localhost:3000/patients',
        formData
      );

      if (response.status === 200) {
        console.log('Data added successfully!');
        navigation.navigate('RegisterPageTwo', { formData, sharedData });
      } else {
        console.error('Failed to add data to the API.');
      }
    } catch (error) {
      console.error('An error occurred while making the API request:', error);
    }
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
