import React, { useState } from 'react';
import { Platform } from 'react-native';
import {} from './Styles';
import {
  BackButton,
  Button,
  ButtonText,
  Container,
  LogoImageHolderBottomOne,
  LogoImageTwo,
} from '../../../../../Shared/Styles/Styles';
import { FormContainerStyleOne } from '../../../../../Shared/Styles/Styles';
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
import SearchDropdownTypeOne from '../../../../../Components/Fields/SearchDropdownTypeOne';
import {
  chkAddressValid,
  chkCityValid,
  chkStateValid,
  chkZipcodeValid,
} from '../../../../../utilities/ValidationUtils';
import {
  PagesProps,
  SearchDropdownItem,
} from '../../../../../utilities/CommonTypes';
import {
  constructSearchAddressFromString,
  formatSearchAddressToString,
} from '../../../../../utilities/FormatUtils';

const intialData = [];

const RegisterPageTwo: React.FC<PagesProps> = ({ navigation }) => {
  const [address, setAddressLocal] = useState<string>(
    useAppSelector(selectAddress)
  );
  const [addressErr, setAddressErr] = useState<string>('');
  const [streetAddress, setStreetAddressLocal] = useState<string>('');
  const [addressItem, setAddressItemLocal] = useState<SearchDropdownItem>();
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

  const setAddressItem = (item: SearchDropdownItem) => {
    setAddressItemLocal(item);
  };

  const chkDetails = () => {
    let result = true;
    let error = chkAddressValid(address);
    if (error) {
      setAddressErr(error);
      result = false;
    }
    error = chkCityValid(city);
    if (error) {
      setCityErr(error);
      result = false;
    }
    error = chkStateValid(state);
    if (error) {
      setStateErr(error);
      result = false;
    }
    error = chkZipcodeValid(zipcode);
    if (error) {
      setZipcodeErr(error);
      result = false;
    }
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
    navigation.navigate('FaceVerification');
    // navigation.navigate(`InsuranceSignUpOne`);
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
  const searchApi = `https://0pqjojts5c.execute-api.us-east-1.amazonaws.com/dev/nostate/stateless/searchAddress.ns?search=`;
  const searchApiCallback = (response: any) => {
    const { data = {} } = response;
    const { addresses = [] } = data.data;
    const results: SearchDropdownItem[] = addresses.map((item: any) => {
      const { label, value, fullLabel } = formatSearchAddressToString(item);
      return {
        label,
        fullLabel,
        value,
        address: {
          country: item.country || ``,
          locality: item.locality || ``,
          postal_code: item.postal_code || ``,
          state: item.state || ``,
          street_address: item.street_address || ``,
        },
      };
    });

    // console.log(streetAddress);

    // if (streetAddress) {
    //   results.unshift({
    //     label: streetAddress,
    //     fullLabel: streetAddress,
    //     value: streetAddress,
    //     address: {
    //       country: '',
    //       locality: '',
    //       postal_code: '',
    //       state: '',
    //       street_address: streetAddress,
    //     }
    //   });
    // }
    return results;
  };
  return (
    <Container>
      <FormContainerStyleOne>
        <BackButton onPress={handleBack}>
          <ButtonText>{`< Back`}</ButtonText>
        </BackButton>
        <SearchDropdownTypeOne
          inputValue={addressItem}
          inputPlaceHolder={'Enter your street address'}
          inputErr={addressErr}
          setInputValue={(item) => {
            const { street_address, locality, state, postal_code } =
              item.address;
            setAddress(street_address);
            setCity(locality);
            setState(state);
            setZipcode(postal_code);
            setAddressItem(item);
          }}
          initialList={intialData}
          inputName={'Address'}
          searchPlaceHolder={'Search Address..'}
          searchApiProps={{
            searchApi: searchApi,
            searchApiCallback: searchApiCallback,
          }}
          searchInputValueCB={setStreetAddressLocal}
          // renderInputSearch={renderInputSearch}
        />
        <InputTypeOne
          inputName={'City'}
          inputValue={city}
          errorString={cityErr}
          onChangeEvent={(newText) => setCity(newText)}
          placeHolderValue={'Enter your city'}
        />
        <InputTypeOne
          inputName={'State'}
          inputValue={state}
          errorString={stateErr}
          onChangeEvent={(newText) => setState(newText)}
          placeHolderValue={'Enter your State'}
        />
        <InputTypeOne
          inputName={'Zipcode'}
          inputValue={zipcode}
          errorString={zipcodeErr}
          onChangeEvent={(newText) => setZipcode(newText)}
          placeHolderValue={'Enter your Zipcode'}
        />
        <Button onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </Button>
      </FormContainerStyleOne>
      <LogoImageHolderBottomOne>
        <LogoImageTwo
          source={require('../../../../../Shared/Media/Images/CareWalletTextandLogo.png')}
        />
      </LogoImageHolderBottomOne>
    </Container>
  );
};

export default RegisterPageTwo;
