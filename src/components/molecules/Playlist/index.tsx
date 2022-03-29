import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, InfoWrapper } from './styles';
import { Thumbnail } from '@components/atoms/Thumbnail';
import { Paragraph } from '@components/atoms/Typography/Paragraph';

import { IPlaylistItems } from '@interfaces/Playlists';

type PlaylistProps = RectButtonProps & {
    playlist: IPlaylistItems;
    onClick: () => void;
}

export function Playlist({ playlist, onClick} : PlaylistProps) {
    const { images, name } = playlist;

    return (
        <Container onPress={onClick}>
           <Thumbnail 
                size={60} 
                source={images[0]?.url}
                circle
            />
            <InfoWrapper>
                <Paragraph 
                    label={name} 
                    style={{ lineHeight: 24 }}
                    bold
                />
            </InfoWrapper>
        </Container>
    );
}
