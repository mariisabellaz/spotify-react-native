import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';

type PressableProps = BorderlessButtonProps & {
    children: React.ReactNode;
}

export function Pressable( { children, ...rest } : PressableProps ){
    return (
        <Container {...rest}>
            {children}
        </Container>
    );
}