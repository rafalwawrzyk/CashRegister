import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const FIREBASE_CONFIG = {
	apiKey: 'AIzaSyAtPK2nCve6w8J-mgB4eG6wvZEbS3mCq7w',
	authDomain: 'ecommerce-react-db-231fa.firebaseapp.com',
	databaseURL: 'https://ecommerce-react-db-231fa.firebaseio.com',
	projectId: 'ecommerce-react-db-231fa',
	storageBucket: '',
	messagingSenderId: '601861092311',
	appId: '1:601861092311:web:ebf370f0fc12384b51d192'
};

// create data, snapshot
// return user ref
// STORE AUTHENTICATE BY GOOGLE USER TO OUR DDB

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('Error created user', error.message);
		}
	}

	return userRef;
};



// settings
firebase.initializeApp(FIREBASE_CONFIG);

export const auth = firebase.auth();

// DATABASE


export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
		// multiple calls in one time is batch
	const batch = firestore.batch();
	objectsToAdd.forEach((object) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, object);
		console.log(newDocRef)
	});

	return await batch.commit()
};

// get shop items array from db
export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map(doc => {
		const {title,items} = doc.data()
		return{
			routeName:encodeURI(title.toLowerCase()),
			id:doc.id,
			title,
			items
		}
	});
	return transformedCollection.reduce((acc,item) => {
		acc[item.title.toLowerCase()] = item;
		return acc;
	}, {})

}

export const getCurrentUser = () => {
	return new Promise((resolve,reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth)
		},reject)
	})
} 

export default firebase;
