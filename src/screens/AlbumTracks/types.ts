import type { ParamListBase } from '@react-navigation/routers';
import { RouteProp } from '@react-navigation/native';

import { IPlaylistItems } from '@src/interfaces/Playlists';

type RouterParamsType = {
    playlist: IPlaylistItems;
    background: string;
}

export interface RouterParams extends RouteProp<ParamListBase> {
  params: RouterParamsType
}