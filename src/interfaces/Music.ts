export interface MusicsDTO {
    href: string;
    items: IMusicsItems[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
}

export interface IMusicsItems {
    album: IMusicsAlbum;
    artists: IMusicsArtists[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: IMusicsExternalIds;
    external_urls: IMusicsExternalUrls;
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

interface IMusicsExternalUrls {
    spotify: string;
}

interface IMusicsAlbum {
    album_type: string;
    artists: IMusicsArtists[];
    available_markets: string[];
    external_urls: IMusicsExternalUrls;
    href: string;
    id: string;
    images: IMusicsImages[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

interface IMusicsImages {
    height: number | null;
    url: string;
    width: number | null;
}

interface IMusicsArtists {
    external_urls: IMusicsExternalUrls,
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

interface IMusicsExternalIds {
    isrc: string;
}