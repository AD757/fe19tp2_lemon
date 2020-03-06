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

const new_config = {
  apiKey: "AIzaSyCUz3QOf7zB7Z-mccF4AuvduME2yX4ud_o",
  authDomain: "fe19tp2-lemon.firebaseapp.com",
  databaseURL: "https://fe19tp2-lemon.firebaseio.com",
  projectId: "fe19tp2-lemon",
  storageBucket: "fe19tp2-lemon.appspot.com",
  messagingSenderId: "275910465912",
  appId: "1:275910465912:web:929bcf50e38c6e7919d08d",
  measurementId: "G-9JKPQ6C9XY"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    //this.emailAuthProvider = app.auth.emailAuthProvider;
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

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = [];
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}

export default Firebase;