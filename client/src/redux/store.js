import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

const middlewares = [ sagaMiddleware ];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
export default store;
