import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    flex-direction: row;
    align-items: center;

    margin-bottom: 12px;
`;

export const InfoWrapper = styled.View`
    margin-left: ${({theme}) => theme.SIZES.PADDING}px;
`;

