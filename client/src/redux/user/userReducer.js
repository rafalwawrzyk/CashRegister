import actionType from './userActionTypes'

const INITIAL_STATE = {
	currentUser: null,
	error:null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionType.SIGN_IN_SUCCESS:
			return{
				...state,
				currentUser:action.payload,
				error:null
			}
		case actionType.SIGN_OUT_SUCCESS:
			return{
				...state,
				currentUser:null,
				error:null
			}
		case actionType.SIGN_IN_FAILURE:
		case actionType.SIGN_OUT_FAILURE:
		case actionType.SIGN_UP_FAILURE:
			return{
				...state,
				error:action.payload
			}
		default:
			return state;
	}
};

export default userReducer;
