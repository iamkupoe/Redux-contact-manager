import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAeJbTNEI5a0YTscnBvF3u1NJaYjUe6ctU",
    authDomain: "contact-manager-4127d.firebaseapp.com",
    databaseURL: "https://contact-manager-4127d.firebaseio.com",
    projectId: "contact-manager-4127d",
    storageBucket: "contact-manager-4127d.appspot.com",
    messagingSenderId: "587839787889",
    appId: "1:587839787889:web:f0e92359c9a80b1bafdcd0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;