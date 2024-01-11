import { TextInput, TextStyle, ViewStyle } from "react-native";
import { styleErrorColor, styleFontSize14, styleFontSize16, stylePrimaryColor } from "../AppWideConstants/Styles";

export const SearchBox: ViewStyle = {
  zIndex: 999,
  position: 'relative',
  borderColor: stylePrimaryColor,
  borderWidth: 0.5,
  borderRadius: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  elevation: 5,
  maxHeight: '50%',
};

export const DropdownSection: TextStyle = {
  height: 60,
  marginTop: 12,
  marginBottom: 20,
  borderWidth: 0.5,
  borderRadius: 5,
  paddingLeft: 10,
  borderColor: stylePrimaryColor,
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  color: stylePrimaryColor,
};

export const DropdownSectionError: TextStyle = {
  height: 60,
  marginTop: 12,
  marginBottom: 0,
  borderWidth: 0.5,
  borderRadius: 5,
  paddingLeft: 10,
  borderColor: styleErrorColor,
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  color: styleErrorColor,
};

export const DropdownPlaceHolder: TextStyle = {
  color: stylePrimaryColor,
  fontSize: styleFontSize14,
};

export const DropdownPlaceHolderError: TextStyle = {
  ...DropdownPlaceHolder,
  color: styleErrorColor,
};

export const LabelText: TextStyle = {
  color: stylePrimaryColor,
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
};

export const ErrorText: TextStyle = {
  color: styleErrorColor,
  fontSize: 12,
  marginTop: 5,
  lineHeight: 12,
  marginBottom: 3,
};

export const SearchInput: TextStyle = {
  color: stylePrimaryColor,
};

export const SearchInputError: TextStyle = {
  color: styleErrorColor,
};
