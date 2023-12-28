import React, { useEffect, useRef, useState } from 'react';
import {
  ProgressBar,
  ProgressFill,
  TickHolder,
  TickIcon,
  VerificationText,
} from './Styles';
import {
  BackButton,
  Button,
  Container,
  ButtonText,
  FormContainerStyleOne,
  LogoImage,
  LogoImageHolder,
  BackButtonDummy,
  ButtonDummy,
} from '../Shared/Styles/Styles';
import { AccountCreationData } from '../Shared/Interfaces/AccountCreationData';
import { ApiObject } from '../Shared/Interfaces/ApiObject';
import axios from 'axios';
import { useAppSelector } from '../../ReduxStore/Setup/hooks';
import { Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
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
  const [progress, setProgress] = useState<number>(0);
  const durationOfLoader = 5;
  const isVerified = progress >= 100;
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setTimeout(() => {
      startLoader();
      setProgress(0);
    });
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      startLoader();
      setProgress(0);
      return () => {};
    }, [])
  );
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

  const startLoader = () => {
    animatedValue.setValue(0); // Reset the animated value to 0
    animateProgress(); // Trigger the animation again
  };
  const animateProgress = () => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: durationOfLoader * 1000, // Set the duration for the loader to complete
      easing: Easing.linear, // Use linear easing for a smooth increment
      useNativeDriver: false,
    }).start(() => {
      setProgress(100);
    });
  };

  useEffect(() => {
    animateProgress();
  }, [animatedValue]);

  const width = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <Container>
      <FormContainerStyleOne>
        {isVerified ? (
          <BackButton onPress={handleBack}>
            <ButtonText>{`< Back`}</ButtonText>
          </BackButton>
        ) : (
          <BackButtonDummy />
        )}
        <LogoImageHolder>
          <LogoImage source={require('../../utilities/CareWalletLogo.png')} />
        </LogoImageHolder>
        {!isVerified && (
          <>
            <VerificationText>Verification in Progress...</VerificationText>
            <ProgressBar>
              <Animated.View style={[ProgressFill, { width }]}></Animated.View>
            </ProgressBar>
            <ButtonDummy />
          </>
        )}
        {isVerified && (
          <>
            <TickHolder>
              <TickIcon name="checkcircleo" />
            </TickHolder>
            <Button onPress={handleNext}>
              <ButtonText>{`Finish >`}</ButtonText>
            </Button>
          </>
        )}
      </FormContainerStyleOne>
    </Container>
  );
};

export default Verification;
