import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Container,
  LoginFields,
  LogoImage,
  WelcomeText,
  RememberMe,
  RememberMeCheckbox,
  BelowInputText,
  Button,
  ButtonText,
  RegisterSection,
} from './Styles';
import InputTypeOne from '../../../Components/InputTypeOne';
import { useAppDispatch } from '../../../ReduxStore/hooks';
import {
  LoginState,
  setState as setLoginState,
} from '../../../ReduxStore/Slices/Login/loginSlice';
import InputPasswordTypeOne from '../../../Components/InputPasswordTypeOne';

// Props type
type Props = {
  navigation: StackNavigationProp<any>;
};

const LogIn: React.FC<Props> = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const toggleRememberMe = () => setRememberMe(!rememberMe);
  const [loginID, setLoginIDLocal] = useState<string>('');
  const [password, setPasswordLocal] = useState<string>('');
  const dispatch = useAppDispatch();
  const checkifDetailsFilled = loginID !== '' && password !== '';
  const updateLoginState = (update: LoginState) => {
    dispatch(setLoginState(update));
  };
  const setLoginID = (text: string) => {
    setLoginIDLocal(text);
  };
  const setPassword = (text: string) => {
    setPasswordLocal(text);
  };

  const loginUser = async () => {
    updateLoginState({
      loginID: loginID,
      password: password,
    });
    navigation.navigate('');
    try {
      const response = await axios.post('/path/to/server/endpoint', {
        email: loginID,
        password: password,
      });

      if (response.data.success) {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, loginID, password);
        navigation.navigate('NextScreen');
      } else {
        console.log('Authentication failed on the server.');
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };
  return (
    <Container>
      <LoginFields>
        <LogoImage source={require('../../../utilities/CareWalletLogo.png')} />
        <WelcomeText>Welcome!</WelcomeText>

        <InputTypeOne
          inputName={'Email or Insurance # or Govt ID'}
          inputValue={loginID}
          onChangeEvent={setLoginID}
          placeHolderValue={'Enter Info of Choice'}
        />

        <InputPasswordTypeOne
          inputName={'Enter Password'}
          inputValue={password}
          onChangeEvent={setPassword}
          placeHolderValue={'Enter Password'}
        />

        <RememberMe>
          <RememberMeCheckbox onPress={toggleRememberMe}>
            {rememberMe && (
              <Ionicons name="checkmark" size={24} color="#00008B" />
            )}
            <BelowInputText>Remember me</BelowInputText>
          </RememberMeCheckbox>
          <BelowInputText onPress={() => console.log('forgot password')}>
            Forgot Password?
          </BelowInputText>
        </RememberMe>

        <Button disabled={!checkifDetailsFilled} onPress={loginUser}>
          <ButtonText>Login</ButtonText>
        </Button>

        <RegisterSection>
          <BelowInputText onPress={() => navigation.navigate('Register')}>
            Don't have an account? Register
          </BelowInputText>
        </RegisterSection>
      </LoginFields>
    </Container>
  );
};

export default LogIn;
