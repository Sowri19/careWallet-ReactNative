import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  BackButton,
  Button,
  ButtonText,
  Container,
  FormContainerStyleOne,
  LogoImage,
  LogoImageHolder,
} from '../../../../Shared/Styles/Styles';
import { SignText } from '../Step1/Styles';
import { useAppDispatch } from '../../../../../ReduxStore/Setup/hooks';
import {
  setState as setStateAction,
  SignUpStepTwoState,
} from '../../../../../ReduxStore/Slices/Register/stepTwo';
import { chkDateValid } from '../../../../../utilities/ValidationUtils';
import DatePickerTypeOne from '../../../../../Components/Fields/DatePickerTypeOne';
import { formatDate } from '../../../../../utilities/FormatUtils';

type Props = {
  navigation: StackNavigationProp<any>;
};

const StepTwo: React.FC<Props> = ({ navigation }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [dob, setDOBLocal] = useState<string>(formatDate(date));
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
    const error = chkDateValid(dob);
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
    if (!chkDetails) {
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
            source={require('../../../../../utilities/CareWalletLogo.png')}
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
      </FormContainerStyleOne>
    </Container>
  );
};

export default StepTwo;
