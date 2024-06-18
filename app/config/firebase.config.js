// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuLY6Y1xLFRiGyEisY0qWLfZ7Ls76pamg",
  authDomain: "whispersblog-3f12c.firebaseapp.com",
  projectId: "whispersblog-3f12c",
  storageBucket: "whispersblog-3f12c.appspot.com",
  messagingSenderId: "661976840679",
  appId: "1:661976840679:web:c95de2c0c5eab548536542",
  measurementId: "G-FJPCLWQVNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);