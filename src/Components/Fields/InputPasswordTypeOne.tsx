import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import InputField from './InputField';
import {
  ErrorText,
  FieldViewStyleOne,
  PasswordInput,
  PasswordSection,
  PasswordSectionError,
  UsernameTextInput,
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
const InputPasswordTypeOne: React.FC<InputOneFieldProps> = ({
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
        inputPStyle={isError ? PasswordSectionError : PasswordSection}
        inputStyle={PasswordInput}
        inputTextStyle={UsernameTextInput}
        isPassword={true}
        errorStyle={ErrorText}
        errorString={errorString}
        onBlurEvent={onBlur}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
      />
    </>
  );
};

export default InputPasswordTypeOne;
