import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT_BACKGROUND,
    start: { x: 0, y: -1 },
    end: { x: 0.5, y: 0.5 },
}))`
    flex: 1;
    padding-top: ${({ theme }) =>  getStatusBarHeight() + theme.SIZES.PADDING}px;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})``;