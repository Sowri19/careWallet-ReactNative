import styled from 'styled-components/native';
import { Camera } from 'expo-camera';
import { Button } from '../../Shared/Styles/Styles';
import {
  stylePrimaryColor,
  styleWhiteColor,
  styleStandardBackButtonHeight,
} from '../../Styles/AppWideConstants/Styles';
import withBoxShadow from '../../Components/HOCs/ButtonShadowTypeOne';

export const CameraButton = styled(Button)`
  align-self: center;
  width: 193px;
  height: 57px;
  border: 0;
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

export const CameraStyled = styled(Camera)`
  flex: 1;
`;

export const TakePictureButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  align-self: center;
  padding: 10px;
  background-color: ${stylePrimaryColor};
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

export const Face = styled.View``;

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

const BackButtonNormal = styled.TouchableOpacity`
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

export const BackButton = withBoxShadow(BackButtonNormal);
