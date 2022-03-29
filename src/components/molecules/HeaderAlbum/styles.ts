import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View``;

export const Wrapper = styled.View`
    justify-content: center;
    align-items: center;

    margin-bottom: 24px;
`;

export const ArtistWrapper = styled.View`
    flex-direction: row;
    align-items: center;

    margin: 10px 0;
`;

export const BakcIcon = styled(BorderlessButton)`
    position: absolute;
    left: 0;
    top: -10px;
`;
