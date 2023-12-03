import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  margin: 20px;
  border-radius: 20px;
  border-color: grey;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 60px;
`;

const StyledImage = styled.Image`
  resize-mode: stretch;
  width: 250px;
  height: 100px;
`;

const WelcomeText = styled.Text`
  font-size: 30px;
  color: darkblue;
`;

const PageTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
`;

const InputText = styled.Text`
  font-size: 20px;
  color: darkblue;
`;

const StyledInput = styled.TextInput`
  height: 60px;
  margin-top: 12px;
  margin-bottom: 12px;
  border-width: 0.5px;
  border-radius: 5px;
  padding-left: 10px;
  border-color: darkblue;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #00008b;
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
  padding: 10px;
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

const EyeIcon = styled(Ionicons)`
  padding: 20px;
`;

const BelowInputText = styled.Text`
  font-size: 15px;
  color: darkblue;
`;

const RegisterText = styled.Text`
  font-size: 15px;
  color: darkblue;
  font-weight: bold;
`;

const RegisterSection = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export {
  SafeAreaContainer,
  Container,
  StyledImage,
  WelcomeText,
  PageTitle,
  InputText,
  StyledInput,
  Button,
  ButtonText,
  PasswordSection,
  EyeIcon,
  BelowInputText,
  RegisterText,
  RegisterSection,
};
