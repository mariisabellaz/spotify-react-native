import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Container, Wrapper, ArtistWrapper, BakcIcon } from './styles';
import { Thumbnail } from '@components/atoms/Thumbnail';
import { Icon } from '@components/atoms/Icon';
import { Subtitle } from '@components/atoms/Typography/Subtitle';
import { Paragraph } from '@components/atoms/Typography/Paragraph';

import { IPlaylistItems } from '@interfaces/Playlists';

type HeaderProps = {
    playlist: IPlaylistItems;
};

export function HeaderAlbum({ playlist } : HeaderProps){
    const { COLORS } = useTheme();
    const { images, name, owner, description } = playlist

    return (
        <Container>
            <Wrapper>
                <Thumbnail 
                    source={images[0].url}
                    size={260}
                />
            </Wrapper>
            <Subtitle label={name}/>
            <ArtistWrapper>
                <MaterialCommunityIcons name="spotify" size={24} color={COLORS.PRIMARY} />
                <Paragraph label={owner.display_name} bold/>
            </ArtistWrapper>
            <Paragraph label={description} />
        </Container>
    );
}