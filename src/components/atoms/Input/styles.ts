import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  color: ${({theme}) => theme.COLORS.TITLE};
  text-align: left;
  font-family: ${({theme}) => theme.FONTS.SUBTITLE};
  font-size: ${({theme}) => theme.SIZES.PARAGRAPH}px;
  
  width: 100%;
  padding: 12px;
`;


