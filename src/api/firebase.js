/** @format */

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

//  Update the config
const firebaseConfig = {
  apiKey: "AIzaSyA15t4VEGKk_qCO0SJ4QoYf0recV2cSF3Q",
  authDomain: "dropbox-82fde.firebaseapp.com",
  projectId: "dropbox-82fde",
  storageBucket: "dropbox-82fde.appspot.com",
  messagingSenderId: "112435643682",
  appId: "1:112435643682:web:2055caf9e005a0507e517b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { app, firestore, auth, storage };
