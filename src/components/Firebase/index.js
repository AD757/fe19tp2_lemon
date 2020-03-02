import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';
// MAaybe needs to be deleted      ?!?!??!?
/* const config = {
    apiKey: "AIzaSyALNDCkiZljT6fQGAxS6_5TMLdbgZdgP24",
    authDomain: "bev-data.firebaseapp.com",
    databaseURL: "https://bev-data.firebaseio.com",
    projectId: "bev-data",
    storageBucket: "bev-data.appspot.com",
    messagingSenderId: "50310492607",
  };

  const devConfig = {
    apiKey: "AIzaSyALNDCkiZljT6fQGAxS6_5TMLdbgZdgP24",
    authDomain: "bev-data.firebaseapp.com",
    databaseURL: "https://bev-data.firebaseio.com",
    projectId: "bev-data",
    storageBucket: "bev-data.appspot.com",
    messagingSenderId: "50310492607",
};

const config =
  process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
  // ... till here  
   */
export { FirebaseContext, withFirebase };

export default Firebase;