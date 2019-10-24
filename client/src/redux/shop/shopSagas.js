import {takeEvery,call,put,all} from 'redux-saga/effects'
import { ShopActionsTypesAsync} from './shopActionTypes'

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import {
    fetchCollectionSuccess,
    fetchCollectionFailure
} from './shopActions'

// function to make async code from firebase
export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('shop');
        const snapshot = yield collectionRef.get()
        const collectionFromDb = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionFromDb))
    }catch(err){
        yield put(fetchCollectionFailure(err.message))
    }
}


// run the action to run fetching (take every runs function after gets action)

export function* onfetchCollectionsStartSaga(){
    yield takeEvery(
        ShopActionsTypesAsync.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}



export function* shopSagas(){
    yield all([
        call(onfetchCollectionsStartSaga)
    ])
}










    // const collectionRef = firestore.collection('shop');
    // collectionRef
    //     .get()
    //     .then((snapshot) => {
    //         const collectionsFromDb = convertCollectionsSnapshotToMap(snapshot);
    //         dispatch(fetchCollectionSuccess(collectionsFromDb))
    //     })
    //     .catch(error => {
    //         return dispatch(fetchCollectionFailure(error.message))
    //     })