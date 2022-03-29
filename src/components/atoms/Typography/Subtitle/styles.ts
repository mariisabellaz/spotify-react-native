import styled from 'styled-components/native';

export const Label = styled.Text`
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-family: ${({ theme }) => theme.FONTS.SUBTITLE};
    font-size: ${({ theme }) => theme.SIZES.SUBTITLE}px;
`;