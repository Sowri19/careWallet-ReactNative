import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const TickIcon = styled(AntDesign)`
  font-size: 100px;
  color: green;
`;

const TickHolder = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 100px;
  margin-bottom: 20%;
`;

export { TickIcon, TickHolder };
