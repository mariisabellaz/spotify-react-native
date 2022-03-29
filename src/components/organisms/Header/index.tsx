import React from 'react';

import { Container, Wrapper } from './styles';
import { Header as HeaderMenu } from '@components/molecules/Header';
import { TopMenu } from '@components/molecules/TopMenu';

import { MenuDTO } from '@interfaces/Searches';

interface FormData {
    search: string;
}

type HeaderProps = {
    getData: ( form: FormData ) => void;
    onClickFilter: ( item: MenuDTO ) => void;
}

export function Header({ getData, onClickFilter } : HeaderProps) {
    return (
        <Container>
            <Wrapper>
                <HeaderMenu getData={getData} />
            </Wrapper>
            <TopMenu onClick={(item) => onClickFilter(item)} />
        </Container>
    );
}