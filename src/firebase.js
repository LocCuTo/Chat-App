import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyDQLu6j-ZAOrbjKRAHaZ7ai98UJWrfWCHU',
    authDomain: 'chatapp-94fe9.firebaseapp.com',
    projectId: 'chatapp-94fe9',
    storageBucket: 'chatapp-94fe9.appspot.com',
    messagingSenderId: '58453337535',
    appId: '1:58453337535:web:75448313aec7fc4657ed0a',
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
