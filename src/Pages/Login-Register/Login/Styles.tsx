import styled from 'styled-components/native';
import { styleFontSize18, stylePrimaryColor } from "../../../Styles/AppWideConstants/Styles";

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

export const CheckBoxContainer = styled.View`
  width: ${styleFontSize18}px;
  height: ${styleFontSize18}px;
  border-width: 0.5px;
  border-color: ${stylePrimaryColor};
  margin-right: 3px;
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
