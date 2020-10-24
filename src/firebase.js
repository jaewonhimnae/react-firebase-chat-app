import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
//
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD3BzyeI61DSZW3npkPCL9pF_4pHnegtTI",
    authDomain: "react-firebase-chat-app-18ea2.firebaseapp.com",
    databaseURL: "https://react-firebase-chat-app-18ea2.firebaseio.com",
    projectId: "react-firebase-chat-app-18ea2",
    storageBucket: "react-firebase-chat-app-18ea2.appspot.com",
    messagingSenderId: "919330635134",
    appId: "1:919330635134:web:8f8bdc99e91c2b6e2f072f",
    measurementId: "G-HCXWHGPMNW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;