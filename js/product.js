// product.js
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';

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
const db = getFirestore(app);

// Mendapatkan parameter ID dari URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Mendapatkan detail produk berdasarkan ID
async function loadProductDetail() {
  const docRef = doc(db, "produk", productId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const product = docSnap.data();
    const productDetailDiv = document.getElementById('product-detail');
    productDetailDiv.innerHTML = `
      <h2>${product.nama}</h2>
      <p><strong>Harga:</strong> Rp ${product.harga}</p>
      <p><strong>Stok:</strong> ${product.sisa}</p>
      <p><strong>Deskripsi:</strong> ${product.deskripsi}</p>
      <img src="${product.gambar}" alt="${product.nama}" />
    `;
  } else {
    console.log("Produk tidak ditemukan!");
  }
}

// Memanggil fungsi untuk memuat detail produk
document.addEventListener('DOMContentLoaded', function() {
  loadProductDetail();
});
