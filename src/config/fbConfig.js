import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBqIVF0TLLKFMwbNM4dGjcOF78NSg-XxOs",
    authDomain: "movies-search-db.firebaseapp.com",
    projectId: "movies-search-db",
    storageBucket: "movies-search-db.appspot.com",
    messagingSenderId: "272672522807",
    appId: "1:272672522807:web:3bac71ed3a985b46aaf5b2",
    measurementId: "G-2YK1536X5P"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});

 export default firebase;