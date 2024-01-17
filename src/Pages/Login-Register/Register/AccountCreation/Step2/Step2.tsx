import React, { useState } from 'react';
import {
  BackButton,
  Button,
  ButtonText,
  Container,
  FontBoldSecond,
  FormContainerStyleOne,
  LogoImage,
  LogoImageHolder,
} from '../../../../../Shared/Styles/Styles';
import { BelowInputText, RegisterSection, SignText } from '../Step1/Styles';
import { useAppDispatch } from '../../../../../ReduxStore/Setup/hooks';
import {
  setState as setStateAction,
  SignUpStepTwoState,
} from '../../../../../ReduxStore/Slices/Register/stepTwo';
import {
  chk18DateValid,
  chkDateValid,
} from '../../../../../utilities/ValidationUtils';

import DatePickerTypeOne from '../../../../../Components/Fields/DatePickerTypeOne';
import { formatDate } from '../../../../../utilities/FormatUtils';
import { PagesProps } from '../../../../../utilities/CommonTypes';

const StepTwo: React.FC<PagesProps> = ({ navigation }) => {
  const [date, setDate] = useState<Date>();
  const [dob, setDOBLocal] = useState<string>('');
  const [dobErr, setDOBErr] = useState<string>('');
  const dispatch = useAppDispatch();
  const updateState = (update: SignUpStepTwoState) => {
    dispatch(setStateAction(update));
  };
  const setDOB = (text: string) => {
    setDOBLocal(text);
  };
  const chkDetails = () => {
    let result = true;
    let error = chkDateValid(dob);
    if (error !== '') {
      setDOBErr(error);
      result = false;
    }
    error = chk18DateValid(date);
    if (error !== '') {
      setDOBErr(error);
      result = false;
    }
    return result;
  };
  const handleBack = () => {
    updateState({
      dob: '',
    });
    navigation.navigate('Sign Up');
  };
  const handleNext = () => {
    if (!chkDetails()) {
      return;
    }
    updateState({
      dob: dob,
    });
    navigation.navigate('Register');
  };
  const onDateConfirm = (date: Date) => {
    setDate(date);
    setDOB(formatDate(date));
  };
  const onDateCancel = () => {};
  const openDatePicker = () => {
    setDOBErr('');
  };
  return (
    <Container>
      <FormContainerStyleOne>
        <BackButton onPress={handleBack}>
          <ButtonText>{`< Back`}</ButtonText>
        </BackButton>
        <LogoImageHolder>
          <LogoImage
            source={require('../../../../../Shared/Media/Images/Welcome-to-CareWallet-Text-and-Logo.png')}
          />
        </LogoImageHolder>
        <SignText>What's your Date of Birth ?</SignText>
        <DatePickerTypeOne
          inputValue={date}
          placeHolderValue={`Date of Birth`}
          errorString={dobErr}
          onPressIn={openDatePicker}
          onDateConfirm={onDateConfirm}
          onCancel={onDateCancel}
        />
        <Button onPress={handleNext}>
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

export default StepTwo;
