import React from 'react';
import { TextProps } from 'react-native';

import { Label } from './styles';

type SubtitleProps = TextProps & {
    label: string;
}

export function Subtitle( { label,  ...rest } : SubtitleProps ){
    return <Label {...rest}> {label} </Label>;
}