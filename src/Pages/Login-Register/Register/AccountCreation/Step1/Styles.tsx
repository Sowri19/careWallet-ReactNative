import styled from 'styled-components/native';
import { stylePrimaryColor } from '../../../../../Styles/AppWideConstants/Styles';

const SignText = styled.Text`
  font-size: 15px;
  color: ${stylePrimaryColor};
  margin-bottom: 10%;
  align-self: center;
`;

const BelowInputText = styled.Text`
  font-size: 15px;
  color: ${stylePrimaryColor};
`;

const RegisterSection = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export { BelowInputText, RegisterSection, SignText };
