import styled from 'styled-components/native';
import { TextStyle } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  border-radius: 20px;
  border-color: grey;
  width: 100%;
  height: 100%;
`;

export const FormContainerStyleOne = styled.View`
  flex: 1;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  padding-top: 10%;
  padding-bottom: 15%;
  width: 70%;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #2c075a;
  height: 60px;
  width: 40%;
  min-width: 40%;
  max-width: 40%;
  margin-top: 10%;
  margin-bottom: 10%;
  border-width: 0.5px;
  border-radius: 10px;
`;

export const BackButtonDummy = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 40%;
  min-width: 40%;
  max-width: 40%;
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #2c075a;
  height: 60px;
  margin-top: 2%;
  margin-bottom: 12px;
  border-width: 0.5px;
  border-radius: 10px;
`;

export const ButtonDummy = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 2%;
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: white;
`;

export const FontBold = styled.Text`
  font-weight: 400;
`;

export const FontBoldSecond = styled.Text`
  font-weight: 500;
`;

export const FontBoldOne = styled.Text`
  font-weight: 600;
`;

export const LogoImageHolder = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 100px;
  margin-bottom: 10%;
`;

export const LogoImage = styled.Image`
  resize-mode: stretch;
  width: 250px;
  height: 100px;
`;

export const LogoImageTwo = styled.Image`
  resize-mode: stretch;
  width: 150px;
  height: 50px;
  margin-bottom: 10%;
  position: absolute;
  bottom: 0;
`;

export const StandardColor: TextStyle = {
  color: '#2c075a',
};

export const IconStyle: TextStyle = {
  ...StandardColor,
  fontSize: 24,
};

export const ForgotHeaderText = styled.Text`
  width: 100%;
  text-align: center;
  color: #2c075a;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5%;
`;
