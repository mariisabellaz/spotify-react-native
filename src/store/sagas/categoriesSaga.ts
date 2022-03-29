import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { categoriesActions } from '@store/slices/categoriesSlice';
import { CategoriesDTO } from '@interfaces/Categories';
import { PlaylistDTO } from '@interfaces/Playlists';

import api from '@services/api';

export function* getCategories() {
    try {
      const response: AxiosResponse<CategoriesDTO> = yield call(api.get,'browse/categories');
      const { data } = response;
      
      yield put(categoriesActions.getCategoriesSuccess(data));
    
    } catch (error) {
        yield put(categoriesActions.getCategoriesFailure({error: error}));
        console.error(error);
    }
}

export function* getPlaylist({ payload: { category }}: { payload: { category: string }}) {
    try {
        const response: AxiosResponse<PlaylistDTO> = yield call(api.get,`browse/categories/${category}/playlists`);
        const { data } = response;
        console.log('data', data)
        
        yield put(categoriesActions.getPlaylistSuccess(data));
      
    } catch (error) {
          yield put(categoriesActions.getPlaylistFailure({error: error}));
          console.error(error);
    }
}

export default function* watcher() {
  yield all([takeLatest(categoriesActions.getCategories().type, getCategories)]);
  yield all([takeLatest(categoriesActions.getPlaylist().type, getPlaylist)]);
}
