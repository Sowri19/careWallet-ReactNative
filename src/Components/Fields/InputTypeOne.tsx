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
  editable?: boolean;
  onPressIn?: () => void;
  leftIconHTML?: Element;
  leftIconClass?: string;
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
  editable,
  onPressIn,
  leftIconHTML,
  leftIconClass,
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
        placeholderColor={isError ? '#f43e3e' : '#2c075a'}
        inputPStyle={isError ? UsernameSectionError : UsernameSection}
        inputTextStyle={UsernameTextInput}
        errorStyle={ErrorText}
        errorString={errorString}
        onBlurEvent={onBlur}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        editable={editable}
        onPressIn={onPressIn}
        leftIconHTML={leftIconHTML}
        leftIconClass={leftIconClass}
      />
    </>
  );
};

export default InputTypeOne;
