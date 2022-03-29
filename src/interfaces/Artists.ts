export interface ArtistsDTO {
    href: string;
    items: IArtistsItems[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
}

export interface IArtistsItems {
    external_urls: IArtistsExternalUrls;
    followers: IArtistsFollowers;
    genres: string[],
    href: string;
    id: string;
    images: IArtistsImages[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export interface IArtistsExternalUrls {
    spotify: string;
}

export interface IArtistsFollowers {
    href: string | null;
    total: number;
}

interface IArtistsImages {
    height: number | null;
    url: string;
    width: number | null;
}