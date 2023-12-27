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

// Define types for your navigation props
type Props = {
  navigation: {
    navigate: (screen: string, params?: Record<string, unknown>) => void;
  };
};

const InsuranceSignUpTwo: React.FC<Props> = ({ navigation }) => {
  const [insuranceType, setInsuranceTypeLocal] = useState<string>('');
  const [insuranceTypeErr, setInsuranceTypeErr] = useState<string>('');
  const [groupNumber, setGroupNumberLocal] = useState<string>('');
  const [groupNumberErr, setGroupNumberErr] = useState<string>('');
  const [effectiveDate, setEffectiveDateLocal] = useState<string>('');
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
  const blurIEffectiveDate = () => {
    setEffectiveDateErr(chkEffDateValid(effectiveDate));
  };
  const setRelToPolicyHolder = (text: string) => {
    setRelToPolicyHolderLocal(text);
  };
  const blurRelToPolicyHolder = () => {
    setRelToPolicyHolderErr(chkRelPolicyValid(relToPolicyHolder));
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
    // error = chkRelPolicyValid(memberDOB);
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
        <InputTypeOne
          inputName={'Effective Date'}
          inputValue={effectiveDate}
          onChangeEvent={(newText) => setEffectiveDate(newText)}
          placeHolderValue={'Optional'}
          onBlur={blurIEffectiveDate}
          onEndEditing={blurIEffectiveDate}
          errorString={effectiveDateErr}
          onFocus={() => setEffectiveDateErr('')}
        />
        <InputTypeOne
          inputName={'Relationship to PolicyHolder'}
          inputValue={relToPolicyHolder}
          onChangeEvent={(newText) => setRelToPolicyHolder(newText)}
          placeHolderValue={'Optional'}
          onBlur={blurRelToPolicyHolder}
          onEndEditing={blurRelToPolicyHolder}
          errorString={relToPolicyHolderErr}
          onFocus={() => setRelToPolicyHolderErr('')}
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
