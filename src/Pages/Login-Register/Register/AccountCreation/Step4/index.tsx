import React, { useState } from 'react';
import { Platform } from 'react-native';
import {} from './Styles';
import {
  BackButton,
  Button,
  ButtonText,
  Container,
  LogoImageTwo,
} from '../../../../Shared/Styles/Styles';
import { FormContainerStyleOne } from '../../../../Shared/Styles/Styles';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import InputTypeOne from '../../../../../Components/Fields/InputTypeOne';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../ReduxStore/Setup/hooks';
import {
  selectAddress,
  selectCity,
  selectState,
  selectZipcode,
  setState as setStepFourState,
  SignUpStepFourState,
} from '../../../../../ReduxStore/Slices/Register/stepFour';
import {
  chkConfirmPassValid,
  chkEmailValid,
  chkPassValid,
  chkPhoneValid,
} from '../../../../../utilities/ValidationUtils';

interface RegisterPageTwoProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
  route: RouteProp<ParamListBase, 'RegisterPageTwo'>;
}

const RegisterPageTwo: React.FC<RegisterPageTwoProps> = ({ navigation }) => {
  const [address, setAddressLocal] = useState<string>(
    useAppSelector(selectAddress)
  );
  const [addressErr, setAddressErr] = useState<string>('');
  const [city, setCityLocal] = useState<string>(useAppSelector(selectCity));
  const [cityErr, setCityErr] = useState<string>('');
  const [state, setStateLocal] = useState<string>(useAppSelector(selectState));
  const [stateErr, setStateErr] = useState<string>('');
  const [zipcode, setZipcodeLocal] = useState<string>(
    useAppSelector(selectZipcode)
  );
  const [zipcodeErr, setZipcodeErr] = useState<string>('');
  const dispatch = useAppDispatch();
  const updateState = (update: SignUpStepFourState) => {
    dispatch(setStepFourState(update));
  };
  const setAddress = (text: string) => {
    setAddressLocal(text);
  };
  const setCity = (text: string) => {
    setCityLocal(text);
  };
  const setState = (text: string) => {
    setStateLocal(text);
  };
  const setZipcode = (text: string) => {
    setZipcodeLocal(text);
  };

  const chkDetails = () => {
    const result = true;
    return result;
  };

  const handleNext = async () => {
    if (!chkDetails()) {
      return;
    }
    updateState({
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
    });
    navigation.navigate('InsuranceSignUpOne');
  };

  const handleBack = async () => {
    updateState({
      address: '',
      city: '',
      state: '',
      zipcode: '',
    });
    navigation.navigate('Register');
  };

  return (
    <Container>
      <FormContainerStyleOne>
        <BackButton onPress={handleBack}>
          <ButtonText>{`< Back`}</ButtonText>
        </BackButton>
        <InputTypeOne
          inputName={'Address'}
          inputValue={address}
          onChangeEvent={(newText) => setAddress(newText)}
          placeHolderValue={'Enter your street address'}
        />
        <InputTypeOne
          inputName={'City'}
          inputValue={city}
          onChangeEvent={(newText) => setCity(newText)}
          placeHolderValue={'Enter your city'}
        />
        <InputTypeOne
          inputName={'State'}
          inputValue={state}
          onChangeEvent={(newText) => setState(newText)}
          placeHolderValue={'Enter your State'}
        />
        <InputTypeOne
          inputName={'Zipcode'}
          inputValue={zipcode}
          onChangeEvent={(newText) => setZipcode(newText)}
          placeHolderValue={'Enter your Zipcode'}
        />
        <Button onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </Button>
      </FormContainerStyleOne>
      <LogoImageTwo
        source={require('../../../../../utilities/CareWalletLogo.png')}
      />
    </Container>
  );
};

export default RegisterPageTwo;
