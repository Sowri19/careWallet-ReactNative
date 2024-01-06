import React, { useState } from 'react';
import {
  BackButton,
  Button,
  ButtonText,
  Container,
  FormContainerStyleOne,
  LogoImageTwo,
} from '../../../../../Shared/Styles/Styles';
import { useAppDispatch } from '../../../../../ReduxStore/Setup/hooks';
import {
  setState as setInsuranceOneState,
  InsStepOneState,
} from '../../../../../ReduxStore/Slices/InsuranceCheck/stepOne';
import InputTypeOne from '../../../../../Components/Fields/InputTypeOne';
import {
  chk18DateValid,
  chkIDValid,
  chkNameValid,
} from '../../../../../utilities/ValidationUtils';
import DatePickerTypeOne from '../../../../../Components/Fields/DatePickerTypeOne';
import { formatDate } from '../../../../../utilities/FormatUtils';
import { PagesProps } from '../../../../../utilities/CommonTypes';

const InsuranceSignUpOne: React.FC<PagesProps> = ({ navigation }) => {
  const [insuranceName, setInsuranceNameLocal] = useState<string>('');
  const [insuranceNameErr, setInsuranceNameErr] = useState<string>('');
  const [policyHolderName, setPolicyHolderNameLocal] = useState<string>('');
  const [policyHolderErr, setPolicyHolderErr] = useState<string>('');
  const [memberID, setMemberIDLocal] = useState<string>('');
  const [memberIDErr, setMemberIDErr] = useState('');
  const [memberDOB, setMemberDOBLocal] = useState<string>('');
  const [memderDOBDate, setMemberDOBDateLocal] = useState<Date>();
  const [dobErr, setDOBErr] = useState<string>('');
  const dispatch = useAppDispatch();

  const setInsuranceName = (text: string) => {
    setInsuranceNameLocal(text);
  };
  const blurInsuranceName = () => {
    setInsuranceNameErr(chkNameValid(insuranceName));
  };
  const setPolicyHolderName = (text: string) => {
    setPolicyHolderNameLocal(text);
  };
  const blurPolicyHolder = () => {
    setPolicyHolderErr(chkNameValid(policyHolderName));
  };
  const setMemberID = (text: string) => {
    setMemberIDLocal(text);
  };
  const blurMemberID = () => {
    setMemberIDErr(chkIDValid(memberID));
  };
  const updateState = (update: InsStepOneState) => {
    dispatch(setInsuranceOneState(update));
  };
  const handleBack = () => {
    updateState({
      insuranceName: '',
      policyHolderName: '',
      memberId: '',
      memberDOB: '',
    });
    navigation.navigate('RegisterPageTwo');
  };

  const chkDetails = () => {
    let result = true;
    let error = chkNameValid(insuranceName);
    setInsuranceNameErr(error);
    if (error !== '') {
      result = false;
    }
    error = chkNameValid(policyHolderName);
    setPolicyHolderErr(error);
    if (error !== '') {
      result = false;
    }
    error = chkIDValid(memberID);
    setMemberIDErr(error);
    if (error !== '') {
      result = false;
    }
    error = chk18DateValid(memderDOBDate);
    setDOBErr(error);
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
      insuranceName: insuranceName,
      policyHolderName: policyHolderName,
      memberId: memberID,
      memberDOB: memberDOB,
    });
    navigation.navigate('InsuranceSignUpTwo');
  };
  const onDateConfirm = (date: Date) => {
    setMemberDOBDateLocal(date);
    setMemberDOBLocal(formatDate(date));
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
        <InputTypeOne
          inputName={'Insurance Name'}
          inputValue={insuranceName}
          onChangeEvent={(newText) => setInsuranceName(newText)}
          placeHolderValue={'Enter Insurance Name'}
          onBlur={blurInsuranceName}
          onEndEditing={blurInsuranceName}
          errorString={insuranceNameErr}
          onFocus={() => setInsuranceNameErr('')}
        />
        <InputTypeOne
          inputName={'Policy Holder'}
          inputValue={policyHolderName}
          onChangeEvent={(newText) => setPolicyHolderName(newText)}
          placeHolderValue={'Enter Policy Holder Name'}
          onBlur={blurPolicyHolder}
          onEndEditing={blurPolicyHolder}
          errorString={policyHolderErr}
          onFocus={() => setPolicyHolderErr('')}
        />
        <InputTypeOne
          inputName={'Member ID'}
          inputValue={memberID}
          onChangeEvent={(newText) => setMemberID(newText)}
          placeHolderValue={'Enter Member ID'}
          onBlur={blurMemberID}
          onEndEditing={blurMemberID}
          errorString={memberIDErr}
          onFocus={() => setMemberIDErr('')}
        />
        <DatePickerTypeOne
          inputValue={memderDOBDate}
          placeHolderValue={`MM/DD/YYYY`}
          errorString={dobErr}
          onPressIn={openDatePicker}
          onDateConfirm={onDateConfirm}
          onCancel={onDateCancel}
        />

        <Button onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </Button>
      </FormContainerStyleOne>
      <LogoImageTwo
        source={require('../../../../../Shared/Media/Images/CareWalletLogo.png')}
      />
    </Container>
  );
};

export default InsuranceSignUpOne;
