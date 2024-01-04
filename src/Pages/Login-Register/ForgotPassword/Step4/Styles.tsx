import styled from 'styled-components/native';
import {
  styleFontSize25,
  styleFontWeightBold700,
  stylePrimaryColor,
} from '../../../../Styles/AppWideConstants/Styles';

export const HeaderText = styled.Text`
  color: ${stylePrimaryColor};
  font-weight: ${styleFontWeightBold700};
  font-size: ${styleFontSize25}px;
  width: 100%;
  text-align: center;
  margin-bottom: 10%;
`;
