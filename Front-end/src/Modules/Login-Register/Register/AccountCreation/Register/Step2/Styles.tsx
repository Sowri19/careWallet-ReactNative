import styled from "styled-components/native";

const ScreenWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  margin: 20px;
  border-radius: 20px;
  border-color: darkblue;
`;

const RegisterFields = styled.View`
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

const StyledButton = styled.TouchableOpacity`
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

const PasswordInput = styled.TextInput`
  flex: 1;
`;

const EyeIcon = styled.View`
  padding: 20px;
`;

const RememberMe = styled.View`
  flex-direction: row;
  justify-content: space-between;
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

const DatePicker = styled.View`
  height: 120px;
  width: 250px;
`;

const DatePickerButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #00008b;
  height: 40px;
  margin-top: 6px;
  margin-bottom: 12px;
  border-width: 0.5px;
  border-radius: 10px;
  padding: 10px;
`;

const DatePickerText = styled.Text`
  font-size: 15px;
  color: white;
`;

export {
  ScreenWrapper,
  RegisterFields,
  StyledImage,
  WelcomeText,
  PageTitle,
  InputText,
  StyledInput,
  StyledButton,
  ButtonText,
  PasswordSection,
  PasswordInput,
  EyeIcon,
  RememberMe,
  BelowInputText,
  RegisterText,
  RegisterSection,
  DatePicker,
  DatePickerButton,
  DatePickerText,
};
