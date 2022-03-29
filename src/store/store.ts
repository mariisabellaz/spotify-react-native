import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import sagas from '@store/sagas';
import slices from '@store/slices';

const rootReducer = combineReducers(slices);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...(__DEV__ ? [logger] : [])]
});

sagaMiddleware.run(sagas);

export default store;