import styled from 'styled-components/native';
import { Camera } from 'expo-camera';
import { Button } from '../../../src/Pages/Shared/Styles/Styles';

export const CameraButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  align-self: center;
  width: 193px;
  height: 57px;
`;
export const CenterFaceButton = styled(Button)`
  position: absolute;
  bottom: 180px;
  align-self: center;
  width: 293px;
  height: 57px;
  background-color: white;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const CameraView = styled.View`
  width: 338px;
  height: 681px;
  background-color: white;
  border-radius: 26px;
  border: 5px solid #2c075a;
  overflow: hidden;
`;

export const CameraStyled = styled(Camera)`
  flex: 1;
`;

export const FlipButton = styled.TouchableOpacity`
  position: absolute;
  background-color: #2c075a;
  top: 20px;
  right: 20px;
  padding: 10px;
`;

export const TakePictureButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  align-self: center;
  padding: 10px;
  background-color: #2c075a;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  margin-left: 10px;
`;
export const ButtonText1 = styled.Text`
  color: #2c075a;
  font-size: 20px;
  margin-left: 10px;
`;

export const Text = styled.Text`
  color: black;
`;

export const OverlayContainer = styled.View``;
