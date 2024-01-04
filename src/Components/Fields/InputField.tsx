import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TextStyle,
  ViewStyle,
  KeyboardTypeOptions,
} from 'react-native';
import { EyeIcon, LeftIcon } from '../../Styles/Fields/inputTypeOneStyles';
import { IconStyle } from '../../Shared/Styles/Styles';

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
  editable?: boolean;
  onPressIn?: () => void;
  leftIconHTML?: Element;
  leftIconClass?: string;
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
  editable,
  onPressIn,
  leftIconHTML,
  leftIconClass,
}) => {
  const [passwordVisible, setPasswordVisibility] = useState<boolean>(false);
  return (
    <View style={viewStyle}>
      {inputName !== '' && <Text style={inputTextStyle}>{inputName}</Text>}
      <View style={inputPStyle}>
        {leftIconClass && <LeftIcon name={leftIconClass} style={IconStyle} />}
        {leftIconHTML && <>{leftIconHTML}</>}
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
          editable={editable}
          onPressIn={onPressIn}
        />
        {isPassword && (
          <EyeIcon
            name={passwordVisible ? 'eye-off' : 'eye'}
            style={iconStyle}
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
