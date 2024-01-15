import styled from 'styled-components/native';
import { Camera } from 'expo-camera';
import { Button } from '../../Shared/Styles/Styles';
import {
  stylePrimaryColor,
  styleWhiteColor,
} from '../../Styles/AppWideConstants/Styles';
import { CustomCameraProps } from '../../Shared/Interfaces/Camera';

export const CameraButton = styled(Button)`
  width: 193px;
  height: 57px;
  border: 0;
`;

export const CameraView = styled.View`
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

export const OverlayImage = styled.Image<CustomCameraProps>`
  position: absolute;
  top: 30%;
  left: 22.5%;
  height: 300px;
  margin-left: -35px;
  margin-top: -0px;
  z-index: 1;
  width: ${(props) => (props.camera === 1 ? '300px' : '200px')};
`;
