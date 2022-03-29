import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Wrapper } from './styles';
import { Thumbnail } from '@components/atoms/Thumbnail';
import { Paragraph } from '@components/atoms/Typography/Paragraph';
import { Icon } from '@components/atoms/Icon';

import { IArtistsItems } from '@interfaces/Artists';

type ArtistsProps = RectButtonProps & {
    artist: IArtistsItems;
    onClick: () => void;
}

export function Artists({ artist, onClick} : ArtistsProps) {
    const { images, name } = artist;

    return (
        <Container onPress={onClick}>
            <Wrapper>
                <Thumbnail 
                    size={60} 
                    source={images[0]?.url}
                    circle
                />
                <Paragraph 
                    label={name} 
                    style={{ lineHeight: 24, marginLeft: 12 }}
                    numberOfLines={1} 
                    ellipsizeMode="tail"
                    bold
                />
            </Wrapper>
            <Icon name="right" size={20} type="antDesign" />
        </Container>
    );
}
