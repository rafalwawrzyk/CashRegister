import {ShopActionsTypesAsync } from './shopActionTypes'

const INITITAL_STATE = {
	collections: null,
	isFetching:false,
	errorMessage:undefined
};

const shopReducer = (state = INITITAL_STATE, action) => {
	switch (action.type) {
		case ShopActionsTypesAsync.FETCH_COLLECTIONS_START:
			return {
				...state,
				isFetching:true
			}
		case ShopActionsTypesAsync.FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				collections:action.payload,
				isFetching:false
			}
		case ShopActionsTypesAsync.FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching:false,
				errorMessage:action.payload
			}
		default:
			return state;
	}
};

export default shopReducer;
