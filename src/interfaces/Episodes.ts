export interface EpisodesDTO {
    href: string;
    items: IEpisodesItems[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
}

export interface IEpisodesItems {
    audio_preview_url: string;
    description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: IEpisodesExternalUrls;
    href: string;
    html_description: string;
    id: string;
    images: IEpisodesImages[];
    is_externally_hosted: boolean;
    is_playable: boolean;
    language: string;
    languages: string[];
    name: string;
    release_date: string;
    release_date_precision: string;
    type: string;
    uri: string;
}

export interface IEpisodesExternalUrls {
    spotify: string;
}

interface IEpisodesImages {
    height: number | null;
    url: string;
    width: number | null;
}