import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";
import InputField from "../../../Components/InputField";
import axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Container,
  LoginFields,
  LogoImage,
  WelcomeText,
  PasswordSection,
  PasswordInput,
  EyeIcon,
  RememberMe,
  RememberMeCheckbox,
  BelowInputText,
  Button,
  ButtonText,
  RegisterSection,
} from "./Styles";

// Props type
type Props = {
  navigation: StackNavigationProp<any>;
};

const LogIn: React.FC<Props> = ({ navigation }) => {
  const [loginID, setLoginID] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisibility] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const toggleRememberMe = () => setRememberMe(!rememberMe);
  const checkifDetailsFilled = loginID !== "" && password !== "";

  const loginUser = async () => {
    try {
      const response = await axios.post("/path/to/server/endpoint", {
        email: loginID,
        password: password,
      });

      if (response.data.success) {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, loginID, password);
        navigation.navigate("NextScreen");
      } else {
        console.log("Authentication failed on the server.");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };
  return (
    <Container>
      <LoginFields>
        <LogoImage source={require("../utilities/CareWalletLogo.png")} />
        <WelcomeText>Welcome!</WelcomeText>

        <InputField
          inputName="Email or Insurance # or Govt ID"
          placeholderValue="Enter Info of Choice"
          placeholderColor="darkblue"
          onChangeEvent={(newText: string) => setLoginID(newText)}
          inputValue={loginID}
        />

        <PasswordSection>
          <PasswordInput
            placeholder="Enter Password"
            placeholderTextColor="darkblue"
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            value={password}
          />
          <EyeIcon
            name={passwordVisible ? "eye-off" : "eye"}
            size={24}
            color="gray"
            onPress={() => setPasswordVisibility(!passwordVisible)}
          />
        </PasswordSection>

        <RememberMe>
          <RememberMeCheckbox onPress={toggleRememberMe}>
            {rememberMe && (
              <Ionicons name="checkmark" size={24} color="#00008B" />
            )}
            <BelowInputText>Remember me</BelowInputText>
          </RememberMeCheckbox>
          <BelowInputText onPress={() => console.log("forgot password")}>
            Forgot Password?
          </BelowInputText>
        </RememberMe>

        <Button disabled={!checkifDetailsFilled} onPress={loginUser}>
          <ButtonText>Login</ButtonText>
        </Button>

        <RegisterSection>
          <BelowInputText onPress={() => navigation.navigate("Register")}>
            Don't have an account? Register
          </BelowInputText>
        </RegisterSection>
      </LoginFields>
    </Container>
  );
};

export default LogIn;
