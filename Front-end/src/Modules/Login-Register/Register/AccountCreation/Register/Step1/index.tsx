import React, { useState } from "react";
import axios from "axios";
import { View, TouchableOpacity } from "react-native";
import {
  Container,
  WelcomeText,
  PageTitle,
  InputText,
  StyledInput,
  Button,
  ButtonText,
  RegisterSection,
  BelowInputText,
  RegisterText,
  PasswordSection,
  EyeIcon,
  StyledImage,
  SafeAreaContainer,
} from "./Styles";
import InputField from "../../../../../../Components/InputField";

// Define a type for the navigation prop
interface RegisterPageOneProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
}

const RegisterPageOne: React.FC<RegisterPageOneProps> = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordVisible, setNewPasswordVisibility] =
    useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordVisible, setConfirmPasswordVisibility] =
    useState<boolean>(false);

  const [sharedData, setSharedData] = useState<string>(
    "Shared data to be passed"
  );

  const checkifDetailsFilled: boolean =
    name !== "" &&
    email !== "" &&
    newPassword !== "" &&
    confirmPassword !== "" &&
    newPassword === confirmPassword;

  const handleNext = async (): Promise<void> => {
    const formData = {
      name,
      email,
      newPassword,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/patients",
        formData
      );

      if (response.status === 200) {
        console.log("Data added successfully!");
        navigation.navigate("RegisterPageTwo", { formData, sharedData });
      } else {
        console.error("Failed to add data to the API.");
      }
    } catch (error) {
      console.error("An error occurred while making the API request:", error);
    }
  };
  return (
    <SafeAreaContainer>
      <Container>
        <StyledImage source={require("../utilities/CareWalletLogo.png")} />
        <WelcomeText>Welcome!</WelcomeText>
        <PageTitle>Sign Up</PageTitle>

        <InputField
          inputName="Name"
          placeholderValue="Enter your name"
          placeholderColor="darkblue"
          onChangeEvent={setName}
          inputValue={name}
        />

        <InputField
          inputName="Email"
          placeholderValue="Enter your email"
          placeholderColor="darkblue"
          onChangeEvent={setEmail}
          inputValue={email}
        />

        <View>
          <InputText>Password</InputText>
          <PasswordSection>
            <StyledInput
              placeholder="Enter Password"
              placeholderTextColor="darkblue"
              onChangeText={setNewPassword}
              secureTextEntry={!newPasswordVisible}
              value={newPassword}
            />
            <TouchableOpacity
              onPress={() => setNewPasswordVisibility(!newPasswordVisible)}
            >
              <EyeIcon
                name={newPasswordVisible ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </PasswordSection>
        </View>

        <View>
          <InputText>Confirm Password</InputText>
          <PasswordSection>
            <StyledInput
              placeholder="Confirm Password"
              placeholderTextColor="darkblue"
              onChangeText={setConfirmPassword}
              secureTextEntry={!confirmPasswordVisible}
              value={confirmPassword}
            />
            <TouchableOpacity
              onPress={() =>
                setConfirmPasswordVisibility(!confirmPasswordVisible)
              }
            >
              <EyeIcon
                name={confirmPasswordVisible ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </PasswordSection>
        </View>

        <Button disabled={!checkifDetailsFilled} onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </Button>

        <RegisterSection>
          <BelowInputText>Already have an account? </BelowInputText>
          <RegisterText onPress={() => navigation.navigate("Log in")}>
            Login
          </RegisterText>
        </RegisterSection>
      </Container>
    </SafeAreaContainer>
  );
};

export default RegisterPageOne;
