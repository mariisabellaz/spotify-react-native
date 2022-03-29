import { PlaylistDTO } from '@interfaces/Playlists';
import { MusicsDTO } from '@interfaces/Music';
import { ArtistsDTO } from '@interfaces/Artists';
import { EpisodesDTO } from '@interfaces/Episodes';

export interface SearchsDTO {
    playlists: PlaylistDTO;
    tracks: MusicsDTO;
    artists: ArtistsDTO
    episodes: EpisodesDTO
}

export interface MenuDTO {
    id: string;
    type: 'playlist' | 'track' | 'episode' | 'artist';
    name: string;
}
