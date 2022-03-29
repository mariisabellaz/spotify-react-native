import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { searchActions } from '@store/slices/searchSlice';
import { TracksDTO } from '@interfaces/Tracks';
import { IPlaylistItems } from '@interfaces/Playlists';

import api from '@services/api';

export function* getSearches({ payload: { search }}: { payload: { search: string }}) {
    try {
        const response: AxiosResponse<TracksDTO> = yield call(
            api.get,`search?type=playlist,track,episode,artist&include_external=audio&q=${search}&limit=20`
        );
        const { data } = response;

        yield put(searchActions.getSearchesSuccess(data));
      
    } catch (error) {
        yield put(searchActions.getSearchesFailure({error: error}));
        console.error(error);
    }
}

export default function* watcher() {
  yield all([takeLatest(searchActions.getSearches().type, getSearches)]);
}
