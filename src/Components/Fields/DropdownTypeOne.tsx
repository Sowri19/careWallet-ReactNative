import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  UsernameSection,
  UsernameSectionError,
  UsernameTextInput,
  ErrorText,
  DropDownInput,
} from '../../Styles/Fields/inputTypeOneStyles';
import { Text, Platform } from 'react-native';
import {
  SearchInput,
  SearchInputError,
} from '../../Styles/Fields/SearchDropdownStyles';

type DropdownTypeOneProps = {
  onValueChange: (value: string, index: number) => void;
  items: { label: string; value: string; key: string }[];
  placeholder?: string;
  errorString?: string;
  inputName?: string;
};

const DropdownTypeOne: React.FC<DropdownTypeOneProps> = ({
  onValueChange,
  items,
  placeholder,
  errorString,
  inputName,
}) => {
  const placeHolderLocal = placeholder
    ? { label: placeholder, value: null }
    : undefined;
  let pickerStyle;
  if (Platform.OS === 'ios') {
    pickerStyle = {
      inputIOSContainer: errorString ? UsernameSectionError : UsernameSection,
      inputIOS: DropDownInput,
      placeholder: errorString ? SearchInputError : SearchInput,
    };
  } else if (Platform.OS === 'android') {
    pickerStyle = {
      inputAndroidContainer: errorString
        ? UsernameSectionError
        : UsernameSection,
      inputAndroid: DropDownInput,
      placeholder: errorString ? SearchInputError : SearchInput,
    };
  }
  return (
    <>
      {inputName !== '' && <Text style={UsernameTextInput}>{inputName}</Text>}
      <RNPickerSelect
        style={pickerStyle}
        onValueChange={onValueChange}
        items={items}
        placeholder={placeHolderLocal}
      />
      {errorString && errorString !== '' && (
        <Text style={ErrorText}>{errorString}</Text>
      )}
    </>
  );
};

export default DropdownTypeOne;
