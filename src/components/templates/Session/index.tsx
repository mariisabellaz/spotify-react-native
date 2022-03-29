import React from 'react';

import { Container, Header, Wrapper } from './styles';
import { Session } from '@components/organisms/Session';
import { Subtitle } from '@components/atoms/Typography/Subtitle';

import { SessionsDTO } from '@interfaces/Sessions';

type SessionsProps = {
    data: SessionsDTO[];
    title: string;
}

export function Sessions({ data, title } : SessionsProps ){
    return (
            <Container>
                <Header>
                    <Subtitle label={title} />
                </Header>
                <Wrapper>
                    { data.map((item, index) => {
                        return <Session data={item} key={String(item.id + index)}/>;
                    })}
                </Wrapper>
            </Container>
    );
}