import styled from 'styled-components/native';

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

const RememberMe = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 10%;
`;

const RememberMeCheckbox = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
`;

const BelowInputText = styled.Text`
  font-size: 15px;
  color: darkblue;
`;

const RegisterSection = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export {
  WelcomeText,
  RememberMe,
  RememberMeCheckbox,
  BelowInputText,
  RegisterSection,
  SignText,
};
