import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAeWjeUTIlIt4IlKQ3glS71YQ6OKM0GNkg",
	authDomain: "nextcode-49abc.firebaseapp.com",
	projectId: "nextcode-49abc",
	storageBucket: "nextcode-49abc.appspot.com",
	messagingSenderId: "29132376728",
	appId: "1:29132376728:web:e750e9df84688559e5deed",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth();