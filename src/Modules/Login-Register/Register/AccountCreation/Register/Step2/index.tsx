import React, { useState } from 'react';
import {
  Platform,
  TouchableOpacity,
  Pressable,
  View,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import {
  ScreenWrapper,
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
  useAppSelector,
} from '../../../../../../ReduxStore/hooks';
import {
  setAddress as setAddressAction,
  setCity as setCityAction,
  setState as setStateAction,
  setDOB as setDOBAction,
} from '../../../../../../ReduxStore/Slices/Register/stepTwo';

type FormData = {
  name: string;
  email: string;
};

interface RegisterPageTwoProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
  route: RouteProp<ParamListBase, 'RegisterPageTwo'>;
}

const RegisterPageTwo: React.FC<RegisterPageTwoProps> = ({
  navigation,
  route,
}) => {
  // const [address, setAddress] = useState<string>('');
  // const [city, setCity] = useState<string>('');
  // const [zipcode, setZipcode] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [memberDOB, setMemberDOB] = useState<Date>(new Date());
  const [showDOBPicker, setShowDOBPicker] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const address = useAppSelector((state) => state.stepTwoState.address);
  const city = useAppSelector((state) => state.stepTwoState.city);
  const state = useAppSelector((state) => state.stepTwoState.state);
  const memberDOB = useAppSelector((state) => state.stepTwoState.dob);
  const setAddress = (text: string) => {
    dispatch(setAddressAction(text));
  };
  const setCity = (text: string) => {
    dispatch(setCityAction(text));
  };
  const setState = (text: string) => {
    dispatch(setStateAction(text));
  };
  const setMemberDOB = (date: Date | undefined) => {
    if (date) {
      dispatch(setDOBAction(date));
    } else {
      // placeholder date
      dispatch(setDOBAction(new Date()));
    }
  };

  const { formData } = route.params as {
    formData: FormData;
    sharedData: string;
  };

  const toggleDOBpicker = () => {
    setShowDOBPicker(!showDOBPicker);
  };

  const onChangeDOB = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || memberDOB;
    setShowDOBPicker(Platform.OS === 'ios');
    setMemberDOB(currentDate);

    if (event.type === 'set' && currentDate) {
      setDateOfBirth(currentDate.toDateString());
    }
  };

  const confirmIOSDOB = () => {
    if (memberDOB) {
      setDateOfBirth(memberDOB.toDateString());
    } else {
      setDateOfBirth('');
    }
    toggleDOBpicker();
  };

  const checkifDetailsFilled = address !== '' && city !== '' && state !== '';

  const onSubmitFormHandler = async () => {
    const updatedFormData = {
      ...formData,
      address,
      city,
      state,
      dateOfBirth,
    };

    setIsLoading(true);

    try {
      const response = await axios.post(`http://localhost:3000/patients`, {
        firstName: updatedFormData.name,
        lastName: '',
        address: updatedFormData.address,
        phoneNumber: '',
        email: updatedFormData.email,
        dob: updatedFormData.dateOfBirth,
      });

      if (response.status === 201) {
        Alert.alert(
          'Success',
          `You have created: ${JSON.stringify(response.data)}`
        );
        setIsLoading(false);
        setAddress('');
        setCity('');
        setDateOfBirth('');
      } else {
        throw new Error('An error has occurred');
      }
    } catch (error) {
      Alert.alert('Error', 'An error has occurred');
      setIsLoading(false);
    }
    navigation.navigate('InsuranceSignUpOne');
  };

  return (
    <ScreenWrapper>
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
      // TODO: Convert this to common Date picker
      <View>
        <WelcomeText>Member's Date of Birth</WelcomeText>
        {showDOBPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={memberDOB}
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
        disabled={!checkifDetailsFilled || isLoading}
        onPress={onSubmitFormHandler}
      >
        <ButtonText>Next</ButtonText>
      </StyledButton>
    </ScreenWrapper>
  );
};

export default RegisterPageTwo;
