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
  PageContentHolder,
  PageContentHolderCenter,
} from '../../Shared/Styles/Styles';
import { AccountCreationData } from '../../Shared/Interfaces/AccountCreationData';
import { ApiObject } from '../../Shared/Interfaces/ApiObject';
import axiosInstance from '../../utilities/axiosInstance';
import { useAppSelector } from '../../ReduxStore/Setup/hooks';
import { Animated, Easing, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { selectSignUpStepOneData } from '../../ReduxStore/Slices/Register/stepOne';
import { selectSignUpStepThreeData } from '../../ReduxStore/Slices/Register/stepThree';
import { selectSignUpStepFourData } from '../../ReduxStore/Slices/Register/stepFour';
import { selectInsStepOneData } from '../../ReduxStore/Slices/InsuranceCheck/stepOne';
import { selectInsStepTwoData } from '../../ReduxStore/Slices/InsuranceCheck/stepTwo';
import { selectSignUpStepTwoData } from '../../ReduxStore/Slices/Register/stepTwo';
import { PagesProps } from '../../utilities/CommonTypes';

const Verification: React.FC<PagesProps> = ({ navigation }) => {
  const stepOneStore = useAppSelector(selectSignUpStepOneData);
  const stepTwoStore = useAppSelector(selectSignUpStepTwoData);
  const stepThreeStore = useAppSelector(selectSignUpStepThreeData);
  const stepFourStore = useAppSelector(selectSignUpStepFourData);
  const insStepOneStore = useAppSelector(selectInsStepOneData);
  const insStepTwoStore = useAppSelector(selectInsStepTwoData);
  const [progress, setProgress] = useState<number>(0);
  const durationOfLoader = 5;
  const isVerified = progress >= 100;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

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

  let intervalId: string | number | NodeJS.Timeout | undefined;

  const pollApi = async () => {
    try {
      const response = await axiosInstance.get(
        '/patient/onboarding/get-verification-status.ns'
      );
      console.log('Response from API:', response.data);

      if (response.data.success === true) {
        setIsSuccess(true);
        setProgress(100);
        clearInterval(intervalId);
      }
    } catch (error) {
      console.log('Error occurred during polling: ', error);
      clearInterval(intervalId);
    }
  };

  useEffect(() => {
    intervalId = setInterval(pollApi, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleNext = () => {
    accountCreationApi({
      requestData: {
        firstName: stepOneStore.firstName,
        lastName: stepOneStore.lastName,
        dob: stepTwoStore.dob,
        phoneNumber: stepThreeStore.phoneNumber,
        email: stepThreeStore.email,
        newPassword: stepThreeStore.newPassword,
        address: stepFourStore.address,
        city: stepFourStore.city,
        state: stepFourStore.state,
        zipcode: stepFourStore.zipcode,
        insuranceName: insStepOneStore.insuranceName,
        policyHolderName: insStepOneStore.policyHolderName,
        memberId: insStepOneStore.memberId,
        memberDOB: insStepOneStore.memberDOB,
        insuranceType: insStepTwoStore.insuranceType,
        groupNumber: insStepTwoStore.groupNumber,
        effectiveDate: insStepTwoStore.effectiveDate,
        relToPolicyHolder: insStepTwoStore.relToPolicyHolder,
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
