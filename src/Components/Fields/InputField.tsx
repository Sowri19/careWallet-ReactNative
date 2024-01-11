import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { EyeIcon, LeftIcon } from '../../Styles/Fields/inputTypeOneStyles';
import { IconStyle } from '../../Shared/Styles/Styles';
import { InputFieldProps } from '../../utilities/CommonTypes';
import withBoxShadow from '../HOCs/InputShadowTypeOne';

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

export default withBoxShadow(InputField);
