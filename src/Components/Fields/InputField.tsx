import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TextStyle,
  ViewStyle,
  KeyboardTypeOptions,
} from 'react-native';
import { EyeIcon } from '../../Styles/Fields/inputTypeOneStyles';

// Define a type for the component's props
type InputFieldProps = {
  inputName: string;
  placeholderValue?: string;
  placeholderColor?: string;
  onChangeEvent: (text: string) => void;
  onBlurEvent?: () => void;
  inputValue: string;
  inputTextStyle?: TextStyle;
  inputStyle?: ViewStyle;
  inputPStyle?: ViewStyle;
  viewStyle?: ViewStyle;
  isPassword?: boolean;
  iconStyle?: ViewStyle;
  keyboardType?: KeyboardTypeOptions | undefined;
  errorString?: string;
  errorStyle?: TextStyle;
  onEndEditing?: () => void;
  onFocus?: () => void;
};

const InputField: React.FC<InputFieldProps> = ({
  inputName,
  placeholderValue,
  placeholderColor,
  onChangeEvent,
  inputValue,
  inputTextStyle,
  inputStyle,
  inputPStyle,
  keyboardType,
  viewStyle,
  iconStyle,
  isPassword = false,
  errorString,
  errorStyle,
  onBlurEvent,
  onEndEditing,
  onFocus,
}) => {
  const [passwordVisible, setPasswordVisibility] = useState<boolean>(false);
  return (
    <View style={viewStyle}>
      {inputName !== '' && <Text style={inputTextStyle}>{inputName}</Text>}
      <View style={inputPStyle}>
        <TextInput
          placeholder={placeholderValue}
          placeholderTextColor={placeholderColor}
          onChangeText={onChangeEvent}
          value={inputValue}
          style={inputStyle}
          secureTextEntry={isPassword && !passwordVisible}
          keyboardType={keyboardType}
          onBlur={onBlurEvent}
          onEndEditing={onEndEditing}
          onFocus={onFocus}
        />
        {isPassword && (
          <EyeIcon
            name={passwordVisible ? 'eye-off' : 'eye'}
            style={iconStyle}
            size={24}
            color="gray"
            onPress={() => setPasswordVisibility(!passwordVisible)}
          />
        )}
      </View>
      {errorString && errorString !== '' && (
        <Text style={errorStyle}>{errorString}</Text>
      )}
    </View>
  );
};

export default InputField;
