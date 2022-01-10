// import firebase from 'firebase'
import firebase from "firebase/app";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB4yuievx4YqarW9xfv02lF25kB7Vbo8CQ",
    authDomain: "clone-79ab3.firebaseapp.com",
    projectId: "clone-79ab3",
    storageBucket: "clone-79ab3.appspot.com",
    messagingSenderId: "608500437932",
    appId: "1:608500437932:web:8f5a0b18eb89ae26bfe009",
    measurementId: "G-N0WQX0Z9XN"
})
// const db= firebase.firestore();
const auth = firebase.auth()

// export { db, auth }
export {auth}