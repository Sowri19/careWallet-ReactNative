import styled from "styled-components/native";

// Styled Components
const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  margin: 20px;
  border-radius: 20px;
  border-color: grey;
`;

const FieldsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const TitleText = styled.Text`
  font-size: 30px;
  color: darkblue;
`;

const SubtitleText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
`;

const CustomButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #00008B;
  height: 60px;
  margin: 12px 0;
  border-width: 0.5px;
  border-radius: 10px;
  padding: 10px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;

const CustomImage = styled.Image`
  resize-mode: stretch;
  width: 250px;
  height: 100px;
`;

const CustomTextInput = styled.TextInput`
  height: 60px;
  margin: 12px 0;
  border-width: 0.5px;
  border-radius: 5px;
  padding-left: 10px;
  border-color: darkblue;
`;

const TextLabel = styled.Text`
  font-size: 20px;
  color: darkblue;
`;

const BottomText = styled.Text`
  font-size: 15px;
  color: darkblue;
  font-weight: bold;
`;

const BottomTextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export {
    SafeArea,
    FieldsContainer,
    TitleText,
    SubtitleText,
    CustomButton,
    ButtonText,
    CustomImage,
    CustomTextInput,
    TextLabel,
    BottomText,
    BottomTextContainer
}