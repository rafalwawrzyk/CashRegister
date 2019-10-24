import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'cartReducer' ]
};

const rootReducer = persistReducer(persistConfig, combineReducers({ userReducer, cartReducer, directoryReducer,shopReducer }))

export default rootReducer;
