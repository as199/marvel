import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCw_tLoRK6E6vr3d15TNZw3plLz1t-imc8",
  authDomain: "marvel-quiz-85921.firebaseapp.com",
  databaseURL: "https://marvel-quiz-85921.firebaseio.com",
  projectId: "marvel-quiz-85921",
  storageBucket: "marvel-quiz-85921.appspot.com",
  messagingSenderId: "296126241529",
  appId: "1:296126241529:web:e9284ecad5acf69a73e028",
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }
  // inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // Connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // Déconnexion
  signoutUser = () => this.auth.signOut();
  // Récupérer le mot de passe
  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  // firestore
  user = (uid) => this.db.doc(`users/${uid}`);
}
export default Firebase;
