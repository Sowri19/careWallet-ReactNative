import React, { useState } from 'react';
import {
  BackButton,
  Button,
  FormContainerStyleOne,
  LogoImageTwo,
  ButtonText,
  Container,
} from '../../../../Shared/Styles/Styles';
import InputTypeOne from '../../../../../Components/Fields/InputTypeOne';
import { useAppDispatch } from '../../../../../ReduxStore/Setup/hooks';
import {
  InsStepTwoState,
  setState as setStateAction,
} from '../../../../../ReduxStore/Slices/InsuranceCheck/stepTwo';
import {
  chkEffDateValid,
  chkGroupValid,
  chkInsTypeValid,
  chkRelPolicyValid,
} from '../../../../../utilities/ValidationUtils';
import DatePickerTypeOne from '../../../../../Components/Fields/DatePickerTypeOne';
import { formatDate } from '../../../../../utilities/FormatUtils';
import DropdownTypeOne from '../../../../../Components/Fields/DropdownTypeOne';
import RelItems from '../../../../../utilities/RelToPolicyValues';
import { PagesProps } from '../../../../../utilities/CommonTypes';

const InsuranceSignUpTwo: React.FC<PagesProps> = ({ navigation }) => {
  const [insuranceType, setInsuranceTypeLocal] = useState<string>('');
  const [insuranceTypeErr, setInsuranceTypeErr] = useState<string>('');
  const [groupNumber, setGroupNumberLocal] = useState<string>('');
  const [groupNumberErr, setGroupNumberErr] = useState<string>('');
  const [effectiveDate, setEffectiveDateLocal] = useState<string>('');
  const [effectiveDateObj, setEffectiveDateObj] = useState<Date>();
  const [effectiveDateErr, setEffectiveDateErr] = useState<string>('');
  const [relToPolicyHolder, setRelToPolicyHolderLocal] = useState<string>('');
  const [relToPolicyHolderErr, setRelToPolicyHolderErr] = useState<string>('');

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
  const setEffectiveDate = (text: string) => {
    setEffectiveDateLocal(text);
  };
  const setRelToPolicyHolder = (text: string) => {
    setRelToPolicyHolderLocal(text);
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
    error = chkEffDateValid(effectiveDate);
    setEffectiveDateErr(error);
    if (error !== '') {
      result = false;
    }
    error = chkRelPolicyValid(relToPolicyHolder);
    setRelToPolicyHolderErr(error);
    if (error !== '') {
      result = false;
    }
    return result;
  };

  const handleNext = () => {
    if (!chkDetails()) {
      return;
    }
    updateState({
      insuranceType: insuranceType,
      groupNumber: groupNumber,
      effectiveDate: effectiveDate,
      relToPolicyHolder: relToPolicyHolder,
    });
    navigation.navigate('Verification');
  };

  const handleBack = () => {
    updateState({
      insuranceType: '',
      groupNumber: '',
      effectiveDate: '',
      relToPolicyHolder: '',
    });
    navigation.navigate('InsuranceSignUpOne');
  };

  const onDropdownValueChange = (value: string, index: number) => {
    setRelToPolicyHolder(value);
    setRelToPolicyHolderErr(chkRelPolicyValid(value));
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

        <DatePickerTypeOne
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
        />
        {/*<InputTypeOne*/}
        {/*  inputName={'Relationship to PolicyHolder'}*/}
        {/*  inputValue={relToPolicyHolder}*/}
        {/*  onChangeEvent={(newText) => setRelToPolicyHolder(newText)}*/}
        {/*  placeHolderValue={'Optional'}*/}
        {/*  onBlur={blurRelToPolicyHolder}*/}
        {/*  onEndEditing={blurRelToPolicyHolder}*/}
        {/*  errorString={relToPolicyHolderErr}*/}
        {/*  onFocus={() => setRelToPolicyHolderErr('')}*/}
        {/*/>*/}

        <DropdownTypeOne
          onValueChange={onDropdownValueChange}
          items={RelItems}
          placeholder={'Optional'}
          inputName={'Relationship to PolicyHolder'}
          errorString={relToPolicyHolderErr}
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

export default InsuranceSignUpTwo;
