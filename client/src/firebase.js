import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAwlC2O8bVjbOYUyepqewmJS-ZGJeH8OY8",
    authDomain: "fusion-dhaaga-v1.firebaseapp.com",
    databaseURL: "https://fusion-dhaaga-v1.firebaseio.com",
    projectId: "fusion-dhaaga-v1",
    storageBucket: "fusion-dhaaga-v1.appspot.com",
    messagingSenderId: "1020129349707",
    appId: "1:1020129349707:web:b103579c6f5547bacd7dce",
    measurementId: "G-FHCZPV1CKE"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};