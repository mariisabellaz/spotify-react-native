import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY};
    padding-top: ${({ theme }) =>  getStatusBarHeight() + theme.SIZES.PADDING}px;
`;

export const Wrapper = styled.View`
    padding: ${({ theme }) => theme.SIZES.PADDING}px;
`;