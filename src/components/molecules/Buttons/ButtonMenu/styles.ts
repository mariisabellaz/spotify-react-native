import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

type ButtonProps = {
    isActived: boolean;
}
export const Container = styled(RectButton)<ButtonProps>`
    width: 100px;
    height: 32px;

    justify-content: center;
    align-items: center;

    background-color: ${({ isActived }) => isActived ? '#13873F' : 'transparent'};
    border-color: ${({ theme, isActived }) => isActived 
        ? theme.COLORS.PRIMARY 
        : theme.COLORS.LINE
    };
    border-width: 1px;
    border-radius: 16px;

    margin-right: 12px;
`;