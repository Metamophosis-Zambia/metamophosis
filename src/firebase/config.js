import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB-EJI3huiRmFRFhLI3JUNlOWWNY3jSvL8",
	authDomain: "metamophosis-com.firebaseapp.com",
	projectId: "metamophosis-com",
	storageBucket: "metamophosis-com.appspot.com",
	messagingSenderId: "471525420623",
	appId: "1:471525420623:web:9367e3895986ea5a54043a",
	measurementId: "G-V2B9E82J3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
