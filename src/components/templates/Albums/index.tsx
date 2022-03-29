import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, List } from './styles';
import { Album } from '@components/organisms/Album';
import { Tracks } from '@components/molecules/Tracks';
import { Loading } from '@components/atoms/Loading';

import { IPlaylistItems } from '@interfaces/Playlists';
import { ITracksItems } from '@interfaces/Tracks';

type PlaylistProps = {
    playlist: IPlaylistItems;
    tracks: ITracksItems[]
    onPlay: (track: ITracksItems) => void;
    isLoading: boolean
}

export function Albums({ isLoading, playlist, tracks, onPlay } : PlaylistProps ){

    function handlePlayer(track : ITracksItems){
        onPlay(track);
    }

    return (
            <>
                <Container>
                    <Album playlist={playlist} />
                    { isLoading
                        ? <Loading /> 
                        : <List>
                            { tracks && (
                                <>
                                    { tracks.map((item, index) => {
                                        return (
                                            <Tracks 
                                                data={item} 
                                                onClick={() => handlePlayer(item) } 
                                                key={String(item.added_at + index)}
                                            />
                                        )
                                    })}
                                </>
                            )}
                          </List>
                    }
                </Container>
            </>
    );
}
