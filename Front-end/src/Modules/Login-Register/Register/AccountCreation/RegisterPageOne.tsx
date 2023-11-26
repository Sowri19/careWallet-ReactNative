import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InputField from "../../../../Components/InputField";

const RegisterPageOne = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [newPasswordVisible, setNewPasswordVisibility] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [confirmPasswordVisible, setConfirmPasswordVisibility] =
    React.useState(false);

  const [sharedData, setSharedData] = useState("Shared data to be passed");

  const checkifDetailsFilled =
    name !== "" &&
    email !== "" &&
    newPassword !== "" &&
    confirmPassword !== "" &&
    newPassword !== confirmPassword;

  const handleNext = async () => {
    const formData = {
      name,
      email,
      newPassword,
    };

    try {
      // Send a POST request to the API to add the data
      const response = await axios.post(
        "http://localhost:3000/patients",
        formData
      );

      // Check the response for success or handle errors as needed
      if (response.status === 200) {
        console.log("Data added successfully!");
        navigation.navigate("RegisterPageTwo", { formData, sharedData });
      } else {
        console.error("Failed to add data to the API.");
        // Handle the error as needed, e.g., show an error message to the user.
      }
    } catch (error) {
      console.error("An error occurred while making the API request:", error);
      // Handle the error as needed, e.g., show an error message to the user.
    }
  };

  return (
    <SafeAreaView style={styles.screenWrapper}>
      <View style={styles.registerFields}>
        <Image
          source={require("../utilities/CareWalletLogo.png")}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>Welcome!</Text>
        <View>
          <Text style={styles.pageTitle}>Sign Up</Text>
        </View>
        <InputField
          inputName={"Name"}
          placeholderValue={"Enter your name"}
          placeholderColor={"darkblue"}
          onChangeEvent={(newText) => {
            setName(newText);
          }}
          inputValue={name}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
        />
        <InputField
          inputName={"Email"}
          placeholderValue={"Enter your email"}
          placeholderColor={"darkblue"}
          onChangeEvent={(newText) => {
            setEmail(newText);
          }}
          inputValue={email}
          inputTextStyle={styles.inputText}
          inputStyle={styles.input}
        />
        <View>
          <Text style={styles.inputText}>Password</Text>
          <View style={styles.passwordSection}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={"darkblue"}
              onChangeText={(newText) => {
                setNewPassword(newText);
              }}
              secureTextEntry={!newPasswordVisible}
              value={newPassword}
              style={styles.passwordInput}
            />
            <TouchableOpacity
              onPress={() => {
                setNewPasswordVisibility(!newPasswordVisible);
              }}
            >
              <Ionicons
                name={newPasswordVisible ? "eye-off" : "eye"}
                size={24}
                color="gray"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.inputText}>Confirm Password</Text>
          <View style={styles.passwordSection}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={"darkblue"}
              onChangeText={(newText) => {
                setConfirmPassword(newText);
              }}
              secureTextEntry={!confirmPasswordVisible}
              value={confirmPassword}
              style={styles.passwordInput}
            />
            <TouchableOpacity
              onPress={() => {
                setConfirmPasswordVisibility(!confirmPasswordVisible);
              }}
            >
              <Ionicons
                name={confirmPasswordVisible ? "eye-off" : "eye"}
                size={24}
                color="gray"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

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
});

export default RegisterPageOne;
