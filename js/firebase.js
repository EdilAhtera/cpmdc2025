<!-- Pastikan sudah memuat script Firebase -->
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"></script>
<script src="js/firebase.js"></script> <!-- pastikan path benar -->

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
