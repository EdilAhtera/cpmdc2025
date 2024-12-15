// firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxMxtcxKYblIF9R1Izj6_OF0Zx-NU7zxY",
  authDomain: "tokoonline-561d8.firebaseapp.com",
  databaseURL: "https://tokoonline-561d8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tokoonline-561d8",
  storageBucket: "tokoonline-561d8.firebasestorage.app",
  messagingSenderId: "799667418330",
  appId: "1:799667418330:web:44741de8e8db5596cde1e3"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
const db = getFirestore(app);

// Menampilkan produk di halaman store
async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "produk"));
  querySnapshot.forEach((doc) => {
    const product = doc.data();
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-card');
    productDiv.innerHTML = `
      <h3>${product.nama}</h3>
      <p>Harga: Rp ${product.harga}</p>
      <p>Stok: ${product.sisa}</p>
      <a href="product.html?id=${doc.id}">Lihat Detail</a>
    `;
    document.getElementById('product-list').appendChild(productDiv);
  });
}

// Panggil fungsi untuk memuat produk
loadProducts();
