import { TextStyle, ViewStyle } from "react-native";

export const SearchBox: ViewStyle = {
  zIndex: 999,
  position: 'relative',
  borderColor: '#2c075a',
  borderWidth: 0.5,
  borderRadius: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  elevation: 5,
  maxHeight: '50%',
};

export const DropdownSection: ViewStyle = {
  height: 60,
  marginTop: 12,
  marginBottom: 20,
  borderWidth: 0.5,
  borderRadius: 5,
  paddingLeft: 10,
  borderColor: '#2c075a',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
};

export const DropdownSectionError: ViewStyle = {
  height: 60,
  marginTop: 12,
  marginBottom: 0,
  borderWidth: 0.5,
  borderRadius: 5,
  paddingLeft: 10,
  borderColor: '#f43e3e',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
};

export const DropdownPlaceHolder: TextStyle = {
  color: '#C8C8C8',
  fontSize: 14,
};

export const LabelText: TextStyle = {
  color: '#2c075a',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
};

export const ErrorText: TextStyle = {
  color: '#f43e3e',
  fontSize: 12,
  marginTop: 5,
  lineHeight: 12,
  marginBottom: 3,
};
