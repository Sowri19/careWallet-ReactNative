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
import { IconStyle } from '../../Shared/Styles/Styles';
import {
  styleErrorColor,
  stylePrimaryColor,
} from '../../Styles/AppWideConstants/Styles';

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
  leftIconClass?: string;
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
        placeholderColor={isError ? styleErrorColor : stylePrimaryColor}
        inputPStyle={isError ? PasswordSectionError : PasswordSection}
        inputStyle={PasswordInput}
        inputTextStyle={UsernameTextInput}
        isPassword={true}
        errorStyle={ErrorText}
        errorString={errorString}
        onBlurEvent={onBlur}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        leftIconClass={leftIconClass}
        iconStyle={IconStyle}
      />
    </>
  );
};

export default InputPasswordTypeOne;
