import styled from 'styled-components/native';
import {
  styleErrorColor,
  styleFontSize14,
  styleFontWeightBold500,
  stylePrimaryColor,
} from '../../../../Styles/AppWideConstants/Styles';

export const SubHeaderOne = styled.Text`
  font-size: ${styleFontSize14};
  width: 100%;
  text-align: center;
  color: ${stylePrimaryColor};
  margin-bottom: 3%;
`;

export const SubHeaderBoldOne = styled.Text`
  font-size: ${styleFontSize14};
  width: 100%;
  text-align: center;
  color: ${stylePrimaryColor};
  margin-bottom: 5%;
  font-weight: ${styleFontWeightBold500};
`;
export const SubHeaderBoldLoading = styled.Text`
  font-size: ${styleFontSize14};
  text-align: center;
  color: ${stylePrimaryColor};
  font-weight: ${styleFontWeightBold500};
`;

export const SubHeaderBoldErrorOne = styled.Text`
  font-size: ${styleFontSize14};
  width: 100%;
  text-align: center;
  color: ${styleErrorColor};
  margin-bottom: 5%;
  font-weight: ${styleFontWeightBold500};
`;

import { ViewStyle } from 'react-native';

export const LoadingContainer: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: '10%',
};
export const ActivityIndicatorStyle: ViewStyle = {
  marginLeft: '1%',
  borderRadius: 40,
};
