import React, { useState } from 'react';
import {
  Container,
  RegisterFields,
  LogoImage,
  WelcomeText,
  PageTitle,
  MemberIdView,
  NextButton,
  ButtonText,
  RegisterSection,
  BelowInputText,
  RegisterText,
} from './Styles';
import InputField from '../../../../../Components/Fields/InputField';

// Define types for your navigation props
type Props = {
  navigation: {
    navigate: (screen: string, params?: Record<string, unknown>) => void;
  };
};

const InsuranceSignUpOne: React.FC<Props> = ({ navigation }) => {
  const [insuranceName, setInsuranceName] = useState<string>('');
  const [policyHolder, setPolicyHolder] = useState<string>('');
  const [memberId, setMemberId] = useState<string>('');
  const [groupNumber, setGroupNumber] = useState<string>('');

  const checkifDetailsFilled =
    insuranceName !== '' &&
    policyHolder !== '' &&
    memberId !== '' &&
    groupNumber !== '';

  const handleNext = () => {
    const formData = {
      insuranceName,
      policyHolder,
      memberId,
      groupNumber,
    };

    navigation.navigate('InsuranceSignUpTwo', { formData });
  };

  return (
    <Container>
      <RegisterFields>
        <LogoImage
          source={require('../../../../../utilities/CareWalletLogo.png')}
        />
        <WelcomeText>Page 5</WelcomeText>
        <PageTitle>Sign Up</PageTitle>

        <InputField
          inputName="Insurance Name"
          placeholderValue="Enter Insurance Name"
          placeholderColor="darkblue"
          onChangeEvent={setInsuranceName}
          inputValue={insuranceName}
        />

        <InputField
          inputName="Policyholder"
          placeholderValue="Enter Policyholder Name"
          placeholderColor="darkblue"
          onChangeEvent={setPolicyHolder}
          inputValue={policyHolder}
        />

        <MemberIdView>
          <InputField
            inputName="Member ID"
            placeholderValue="Enter Member ID"
            placeholderColor="darkblue"
            onChangeEvent={setMemberId}
            inputValue={memberId}
            keyboardType="numeric"
          />
        </MemberIdView>

        <InputField
          inputName="Group # (if applicable)"
          placeholderValue="Enter Group #"
          placeholderColor="darkblue"
          onChangeEvent={setGroupNumber}
          inputValue={groupNumber}
        />

        <NextButton disabled={!checkifDetailsFilled} onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </NextButton>

        <RegisterSection>
          <BelowInputText>Already have an account? </BelowInputText>
          <RegisterText onPress={() => navigation.navigate('Log in')}>
            Login
          </RegisterText>
        </RegisterSection>
      </RegisterFields>
    </Container>
  );
};

export default InsuranceSignUpOne;
