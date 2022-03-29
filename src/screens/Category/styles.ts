import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    padding-top: ${({ theme }) =>  getStatusBarHeight() + theme.SIZES.PADDING}px;
`;

export const Content = styled.View`
    padding: 0 ${({ theme }) =>  theme.SIZES.PADDING}px;
`;
