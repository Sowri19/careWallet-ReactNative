import { TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import {
  styleErrorColor,
  styleFontSize16,
  stylePrimaryColor,
  styleStandardButtonHeight
} from "../AppWideConstants/Styles";

export const FieldViewStyleOne: ViewStyle = {
  position: 'relative',
  marginBottom: 10,
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
};

export const UsernameSection: ViewStyle = {
  flexDirection: 'row',
  height: styleStandardButtonHeight,
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
  flex: 0,
};

export const SelectPlaceHolder: TextStyle = {
  color: stylePrimaryColor,
};

export const SelectPlaceHolderErr: TextStyle = {
  color: styleErrorColor,
};

export const UsernameSectionError: ViewStyle = {
  flexDirection: 'row',
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
  flex: 0,
};

export const PrimaryInput: TextStyle = {
  color: stylePrimaryColor,
};

export const PrimaryInputError: TextStyle = {
  color: styleErrorColor,
};

export const PasswordSection: ViewStyle = {
  flexDirection: 'row',
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
  flex: 0,
  position: 'relative',
};

export const PasswordSectionError: ViewStyle = {
  flexDirection: 'row',
  height: 60,
  marginTop: 12,
  marginBottom: 0,
  borderWidth: 0.5,
  borderRadius: 5,
  paddingLeft: 10,
  borderColor: '#f43e3e',
  maxWidth: '100%',
  overflow: 'hidden',
  flex: 0,
  position: 'relative',
};
export const UsernameTextInput: TextStyle = {
  color: stylePrimaryColor,
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  fontSize: styleFontSize16,
};

export const PasswordInput: ViewStyle = {
  flex: 1,
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  position: 'relative',
};

export const EyeIcon = styled(Ionicons)`
  flex: 1;
  padding: 16px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const LeftIcon = styled(Ionicons)`
  padding: 16px;
  padding-left: 2px;
  padding-right: 8px;
`;

export const ErrorText: TextStyle = {
  color: styleErrorColor,
  fontSize: 12,
  marginTop: 5,
  lineHeight: 12,
  marginBottom: 3,
};

export const DropDownInput: TextStyle = {
  color: stylePrimaryColor,
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  flex: 1,
  flexDirection: 'row',
};

export const CountryCode = styled.Text`
  color: ${stylePrimaryColor};
  font-size: ${styleFontSize16}px;
  justify-content: center;
  align-items: center;
  height: 60px;
  line-height: 60px;
  margin-right: 5px;
`;
