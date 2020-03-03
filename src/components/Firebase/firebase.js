import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

/* const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  }; */
  const config = {
    apiKey: "AIzaSyALNDCkiZljT6fQGAxS6_5TMLdbgZdgP24",
    authDomain: "bev-data.firebaseapp.com",
    databaseURL: "https://bev-data.firebaseio.com",
    projectId: "bev-data",
    storageBucket: "bev-data.appspot.com",
    messagingSenderId: "50310492607",
  };

  class Firebase {
      constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
      }

        // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

      // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
  }

  export default Firebase;