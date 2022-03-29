import styled, { css } from 'styled-components/native';

type ThumbnailProps = {
    size: number;
    circle?: boolean;
}

export const PlaceholderImage = styled.Image<ThumbnailProps>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;

    ${({ circle, size }) => circle && css`
       border-radius: ${size / 2}px;
    `};
`;

export const Placeholder = styled.View`
    justify-content: center;
    align-items: center;
`;