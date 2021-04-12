import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJYjOb6r8DseTVNKhp-ACtaH7OMyUkE9Q",
    authDomain: "vouchermanager-9cf2e.firebaseapp.com",
    projectId: "vouchermanager-9cf2e",
    storageBucket: "vouchermanager-9cf2e.appspot.com",
    messagingSenderId: "730630636740",
    appId: "1:730630636740:web:460a0e4be19471e561f591"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const storageRef = firebase.storage();

export default firebase;

