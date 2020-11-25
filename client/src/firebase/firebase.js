import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyBBRcUs39CXTLvQyN9RHiAg3UAUAMtVB78",
    authDomain: "prl-test-dce0a.firebaseapp.com",
    databaseURL: "https://prl-test-dce0a.firebaseio.com",
    projectId: "prl-test-dce0a",
    storageBucket: "prl-test-dce0a.appspot.com",
    messagingSenderId: "748583758859",
    appId: "1:748583758859:web:732865bacbaac452afab0e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig).firestore();

export default firebase;