/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  tracks: [],
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },

    getTracks(state) {
      state.isLoading = true;
    },
    getTracksSuccess(state, { payload }) {
      state.isLoading = false;
      state.tracks = payload.tracks;
    },
    getTracksFailure(state, { payload }) {
      state.isLoading = false;
      state.error = payload.error;
    }
  }
});

export const tracksState = initialState;
export const tracksActions = tracksSlice.actions;
export default tracksSlice.reducer;
