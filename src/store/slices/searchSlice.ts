/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  search: {},
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },

    getSearches(state) {
      state.isLoading = true;
    },
    getSearchesSuccess(state, { payload }) {
      state.isLoading = false;
      state.search = payload.search;
    },
    getSearchesFailure(state, { payload }) {
      state.isLoading = false;
      state.error = payload.error;
    }
  }
});

export const searchState = initialState;
export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
