import firebase from 'firebase'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDBUbFtzaXFPWHqZKkkVCzMNGModtSjRJA",
    authDomain: "work-os-demo.firebaseapp.com",
    projectId: "work-os-demo",
    storageBucket: "work-os-demo.appspot.com",
    messagingSenderId: "600686695657",
    appId: "1:600686695657:web:afbc66b4e9548708600c78",
    measurementId: "G-CEQVEPHSDX"
}

const fire = firebase.initializeApp(config)
export const auth = fire.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
export default fire;