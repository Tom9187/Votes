import firebase from 'firebase';

// add SDK Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyCrjMc8bX5SXRQLDlKw8nmXUca5Mb50sGI",
    authDomain: "spectagramproj.firebaseapp.com",
    databaseURL: "https://spectagramproj-default-rtdb.firebaseio.com",
    projectId: "spectagramproj",
    storageBucket: "spectagramproj.appspot.com",
    messagingSenderId: "869968714958",
    appId: "1:869968714958:web:785a380ea6f453b837c49f"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();