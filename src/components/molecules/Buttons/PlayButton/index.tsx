import React from 'react';
import { useTheme } from 'styled-components';

import { Container, ButtonRepeat, Button } from './styles';
import { Heading } from '@components/atoms/Typography/Heading';
import { Icon } from '@components/atoms/Icon';

export function PlayButton(){
    const { COLORS } = useTheme();
    
    return (
        <Container>
            <Button>
                <Icon name="caretright" size={32} type="antDesign"/>
            </Button>
        </Container>
    );
}