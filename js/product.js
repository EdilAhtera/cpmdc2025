// product.js

// Ambil ID produk dari localStorage
const productId = localStorage.getItem("selectedProductId");

// Mengakses referensi database
const db = firebase.database();
const productRef = db.ref('produk/' + productId);  // Ambil referensi produk berdasarkan ID

// Fungsi untuk menampilkan detail produk
productRef.once("value", function(snapshot) {
    const product = snapshot.val();

    if (product) {
        // Menampilkan detail produk di halaman
        const productDetailElement = document.createElement('div');
        productDetailElement.innerHTML = `
            <h3>${product.nama}</h3>
            <p>Harga: ${product.harga}</p>
            <p>Deskripsi: ${product.deskripsi}</p>
            <img src="${product.gambar}" alt="${product.nama}" />
        `;
        document.getElementById("product-detail").appendChild(productDetailElement);
    } else {
        console.log("Data produk tidak ditemukan");
    }
});
