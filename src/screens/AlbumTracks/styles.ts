import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    start: { x: 0.5, y: 0 },
    end: { x:0.5, y:1 },
}) )`
    flex: 1;
    padding-top: ${ getStatusBarHeight() + 20}px;
`;

export const Wrapper = styled(BorderlessButton)`
    padding-left: ${({ theme }) => theme.SIZES.PADDING}px;
`;