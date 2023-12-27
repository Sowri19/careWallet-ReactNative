import React from 'react';
import { TickHolder, TickIcon } from './Styles';
import {
  BackButton,
  Button,
  Container,
  ButtonText,
  FormContainerStyleOne,
  LogoImage,
  LogoImageHolder,
} from '../Shared/Styles/Styles';
import { AccountCreationData } from '../Shared/Interfaces/AccountCreationData';
import { ApiObject } from '../Shared/Interfaces/ApiObject';
import axios from 'axios';
import { useAppSelector } from '../../ReduxStore/Setup/hooks';
type Props = {
  navigation: any;
};

let apiHitInProgress = false;
const accountCreationApi = async (request: ApiObject<AccountCreationData>) => {
  if (apiHitInProgress) {
    return;
  }
  try {
    const response = await axios.post(
      '/path/to/server/endpoint',
      request.requestData
    );

    if (response.data.success) {
      request.successCB(response.data);
    } else {
      request.errorCB(response.data);
    }
    apiHitInProgress = false;
  } catch (error) {
    apiHitInProgress = false;
    request.exceptionCB(error);
  }
};

const Verification: React.FC<Props> = ({ navigation }) => {
  const signupStore = useAppSelector((state) => {
    return {
      signupState: state.signUpState,
      stepOneState: state.stepOneState,
      stepTwoState: state.stepTwoState,
      insStepOneState: state.insStepOneState,
      insStepTwoState: state.insStepTwoState,
    };
  });
  const handleBack = () => {
    navigation.navigate('InsuranceSignUpTwo');
  };
  const handleNext = () => {
    accountCreationApi({
      requestData: {
        firstName: signupStore.signupState.firstName,
        lastName: signupStore.signupState.lastName,
        phoneNumber: signupStore.stepOneState.phoneNumber,
        email: signupStore.stepOneState.email,
        newPassword: signupStore.stepOneState.newPassword,
        address: signupStore.stepTwoState.address,
        city: signupStore.stepTwoState.city,
        state: signupStore.stepTwoState.state,
        dob: signupStore.stepTwoState.dob,
        insuranceName: signupStore.insStepOneState.insuranceName,
        policyHolderName: signupStore.insStepOneState.policyHolderName,
        memberId: signupStore.insStepOneState.memberId,
        memberDOB: signupStore.insStepOneState.memberDOB,
        insuranceType: signupStore.insStepTwoState.insuranceType,
        groupNumber: signupStore.insStepTwoState.groupNumber,
        effectiveDate: signupStore.insStepTwoState.effectiveDate,
        relToPolicyHolder: signupStore.insStepTwoState.relToPolicyHolder,
      },
      successCB: () => {
        navigation.navigate('Home');
      },
      errorCB: () => {
        console.log('Error occured in account creation');
      },
      exceptionCB: () => {
        console.log('Exception occured in account creation');
      },
    });
  };
  return (
    <Container>
      <FormContainerStyleOne>
        <BackButton onPress={handleBack}>
          <ButtonText>{`< Back`}</ButtonText>
        </BackButton>
        <LogoImageHolder>
          <LogoImage source={require('../../utilities/CareWalletLogo.png')} />
        </LogoImageHolder>
        <TickHolder>
          <TickIcon name="checkcircleo" />
        </TickHolder>
        <Button onPress={handleNext}>
          <ButtonText>{`Finish >`}</ButtonText>
        </Button>
      </FormContainerStyleOne>
    </Container>
  );
};

export default Verification;
