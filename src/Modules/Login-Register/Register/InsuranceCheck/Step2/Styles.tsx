import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  border-color: grey;
`;

const RegisterFields = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 60;
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

const PageTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
`;

const MemberIdView = styled.View`
  /* Add any additional styles for MemberIdView here */
`;

const NextButton = styled.TouchableOpacity`
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

const RegisterSection = styled.View`
  flex-direction: row;
  justify-content: center;
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

export {
  Container,
  RegisterFields,
  LogoImage,
  WelcomeText,
  PageTitle,
  MemberIdView,
  NextButton,
  ButtonText,
  RegisterSection,
  BelowInputText,
  RegisterText,
};
