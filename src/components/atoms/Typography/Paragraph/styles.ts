import styled from 'styled-components/native';

type TextProps = {
    bold?: boolean;
    color?: string;
}

export const Label = styled.Text<TextProps>`
    color: ${({ theme, color }) => color ? color : theme.COLORS.TITLE};
    font-family: ${({ theme, bold }) => bold ? theme.FONTS.SUBTITLE : theme.FONTS.TEXT};
    font-size: ${({ theme }) => theme.SIZES.PARAGRAPH}px;
`;