
import firebase from 'firebase'
import '@firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYGnYtmPv8PHF9Yfu3dpEGeHHGd7Yfy28",
    authDomain: "bandmanager-a44a9.firebaseapp.com",
    databaseURL: "https://bandmanager-a44a9.firebaseio.com",
    projectId: "bandmanager-a44a9",
    storageBucket: "bandmanager-a44a9.appspot.com",
    messagingSenderId: "880014962617"
})

const rsf = new ReduxSagaFirebase(firebaseApp)

export default rsf