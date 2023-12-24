import React, { useState } from 'react';
import { Platform, TouchableOpacity, Pressable, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  StyledImage,
  WelcomeText,
  PageTitle,
  StyledInput,
  StyledButton,
  ButtonText,
} from './Styles';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import InputTypeOne from '../../../../../../Components/InputTypeOne';
import {
  useAppDispatch,
  // useAppSelector,
} from '../../../../../../ReduxStore/hooks';
import {
  setState as setStepTwoState,
  StepTwoState,
} from '../../../../../../ReduxStore/Slices/Register/stepTwo';
import { Container, SafeAreaContainer } from '../Step1/Styles';

interface RegisterPageTwoProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
  route: RouteProp<ParamListBase, 'RegisterPageTwo'>;
}

const RegisterPageTwo: React.FC<RegisterPageTwoProps> = ({
  navigation,
}) => {
  const [address, setAddressLocal] = useState<string>('');
  const [city, setCityLocal] = useState<string>('');
  const [state, setStateLocal] = useState<string>('');
  const [dateOfBirth, setDateOfBirthLocal] = useState<string>('');
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

  const checkifDetailsFilled = address !== '' && city !== '' && state !== '';

  const onSubmitFormHandler = async () => {
    updateState({
      address: address,
      city: city,
      state: state,
      dob: dateOfBirth.toString(),
    });
    navigation.navigate('InsuranceSignUpOne');
  };

  return (
    <SafeAreaContainer>
      <Container>
        <StyledImage
          source={require('../../../../../../utilities/CareWalletLogo.png')}
        />
        <WelcomeText>Page 2</WelcomeText>
        <PageTitle>Sign Up</PageTitle>
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
        <View>
          <WelcomeText>Member's Date of Birth</WelcomeText>
          {showDOBPicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={dobObject}
              onChange={onChangeDOB}
            />
          )}
          {showDOBPicker && Platform.OS === 'ios' && (
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
            >
              <TouchableOpacity onPress={toggleDOBpicker}>
                <ButtonText>Cancel</ButtonText>
              </TouchableOpacity>
              <TouchableOpacity onPress={confirmIOSDOB}>
                <ButtonText>Confirm</ButtonText>
              </TouchableOpacity>
            </View>
          )}
          {!showDOBPicker && (
            <Pressable onPress={toggleDOBpicker}>
              <StyledInput
                placeholder="Enter Member's Date of Birth"
                value={dateOfBirth}
                editable={false}
              />
            </Pressable>
          )}
        </View>
        <StyledButton
          disabled={!checkifDetailsFilled}
          onPress={onSubmitFormHandler}
        >
          <ButtonText>Next</ButtonText>
        </StyledButton>
      </Container>
    </SafeAreaContainer>
  );
};

export default RegisterPageTwo;
