import styled from 'styled-components/native';
import { Ionicons } from "@expo/vector-icons";

// Styled components
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  margin: 30px 20px;
  border-radius: 20px;
  border-color: grey;
`;

const LoginFields = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const LogoImage = styled.Image`
  resize-mode: stretch;
  width: 250px;
  height: 100px;
`;

const WelcomeText = styled.Text`
  font-size: 30px;
  color: darkblue;
`;

const PasswordSection = styled.View`
  flex-direction: row;
  height: 60px;
  margin-top: 12px;
  margin-bottom: 12px;
  border-width: 0.5px;
  border-radius: 5px;
  padding-left: 10px;
  border-color: darkblue;
`;

const PasswordInput = styled.TextInput`
  flex: 1;
`;

const EyeIcon = styled(Ionicons)`
  padding: 20px;
`;

const RememberMe = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #00008B;
  height: 60px;
  margin-top: 12px;
  margin-bottom: 12px;
  border-width: 0.5px;
  border-radius: 10px;
  padding: 10px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;

const RegisterSection = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export {
    Container,
    LoginFields,
    LogoImage,
    WelcomeText,
    PasswordSection,
    PasswordInput,
    EyeIcon,
    RememberMe,
    RememberMeCheckbox,
    BelowInputText,
    Button,
    ButtonText,
    RegisterSection,
};
