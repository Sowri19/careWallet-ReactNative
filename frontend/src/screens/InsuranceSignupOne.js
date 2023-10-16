import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import InputField from '../components/InputField';

const InsuranceSignUpOne = ({ navigation }) => {
  const [insuranceName, setInsuranceName] = React.useState('');
  const [policyHolder, setPolicyHolder] = React.useState('');
  const [memberId, setMemberId] = React.useState('');
  const [groupNumber, setGroupNumber] = React.useState('');

  const [sharedData, setSharedData] = useState('Shared data to be passed');


  const checkifDetailsFilled = insuranceName !== '' || policyHolder !== '' || memberId !== '' || groupNumber !== '';

  const handleNext = () => {
    const formData = {
      insuranceName,
      policyHolder,
      memberId,
      groupNumber
    };

    navigation.navigate('InsuranceSignUpTwo',{formData, sharedData})
  }


  return (
    <SafeAreaView behavior="padding" style={styles.screenWrapper}>
      <View style={styles.registerFields}>
        <Image
          source={require('../utilities/CareWalletLogo.png')}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>Page 5</Text>
        <View>
          <Text style={styles.pageTitle}>Sign Up</Text>
        </View>
        <InputField
          inputName={'Insurance Name'}
          placeholderValue={'Enter Insurance Name'}
          placeholderColor={'darkblue'}
          onChangeEvent={(newText) => {
            setInsuranceName(newText);
          }}
          inputValue={insuranceName}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
        />
        <InputField
          inputName={'Policyholder'}
          placeholderValue={'Enter Policyholder Name'}
          placeholderColor={'darkblue'}
          onChangeEvent={(newText) => {
            setPolicyHolder(newText);
          }}
          inputValue={policyHolder}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
        />
        <View>
          <Text style={styles.inputText}>Member ID</Text>
          <TextInput
            placeholder="Enter Member ID"
            placeholderTextColor={'darkblue'}
            onChangeText={(newNumber) => {
              setMemberId(newNumber);
            }}
            value={memberId}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>
        <InputField
          inputName={'Group # (if applicable)'}
          placeholderValue={'Enter Group #'}
          placeholderColor={'darkblue'}
          onChangeEvent={(newText) => {
            setGroupNumber(newText);
          }}
          inputValue={groupNumber}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
        />

        <TouchableOpacity
          isabled={!checkifDetailsFilled}
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
    marginBottom:60
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
  passwordSection: {
    flexDirection: 'row',
    height: 60,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 10,
    borderColor: 'darkblue',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    padding: 20,
  },
  rememberMe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  registerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default InsuranceSignUpOne;
