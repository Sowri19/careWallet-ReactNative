import styled from 'styled-components/native';

const LogoImage = styled.Image`
  resize-mode: stretch;
  width: 250px;
  height: 100px;
  margin-bottom: 10%;
`;

const WelcomeText = styled.Text`
  font-size: 20px;
  color: darkblue;
  margin-bottom: 5%;
`;

const SignText = styled.Text`
  font-size: 30px;
  color: darkblue;
  margin-bottom: 5px;
`;

const BelowInputText = styled.Text`
  font-size: 15px;
  color: darkblue;
`;

const RegisterSection = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export { LogoImage, WelcomeText, BelowInputText, RegisterSection, SignText };
