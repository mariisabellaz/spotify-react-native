import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { CardProps } from '.';

export const Label = styled.Text`
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-size: ${({ theme }) => theme.SIZES.CAPTION}px;
`;

export const Container = styled(RectButton)<CardProps>`
    width: 48%;
    height: ${({ height }) => height ? height : 64}px;
    background-color: ${({ theme, backgroundColor }) => backgroundColor ? backgroundColor : theme.COLORS.SECONDARY};

    border-radius: ${({ theme, border }) =>  border ? border : theme.SIZES.BORDER}px;
    margin-bottom: ${({ theme }) => theme.SIZES.PADDING}px;
`;