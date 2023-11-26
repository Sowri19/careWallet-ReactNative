import React, { useState } from "react";
import { Platform, Pressable } from "react-native"; 
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import InputField from "../../../../../Components/InputField";
import {
  SafeArea,
  FieldsContainer,
  TitleText,
  SubtitleText,
  CustomButton,
  ButtonText,
  CustomImage,
  CustomTextInput,
  TextLabel,
  BottomText,
  BottomTextContainer
} from './Styles';

type Props = {
  navigation: any; 
  route: any; 
};

const InsuranceSignUpTwo: React.FC<Props> = ({ navigation, route }) => {
  const [insuranceType, setInsuranceType] = useState<string>("");
  const [relationship, setRelationship] = useState<string>("");
  const [memberDOB, setMemberDOB] = useState<Date>(new Date());
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [showDOBPicker, setShowDOBPicker] = useState<boolean>(false);
  const [effectiveDate, setEffectiveDate] = useState<Date>(new Date());
  const [dateForEffectiveDate, setDateForEffectiveDate] = useState<string>("");
  const [showEffectiveDatePicker, setShowEffectiveDatePicker] = useState<boolean>(false);

  const { formData, sharedData } = route.params; // Ensure you're using formData and sharedData correctly

  const onChangeDOB = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || memberDOB;
    setShowDOBPicker(Platform.OS === "ios");
    setMemberDOB(currentDate);
    if (event.type === "set") {
      setDateOfBirth(currentDate.toISOString().split('T')[0]);
    }
  };

  const onEffectiveDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || effectiveDate;
    setShowEffectiveDatePicker(Platform.OS === "ios");
    setEffectiveDate(currentDate);
    if (event.type === "set") {
      setDateForEffectiveDate(currentDate.toISOString().split('T')[0]);
    }
  };

  const toggleDOBPicker = () => {
    setShowDOBPicker(!showDOBPicker);
  };

  const toggleEffectiveDatePicker = () => {
    setShowEffectiveDatePicker(!showEffectiveDatePicker);
  };

  const onSubmitFormHandler = async () => {
    const updatedFormData = {
      ...formData,
      insuranceType,
      dateOfBirth,
      dateForEffectiveDate,
      relationship
    };
    console.log(updatedFormData);
  };

  const checkIfDetailsFilled = insuranceType !== "" && relationship !== "";

  return (
    <SafeArea>
      <FieldsContainer>
        <CustomImage source={require("../utilities/CareWalletLogo.png")} />
        <TitleText>Page 6</TitleText>
        <SubtitleText>Sign Up</SubtitleText>
        
        <InputField
          inputName="Insurance Type"
          placeholderValue="Enter Insurance Type"
          placeholderColor="darkblue"
          onChangeEvent={setInsuranceType}
          inputValue={insuranceType}
        />

        <TextLabel>Member's Date of Birth</TextLabel>
        <Pressable onPress={toggleDOBPicker}>
          <CustomTextInput
            placeholder="Enter Member's Date of Birth"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            placeholderTextColor="darkblue"
            editable={false}
          />
        </Pressable>

        {showDOBPicker && (
          <DateTimePicker
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            value={memberDOB}
            onChange={onChangeDOB}
            maximumDate={new Date()}
          />
        )}

        <TextLabel>Effective Date</TextLabel>
        <Pressable onPress={toggleEffectiveDatePicker}>
          <CustomTextInput
            placeholder="Enter Effective Date"
            value={dateForEffectiveDate}
            onChangeText={setDateForEffectiveDate}
            placeholderTextColor="darkblue"
            editable={false}
          />
        </Pressable>

        {showEffectiveDatePicker && (
          <DateTimePicker
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            value={effectiveDate}
            onChange={onEffectiveDateChange}
            maximumDate={new Date()}
          />
        )}

        <InputField
          inputName="Relationship to Policyholder"
          placeholderValue="Optional"
          placeholderColor="darkblue"
          onChangeEvent={setRelationship}
          inputValue={relationship}
        />

        <CustomButton onPress={onSubmitFormHandler} disabled={!checkIfDetailsFilled}>
          <ButtonText>Next</ButtonText>
        </CustomButton>

        <BottomTextContainer>
          <BottomText onPress={() => navigation.navigate("Log in")}>
            Login
          </BottomText>
        </BottomTextContainer>
      </FieldsContainer>
    </SafeArea>
  );
};

export default InsuranceSignUpTwo;
