import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(({ theme }) => ({
    contentContainerStyle: { paddingHorizontal: theme.SIZES.PADDING },
    showsVerticalScrollIndicator: false 
}))``;

export const List = styled.View`
    margin: 24px 0;
`;