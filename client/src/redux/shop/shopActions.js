import { ShopActionsTypesAsync} from './shopActionTypes'
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';




// export const getCollectionsDataFromDbAction = (data) => {
//     return{
//         type:GET_SHOP_DATA_FROM_DB,
//         payload:data
//     }
// }


export const fetchCollectionsStart = () => {
    return {
        type:ShopActionsTypesAsync.FETCH_COLLECTIONS_START
    }
}

export const fetchCollectionSuccess = (collection) => {
    return {
        type:ShopActionsTypesAsync.FETCH_COLLECTIONS_SUCCESS,
        payload:collection
    }
}

export const fetchCollectionFailure = (errorMessage) => {
    return {
        type:ShopActionsTypesAsync.FETCH_COLLECTIONS_FAILURE,
        payload:errorMessage
    }
}



export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        // const collectionRef = firestore.collection('shop');
        // dispatch(fetchCollectionsStart())
        // collectionRef
        //     .get()
        //     .then((snapshot) => {
        //         const collectionsFromDb = convertCollectionsSnapshotToMap(snapshot);
        //         dispatch(fetchCollectionSuccess(collectionsFromDb))
        //     })
        //     .catch(error => {
        //         return dispatch(fetchCollectionFailure(error.message))
        //     })
    }
}


