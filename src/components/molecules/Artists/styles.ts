import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 12px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    width: 75%;
`;

