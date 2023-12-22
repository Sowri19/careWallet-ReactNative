import React, { useState } from "react";
import { KeyboardTypeOptions } from 'react-native';
import InputField from './InputField';
import {
  PasswordIcon,
  PasswordInput,
  PasswordSection,
  UsernameSection,
  UsernameTextInput
} from "../Modules/Login-Register/Login/Styles";

type InputOneFieldProps = {
  inputName: string;
  onChangeEvent: (text: string) => void;
  inputValue: string;
  placeHolderValue: string;
  keyboardType?: KeyboardTypeOptions | undefined;
};
const InputPasswordTypeOne: React.FC<InputOneFieldProps> = ({
  inputName,
  onChangeEvent,
  inputValue,
  placeHolderValue,
  keyboardType,
}) => {
  return (
    <>
      <InputField
        inputName={inputName}
        onChangeEvent={onChangeEvent}
        inputValue={inputValue}
        placeholderValue={placeHolderValue}
        keyboardType={keyboardType}
        placeholderColor={'darkblue'}
        inputPStyle={PasswordSection}
        inputStyle={PasswordInput}
        iconStyle={PasswordIcon}
        inputTextStyle={UsernameTextInput}
        isPassword={true}
      />
    </>
  );
};

export default InputPasswordTypeOne;
