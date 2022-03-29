/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  categories: [],
  playlists: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
    getCategories(state) {
      state.isLoading = true;
      state.error = null;
    },
    getCategoriesSuccess(state, { payload }) {
      state.isLoading = false;
      state.categories = payload.categories;
    },
    getCategoriesFailure(state, { payload }) {
      state.isLoading = false;
      state.error = payload.error;
    },
    getPlaylist(state) {
      state.isLoading = true;
      state.error = null;
    },
    getPlaylistSuccess(state, { payload }) {
      state.isLoading = false;
      state.playlists = payload.playlists;
    },
    getPlaylistFailure(state, { payload }) {
      state.isLoading = false;
      state.error = payload.error;
    },
  }
});

export const categoriesState = initialState;
export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
