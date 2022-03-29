import React from 'react';
import { TextProps } from 'react-native';

import { IconAntDesign, IconFeather } from './styles';

type Props = TextProps & {
    name: string;
    size?: number;
    color?: string;
    type?: 'feather' | 'antDesign';
}

export function Icon( { name, size, color, type = 'feather' } : Props ) {
    return (
        <>
            { type === 'antDesign' 
                ? <IconAntDesign name={name} size={size} color={color} /> 
                : <IconFeather name={name} size={size} color={color} /> 
            }
        </>
    );
}
