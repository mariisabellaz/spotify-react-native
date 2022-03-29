import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(({ theme }) => ({
    contentContainerStyle: { padding: theme.SIZES.PADDING },
    showsVerticalScrollIndicator: false 
}))``;
