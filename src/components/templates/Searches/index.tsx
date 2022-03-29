import React, { useState } from 'react';

import { Container } from './styles';
import { Header } from '@components/organisms/Header';
import { Artists } from '@components/molecules/Artists';
import { Playlist } from '@components/molecules/Playlist';
import { Musics } from '@components/molecules/Musics';
import { Podcasts } from '@components/molecules/Podcasts';
import { Loading } from '@components/atoms/Loading';
import { Paragraph } from '@components/atoms/Typography/Paragraph';

import { MusicsDTO } from '@interfaces/Music';
import { PlaylistDTO } from '@interfaces/Playlists';
import { EpisodesDTO } from '@interfaces/Episodes';
import { ArtistsDTO } from '@interfaces/Artists';

import { MENU } from '@utils/mocks';

interface FormData {
    search: string;
}

type SearchesProps = {
    playlists: PlaylistDTO;
    tracks: MusicsDTO;
    episodes: EpisodesDTO;
    artists: ArtistsDTO;
    onSend: ( form: FormData ) => void;
    isLoading: boolean;
    title: string;
}

export function Searches({ 
    playlists,
    tracks,
    episodes,
    artists, 
    onSend,
    isLoading,
    title
} : SearchesProps) {

    const [type, setType] = useState(MENU[0].type);
    
    return (
         <>
            <Header 
                getData={(form) => onSend(form)} 
                onClickFilter={(item) => setType(item.type)}
            />
            <Container>
                <Paragraph label={title} style={{ marginTop: 6, marginBottom: 24 }}/>
                { isLoading 
                    ? <Loading />
                    :   <>
                            {type === 'playlist' && playlists && (
                                playlists.items.map((playlist, index) => {
                                    return (
                                        <Playlist 
                                            playlist={playlist} 
                                            onClick={() => {}}
                                            key={String(playlist.id + index)}
                                        />
                                    );
                                })
                            )}
                            {type === 'track' && tracks && (
                                tracks.items.map((track, index) => {
                                    return (
                                        <Musics 
                                            track={track} 
                                            onClick={() => {}} 
                                            key={String(track.id + index)}
                                        />
                                    );
                                })
                            )}
                            {type === 'episode' && episodes && (
                                episodes.items.map((episode, index) => {
                                    return (
                                        <Podcasts 
                                            episode={episode} 
                                            onClick={() => {}} 
                                            key={String(episode.id + index)}
                                        />
                                    );
                                })
                            )}
                            {type === 'artist' && artists && (
                                artists.items.map((artist, index) => {
                                    return (
                                        <Artists 
                                            artist={artist} 
                                            onClick={() => {}} 
                                            key={String(artist.id + index)}
                                        />
                                    );
                                })
                            )}
                        </>
                }
            </Container>
         </>   
    );
}