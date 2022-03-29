import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

type ContainerProps = {
    enabled?: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
    flex: 1;
    max-height: 56px;
    min-height: 56px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY };
    opacity: ${({ enabled }) => !enabled ? 0.5 : 1};
`;

export const Load = styled.ActivityIndicator.attrs( ({ theme }) => ({
    color: theme.COLORS.TITLE
}))``;