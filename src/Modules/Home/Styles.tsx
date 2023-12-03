import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const ScreenWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  margin: 40px 20px;
  border-radius: 40px;
  border-color: grey;
`;

const VerificationFields = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const StyledImage = styled.Image`
  resize-mode: stretch;
  width: 250px;
  height: 100px;
`;

const TickIcon = styled(AntDesign)`
  font-size: 100px;
  color: green;
  padding-left: 80px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const ButtonArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 0;
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

export {
  ScreenWrapper,
  VerificationFields,
  StyledImage,
  TickIcon,
  ButtonArea,
  StyledButton,
  ButtonText,
};
