import React from 'react';
import InputField from './InputField';
import {
  UsernameSection,
  UsernameTextInput,
  FieldViewStyleOne,
  UsernameSectionError,
  ErrorText,
  CountryCode,
  PrimaryInputError,
  PrimaryInput,
} from '../../Styles/Fields/inputTypeOneStyles';
import {
  styleErrorColor,
  stylePrimaryColor,
} from '../../Styles/AppWideConstants/Styles';
import {
  extractNumbersFromString,
  formatPhoneNumberString,
} from '../../utilities/FormatUtils';
import { InputOneFieldProps } from '../../utilities/CommonTypes';
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
  fieldStyle,
}) => {
  const onChangeLogic = (fieldText: string) => {
    onChangeEvent(fieldText);
  };
  const onFocusLogic = () => {
    if (fieldStyle) {
      if (fieldStyle == 'phone' && inputValue == '') {
        onChangeLogic('(');
      }
    }
    onFocus && onFocus();
  };
  const onBlurLogic = () => {
    if (fieldStyle) {
      if (fieldStyle == 'phone' && inputValue.length == 1) {
        onChangeLogic('');
      }
    }
    onBlur && onBlur();
  };
  const onEndEditingLogic = () => {
    if (fieldStyle) {
      if (fieldStyle == 'phone' && inputValue.length == 1) {
        onChangeLogic('');
      }
    }
    onEndEditing && onEndEditing();
  };
  const onChange = (text: string) => {
    let fieldText = text;
    if (fieldStyle) {
      if (fieldStyle == 'phone') {
        const numberString = extractNumbersFromString(text);
        fieldText = formatPhoneNumberString(numberString);
      }
      onChangeLogic(fieldText);
    } else {
      onChangeLogic(fieldText);
    }
  };
  let leftIconHtmlLocal: any;
  if (fieldStyle == 'phone') {
    leftIconHtmlLocal = (
      <>
        <CountryCode>+1</CountryCode>
      </>
    );
  }
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
        inputPStyle={isError ? UsernameSectionError : UsernameSection}
        inputTextStyle={UsernameTextInput}
        inputStyle={isError ? PrimaryInputError : PrimaryInput}
        errorStyle={ErrorText}
        errorString={errorString}
        onBlurEvent={onBlurLogic}
        onEndEditing={onEndEditingLogic}
        onFocus={onFocusLogic}
        editable={editable}
        onPressIn={onPressIn}
        leftIconHTML={
          <>
            {leftIconHtmlLocal}
            {leftIconHTML}
          </>
        }
        leftIconClass={leftIconClass}
      />
    </>
  );
};

export default InputTypeOne;
