import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const apiKey = process.env.FIREBASE_API_KEY;
const authDomain = process.env.FIREBASE_AUTH_DOMAIN;
const projectId = process.env.FIREBASE_PROJECT_ID;
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.FIREBASE_APP_ID;

const firebaseApp = firebase.initializeApp({
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
});
// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCo8QHh-e7rrfVptcDkUt4sZumY0XTTEpM",
//   authDomain: "company-circle-sns-26431.firebaseapp.com",
//   projectId: "company-circle-sns-26431",
//   storageBucket: "company-circle-sns-26431.appspot.com",
//   messagingSenderId: "193772776851",
//   appId: "1:193772776851:web:cdae3e14c7fa099b664c66"
// });

const firestore = firebaseApp.firestore();

export { firestore };
