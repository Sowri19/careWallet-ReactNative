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
import axios from 'axios';
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
