import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

/** Set credential to Firestore */
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXX-XXXXX.firebaseapp.com",
  projectId: "XXXX-XXXXX",
  storageBucket: "XXXX-XXXXX.appspot.com",
  messagingSenderId: "0000000000",
  appId: "0:0000000000:web:XXXXXXXXXXXXXXXX",
  measurementId: "G-XXXXXXXXXXXXX"
}

// Initialize Firebase if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }