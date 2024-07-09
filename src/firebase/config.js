import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDWNDnybORtg7PmQ4OUG_vNS0BAwzQRPtU',
	authDomain: 'nicetyfarm-webapp.firebaseapp.com',
	projectId: 'nicetyfarm-webapp',
	storageBucket: 'nicetyfarm-webapp.appspot.com',
	messagingSenderId: '859791288066',
	appId: '1:859791288066:web:6e5f7b79c3bd155385041b',
	measurementId: 'G-H4EJES39V1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
