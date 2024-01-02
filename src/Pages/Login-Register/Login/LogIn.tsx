import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';
import {
  WelcomeText,
  RememberMe,
  RememberMeCheckbox,
  BelowInputText,
  RegisterSection,
  SignText,
} from './Styles';
import {
  LogoImage,
  Button,
  ButtonText,
  FormContainerStyleOne,
  Container,
  FontBold,
  FontBoldSecond,
  LogoImageHolder,
  ButtonDummy,
} from '../../Shared/Styles/Styles';
import InputTypeOne from '../../../Components/Fields/InputTypeOne';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../ReduxStore/Setup/hooks';
import {
  LoginState,
  selectLoginID,
  selectPassword,
  setState as setLoginState,
} from '../../../ReduxStore/Slices/Login/loginSlice';
import InputPasswordTypeOne from '../../../Components/Fields/InputPasswordTypeOne';
import { chkPassValid } from '../../../utilities/ValidationUtils';
import { PagesProps } from '../../../utilities/CommonTypes';

let apiHitInProgress = false;
const LogIn: React.FC<PagesProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const toggleRememberMe = () => setRememberMe(!rememberMe);
  const [loginID, setLoginIDLocal] = useState<string>(
    useAppSelector(selectLoginID)
  );
  const [loginIDErr, setLoginIDErr] = useState<string>('');
  const [password, setPasswordLocal] = useState<string>(
    useAppSelector(selectPassword)
  );
  const [passwordErr, setPasswordErr] = useState<string>('');
  const dispatch = useAppDispatch();
  const updateLoginState = (update: LoginState) => {
    dispatch(setLoginState(update));
  };
  const blurLoginID = () => {
    setLoginIDErr(chkLoginIDValid(loginID));
  };
  const chkLoginIDValid = (text: string) => {
    if (text == '') {
      return 'Login ID cannot be empty';
    }
    return '';
  };
  const blurPassword = () => {
    setPasswordErr(chkPassValid(password));
  };
  const chkDetails = () => {
    let result = true;
    let error = chkLoginIDValid(loginID);
    setLoginIDErr(error);
    if (error !== '') {
      result = false;
    }
    error = chkPassValid(password);
    setPasswordErr(error);
    if (error !== '') {
      result = false;
    }
    return result;
  };
  const reset = () => {
    updateLoginState({
      loginID: '',
      password: '',
    });
    setPasswordLocal('');
    setLoginIDLocal('');
    setRememberMe(false);
    setLoginIDErr('');
    setPasswordErr('');
  };
  useEffect(() => {
    if (isFocused) {
      reset();
    }
  }, [isFocused]);

  const loginUser = async () => {
    const valid = chkDetails();
    if (!valid || apiHitInProgress) {
      return;
    }
    apiHitInProgress = true;
    updateLoginState({
      loginID: loginID,
      password: password,
    });
    // navigation.navigate('');
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
      apiHitInProgress = false;
    } catch (error) {
      apiHitInProgress = false;
      console.log('An error occurred:', error);
    }
  };
  return (
    <Container>
      <FormContainerStyleOne>
        <ButtonDummy />
        <LogoImageHolder>
          <LogoImage
            source={require('../../../utilities/CareWalletLogo.png')}
          />
        </LogoImageHolder>
        <WelcomeText>Welcome!</WelcomeText>
        <SignText>
          <FontBold>Sign In</FontBold>
        </SignText>
        <InputTypeOne
          inputName={'Phone #, Email, Insurance ID'}
          inputValue={loginID}
          onChangeEvent={setLoginIDLocal}
          placeHolderValue={'Enter Info of Choice'}
          errorString={loginIDErr}
          onBlur={blurLoginID}
          onEndEditing={blurLoginID}
          onFocus={() => setLoginIDErr('')}
        />

        <InputPasswordTypeOne
          inputName={'Enter Password'}
          inputValue={password}
          onChangeEvent={setPasswordLocal}
          placeHolderValue={'Enter Password'}
          errorString={passwordErr}
          onBlur={blurPassword}
          onEndEditing={blurPassword}
          onFocus={() => setPasswordErr('')}
        />

        <RememberMe>
          <RememberMeCheckbox onPress={toggleRememberMe}>
            {rememberMe && (
              <Ionicons name="checkmark" size={24} color="#00008B" />
            )}
            <BelowInputText>Remember me</BelowInputText>
          </RememberMeCheckbox>
          <BelowInputText
            onPress={() => {
              navigation.navigate('ForgotStepOne');
            }}
          >
            Forgot Password ?
          </BelowInputText>
        </RememberMe>

        <Button onPress={loginUser}>
          <ButtonText>Login</ButtonText>
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

export default LogIn;
