import firebase from "firebase/app";


var firebaseConfig = {
    apiKey: "AIzaSyCXkSXKrg-TeYLvz_z-lhPr-RQ3fsKrKUQ",
    authDomain: "facebook-clone-fa6d8.firebaseapp.com",
    projectId: "facebook-clone-fa6d8",
    storageBucket: "facebook-clone-fa6d8.appspot.com",
    messagingSenderId: "411245046407",
    appId: "1:411245046407:web:12b04206f93a1104bfa622",
    measurementId: "G-4X6JTEHWSD"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
