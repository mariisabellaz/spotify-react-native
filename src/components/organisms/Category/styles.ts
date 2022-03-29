import styled from 'styled-components/native';

export const Container = styled.View`
    padding-left: ${({ theme }) => theme.SIZES.PADDING}px;

    flex-direction: row;
    justify-content: space-between;
`;

export const Thumbnail = styled.Image`
    width: 80px;
    height: 80px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`;

export const Wrapper = styled.View`
    max-width: 70px;
`;