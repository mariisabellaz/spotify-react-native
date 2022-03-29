import React from 'react';
import {TextInputProps} from 'react-native';
import { useTheme } from 'styled-components/native';

import {Container} from './styles';

type Props = TextInputProps;

export function CommonInput({...rest} : Props) {
    const { COLORS } = useTheme();

    return <Container {...rest} placeholderTextColor={COLORS.INPUT}/>;
}
