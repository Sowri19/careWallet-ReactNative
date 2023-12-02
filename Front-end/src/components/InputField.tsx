import React from "react";
import {
  View,
  Text,
  TextInput,
  TextStyle,
  ViewStyle,
  KeyboardTypeOptions,
} from "react-native";

// Define a type for the component's props
type InputFieldProps = {
  inputName: string;
  placeholderValue?: string;
  placeholderColor?: string;
  onChangeEvent: (text: string) => void;
  inputValue: string;
  inputTextStyle?: TextStyle;
  inputStyle?: ViewStyle;
  keyboardType?: KeyboardTypeOptions; // Add this line
};

const InputField: React.FC<InputFieldProps> = ({
  inputName,
  placeholderValue,
  placeholderColor,
  onChangeEvent,
  inputValue,
  inputTextStyle,
  inputStyle,
  keyboardType,
}) => {
  return (
    <View>
      <Text style={inputTextStyle}>{inputName}</Text>
      <TextInput
        placeholder={placeholderValue}
        placeholderTextColor={placeholderColor}
        onChangeText={onChangeEvent}
        value={inputValue}
        style={inputStyle}
        keyboardType={keyboardType} // Add this line
      />
    </View>
  );
};

export default InputField;
