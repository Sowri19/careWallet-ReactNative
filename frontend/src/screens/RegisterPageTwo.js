import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Platform,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Pressable
} from 'react-native';
import InputField from '../components/InputField';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from "axios";


const RegisterPageTwo = ({ navigation, route }) => {
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [zipcode, setZipcode] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [memberDOB, setMemberDOB] = useState(new Date());
  const [showDOBPicker, setShowDOBPicker] = useState(false);

  const { formData, sharedData } = route.params;

  const toggleDOBpicker = () => {
    setShowDOBPicker(!showDOBPicker);
  };

  const onChangeDOB = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setMemberDOB(currentDate);

      if (Platform.OS === "android") {
        toggleDOBpicker();
        setDateOfBirth(currentDate.toDateString());
      }
    } else {
      toggleDOBpicker();
    }
  };

  const confirmIOSDOB = () => {
    setDateOfBirth(memberDOB.toDateString());
    toggleDOBpicker();
  };

  const checkifDetailsFilled = address !== '' || city !== '' || zipcode !== '';

  const onSubmitFormHandler = async (event) => {
    // if (!fullName.trim() || !email.trim()) {
    //   alert("Name or Email is invalid");
    //   return;
    // }

    const updatedFormData = {
      ...formData,
      address,
      city,
      zipcode,
      dateOfBirth
    }

    console.log(updatedFormData)

    // setIsLoading(true);

    // try {
    //   const response = await axios.post(``, {
        
    //   });

    //   if (response.status === 201) {
    //     alert(` You have created: ${JSON.stringify(response.data)}`);
    //     setIsLoading(false);
    //     setAddress("");
    //     setCity("");
    //     setDateOfBirth("");
    //   } else {
    //     throw new Error("An error has occurred");
    //   }
    // } catch (error) {
    //   alert("An error has occurred");
    //   setIsLoading(false);
    // }
    navigation.navigate('InsuranceSignUpOne')
  };


  return (
    <SafeAreaView behavior="padding" style={styles.screenWrapper}>
      <View style={styles.registerFields}>
        <Image
          source={require('../utilities/CareWalletLogo.png')}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>Page 2</Text>
        <View>
          <Text style={styles.pageTitle}>Sign Up</Text>
        </View>
        <InputField
          inputName={'Address'}
          placeholderValue={'Enter your street address'}
          placeholderColor={'darkblue'}
          onChangeEvent={(newText) => {
            setAddress(newText);
          }}
          inputValue={address}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
          on
        />
        <InputField
          inputName={'City'}
          placeholderValue={'Enter your city'}
          placeholderColor={'darkblue'}
          onChangeEvent={(newText) => {
            setCity(newText);
          }}
          inputValue={city}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
        />
        <View>
          <Text style={styles.inputText}>Zipcode</Text>
          <TextInput
            placeholder="Enter your zipcode"
            placeholderTextColor={'darkblue'}
            onChangeText={(newNumber) => {
              setZipcode(newNumber);
            }}
            value={zipcode}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <View>
            <Text style={styles.inputText}>Member's Date of Birth</Text>

            {showDOBPicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={memberDOB}
                onChange={onChangeDOB}
                style={styles.datePicker}
              />
            )}

            {showDOBPicker && Platform.OS === "ios" && (
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <TouchableOpacity
                  style={[
                    styles.datePickerButton,
                    { backgroundColor: "#11182711" },
                  ]}
                  onPress={toggleDOBpicker}
                >
                  <Text style={[styles.datePickerText, { color: "darkblue" }]}>
                    Cancel
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.datePickerButton]}
                  onPress={confirmIOSDOB}
                >
                  <Text style={[styles.datePickerText]}>Confirm</Text>
                </TouchableOpacity>
              </View>
            )}

            {!showDOBPicker && (
              <Pressable onPress={toggleDOBpicker}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Member's Date of Birth"
                  value={dateOfBirth}
                  onChangeText={setDateOfBirth}
                  placeholderTextColor="darkblue"
                  editable={false}
                  onPressIn={toggleDOBpicker}
                />
              </Pressable>
            )}
          </View>

        <TouchableOpacity
          isabled={!checkifDetailsFilled}
          style={styles.button}
          onPress={onSubmitFormHandler}
          disabled={isLoading}
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
    borderColor: 'darkblue'
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
  datePicker: {
    height: 120,
    width: 250
  },
  datePickerButton: {
    alignItems: 'center',
    backgroundColor: '#00008B',
    height: 40,
    marginTop: 6,
    marginBottom: 12,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  datePickerText: {
    fontSize: 15,
    color: 'white'
  }
});

export default RegisterPageTwo;
