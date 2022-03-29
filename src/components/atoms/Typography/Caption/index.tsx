import React from 'react';
import { TextProps } from 'react-native';

import { Label } from './styles';

type CaptionProps = TextProps & {
    label: string;
    color?: string;
}

export function Caption( { label, color, ...rest } : CaptionProps ){
    return <Label color={color} {...rest}> {label} </Label>;
}