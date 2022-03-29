import React from 'react';
import { ImageProps } from 'react-native';

import { Container, Wrapper, Thumbnail } from './styles';
import { Paragraph } from '@components/atoms/Typography/Paragraph';
import { Card } from '@components/atoms/Card';

import { DailyMixDTO } from '@interfaces/DailyMix';

type DailyMixProps = ImageProps & {
    data: DailyMixDTO;
};

export function DailyMix( { data, ...rest } : DailyMixProps ){
    const { name, thumbnail } = data;

    return (
        <Card>
            <Container>
                <Thumbnail source={thumbnail}/>
                <Wrapper>
                    <Paragraph 
                        label={name} 
                        ellipsizeMode="tail" 
                        numberOfLines={2} 
                        style={{textAlign: 'left'}}
                        bold
                    />
                </Wrapper>
            </Container>
        </Card>
    );
}