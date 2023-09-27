// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm8rDjqId39UQ3rTlX--zkld-W-l-dmRY",
  authDomain: "quizapp-react-fbase.firebaseapp.com",
  databaseURL: "https://quizapp-react-fbase-default-rtdb.firebaseio.com",
  projectId: "quizapp-react-fbase",
  storageBucket: "quizapp-react-fbase.appspot.com",
  messagingSenderId: "249724368758",
  appId: "1:249724368758:web:2257473a8b51b8f33eec57",
  measurementId: "G-C2DBVLY1N5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);