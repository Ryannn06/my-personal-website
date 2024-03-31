// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQueCdCnbYuPi0eZ8NqGwwc7jR1_AgkqQ",
  authDomain: "portfolio-86fa4.firebaseapp.com",
  projectId: "portfolio-86fa4",
  storageBucket: "portfolio-86fa4.appspot.com",
  messagingSenderId: "223854839357",
  appId: "1:223854839357:web:7ce218d9f923c869a90c54",
  measurementId: "G-X0S00CPRWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);