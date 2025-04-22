// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGWbarcNaL_sqTAQv3Wl7EJnmdzqdQlJk",
  authDomain: "real-homes-b9da3.firebaseapp.com",
  projectId: "real-homes-b9da3",
  storageBucket: "real-homes-b9da3.firebasestorage.app",
  messagingSenderId: "558434494398",
  appId: "1:558434494398:web:d6bf1d4b1eaff182aa7bef",
};

// Initialize Firebase
const currentApps = getApps();
let app: FirebaseApp;

if (!currentApps.length) {
  app = initializeApp(firebaseConfig);
} else {
  app = currentApps[0];
}

const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
