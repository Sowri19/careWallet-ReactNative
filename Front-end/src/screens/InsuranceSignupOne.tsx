import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import InputField from '../components/InputField';

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

  const checkifDetailsFilled = insuranceName !== '' && policyHolder !== '' && memberId !== '' && groupNumber !== '';

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
    <SafeAreaView style={styles.screenWrapper}>
      <View style={styles.registerFields}>
        <Image
          source={require('../utilities/CareWalletLogo.png')}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>Page 5</Text>
        <Text style={styles.pageTitle}>Sign Up</Text>

        <InputField
          inputName="Insurance Name"
          placeholderValue="Enter Insurance Name"
          placeholderColor="darkblue"
          onChangeEvent={setInsuranceName}
          inputValue={insuranceName}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
        />

        <InputField
          inputName="Policyholder"
          placeholderValue="Enter Policyholder Name"
          placeholderColor="darkblue"
          onChangeEvent={setPolicyHolder}
          inputValue={policyHolder}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
        />

        <View>
          <Text style={styles.inputText}>Member ID</Text>
          <TextInput
            placeholder="Enter Member ID"
            placeholderTextColor="darkblue"
            onChangeText={setMemberId}
            value={memberId}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>

        <InputField
          inputName="Group # (if applicable)"
          placeholderValue="Enter Group #"
          placeholderColor="darkblue"
          onChangeEvent={setGroupNumber}
          inputValue={groupNumber}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
        />

        <TouchableOpacity
          disabled={!checkifDetailsFilled}
          style={styles.button}
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <View style={styles.registerSection}>
          <Text style={styles.belowInputText}>Already have an account? </Text>
          <Text
            onPress={() => navigation.navigate('Log in')}
            style={styles.registerText}
          >
            Login
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    borderColor: 'grey'
  },
  registerFields: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 0,
    marginBottom: 60
  },
  image: {
    resizeMode: 'stretch',
    width: 250,
    height: 100,
  },
  welcomeText: {
    fontSize: 30,
    color: 'darkblue',
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'darkblue',
  },
  inputText: {
    fontSize: 20,
    color: 'darkblue',
  },
  input: {
    height: 60,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 10,
    borderColor: 'darkblue',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00008B',
    height: 60,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
  registerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  belowInputText: {
    fontSize: 15,
    color: 'darkblue',
  },
  registerText: {
    fontSize: 15,
    color: 'darkblue',
    fontWeight: 'bold',
  },
});

export default InsuranceSignUpOne;
