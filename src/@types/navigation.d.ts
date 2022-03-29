import { IPlaylistItems } from '@interfaces/Playlists';
import { ITracksItems } from '@src/interfaces/Tracks';

export type PlaylistProps = {
    category: string;
    background: string;
};

export type AlbumTracksProps = {
    playlist: IPlaylistItems;
    background: string;
}

export type PlayerSongsProps = {
    track: ITracksItems;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            playlist: PlaylistProps;
            category: undefined;
            albumTracks: AlbumTracksProps;
            playerSongs: PlayerSongsProps;
        }
    }
}