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
  PageContentHolderCenter,
} from '../../Shared/Styles/Styles';

import axiosInstance from '../../utilities/axiosInstance';
import { useAppSelector } from '../../ReduxStore/Setup/hooks';
import { Animated, Easing, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { selectSignUpStepOneData } from '../../ReduxStore/Slices/Register/stepOne';
import { selectSignUpStepThreeData } from '../../ReduxStore/Slices/Register/stepThree';
import { selectSignUpStepFourData } from '../../ReduxStore/Slices/Register/stepFour';
import { selectSignUpStepTwoData } from '../../ReduxStore/Slices/Register/stepTwo';
import { setAccountCreationData } from '../../ReduxStore/Slices/AccountCreation/AccountCreation';
import { selectAccountCreationData } from '../../ReduxStore/Slices/AccountCreation/AccountCreation';
import { performLogin } from '../../utilities/loginService';
import { PagesProps } from '../../utilities/CommonTypes';
import { useAppDispatch } from '../../ReduxStore/Setup/hooks';

const Verification: React.FC<PagesProps> = ({ navigation }) => {
  const stepOneStore = useAppSelector(selectSignUpStepOneData);
  const stepTwoStore = useAppSelector(selectSignUpStepTwoData);
  const stepThreeStore = useAppSelector(selectSignUpStepThreeData);
  const stepFourStore = useAppSelector(selectSignUpStepFourData);
  const accountData = useAppSelector(selectAccountCreationData);

  const [progress, setProgress] = useState<number>(0);
  const durationOfLoader = 5;
  const isVerified = progress >= 100;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const intervalIdRef = useRef<NodeJS.Timeout | number | null>(null);

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

  useEffect(() => {
    const pollApi = async () => {
      if (intervalIdRef.current === null) {
        console.error('Verification timeout reached');
        return;
      }

      try {
        const response = await axiosInstance.get(
          '/patient/onboarding/get-verification-status.ns'
        );
        console.log('Response from API:', response.data);

        if (response.data.success) {
          if (response.data.data.status === 'VERIFICATION_SUCCESS') {
            const verificationData = { ...response.data.data };
            clearInterval(intervalIdRef.current as number);
            setIsSuccess(true);
            setProgress(100);
            dispatch(setAccountCreationData(verificationData));
            intervalIdRef.current = null;
          } else if (response.data.data.status === 'VERIFICATION_FAILED') {
            clearInterval(intervalIdRef.current as number);
            intervalIdRef.current = null;
          }
        }
      } catch (error) {
        console.error('Error occurred during polling:', error);
        clearInterval(intervalIdRef.current as number);
        intervalIdRef.current = null;
      }
    };

    // Assign the interval ID
    intervalIdRef.current = setInterval(pollApi, 12000);

    return () => {
      // Cleanup on component unmount
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current as number);
      }
    };
  }, [intervalIdRef.current]); // Add any other dependencies if needed

  const handleNext = async () => {
    const requestData = {
      firstName: stepOneStore.firstName,
      lastName: stepOneStore.lastName,
      dob: stepTwoStore.dob,
      phoneNumber: stepThreeStore.phoneNumber,
      email: stepThreeStore.email,
      password: stepThreeStore.newPassword,
      address: stepFourStore.address,
      city: stepFourStore.city,
      state: stepFourStore.state,
      zipcode: stepFourStore.zipcode,
      insuranceName: accountData.insuranceName, // from scan
      policyHolderName: accountData.policyHolderName, // from scan
      memberId: accountData.memberId, // from scan
      memberDOB: accountData.memberDOB, // from scan
      insuranceType: accountData.insuranceType, // from scan
      groupNumber: accountData.groupNumber, // from scan
      effectiveDate: accountData.effectiveDate, // from scan
      relToPolicyHolder: accountData.relToPolicyHolder, // from scan
    };
    console.log('Request data:', requestData);
    try {
      const response = await axiosInstance.post(
        '/patient/onboarding/createAccount.ns',
        requestData
      );
      console.log('Account creation successful:', response.data);
      const loginResult = await performLogin(
        requestData.email,
        requestData.password,
        'email'
      );
      if (loginResult.success) {
        navigation.navigate('Homepage');
      }
    } catch (error) {
      console.error('Error occurred during account creation:', error);
    }
  };

  const startLoader = () => {
    animatedValue.setValue(0);
    animateProgress();
  };
  const animateProgress = () => {
    Animated.timing(animatedValue, {
      toValue: isSuccess ? 100 : 100,
      duration: durationOfLoader * 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      if (!isSuccess) {
        setProgress(99);
      }
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
        <View style={PageContentHolderCenter}>
          <LogoImageHolder>
            <LogoImage
              source={require('../../Shared/Media/Images/CareWallet.Logo.Patient.png')}
            />
          </LogoImageHolder>
          {!isVerified && (
            <>
              <VerificationText>Verification in Progress...</VerificationText>
              <ProgressBar>
                <Animated.View
                  style={[ProgressFill, { width }]}
                ></Animated.View>
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
        </View>
      </FormContainerStyleOne>
    </Container>
  );
};

export default Verification;
