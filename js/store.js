// store.js
import { loadProducts } from './firebase.js';

// Memanggil fungsi loadProducts untuk menampilkan produk
document.addEventListener('DOMContentLoaded', function() {
  loadProducts();
});
