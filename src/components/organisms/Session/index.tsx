import React from 'react';

import { Container, Thumbnail, Wrapper } from './styles';
import { Caption } from '@components/atoms/Typography/Caption';
import { Subtitle } from '@components/atoms/Typography/Subtitle';
import { Icon } from '@components/atoms/Icon';

import { SessionsDTO } from '@interfaces/Sessions';

type SessionProps = {
    data: SessionsDTO;
};

export function Session( { data } : SessionProps ){
    const { thumbnail, description } = data;
    return (
        <Container>
            <Thumbnail source={thumbnail} />
            <Wrapper>
                <Caption
                    label={description}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                />
            </Wrapper>
        </Container>
    );
}