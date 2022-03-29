import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${ width - 100}px;
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: 8px;

  align-items: center;
  margin-bottom: 4px;
`;



