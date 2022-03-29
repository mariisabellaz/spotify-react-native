import React from 'react';

import { Container } from './styles';
import { HeaderAlbum } from '@components/molecules/HeaderAlbum';
import { IconsAlbum } from '@components/molecules/IconsAlbum';
import { IPlaylistItems } from '@interfaces/Playlists';

type AlbumProps = {
    playlist: IPlaylistItems;
};

export function Album( { playlist} : AlbumProps ){
    return (
        <Container>
            <HeaderAlbum playlist={playlist} />
            <IconsAlbum />
        </Container>
    );
}