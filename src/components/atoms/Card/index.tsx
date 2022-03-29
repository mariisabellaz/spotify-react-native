import React, { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';

export type CardProps = RectButtonProps & {
    backgroundColor?: string;
    height?: number;
    border?: number;
    children: ReactNode;
}

export function Card( { backgroundColor, height, border, children, ...rest } : CardProps ){
    return (
       <Container 
          backgroundColor={backgroundColor}
          height={height}
          border={border}
          {...rest}
        >
           { children }
       </Container>
    );
}