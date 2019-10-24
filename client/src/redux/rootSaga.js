import {call,all} from 'redux-saga/effects'
import {onfetchCollectionsStartSaga} from './shop/shopSagas'
import {userSagas} from './user/userSagas'
import {cartSagas} from './cart/cartSagas'
import { shopSagas} from './shop/shopSagas'

function* rootSaga() {
    yield all(
        [
            call(onfetchCollectionsStartSaga),
            call(userSagas),
            call(cartSagas),
            call(shopSagas)
        ]
    )
}


export default rootSaga;