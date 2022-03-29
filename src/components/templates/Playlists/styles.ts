import styled from 'styled-components/native';

export const Container = styled.View`
    padding: ${({ theme }) => theme.SIZES.PADDING}px;
`;

export const Header = styled.View`
    margin-bottom: 24px;
    flex-direction: row;
`;