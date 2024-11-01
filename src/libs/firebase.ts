import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

/** Set credential to Firestore */
const firebaseConfig = {
  apiKey: "AIzaSyBiPixTrDiAFCQQwaHl1KUIOcXCe54L1AI",
  authDomain: "iwdl-7a927.firebaseapp.com",
  projectId: "iwdl-7a927",
  storageBucket: "iwdl-7a927.appspot.com",
  messagingSenderId: "894877636585",
  appId: "1:894877636585:web:b82be3fca71c7ed4c9dd78",
  measurementId: "G-WG0558HDSV"
}

// Initialize Firebase if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }