import styled from 'styled-components/native';

export const Container = styled.View`
    padding: ${({ theme }) => theme.SIZES.PADDING}px;
`;

export const Header = styled.View`
    margin-bottom: 24px;
`;

export const Wrapper = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true
})``;