import React, { useState } from 'react';
import { Platform, TouchableOpacity, Pressable, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {} from './Styles';
import {
  BackButton,
  Button,
  ButtonText,
  Container, LogoImageTwo
} from "../../../../../Shared/Styles/Styles";
import { FormContainerStyleOne } from '../../../../../Shared/Styles/Styles';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import InputTypeOne from '../../../../../../Components/Fields/InputTypeOne';
import {
  useAppDispatch,
  useAppSelector,
  // useAppSelector,
} from '../../../../../../ReduxStore/Setup/hooks';
import {
  selectAddress,
  selectCity,
  selectDOB,
  setState as setStepTwoState,
  StepTwoState,
} from '../../../../../../ReduxStore/Slices/Register/stepTwo';
import {
  chkConfirmPassValid,
  chkEmailValid,
  chkPassValid,
  chkPhoneValid
} from "../../../../../../utilities/ValidationUtils";

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
  const [state, setStateLocal] = useState<string>(useAppSelector(selectCity));
  const [stateErr, setStateErr] = useState<string>('');
  const [dateOfBirth, setDateOfBirthLocal] = useState<string>(
    useAppSelector(selectDOB)
  );
  const [dobErr, setDOBErr] = useState<string>('');
  const [dobObject, setDOBObject] = useState<Date>(new Date());
  const [showDOBPicker, setShowDOBPicker] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const updateState = (update: StepTwoState) => {
    dispatch(setStepTwoState(update));
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
  const setDateOfBirth = (text: string) => {
    setDateOfBirthLocal(text);
  };
  const setMemberDOB = (date: Date | undefined) => {
    if (date) {
      setDOBObject(date);
    } else {
      // placeholder date
      setDOBObject(new Date());
    }
  };

  const toggleDOBpicker = () => {
    setShowDOBPicker(!showDOBPicker);
  };

  const onChangeDOB = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || new Date();
    setShowDOBPicker(Platform.OS === 'ios');
    setMemberDOB(currentDate);

    if (event.type === 'set' && currentDate) {
      setDateOfBirth(currentDate.toDateString());
    }
  };

  const confirmIOSDOB = () => {
    if (dobObject) {
      setDateOfBirth(dobObject.toDateString());
    } else {
      setDateOfBirth('');
    }
    toggleDOBpicker();
  };

  const chkDetails = () => {
    let result = true;
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
      dob: dateOfBirth.toString(),
    });
    navigation.navigate('InsuranceSignUpOne');
  };

  const handleBack = async () => {
    updateState({
      address: '',
      city: '',
      state: '',
      dob: '',
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
        <Button onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </Button>
      </FormContainerStyleOne>
      <LogoImageTwo
        source={require('../../../../../../utilities/CareWalletLogo.png')}
      />
    </Container>
  );
};

export default RegisterPageTwo;
