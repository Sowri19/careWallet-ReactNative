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
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const overlaySize = width * 0.75; // Example: 75% of screen width
const screenHeight = Dimensions.get('window').height;
const cameraViewWidth = Math.min(400, width * 0.95); // Use 95% of screen width or 400, whichever is smaller
const cameraViewHeight = cameraViewWidth * 1.7; // Maintain aspect ratio, adjust as needed

export const ContainerStyle = styled(Container)`
  align-items: stretch;
`;

export const CameraStyled = styled(Camera)`
  flex: 1;
`;
export const CameraView = styled.View`
  align-self: center;
  margin-top: ${screenHeight * 0.03}px;
  width: ${cameraViewWidth}px;
  height: ${cameraViewHeight}px;
  background-color: ${styleWhiteColor};
  border-radius: 26px;
  border: 5px solid ${stylePrimaryColor};
  overflow: hidden;
`;

export const OverlayImage = styled.Image`
  position: absolute;
  align-self: center;
  top: 27%;
  width: ${overlaySize}px;
  height: ${overlaySize}px;
  z-index: 1;
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
