import styled from 'styled-components/native';
import {
  styleFontSize14,
  styleFontWeightBold500,
  stylePrimaryColor,
} from '../../Styles/AppWideConstants/Styles';
import { ViewStyle } from 'react-native';

export const Indicator = styled.View`
  margin: 30px 0 0 0;
`;
export const SubHeaderBoldLoading = styled.Text`
  font-size: ${styleFontSize14}px;
  text-align: center;
  color: ${stylePrimaryColor};
  font-weight: ${styleFontWeightBold500};
`;

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
