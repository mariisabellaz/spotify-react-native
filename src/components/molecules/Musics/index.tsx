import React from 'react';

import { Container, Wrapper } from './styles';
import { Paragraph } from '@components/atoms/Typography/Paragraph';
import { Caption } from '@components/atoms/Typography/Caption';
import { Icon } from '@components/atoms/Icon';
import { Thumbnail } from '@components/atoms/Thumbnail';

import { IMusicsItems } from '@interfaces/Music';

type MusicsProps = {
    track: IMusicsItems;
    onClick: () => void;
}

export function Musics({ track, onClick } : MusicsProps) {
    const { name, artists, album} = track;

    const getArtists = artists.map(item => {
        return item.name;
    });

    return (
        <Container onPress={onClick} activeOpacity={1}>
            <Thumbnail 
                size={60} 
                source={album?.images[0]?.url}
            />
            <Wrapper>
                <Paragraph 
                    label={name}
                    style={{ lineHeight: 24 }}
                    bold
                />
                <Caption 
                    label={`${getArtists.join(', ')}`} 
                    numberOfLines={1} 
                    ellipsizeMode="tail"
                />
            </Wrapper>
            <Icon name="right" size={20} type="antDesign" />
        </Container>
    );
}
