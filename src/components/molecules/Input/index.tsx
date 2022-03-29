import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Container } from './styles';
import { CommonInput } from '@components/atoms/Input';

interface Props extends TextInputProps {
    control: Control
    name: string;
}

export function Input({control, name, ...rest} : Props) {
    return (
        <Container>
            <Controller
                control={control}
                name={name}
                render={({ field: {onChange, onBlur, value}}) => (
                    <CommonInput
                        onChangeText={onChange}
                        value={value}
                        onBlur={onBlur}
                        {...rest}
                    />
                )}
            />
        </Container>
    );
}
