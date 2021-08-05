import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

//Bring the fucntionalities
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google login setup
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

//Setting up firebase database 
export const handleUserProfile = async (userAuth, additionalData) => {
    const { uid, displayName, email } = userAuth;

    const timeStamp = new Date();

    //creating a reference
    const userRef = firestore.doc(`user/${uid}`)

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        try {
            await userRef.set({
                displayName, email,
                createdDate: timeStamp,
                ...additionalData
            })
        } catch (error) {
            console.log(error)
        }
    }
    return userRef;
}
