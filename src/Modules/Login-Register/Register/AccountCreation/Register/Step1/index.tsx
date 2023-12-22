import React, { useState } from 'react';
import axios from 'axios';
import { View, TouchableOpacity } from 'react-native';
import {
  Container,
  WelcomeText,
  PageTitle,
  InputText,
  StyledInput,
  Button,
  ButtonText,
  RegisterSection,
  BelowInputText,
  RegisterText,
  PasswordSection,
  EyeIcon,
  StyledImage,
  SafeAreaContainer,
} from './Styles';
import InputTypeOne from '../../../../../../Components/InputTypeOne';
import InputPasswordTypeOne from '../../../../../../Components/InputPasswordTypeOne';

// Define a type for the navigation prop
interface RegisterPageOneProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
}

const RegisterPageOne: React.FC<RegisterPageOneProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordVisible, setNewPasswordVisibility] =
    useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPasswordVisible, setConfirmPasswordVisibility] =
    useState<boolean>(false);

  const [sharedData] = useState<string>('Shared data to be passed');

  const checkifDetailsFilled: boolean =
    name !== '' &&
    email !== '' &&
    newPassword !== '' &&
    confirmPassword !== '' &&
    newPassword === confirmPassword;

  const handleNext = async (): Promise<void> => {
    const formData = {
      name,
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
          inputName={'Name'}
          inputValue={name}
          onChangeEvent={(newText) => setName(newText)}
          placeHolderValue={'Enter your name'}
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
