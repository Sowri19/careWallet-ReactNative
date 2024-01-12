import styled from 'styled-components/native';
import {
  styleAcceptColor,
  styleFontSize16,
  styleFontSize24,
  styleFontSize35,
  styleFontWeightBold500,
  styleFontWeightBold700,
  stylePrimaryColor, styleWhiteColor
} from "../../../Styles/AppWideConstants/Styles";
import { Ionicons } from '@expo/vector-icons';
import { TextStyle } from 'react-native';
import withBoxShadow from "../../../Components/HOCs/shadowTypeOne";

export const BoldNameHeader = styled.Text`
  color: ${stylePrimaryColor};
  font-weight: ${styleFontWeightBold700};
  font-size: ${styleFontSize35}px;
  text-align: center;
  text-decoration: ${stylePrimaryColor};
  text-decoration-line: underline;
  margin-bottom: 5%;
  padding-left: 5%;
  padding-right: 5%;
`;

export const ActiveDateHolder = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5%;
`;

export const ActiveDate: TextStyle = {
  marginLeft: 10,
  color: styleAcceptColor,
  fontSize: styleFontSize24,
  fontWeight: styleFontWeightBold500,
};

export const ImageHolder = styled.View`
  flex-direction: column;
  justify-content: space-around;
  padding-left: 5%;
  padding-right: 5%;
`;

export const ImageInsurance = styled.Image`
  min-height: 209px;
  width: 100%;
  resize-mode: contain;
`;

export const ImageID = styled.Image`
  min-height: 356px;
  width: 100%;
  resize-mode: contain;
`;

export const ImageHealth = styled.Image`
  min-height: 174.5px;
  width: 100%;
  resize-mode: contain;
`;

export const ButtonHolder = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 2%;
`;

export const LowerBarHolder = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding: 5%;
`;

export const LowerBarContainer = styled.View`
  width: 33%;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProfileImageHolderLocal = styled.View`
  width: 78px;
  height: 78px;
  border-radius: 78px;
  overflow: hidden;
  background-color: ${styleWhiteColor};
`;
