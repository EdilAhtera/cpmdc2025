// firebase-config.js
// Inisialisasi Firebase
const firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyAuMS7491Px931fv_84sswIB4RaHnd2JHs",
  authDomain: "cpmdcstore25.firebaseapp.com",
  databaseURL: "https://cpmdcstore25-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "cpmdcstore25",
  storageBucket: "cpmdcstore25.firebasestorage.app",
  messagingSenderId: "154643475128",
  appId: "1:154643475128:web:df2486b2d56e600d4de24d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
