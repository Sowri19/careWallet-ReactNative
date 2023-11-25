import React from "react";
import { View, Text, TextInput } from "react-native";

const InputField = (props) => {
  const {
    inputName,
    placeholderValue,
    placeholderColor,
    onChangeEvent,
    inputValue,
    inputTextStyle,
    inputStyle,
  } = props;

  return (
    <View>
      <Text style={inputTextStyle}>{inputName}</Text>
      <TextInput
        placeholder={placeholderValue}
        placeholderTextColor={placeholderColor}
        onChangeText={onChangeEvent}
        value={inputValue}
        style={inputStyle}
      />
    </View>
  );
};

export default InputField;
// Path: frontend/src/components/SubmitButton.js
