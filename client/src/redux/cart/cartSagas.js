import actionType from '../user/userActionTypes'
import {all,call,put,takeLatest} from 'redux-saga/effects';
import {clearCart} from './cartActions';

export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(actionType.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}

export function* cartSagas(){
   yield all([
       call(onSignOutSuccess)
   ])
}




