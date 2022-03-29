import React from 'react';
import { TextProps } from 'react-native';

import { Label } from './styles';

export type ParagraphProps = TextProps & {
    label: string;
    bold?: boolean;
    color?: string
}

export function Paragraph( { label, bold = false, color, ...rest } : ParagraphProps ){
    return <Label color={color} bold={bold} {...rest}> {label} </Label>;
}