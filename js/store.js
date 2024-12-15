// Mengakses database Firebase setelah inisialisasi
const db = firebase.database();
const productRef = db.ref("produk");

// Fungsi untuk menampilkan produk di halaman
productRef.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        const product = childSnapshot.val();
        // Ambil data dari Firebase dan tampilkan di halaman
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <h3>${product.nama}</h3>
            <p>Harga: ${product.harga}</p>
            <p>Deskripsi: ${product.deskripsi}</p>
        `;
        document.getElementById("product-list").appendChild(productElement);
    });
});
