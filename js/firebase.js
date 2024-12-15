// firebase.js
const firebaseConfig = {
    apiKey: "AIzaSyDxMxtcxKYblIF9R1Izj6_OF0Zx-NU7zxY",
    authDomain: "tokoonline-561d8.firebaseapp.com",
    projectId: "tokoonline-561d8",
    storageBucket: "tokoonline-561d8.firebasestorage.app",
    messagingSenderId: "799667418330",
    appId: "1:799667418330:web:44741de8e8db5596cde1e3"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const auth = firebase.auth(app);
