import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Platform,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import InputField from "../components/InputField";
import DateTimePicker from "@react-native-community/datetimepicker";

const InsuranceSignUpTwo = ({ navigation }) => {
  const [insuranceType, setInsuranceType] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [dateForEffectiveDate, setDateForEffectiveDate] = React.useState("");
  const [relationship, setRelationship] = React.useState("");

  const [memberDOB, setMemberDOB] = useState(new Date());
  const [showDOBPicker, setShowDOBPicker] = useState(false);

  const [effectiveDate, setEffectiveDate] = React.useState(new Date());
  const [showEffectiveDatePicker, setEffectiveDatePicker] = useState(false);

  const toggleDOBpicker = () => {
    setShowDOBPicker(!showDOBPicker);
  };

  const toggleEffectiveDatePicker = () => {
    setEffectiveDatePicker(!showEffectiveDatePicker);
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

  const onEffectiveDateChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setEffectiveDate(currentDate);

      if (Platform.OS === "android") {
        toggleEffectiveDatePicker();
        setDateForEffectiveDate(currentDate.toDateString());
      }
    } else {
      toggleEffectiveDatePicker();
    }
  };

  const confirmIOSEffectiveDate = () => {
    setDateForEffectiveDate(effectiveDate.toDateString());
    toggleEffectiveDatePicker();
  };

  const checkifDetailsFilled = insuranceType !== "" || relationship !== "";

  return (
    <SafeAreaView behavior="padding" style={styles.screenWrapper}>
      <View style={styles.registerFields}>
        <Image
          source={require("../utilities/CareWalletLogo.png")}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>Page 6</Text>
        <View>
          <Text style={styles.pageTitle}>Sign Up</Text>
        </View>
        <InputField
          inputName={"Insurance Type"}
          placeholderValue={"Enter Insurance Type"}
          placeholderColor={"darkblue"}
          onChangeEvent={(newText) => {
            setInsuranceType(newText);
          }}
          inputValue={insuranceType}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
        />

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

        <View>
          <Text style={styles.inputText}>Effective Date</Text>

          {showEffectiveDatePicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={effectiveDate}
              onChange={onEffectiveDateChange}
              style={styles.datePicker}
            />
          )}

          {showEffectiveDatePicker && Platform.OS === "ios" && (
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                style={[
                  styles.datePickerButton,
                  { backgroundColor: "#11182711" },
                ]}
                onPress={toggleEffectiveDatePicker}
              >
                <Text style={[styles.datePickerText, { color: "darkblue" }]}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.datePickerButton]}
                onPress={confirmIOSEffectiveDate}
              >
                <Text style={[styles.datePickerText]}>Confirm</Text>
              </TouchableOpacity>
            </View>
          )}

          {!showEffectiveDatePicker && (
            <Pressable onPress={toggleEffectiveDatePicker}>
              <TextInput
                style={styles.input}
                placeholder="Enter Effective Date"
                value={dateForEffectiveDate}
                onChangeText={setDateForEffectiveDate}
                placeholderTextColor="darkblue"
                editable={false}
                onPressIn={toggleEffectiveDatePicker}
              />
            </Pressable>
          )}
        </View>

        <InputField
          inputName={"Relationship to Policyholder"}
          placeholderValue={"Optional"}
          placeholderColor={"darkblue"}
          onChangeEvent={(newText) => {
            setRelationship(newText);
          }}
          inputValue={relationship}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
        />

        <TouchableOpacity
          // isabled={!checkifDetailsFilled}
          style={styles.button}
          onPress={() => navigation.navigate("Verification")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <View style={styles.registerSection}>
          <Text style={styles.belowInputText}>Already have an account? </Text>
          <Text
            onPress={() => navigation.navigate("Log in")}
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
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    borderColor: "grey",
  },
  registerFields: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 0,
    marginBottom: 60,
  },
  image: {
    resizeMode: "stretch",
    width: 250,
    height: 100,
  },
  welcomeText: {
    fontSize: 30,
    color: "darkblue",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "darkblue",
  },
  inputText: {
    fontSize: 20,
    color: "darkblue",
  },
  input: {
    height: 60,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 10,
    borderColor: "darkblue",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#00008B",
    height: 60,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    padding: 10,
  },
  passwordSection: {
    flexDirection: "row",
    height: 60,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 10,
    borderColor: "darkblue",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    padding: 20,
  },
  rememberMe: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  belowInputText: {
    fontSize: 15,
    color: "darkblue",
  },
  registerText: {
    fontSize: 15,
    color: "darkblue",
    fontWeight: "bold",
  },
  registerSection: {
    flexDirection: "row",
    justifyContent: "center",
  },
  datePicker: {
    height: 120,
    width: 250,
  },
  datePickerButton: {
    alignItems: "center",
    backgroundColor: "#00008B",
    height: 40,
    marginTop: 6,
    marginBottom: 12,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  datePickerText: {
    fontSize: 15,
    color: "white",
  },
});

export default InsuranceSignUpTwo;
