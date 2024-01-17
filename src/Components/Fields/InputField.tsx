import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { EyeIcon, LeftIcon } from '../../Styles/Fields/inputTypeOneStyles';
import { IconStyle } from '../../Shared/Styles/Styles';
import { InputFieldProps } from '../../utilities/CommonTypes';
import withBoxShadow from '../HOCs/shadowTypeOne';
import GenericTextInput from './TextInputOne';

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
  return (
    <View style={viewStyle}>
      {inputName !== '' && <Text style={inputTextStyle}>{inputName}</Text>}
      <GenericTextInput
        placeholderValue={placeholderValue}
        placeholderColor={placeholderColor}
        onChangeEvent={onChangeEvent}
        inputValue={inputValue}
        inputStyle={inputStyle}
        isPassword={isPassword}
        keyboardType={keyboardType}
        onBlurEvent={onBlurEvent}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        editable={editable}
        onPressIn={onPressIn}
        inputPStyle={inputPStyle}
        leftIconClass={leftIconClass}
        leftIconHTML={leftIconHTML}
        iconStyle={iconStyle}
      />
      {errorString && errorString !== '' && (
        <Text style={errorStyle}>{errorString}</Text>
      )}
    </View>
  );
};

export default InputField;
