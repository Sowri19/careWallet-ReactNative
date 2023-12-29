import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import InputTypeOne from '../../../../../Components/Fields/InputTypeOne';
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

type Props = {
  navigation: StackNavigationProp<any>;
};

const StepTwo: React.FC<Props> = ({ navigation }) => {
  const [dob, setDOBLocal] = useState<string>('');
  const [dobErr, setDOBErr] = useState<string>('');
  const dispatch = useAppDispatch();
  const updateState = (update: SignUpStepTwoState) => {
    dispatch(setStateAction(update));
  };
  const setDOB = (text: string) => {
    setDOBLocal(text);
  };
  const blurDOBChange = () => {
    setDOBErr(chkDateValid(dob));
  };
  const chkDetails = () => {
    let result = true;
    let error = chkDateValid(dob);
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
        <InputTypeOne
          inputName={''}
          inputValue={dob}
          onChangeEvent={setDOB}
          placeHolderValue={'Date of Birth'}
          errorString={dobErr}
          onBlur={blurDOBChange}
          onEndEditing={blurDOBChange}
          onFocus={() => setDOBErr('')}
        />

        <Button onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </Button>
      </FormContainerStyleOne>
    </Container>
  );
};

export default StepTwo;
