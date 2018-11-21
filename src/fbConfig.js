import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQxXPaPCbqcgr00Sc4RCbMEMtgN0mwJUY",
    authDomain: "log-project-77c08.firebaseapp.com",
    databaseURL: "https://log-project-77c08.firebaseio.com",
    projectId: "log-project-77c08",
    storageBucket: "log-project-77c08.appspot.com",
    messagingSenderId: "80686280384"
  };
  firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();


export {
    auth,
    firebase,
    firestore,
}