import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { ViewStyle } from 'react-native';
import { styleAcceptColor, styleFontWeightBold500, stylePrimaryColor } from "../../Styles/AppWideConstants/Styles";

export const TickIcon = styled(AntDesign)`
  font-size: 100px;
  color: ${styleAcceptColor};
  line-height: 100px;
`;

export const TickHolder = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 100px;
  margin-bottom: 50px;
`;

export const ProgressBar = styled.View`
  height: 40px;
  width: 100%;
  border-color: ${stylePrimaryColor};
  border-width: 1px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 50px;
  margin-top: 10px;
`;

export const ProgressFill: ViewStyle = {
  height: '100%',
  backgroundColor: stylePrimaryColor,
};

export const VerificationText = styled.Text`
  color: ${styleAcceptColor};
  font-size: 20px;
  font-weight: ${styleFontWeightBold500};
  line-height: 20px;
  margin-top: 40px;
  align-self: center;
`;
