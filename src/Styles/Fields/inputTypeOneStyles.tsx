import { TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const FieldViewStyleOne: ViewStyle = {
  position: 'relative',
  marginBottom: 10,
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
};

export const UsernameSection: ViewStyle = {
  flexDirection: 'row',
  height: 60,
  marginTop: 12,
  marginBottom: 20,
  borderWidth: 0.5,
  borderRadius: 5,
  paddingLeft: 10,
  borderColor: 'darkblue',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  flex: 0,
};

export const UsernameSectionError: ViewStyle = {
  flexDirection: 'row',
  height: 60,
  marginTop: 12,
  marginBottom: 0,
  borderWidth: 0.5,
  borderRadius: 5,
  paddingLeft: 10,
  borderColor: '#8B0000',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  flex: 0,
};

export const PasswordSection: ViewStyle = {
  flexDirection: 'row',
  height: 60,
  marginTop: 12,
  marginBottom: 20,
  borderWidth: 0.5,
  borderRadius: 5,
  paddingLeft: 10,
  borderColor: 'darkblue',
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
  borderColor: '#8B0000',
  maxWidth: '100%',
  overflow: 'hidden',
  flex: 0,
  position: 'relative',
};
export const UsernameTextInput: TextStyle = {
  color: 'darkblue',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
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

export const ErrorText: TextStyle = {
  color: '#8B0000',
  fontSize: 12,
  marginTop: 5,
  lineHeight: 12,
  marginBottom: 3,
};
