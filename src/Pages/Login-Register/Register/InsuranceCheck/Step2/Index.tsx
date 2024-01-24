import React, { useState } from 'react';
import {
  BackButton,
  Button,
  FormContainerStyleOne,
  LogoImageTwo,
  ButtonText,
  Container,
  LogoImageHolderBottomOne,
} from '../../../../../Shared/Styles/Styles';
import InputTypeOne from '../../../../../Components/Fields/InputTypeOne';
import { useAppDispatch } from '../../../../../ReduxStore/Setup/hooks';
import {
  InsStepTwoState,
  setState as setStateAction,
} from '../../../../../ReduxStore/Slices/InsuranceCheck/stepTwo';
import {
  chkInsTypeValid,
  chkGroupValid,
  // Commented out effective date validation
  // chkEffDateValid,
  // Commented out Relationship to PolicyHolder validation
  // chkRelPolicyValid,
} from '../../../../../utilities/ValidationUtils';
// Commented out DatePickerTypeOne import
// import DatePickerTypeOne from '../../../../../Components/Fields/DatePickerTypeOne';
import { formatDate } from '../../../../../utilities/FormatUtils';
// Commented out DropdownTypeOne import
// import DropdownTypeOne from '../../../../../Components/Fields/DropdownTypeOne';
// Commented out Relationship to PolicyHolder values import
// import RelItems from '../../../../../utilities/RelToPolicyValues';
import { PagesProps } from '../../../../../utilities/CommonTypes';

const InsuranceSignUpTwo: React.FC<PagesProps> = ({ navigation }) => {
  const [insuranceType, setInsuranceTypeLocal] = useState<string>('');
  const [insuranceTypeErr, setInsuranceTypeErr] = useState<string>('');
  const [groupNumber, setGroupNumberLocal] = useState<string>('');
  const [groupNumberErr, setGroupNumberErr] = useState<string>('');
  // Commented out effective date related states
  // const [effectiveDate, setEffectiveDateLocal] = useState<string>('');
  // const [effectiveDateObj, setEffectiveDateObj] = useState<Date>();
  // const [effectiveDateErr, setEffectiveDateErr] = useState<string>('');
  // Commented out Relationship to PolicyHolder related states
  // const [relToPolicyHolder, setRelToPolicyHolderLocal] = useState<string>('');
  // const [relToPolicyHolderErr, setRelToPolicyHolderErr] = useState<string>('');

  const dispatch = useAppDispatch();
  const updateState = (update: InsStepTwoState) => {
    dispatch(setStateAction(update));
  };

  const setInsuranceType = (text: string) => {
    setInsuranceTypeLocal(text);
  };
  const blurInsuranceType = () => {
    setInsuranceTypeErr(chkInsTypeValid(insuranceType));
  };
  const setGroupNumber = (text: string) => {
    setGroupNumberLocal(text);
  };
  const blurGroupNumber = () => {
    setGroupNumberErr(chkGroupValid(groupNumber));
  };

  const chkDetails = () => {
    let result = true;
    let error = chkInsTypeValid(insuranceType);
    setInsuranceTypeErr(error);
    if (error !== '') {
      result = false;
    }
    error = chkGroupValid(groupNumber);
    setGroupNumberErr(error);
    if (error !== '') {
      result = false;
    }
    // Commented out effective date validation
    // error = chkEffDateValid(effectiveDate);
    // setEffectiveDateErr(error);
    // if (error !== '') {
    //   result = false;
    // }
    // Commented out Relationship to PolicyHolder validation
    // error = chkRelPolicyValid(relToPolicyHolder);
    // setRelToPolicyHolderErr(error);
    // if (error !== '') {
    //   result = false;
    // }
    return result;
  };

  const handleNext = () => {
    if (!chkDetails()) {
      return;
    }
    updateState({
      insuranceType: insuranceType,
      groupNumber: groupNumber,
      // Commented out effective date assignment
      // effectiveDate: effectiveDate,
      // Commented out Relationship to PolicyHolder assignment
      // relToPolicyHolder: relToPolicyHolder,
    });
    navigation.navigate('Verification');
  };

  const handleBack = () => {
    updateState({
      insuranceType: '',
      groupNumber: '',
      // Commented out effective date assignment
      // effectiveDate: '',
      // Commented out Relationship to PolicyHolder assignment
      // relToPolicyHolder: '',
    });
    navigation.navigate('InsuranceSignUpOne');
  };

  return (
    <Container>
      <FormContainerStyleOne>
        <BackButton onPress={handleBack}>
          <ButtonText>{`< Back`}</ButtonText>
        </BackButton>
        <InputTypeOne
          inputName={'Insurance Type'}
          inputValue={insuranceType}
          onChangeEvent={(newText) => setInsuranceType(newText)}
          placeHolderValue={'Enter Insurance Type'}
          onBlur={blurInsuranceType}
          onEndEditing={blurInsuranceType}
          errorString={insuranceTypeErr}
          onFocus={() => setInsuranceTypeErr('')}
        />
        <InputTypeOne
          inputName={'Group # (if applicable)'}
          inputValue={groupNumber}
          onChangeEvent={(newText) => setGroupNumber(newText)}
          placeHolderValue={'Enter Group #'}
          onBlur={blurGroupNumber}
          onEndEditing={blurGroupNumber}
          errorString={groupNumberErr}
          onFocus={() => setGroupNumberErr('')}
        />
        {/* Commented out Effective Date field */}
        {/* <DatePickerTypeOne
          inputName={'Effective Date'}
          inputValue={effectiveDateObj}
          placeHolderValue={`Optional`}
          errorString={effectiveDateErr}
          onPressIn={() => {
            setEffectiveDateErr('');
          }}
          onDateConfirm={(date: Date) => {
            setEffectiveDateErr('');
            setEffectiveDate(formatDate(date));
            setEffectiveDateObj(date);
          }}
          onCancel={() => {}}
        /> */}
        {/* Commented out Relationship to PolicyHolder field */}
        {/* <DropdownTypeOne
          onValueChange={onDropdownValueChange}
          items={RelItems}
          placeholder={'Optional'}
          inputName={'Relationship to PolicyHolder'}
          errorString={relToPolicyHolderErr}
        /> */}
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

export default InsuranceSignUpTwo;
