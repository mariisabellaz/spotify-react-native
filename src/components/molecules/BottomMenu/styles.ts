import styled from 'styled-components/native';
import { Foundation } from '@expo/vector-icons';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 56px;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.MENU_BOTTOM};
    padding-right: ${({ theme }) => theme.SIZES.PADDING}px;

    border-top-color: ${({ theme }) => theme.COLORS.LINE};
    border-top-width: 2px;
    border-bottom-color: ${({ theme }) => theme.COLORS.SECONDARY};
    border-bottom-width: 1px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
`;

export const IconWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const IconPlay = styled(Foundation)`
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const InfoWrapper = styled.View`
    justify-content: center;
    width: 80%;
`;