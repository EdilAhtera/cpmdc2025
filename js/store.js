// store.js

// Mengakses referensi database
const db = firebase.database();
const productRef = db.ref('produk');  // Ambil referensi produk dari Firebase

// Fungsi untuk menampilkan produk
productRef.once("value", function(snapshot) {
    // Periksa apakah data ada
    if (snapshot.exists()) {
        snapshot.forEach(function(childSnapshot) {
            const product = childSnapshot.val();
            
            // Buat elemen untuk menampilkan produk
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${product.nama}</h3>
                <p>Harga: ${product.harga}</p>
                <p>Deskripsi: ${product.deskripsi}</p>
                <button onclick="showProductDetail('${childSnapshot.key}')">Lihat Detail</button>
            `;
            document.getElementById("product-list").appendChild(productElement);
        });
    } else {
        console.log("Data tidak ditemukan");
    }
});

// Fungsi untuk menampilkan detail produk di halaman baru
function showProductDetail(productId) {
    // Simpan ID produk ke localStorage untuk digunakan di halaman produk
    localStorage.setItem("selectedProductId", productId);
    window.location.href = "product.html";  // Arahkan ke halaman produk
}
