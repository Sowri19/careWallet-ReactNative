import styled from 'styled-components/native';

const WelcomeText = styled.Text`
  font-size: 20px;
  color: darkblue;
  margin-bottom: 5%;
`;

const SignText = styled.Text`
  font-size: 15px;
  color: darkblue;
  margin-bottom: 10%;
  align-self: center;
`;

const BelowInputText = styled.Text`
  font-size: 15px;
  color: darkblue;
`;

const RegisterSection = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export { WelcomeText, BelowInputText, RegisterSection, SignText };
