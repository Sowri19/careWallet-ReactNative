import { ViewStyle } from 'react-native';
import { stylePrimaryColor } from '../../Styles/AppWideConstants/Styles';

export const ShadowIOS: ViewStyle = {
  shadowColor: stylePrimaryColor,
  shadowOffset: { width: 4, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
};

export const ShadowAndroid: ViewStyle = {
  elevation: 20,
  shadowColor: stylePrimaryColor,
};
