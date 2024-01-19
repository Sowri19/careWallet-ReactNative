import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { BelowInputText, RegisterSection, SignText } from './Styles';
import {
  LogoImage,
  Button,
  ButtonText,
  Container,
  FormContainerStyleOne,
  FontBoldSecond,
  LogoImageHolder,
  ButtonDummy,
} from '../../../../../Shared/Styles/Styles';
import InputTypeOne from '../../../../../Components/Fields/InputTypeOne';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../ReduxStore/Setup/hooks';
import {
  SignUpStepOneState,
  setState as setStepOneAction,
  selectFirstName,
  selectLastName,
} from '../../../../../ReduxStore/Slices/Register/stepOne';
import { useIsFocused } from '@react-navigation/native';
import { chkNameValid } from '../../../../../utilities/ValidationUtils';
import { PagesProps } from '../../../../../utilities/CommonTypes';

const SignUp: React.FC<PagesProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [firstName, setFirstName] = useState(useAppSelector(selectFirstName));
  const [firstNameErr, setFirstNameErr] = useState('');
  const [lastName, setLastName] = useState(useAppSelector(selectLastName));
  const [lastNameErr, setLastNameErr] = useState('');
  const dispatch = useAppDispatch();
  const updateStepOneState = (update: SignUpStepOneState) => {
    dispatch(setStepOneAction(update));
  };
  const blurFirstNameChange = () => {
    setFirstNameErr(chkFirstNameValid(firstName));
  };
  const blurLastNameChange = () => {
    setLastNameErr(chkLastNameValid(lastName));
  };
  const reset = () => {
    updateStepOneState({
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
    updateStepOneState({
      firstName: firstName,
      lastName: lastName,
    });
    navigation.navigate('FaceVerification');
  };
  return (
    <Container>
      <FormContainerStyleOne>
        <ButtonDummy />
        <LogoImageHolder>
          <LogoImage
            source={require('../../../../../Shared/Media/Images/Welcome-to-CareWallet-Text-and-Logo.png')}
          />
        </LogoImageHolder>
        <SignText>What's your name ?</SignText>
        <InputTypeOne
          inputName={''}
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
