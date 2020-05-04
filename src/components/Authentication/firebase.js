import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBPEo_OfWph5AuvZaHmbhorx5G7iwb7VNQ",
  authDomain: "blog-17e7b.firebaseapp.com",
  databaseURL: "https://blog-17e7b.firebaseio.com",
  projectId: "blog-17e7b",
  storageBucket: "blog-17e7b.appspot.com",
  messagingSenderId: "353946753586",
  appId: "1:353946753586:web:beba77a48e4849d9f2fa2b"
};


class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	doSignInEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () =>
		this.auth.signOut();

	doResetPassword = (email) =>
		this.auth.sendPasswordResetEmail(email);
	

	doPasswordUpdate = (password) =>
	this.auth.updateCurrentUser.updatePassword(password);
  
}
export default new Firebase()