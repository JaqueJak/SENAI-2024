import {initializeApp} from 'firebase/app';
import {getFireStore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA8FAiHXU7mLqJIde8Yed4yWZRk9RH2vSU",
    authDomain: "pets-2863d.firebaseapp.com",
    projectId: "pets-2863d",
    storageBucket: "pets-2863d.appspot.com",
    messagingSenderId: "263119036658",
    appId: "1:263119036658:web:d4485dc0120fb10e7ff06b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFireStore(app);

  const auth = getAuth(app);

  export {db, auth};