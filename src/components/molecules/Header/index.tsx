import React from 'react';
import { useForm } from 'react-hook-form';

import { Container, Wrapper } from './styles';
import { Pressable } from '@components/atoms/Pressable';
import { Paragraph } from '@components/atoms/Typography/Paragraph';
import { Input } from '@components/molecules/Input';

interface FormData {
    search: string;
}

type HeaderProps = {
   getData: ( form: FormData ) => void;
}

export function Header({ getData } : HeaderProps){
    const { control, handleSubmit, reset } = useForm();

    function onClear() {
        reset();
    }

    function onSend(form: FormData) {
        getData(form);
    }

    return (
        <Container>
            <Input
                name="search"
                control={control}
                placeholder="Artists, musics, playlist ou podcasts"
                autoCapitalize="sentences"
                autoCorrect={false}
                returnKeyType="search"
                onSubmitEditing={handleSubmit(onSend)}
            />
            
            <Pressable onPress={onClear}>
                <Paragraph label='Cancel' bold/>
            </Pressable>
        </Container>
    );
}