import styled from 'styled-components/native';

export const Label = styled.Text`
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: ${({ theme }) => theme.SIZES.TITLE}px;
`;