import { MenuDTO } from '@interfaces/Searches';

export const DAILY_MIX = [
    { id: '1', name: 'Daily Mix 1', thumbnail: require('@assets/images/mix/1.jpeg') },
    { id: '2', name: 'Daily Mix 2', thumbnail: require('@assets/images/mix/2.jpeg') },
    { id: '3', name: 'Daily Mix 3', thumbnail: require('@assets/images/mix/3.jpeg') },
    { id: '4', name: 'Daily Mix 4', thumbnail: require('@assets/images/mix/4.jpeg') },
    { id: '5', name: 'Daily Mix 5', thumbnail: require('@assets/images/mix/5.jpeg') },
    { id: '6', name: 'Daily Mix 6', thumbnail: require('@assets/images/mix/6.jpeg') },
]

export const RADIO = [
    { id: '1', description: 'Mumuzinho, Tiee, Grupo Fundo de Quintal e mais', thumbnail: require('@assets/images/radio/1.jpeg') },
    { id: '2', description: 'Projota, Forfun, Raimundos, Armandinho', thumbnail: require('@assets/images/radio/2.jpeg') },
    { id: '3', description: 'LUDMILLA, Gloria Groove, Luiza Sonza, Jão e mais', thumbnail: require('@assets/images/mix/3.jpeg') },
    { id: '4', description: 'Dubdogz, Vintage Culture, Chemical Surf, Bruno Maritni', thumbnail: require('@assets/images/radio/4.jpeg') },
]

export const VIBES = [
    { id: '1', description: 'J Balvin, Ed Sheeran, Dua Lipa, David Guetta', thumbnail: require('@assets/images/vibes/1.jpeg') },
    { id: '2', description: 'Ed Sheeran, Doja Cat, BTS, Justin Bieber', thumbnail: require('@assets/images/vibes/2.jpeg') },
]

export const YOU = [
    { id: '1', description: 'As músicas que você está curtindo agora', thumbnail: require('@assets/images/album/1.jpeg') },
    { id: '2', description: 'Um mix de músicas e notícias feito para você', thumbnail: require('@assets/images/album/2.jpeg') },
]

export const MENU: MenuDTO[] = [
    { id: '1', name: 'Playlists', type: 'playlist' },
    { id: '2', name: 'Musics', type: 'track' },
    { id: '3', name: 'Podcasts', type: 'episode' },
    { id: '4', name: 'Artists', type: 'artist' },
]

