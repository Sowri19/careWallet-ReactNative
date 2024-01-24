import styled from 'styled-components/native';
import { Container } from '../../Shared/Styles/Styles';
import {
  stylePrimaryColor,
  styleWhiteColor,
  styleStandardBackButtonHeight,
  styleFontSize14,
  styleFontWeightBold500,
  styleStandardButtonFontSize,
} from '../../Styles/AppWideConstants/Styles';
import { Button } from '../../Shared/Styles/Styles';
import { Camera } from 'expo-camera';

export const ContainerStyle = styled(Container)`
  align-items: stretch;
`;

export const Logo = styled.Image`
  top: 15%;
  left: 32%;
  z-index: 1;
  width: 153px;
  height: 34.45px;
  resize-mode: contain;
`;

export const CameraButton = styled(Button)`
  align-self: center;
  width: 193px;
  height: 57px;
  border: 0;
`;

export const ButtonText = styled.Text`
  font-size: ${styleStandardButtonFontSize}px;
  line-height: ${styleStandardButtonFontSize}px;
  color: ${styleWhiteColor};
  font-weight: ${styleFontWeightBold500};
`;

export const CameraStyled = styled(Camera)`
  flex: 1;
`;

export const OverlayImage1 = styled.Image`
  position: absolute;
  top: 15%;
  left: 9%;
  z-index: 1;
`;

export const FrontID = styled.View`
  width: 100%;
  height: 300px;
  background-color: ${styleWhiteColor};
  overflow: hidden;
`;

export const CameraText = styled.Text`
  color: ${stylePrimaryColor};
  align-self: center;
  margin: 30px 0 10px 0;
  width: 220px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${stylePrimaryColor};
  height: ${styleStandardBackButtonHeight}px;
  height: 45px;
  width: 30%;
  margin: 120px 0 20px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
`;
export const BorderView = styled.View`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const TopBorder = styled(BorderView)`
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
`;

export const BottomBorder = styled(BorderView)`
  bottom: 0;
  left: 0;
  right: 0;
  height: 32px;
`;

export const LeftBorder = styled(BorderView)`
  top: 45px;
  left: 0;
  bottom: 32px;
  width: 39px;
`;

export const RightBorder = styled(BorderView)`
  top: 45px;
  right: 0;
  bottom: 32px;
  width: 37px;
`;

export const SubHeaderBoldLoading = styled.Text`
  font-size: ${styleFontSize14};
  text-align: center;
  color: ${stylePrimaryColor};
  font-weight: ${styleFontWeightBold500};
`;
