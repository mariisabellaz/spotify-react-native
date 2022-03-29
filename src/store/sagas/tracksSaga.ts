import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { tracksActions } from '@store/slices/tracksSlice';
import { TracksDTO } from '@interfaces/Tracks';

import api from '@services/api';

export function* getTracks({ payload: { playlist }}: { payload: { playlist: string }}) {
    try {
        const response: AxiosResponse<TracksDTO> = yield call(api.get,`playlists/${playlist}`);
        const { data } = response;
        
        yield put(tracksActions.getTracksSuccess(data));
      
    } catch (error) {
        yield put(tracksActions.getTracksSuccess({error: error}));
        console.error(error);
    }
}

export default function* watcher() {
  yield all([takeLatest(tracksActions.getTracks().type, getTracks)]);
}
