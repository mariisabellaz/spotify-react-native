import styled from 'styled-components/native';

type TextProps = {
    color?: string;
}

export const Label = styled.Text<TextProps>`
    color: ${({ theme, color }) => color ? color : theme.COLORS.TITLE};
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-size: ${({ theme }) => theme.SIZES.CAPTION}px;
`;