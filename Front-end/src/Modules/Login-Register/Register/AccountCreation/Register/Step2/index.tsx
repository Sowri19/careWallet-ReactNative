import React, { useState } from "react";
import {
  Platform,
  TouchableOpacity,
  Pressable,
  View,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
import InputField from "../../../../../../Components/InputField";
import {
  ScreenWrapper,
  StyledImage,
  WelcomeText,
  PageTitle,
  StyledInput,
  StyledButton,
  ButtonText,
} from "./Styles";
import { ParamListBase, RouteProp } from "@react-navigation/native";

type FormData = {
  name: string;
  email: string;
};

interface RegisterPageTwoProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
  route: RouteProp<ParamListBase, "RegisterPageTwo">;
}

const RegisterPageTwo: React.FC<RegisterPageTwoProps> = ({
  navigation,
  route,
}) => {
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [memberDOB, setMemberDOB] = useState<Date>(new Date());
  const [showDOBPicker, setShowDOBPicker] = useState<boolean>(false);

  const { formData, sharedData } = route.params as {
    formData: FormData;
    sharedData: string;
  };

  const toggleDOBpicker = () => {
    setShowDOBPicker(!showDOBPicker);
  };

  const onChangeDOB = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || memberDOB;
    setShowDOBPicker(Platform.OS === "ios");
    setMemberDOB(currentDate);

    if (event.type === "set") {
      setDateOfBirth(currentDate.toDateString());
    }
  };

  const confirmIOSDOB = () => {
    setDateOfBirth(memberDOB.toDateString());
    toggleDOBpicker();
  };

  const checkifDetailsFilled = address !== "" && city !== "" && zipcode !== "";

  const onSubmitFormHandler = async () => {
    const updatedFormData = {
      ...formData,
      address,
      city,
      zipcode,
      dateOfBirth,
    };

    setIsLoading(true);

    try {
      const response = await axios.post(`http://localhost:3000/patients`, {
        firstName: updatedFormData.name,
        lastName: "",
        address: updatedFormData.address,
        phoneNumber: "",
        email: updatedFormData.email,
        dob: updatedFormData.dateOfBirth,
      });

      if (response.status === 201) {
        Alert.alert(
          "Success",
          `You have created: ${JSON.stringify(response.data)}`
        );
        setIsLoading(false);
        setAddress("");
        setCity("");
        setDateOfBirth("");
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      Alert.alert("Error", "An error has occurred");
      setIsLoading(false);
    }
    navigation.navigate("InsuranceSignUpOne");
  };

  return (
    <ScreenWrapper>
      <StyledImage
        source={require("../../../../../../utilities/CareWalletLogo.png")}
      />
      <WelcomeText>Page 2</WelcomeText>
      <PageTitle>Sign Up</PageTitle>

      <InputField
        inputName="Address"
        placeholderValue="Enter your street address"
        onChangeEvent={setAddress}
        inputValue={address}
      />
      <InputField
        inputName="City"
        placeholderValue="Enter your city"
        onChangeEvent={setCity}
        inputValue={city}
      />

      <View>
        <WelcomeText>Zipcode</WelcomeText>
        <StyledInput
          placeholder="Enter your zipcode"
          onChangeText={setZipcode}
          value={zipcode}
          keyboardType="numeric"
        />
      </View>

      <View>
        <WelcomeText>Member's Date of Birth</WelcomeText>
        {showDOBPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={memberDOB}
            onChange={onChangeDOB}
          />
        )}
        {showDOBPicker && Platform.OS === "ios" && (
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity onPress={toggleDOBpicker}>
              <ButtonText>Cancel</ButtonText>
            </TouchableOpacity>
            <TouchableOpacity onPress={confirmIOSDOB}>
              <ButtonText>Confirm</ButtonText>
            </TouchableOpacity>
          </View>
        )}
        {!showDOBPicker && (
          <Pressable onPress={toggleDOBpicker}>
            <StyledInput
              placeholder="Enter Member's Date of Birth"
              value={dateOfBirth}
              editable={false}
            />
          </Pressable>
        )}
      </View>

      <StyledButton
        disabled={!checkifDetailsFilled || isLoading}
        onPress={onSubmitFormHandler}
      >
        <ButtonText>Next</ButtonText>
      </StyledButton>
    </ScreenWrapper>
  );
};

export default RegisterPageTwo;
