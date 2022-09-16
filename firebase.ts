// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8iu7X0ufHkHoDfFTZQ3ghs1t9vWa9k4w",
  authDomain: "netflix-redesign-ac70d.firebaseapp.com",
  projectId: "netflix-redesign-ac70d",
  storageBucket: "netflix-redesign-ac70d.appspot.com",
  messagingSenderId: "829915167023",
  appId: "1:829915167023:web:b44271618fc67d40a5c9da"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }