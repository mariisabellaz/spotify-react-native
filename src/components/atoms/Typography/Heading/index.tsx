import React from 'react';
import { TextProps } from 'react-native';

import { Label } from './styles';

type HeadingProps = TextProps & {
    label: string;
}

export function Heading( { label,  ...rest } : HeadingProps ){
    return <Label {...rest}> {label} </Label>;
}