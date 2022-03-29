import { all } from 'redux-saga/effects';

import categories from './categoriesSaga';
import tracks from './tracksSaga';
import search from './searchSaga';

function* rootSaga() {
  yield all([
    categories(),
    tracks(),
    search()
  ]);
}
export default rootSaga;
