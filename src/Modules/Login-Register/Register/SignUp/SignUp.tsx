import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  LogoImage,
  WelcomeText,
  BelowInputText,
  RegisterSection,
  SignText,
} from './Styles';
import {
  Button,
  ButtonText,
  Container,
  FormContainerStyleOne,
  FontBold,
  FontBoldSecond,
} from '../../../Shared/Styles/Styles';
import InputTypeOne from '../../../../Components/Fields/InputTypeOne';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../ReduxStore/Setup/hooks';
import {
  SignUpState,
  setState as setSignUpAction,
  selectFirstName,
  selectLastName,
} from '../../../../ReduxStore/Slices/Register/signUp';
import { useIsFocused } from '@react-navigation/native';
import { chkNameValid } from '../../../../utilities/ValidationUtils';

type Props = {
  navigation: StackNavigationProp<any>;
};

const SignUp: React.FC<Props> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [firstName, setFirstName] = useState(useAppSelector(selectFirstName));
  const [firstNameErr, setFirstNameErr] = useState('');
  const [lastName, setLastName] = useState(useAppSelector(selectLastName));
  const [lastNameErr, setLastNameErr] = useState('');
  const dispatch = useAppDispatch();
  const updateSignUpState = (update: SignUpState) => {
    dispatch(setSignUpAction(update));
  };
  const blurFirstNameChange = () => {
    setFirstNameErr(chkFirstNameValid(firstName));
  };
  const blurLastNameChange = () => {
    setLastNameErr(chkLastNameValid(lastName));
  };
  const reset = () => {
    updateSignUpState({
      firstName: firstName,
      lastName: lastName,
    });
    setFirstName('');
    setLastName('');
    setFirstNameErr('');
    setLastNameErr('');
  };
  useEffect(() => {
    // if (isFocused) {
    //   reset();
    // }
  }, [isFocused]);
  const chkFirstNameValid = (text: string) => {
    return chkNameValid(text);
  };
  const chkLastNameValid = (text: string) => {
    return chkNameValid(text);
  };
  const chkDetails = () => {
    let result = true;
    let error = chkFirstNameValid(firstName);
    setFirstNameErr(error);
    if (error !== '') {
      result = false;
    }
    error = chkLastNameValid(lastName);
    setLastNameErr(error);
    if (error !== '') {
      result = false;
    }
    return result;
  };
  const signUpUser = () => {
    if (!chkDetails()) {
      return;
    }
    updateSignUpState({
      firstName: firstName,
      lastName: lastName,
    });
    navigation.navigate('Register');
  };
  return (
    <Container>
      <FormContainerStyleOne>
        <LogoImage
          source={require('../../../../utilities/CareWalletLogo.png')}
        />
        <WelcomeText>Welcome!</WelcomeText>
        <SignText>
          <FontBold>Sign Up</FontBold>
        </SignText>
        <InputTypeOne
          inputName={"What's your name ?"}
          inputValue={firstName}
          onChangeEvent={setFirstName}
          placeHolderValue={'First Name'}
          errorString={firstNameErr}
          onBlur={blurFirstNameChange}
          onEndEditing={blurFirstNameChange}
          onFocus={() => setFirstNameErr('')}
        />

        <InputTypeOne
          inputName={''}
          inputValue={lastName}
          onChangeEvent={setLastName}
          placeHolderValue={'Last Name'}
          errorString={lastNameErr}
          onBlur={blurLastNameChange}
          onEndEditing={blurLastNameChange}
          onFocus={() => setLastNameErr('')}
        />

        <Button onPress={signUpUser}>
          <ButtonText>Next</ButtonText>
        </Button>

        <RegisterSection>
          <BelowInputText onPress={() => navigation.navigate('Log in')}>
            Already have an account ? <FontBoldSecond>Login</FontBoldSecond>
          </BelowInputText>
        </RegisterSection>
      </FormContainerStyleOne>
    </Container>
  );
};

export default SignUp;
