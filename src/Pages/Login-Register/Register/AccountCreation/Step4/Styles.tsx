import styled from 'styled-components/native';


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
  DatePicker,
  DatePickerButton,
  DatePickerText,
};
