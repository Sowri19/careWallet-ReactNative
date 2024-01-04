import styled from 'styled-components/native';
import { stylePrimaryColor } from "../../../Styles/AppWideConstants/Styles";

const WelcomeText = styled.Text`
  font-size: 20px;
  color: ${stylePrimaryColor};
  margin-bottom: 5%;
`;

const SignText = styled.Text`
  font-size: 30px;
  color: ${stylePrimaryColor};
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
  color: ${stylePrimaryColor};
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
