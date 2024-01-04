import React, { RefObject, useEffect, useRef, useState } from "react";
import {
  OtpInputContainer,
  OtpInputError,
  OtpInputFilled,
  OtpInputStyle,
} from '../../Shared/Styles/Styles';
import { TextInput } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

interface OtpContainerProps {
  otp: string;
  setOTPValue: (text: string) => void;
  error: string;
  setErrorValue: (text: string) => void;
  inputCallback: (text: string) => void;
}

let timeoutRef: any;
const focusCall = (inputRef: RefObject<TextInput>, time: number = 0) => {
  clearTimeout(timeoutRef);
  timeoutRef = setTimeout(() => {
    inputRef.current && inputRef.current.focus();
  }, time);
};

const OtpContainer: React.FC<OtpContainerProps> = ({
  otp,
  error,
  setOTPValue,
  setErrorValue,
  inputCallback,
}) => {
  const isFocused = useIsFocused();
  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);

  const onFocusBehave = () => {
    if (otp.length == 0 && inputRef1.current) {
      inputRef1.current.focus();
    }
    if (otp.length == 1 && inputRef2.current) {
      inputRef2.current.focus();
    }
    if (otp.length == 2 && inputRef3.current) {
      inputRef3.current.focus();
    }
    if (otp.length == 3 && inputRef4.current) {
      inputRef4.current.focus();
    }
    if (otp.length == 4 && inputRef4.current) {
      inputRef4.current.focus();
    }
  };
  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        onFocusBehave();
      });
    }
  }, [isFocused]);
  const onChangeInputOne = (text: string) => {
    if (text.length > 0) {
      const tempText = text.charAt(0);
      if (isNaN(parseInt(tempText))) {
        return;
      }
      setOTPValue(`${tempText}`);
      focusCall(inputRef2);
    } else {
      setOTPValue(otp.slice(0, -1));
    }
  };
  const onChangeInputTwo = (text: string) => {
    if (text.length > 0) {
      const tempText = text.charAt(0);
      if (isNaN(parseInt(tempText))) {
        return;
      }
      setOTPValue(`${otp}${text}`);
      focusCall(inputRef3);
    } else {
      setOTPValue(otp.slice(0, -1));
      focusCall(inputRef1);
    }
  };
  const onChangeInputThree = (text: string) => {
    if (text.length > 0) {
      const tempText = text.charAt(0);
      if (isNaN(parseInt(tempText))) {
        return;
      }
      setOTPValue(`${otp}${text}`);
      focusCall(inputRef4);
    } else {
      setOTPValue(otp.slice(0, -1));
      focusCall(inputRef2);
    }
  };
  const onChangeInputFour = (text: string) => {
    if (text.length > 0) {
      const tempText = text.charAt(0);
      if (isNaN(parseInt(tempText))) {
        return;
      }
      const finalOtp = `${otp}${text}`;
      setOTPValue(finalOtp);
      inputCallback(finalOtp);
    } else {
      setOTPValue(otp.slice(0, -1));
      focusCall(inputRef3);
    }
  };
  return (
    <>
      <OtpInputContainer>
        <TextInput
          ref={inputRef1}
          style={
            otp.length >= 1
              ? error
                ? OtpInputError
                : OtpInputFilled
              : OtpInputStyle
          }
          value={otp.length == 0 ? `` : otp.charAt(0)}
          onChangeText={onChangeInputOne}
          keyboardType={'numeric'}
          onPressIn={onFocusBehave}
          editable={otp.length < 2}
          // onKeyPress={onKeyPressInputOne}
        />
        <TextInput
          ref={inputRef2}
          style={
            otp.length >= 2
              ? error
                ? OtpInputError
                : OtpInputFilled
              : OtpInputStyle
          }
          value={otp.length <= 1 ? `` : otp.charAt(1)}
          onChangeText={onChangeInputTwo}
          keyboardType={'numeric'}
          onPressIn={onFocusBehave}
          editable={otp.length < 3}
        />
        <TextInput
          ref={inputRef3}
          style={
            otp.length >= 3
              ? error
                ? OtpInputError
                : OtpInputFilled
              : OtpInputStyle
          }
          value={otp.length <= 2 ? `` : otp.charAt(2)}
          onChangeText={onChangeInputThree}
          keyboardType={'numeric'}
          onPressIn={onFocusBehave}
          editable={otp.length < 4}
        />
        <TextInput
          ref={inputRef4}
          style={
            otp.length >= 4
              ? error
                ? OtpInputError
                : OtpInputFilled
              : OtpInputStyle
          }
          value={otp.length <= 3 ? `` : otp.charAt(3)}
          onChangeText={onChangeInputFour}
          keyboardType={'numeric'}
          onPressIn={onFocusBehave}
          editable
        />
      </OtpInputContainer>
    </>
  );
};

export default OtpContainer;
