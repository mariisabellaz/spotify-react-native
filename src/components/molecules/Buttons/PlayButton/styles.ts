import styled from 'styled-components/native';

export const Button = styled.View`
    height: 60px;
    width: 60px;
    border-radius: ${ 60 / 2 }px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY };
`;

export const Container = styled.View`
    height: 60px;
    width: 60px;
`;

export const ButtonRepeat = styled.View`
    height: 24px;
    width: 24px;
    border-radius: ${ 24 / 2 }px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.TITLE };

    position: absolute;
    bottom: 0;
    right: 0;
`;