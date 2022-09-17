import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDC1_pVo9qCn6yB0Q6iEnVVmNO4mCacgOM",
  authDomain: "signal-12f8e.firebaseapp.com",
  projectId: "signal-12f8e",
  storageBucket: "signal-12f8e.appspot.com",
  messagingSenderId: "917040350654",
  appId: "1:917040350654:web:bafb0b6a324d797a40a5ef",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
