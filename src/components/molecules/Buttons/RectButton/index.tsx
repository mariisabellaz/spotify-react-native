import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Load } from './styles';
import { Heading } from '@components/atoms/Typography/Heading';

type Props = RectButtonProps & {
    title: string;
    isLoading?: boolean;
    enabled?: boolean;
}

export function PlayButton( {
    title,
    isLoading = false, 
    enabled = true,
    ...rest
} : Props ){
    
    return (
        <Container enabled={enabled} {...rest}>
            { isLoading ? <Load/> : <Heading label={title} /> }
        </Container>
    );
}