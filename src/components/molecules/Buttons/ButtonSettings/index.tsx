import React from 'react';

import { IconWrapper } from './styles';
import { Pressable } from '@components/atoms/Pressable';

import Settings from '@assets/icons/settings.svg';

export function ButtonSettings(){
    return (
        <IconWrapper>
            <Pressable>
                <Settings width={36} height={36} />
            </Pressable>
        </IconWrapper>
    );
}