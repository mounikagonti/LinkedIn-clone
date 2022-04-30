import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyBqlG2li6zmLbu32cTzABJXZtB3gQ5BWmI",
  authDomain: "linkedin-clone-29627.firebaseapp.com",
  projectId: "linkedin-clone-29627",
  storageBucket: "linkedin-clone-29627.appspot.com",
  messagingSenderId: "266107483097",
  appId: "1:266107483097:web:d173b459146b3da93a9fc8",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
