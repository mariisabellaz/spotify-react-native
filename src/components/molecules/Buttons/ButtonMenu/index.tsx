import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';
import { Paragraph } from '@components/atoms/Typography/Paragraph';

type ButtonMenuProps = RectButtonProps & {
    name: string;
    isActived: boolean;
}

export function ButtonMenu({ name, isActived, ...rest } : ButtonMenuProps){
    return (
        <Container isActived={isActived} {...rest}>
            <Paragraph label={name} bold={isActived} />
        </Container>
    );
}