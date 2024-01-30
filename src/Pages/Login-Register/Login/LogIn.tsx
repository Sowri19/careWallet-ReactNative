import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import {
  RememberMe,
  RememberMeCheckbox,
  BelowInputText,
  RegisterSection,
  SignText,
  CheckBoxContainer,
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
} from '../../../Shared/Styles/Styles';
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
import { styleFontSize18 } from '../../../Styles/AppWideConstants/Styles';
import axiosInstance from '../../../utilities/axiosInstance';
import {
  HomePageState,
  setState as setHomepageState,
} from '../../../ReduxStore/Slices/HomePage/homePage';

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
  const [type, setType] = useState<string>(`email`);
  const dispatch = useAppDispatch();
  const updateLoginState = (update: LoginState) => {
    dispatch(setLoginState(update));
  };
  const updateType = (newType: string) => {
    setType(newType);
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

  const updateHomePageState = (update: HomePageState) => {
    dispatch(setHomepageState(update));
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
      type: '',
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
    // updateLoginState({
    //   loginID: loginID,
    //   password: password,
    // });
    // navigation.navigate('');
    try {
      const response = await axiosInstance.post(
        `/patient/authentication/login.ns`,
        {
          username: loginID.toLowerCase(),
          password: password,
          type,
        }
      );
      console.log(response.data);
      if (response.data.success) {
        const responseAcc = await axiosInstance.get(
          `/patient/dashboard/account-home.ns`
        );
        if (responseAcc.data.success) {
          const accountData = responseAcc.data.data;
          updateHomePageState({
            healthCard1Url: '',
            healthCard2Url: '',
            insuranceUrl:
              'https://0pqjojts5c.execute-api.us-east-1.amazonaws.com/dev/patient/dashboard/account-media.ns?type=insurance-front',
            isActive: true,
            licenseUrl:
              'https://0pqjojts5c.execute-api.us-east-1.amazonaws.com/dev/patient/dashboard/account-media.ns?type=govID-front',
            profilePictureUrl:
              'https://0pqjojts5c.execute-api.us-east-1.amazonaws.com/dev/patient/dashboard/account-media.ns?type=user-photo',
            validityDate: '',
            email: accountData.email,
            phoneNumber: accountData.phoneNumber,
            dateOfBirth: accountData.dob,
            firstName: accountData.firstName,
            lastName: accountData.lastName,
            address: {
              state: accountData.state,
              postal_code: accountData.zipcode,
              street_address: accountData.address,
              locality: accountData.city,
              country: `US`,
            },
            insuranceID: accountData.insuranceID,
            insuranceName: accountData.insuranceName,
          });
          navigation.navigate('Homepage');
        } else {
          console.log('Authentication failed on the server.');
        }
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
            source={require('../../../Shared/Media/Images/Welcome-to-CareWallet-Text-and-Logo.png')}
          />
        </LogoImageHolder>
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
            <CheckBoxContainer>
              {rememberMe && (
                <Ionicons
                  name="checkmark"
                  size={styleFontSize18}
                  color="#00008B"
                />
              )}
            </CheckBoxContainer>
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
        <Button onPress={() => {
          axiosInstance.get(`/patient/authentication/logout.ns`);
        }}>
          <ButtonText>Logout</ButtonText>
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
