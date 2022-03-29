import React from 'react';

import { Container, InfoWrapper, Wrapper, IconPlay } from './styles';
import { Thumbnail } from '@components/atoms/Thumbnail';
import { Paragraph } from '@components/atoms/Typography/Paragraph';
import { Pressable } from '@components/atoms/Pressable';

import { useAudio } from '@hooks/useAudio';

type MenuProps = {
    name: string;
    artist: string;
    thumbnail: string;
    preview_url: string;
}

type BottomMenuProps = {
    menu: MenuProps;
}

export function BottomMenu( { menu } : BottomMenuProps ){
    const { name, artist, thumbnail, preview_url } = menu;
    const { toggleTrack, isPlay } = useAudio();

    return (
        <Container>
            <Wrapper>
                <Thumbnail size={56} source={thumbnail}/>
                <InfoWrapper>
                    <Paragraph 
                        label={name}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        bold
                    />
                    <Paragraph label={artist} />
                </InfoWrapper>
            </Wrapper>
            <Pressable onPress={() => toggleTrack(preview_url)}>
                <IconPlay name={ isPlay ? 'pause': 'play' } />
            </Pressable>
        </Container>
    );
} 