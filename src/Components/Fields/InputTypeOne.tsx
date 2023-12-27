import React, { useEffect, useState } from 'react';
import { KeyboardTypeOptions } from 'react-native';
import InputField from './InputField';
import {
  UsernameSection,
  UsernameTextInput,
  FieldViewStyleOne,
  UsernameSectionError,
  ErrorText,
} from '../../Styles/Fields/inputTypeOneStyles';

type InputOneFieldProps = {
  inputName: string;
  onChangeEvent: (text: string) => void;
  inputValue: string;
  placeHolderValue: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  errorString?: string;
  onBlur?: () => void;
  onEndEditing?: () => void;
  onFocus?: () => void;
};
const InputTypeOne: React.FC<InputOneFieldProps> = ({
  inputName,
  onChangeEvent,
  inputValue,
  placeHolderValue,
  keyboardType,
  errorString,
  onBlur,
  onEndEditing,
  onFocus,
}) => {
  const onChange = (text: string) => {
    onChangeEvent(text);
  };
  const isError = errorString && errorString !== '';
  return (
    <>
      <InputField
        viewStyle={FieldViewStyleOne}
        inputName={inputName}
        onChangeEvent={onChange}
        inputValue={inputValue}
        placeholderValue={placeHolderValue}
        keyboardType={keyboardType}
        placeholderColor={isError ? '#8B0000' : 'darkblue'}
        inputPStyle={isError ? UsernameSectionError : UsernameSection}
        inputTextStyle={UsernameTextInput}
        errorStyle={ErrorText}
        errorString={errorString}
        onBlurEvent={onBlur}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
      />
    </>
  );
};

export default InputTypeOne;
