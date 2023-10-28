import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InputField from "../components/InputField";
import CheckBox from "react-native-check-box";

const LogIn = ({ navigation }) => {
  const [loginID, setLoginID] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisible, setPasswordVisbility] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  const checkifDetailsFilled = loginID !== "" && password !== "";

  const loginUser = async () => {
    try {
      const response = await axios.post("/path/to/server/endpoint", {
        email: loginID,
        password: password,
      });

      if (response.data.success) {
        await firebase.auth().signInWithEmailAndPassword(loginID, password);

        navigation.navigate("NextScreen");
      } else {
        console.log("Authentication failed on the server.");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };
  return (
    <SafeAreaView style={styles.screenWrapper}>
      <View style={styles.loginFields}>
        <Image
          source={require("../utilities/CareWalletLogo.png")}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>Welcome!</Text>
        <InputField
          inputName={"Email or Insurance # or Govt ID"}
          placeholderValue={"Enter Info of Choice"}
          placeholderColor={"darkblue"}
          onChangeEvent={(newText) => {
            setLoginID(newText);
          }}
          inputValue={loginID}
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
                setPassword(newText);
              }}
              secureTextEntry={!passwordVisible}
              value={password}
              style={styles.passwordInput}
            />
            <TouchableOpacity
              onPress={() => {
                setPasswordVisbility(!passwordVisible);
              }}
            >
              <Ionicons
                name={passwordVisible ? "eye-off" : "eye"}
                size={24}
                color="gray"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rememberMe}>
          <Pressable style={styles.rememberMeCheckbox}>
            <CheckBox
              isChecked={rememberMe}
              onClick={() => setRememberMe(!rememberMe)}
              checkedCheckBoxColor="darkblue"
              uncheckedCheckBoxColor="darkblue"
            />
            <Text style={styles.belowInputText}>Remember me</Text>
          </Pressable>
          <Text
            style={styles.belowInputText}
            onPress={() => console.log("forgot password")}
          >
            Forgot Password?
          </Text>
        </View>
        <TouchableOpacity
          disabled={!checkifDetailsFilled}
          style={styles.button}
          onPress={loginUser}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.registerSection}>
          <Text style={styles.belowInputText}>Don't have an account? </Text>
          <Text
            onPress={() => navigation.navigate("Register")}
            style={styles.registerText}
          >
            Register
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
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    borderColor: "grey",
  },
  loginFields: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
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
  signinText: {
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
  loginButtonText: {
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
    alignItems: "center",
  },
  rememberMeCheckbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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

export default LogIn;
