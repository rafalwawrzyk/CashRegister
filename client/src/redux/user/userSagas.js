import { put, takeLatest, all, call } from 'redux-saga/effects';
import actionType from './userActionTypes';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { SignInSuccess, SignInFailure,signOutSuccess,signOutFailure,signUpStart,signUpSuccess,signUpFailure } from './userActions';


// get snapshot of user
export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);
		const userSnapshot = yield userRef.get();
		yield put(
			SignInSuccess({
				id: userSnapshot.id,
				...userSnapshot.data()
			})
		);
	} catch (err) {
		yield put(SignInFailure(err));
	}
}


// google sign in
export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user)
	} catch (err) {
		yield put(SignInFailure(err));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(actionType.GOOGLE_SIGN_IN_START, signInWithGoogle);
}



// email sign in
// payload comes from action: actionType.EMAIL_SIGN_IN_START
export function* signInWithEmail(payload) {
	const { email, password } = payload.payload;
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
	} catch (err) {
		yield put(SignInFailure(err));
	}
}


export function* onEmailSignInStart() {
	yield takeLatest(actionType.EMAIL_SIGN_IN_START, signInWithEmail);
}


// check user saga
export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return
        yield getSnapshotFromUserAuth(userAuth)
    }catch(err){
        yield put(SignInFailure(err))
    }
}


export function* onCheckUserSession(){
    yield takeLatest(actionType.CHECK_USER_SESSION, isUserAuthenticated)
}


// sign out saga
export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }catch(err){
        yield put(signOutFailure(err))
    }
}

export function* onSignOutStart(){
    yield takeLatest(actionType.SIGN_OUT_START, signOut)
}


// sign up saga
export function* signUp(userPayload){
	const {email,password,displayName} = userPayload.payload;
	try{
		const {user} = yield auth.createUserWithEmailAndPassword(email,password);
		const updateUser = {
			...user,
			displayName
		}
		yield getSnapshotFromUserAuth(updateUser)
		yield put(signUpSuccess())
	}catch(err){
		yield put(signUpFailure(err))
	}
}


export function* onSignUpStart(){
	yield takeLatest(actionType.SIGN_UP_START,signUp)
}



// sagas export
export function* userSagas() {
	yield all([ 
        call(onGoogleSignInStart), 
        call(onEmailSignInStart),
        call(onCheckUserSession), 
		call(onSignOutStart),
		call(onSignUpStart) 
    ]);
}
