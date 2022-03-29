import React from 'react';

import { Container, Content } from './styles';
import { Sessions } from '@components/templates/Session';
import { DailyMixes } from '@components/templates/DailyMixes';
import { ButtonSettings } from '@components/molecules/Buttons/ButtonSettings';
import { Heading } from '@components/atoms/Typography/Heading';

import useGreetings from '@hooks/useGreetings';
import { RADIO, VIBES, YOU } from '@utils/mocks';

export function Dashboard(){
    const { greetings } = useGreetings();

    return (
        <Container>
            <Content>
                <ButtonSettings />
                <Heading label={greetings} />
                <DailyMixes/>
                <Sessions data={RADIO} title='Radios'/>
                <Sessions data={VIBES} title='Good Vibes'/>
                <Sessions data={YOU} title='100% for You'/>
            </Content>
        </Container>
    );
}