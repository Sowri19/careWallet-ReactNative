import styled from 'styled-components/native';
import { Container } from '../../../../../Shared/Styles/Styles';
import {
  styleErrorColor,
  styleFontSize14,
  styleFontWeightBold500,
  stylePrimaryColor,
  styleWhiteColor,
  styleStandardButtonHeight,
} from '../../../../../Styles/AppWideConstants/Styles';
import { ViewStyle } from 'react-native';
import withBoxShadow from '../../../../../Components/HOCs/ButtonShadowTypeOne';
import { Camera } from 'expo-camera';

export const ContainerStyle = styled(Container)`
  align-items: stretch;
`;

export const CameraStyled = styled(Camera)`
  flex: 1;
`;

export const OverlayImage = styled.Image`
  position: absolute;
  align-self: center;
  top: 30%;
  left: 22.5%;
  height: 300px;
  margin-left: -35px;
  margin-top: -0px;
  z-index: 1;
  width: 300px;
`;

export const CameraView = styled.View`
  align-self: center;
  margin: 30px 0 0 0;
  width: 400px;
  height: 720px;
  background-color: ${styleWhiteColor};
  border-radius: 26px;
  border: 5px solid ${stylePrimaryColor};
  overflow: hidden;
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

export const SubHeaderBoldErrorOne = styled.Text`
  font-size: ${styleFontSize14}px;
  width: 100%;
  text-align: center;
  color: ${styleErrorColor};
  margin-bottom: 5%;
  font-weight: ${styleFontWeightBold500};
`;
const ButtonNormal = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${stylePrimaryColor};
  height: ${styleStandardButtonHeight}px;
  margin-top: 2%;
  margin-bottom: 12px;
  border-width: 0.5px;
  border-radius: 10px;
  z-index: 2;
`;

export const Button = withBoxShadow(ButtonNormal);

export const CameraButton = styled(Button)`
  align-self: center;
  width: 193px;
  height: 57px;
  border: 0;
`;

export const Indicator = styled.View`
  margin: 30px 0 0 0;
`;
