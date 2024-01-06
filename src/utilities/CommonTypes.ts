import { KeyboardTypeOptions, TextStyle, ViewStyle } from "react-native";

export interface PagesProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
}

export interface Address {
  country: string;
  locality: string;
  postal_code: string;
  state: string;
  street_address: string;
}

export interface SearchDropdownItem {
  label: string;
  fullLabel: string;
  value: string;
  address: Address;
}

export interface InputOneFieldProps {
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
  fieldStyle?: 'phone';
}

// Define a type for the component's props
export interface InputFieldProps {
  inputName: string;
  placeholderValue?: string;
  placeholderColor?: string;
  onChangeEvent: (text: string) => void;
  onBlurEvent?: () => void;
  inputValue: string;
  inputTextStyle?: TextStyle;
  inputStyle?: ViewStyle;
  inputPStyle?: ViewStyle;
  viewStyle?: ViewStyle;
  isPassword?: boolean;
  iconStyle?: ViewStyle;
  keyboardType?: KeyboardTypeOptions | undefined;
  errorString?: string;
  errorStyle?: TextStyle;
  onEndEditing?: () => void;
  onFocus?: () => void;
  editable?: boolean;
  onPressIn?: () => void;
  leftIconHTML?: Element;
  leftIconClass?: string;
};
