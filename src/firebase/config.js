import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJHhqepeiMS486Qhp-CbvxbN0dZAzXwOg",
    authDomain: "confy-store.firebaseapp.com",
    projectId: "confy-store",
    storageBucket: "confy-store.appspot.com",
    messagingSenderId: "22423920906",
    appId: "1:22423920906:web:bcf4cdb7388a264ceb9af3"
};

//initialization of our app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}