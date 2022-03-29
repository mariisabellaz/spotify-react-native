export interface TracksDTO {
    href: string;
    items: ITracksItems[] | ITracksItemsSearch[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
}

export interface ITracksItems {
    added_at: string;
    added_by: ITracksAdded;
    is_local: boolean;
    primary_color: string;
    track: ITracks;
}

export interface ITracksItemsSearch {
    album: ITracksAlbum;
    artists: ITracksArtists[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ITracksExternalIds;
    external_urls: ITracksExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface ITracksAdded {
    external_urls: ITracksExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface ITracks {
    album: ITracksAlbum;
    artists: ITracksArtists[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ITracksExternalIds;
    external_urls: ITracksExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

interface ITracksExternalUrls {
    spotify: string;
}

interface ITracksAlbum {
    album_type: string;
    artists: ITracksArtists[];
    available_markets: string[];
    external_urls: ITracksExternalUrls;
    href: string;
    id: string;
    images: ITracksImages[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

interface ITracksImages {
    height: number | null;
    url: string;
    width: number | null;
}

interface ITracksArtists {
    external_urls: ITracksExternalUrls,
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

interface ITracksExternalIds {
    isrc: string;
}