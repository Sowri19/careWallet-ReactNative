import styled from 'styled-components/native';
import { TextStyle } from 'react-native';
import {
  styleAcceptColor,
  styleFontSize18,
  styleFontWeightBold500,
} from '../../../Styles/AppWideConstants/Styles';

export const UpperBarHolder = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  min-height: 80px;
`;

export const UpperBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ActiveDate: TextStyle = {
  marginLeft: 10,
  color: styleAcceptColor,
  fontSize: styleFontSize18,
  fontWeight: styleFontWeightBold500,
  width: 150,
};

export const AccountDetails = styled.View`
  margin-top: 5%;
  margin-bottom: 5%;
  flex-direction: column;
  justify-content: space-between;
`;
