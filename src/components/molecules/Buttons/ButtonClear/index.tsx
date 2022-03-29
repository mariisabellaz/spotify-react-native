import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';
import { Icon } from '@components/atoms/Icon';

type Props = BorderlessButtonProps & {
    color?: string;
}

export function ButtonClear( { color, ...rest } : Props ){
    
    return (
        <Container {...rest}>
           <Icon name='x' size={16} color={color}/>
        </Container>
    );
}