
import categories, { categoriesState } from './categoriesSlice';
import tracks, { tracksState } from './tracksSlice';
import search, { searchState } from './searchSlice';

export const globalState = {
  categories: categoriesState,
  tracks: tracksState,
  search: searchState
};

export default {
  categories,
  tracks,
  search
};
