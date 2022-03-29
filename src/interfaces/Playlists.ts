export interface PlaylistDTO {
    href: string;
    items: IPlaylistItems[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
}

export interface IPlaylistItems {
    collaborative: boolean;
    description: string;
    external_urls: IPlaylistExternalUrls;
    href: string;
    id: string;
    images: IPlaylistImages[];
    name: string;
    owner: IPlaylistOwner;
    primary_color: string | null;
    public: null;
    snapshot_id: string;
    tracks: IPlaylistTracks;
    type: string;
    uri: string;
}

interface IPlaylistOwner {
    display_name: string;
    external_urls: IPlaylistExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
}

interface IPlaylistTracks {
    href: string;
    total: number;
}

interface IPlaylistExternalUrls {
    spotify: string;
}

interface IPlaylistImages {
    height: number | null;
    url: string;
    width: number | null;
}
