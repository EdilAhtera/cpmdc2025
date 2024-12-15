// dashboard.js

// Mengakses referensi database
const db = firebase.database();
const productRef = db.ref('produk');

// Menambah produk baru ke Firebase
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    const newProductRef = productRef.push();  // Tambah produk baru

    newProductRef.set({
        nama: name,
        harga: price,
        deskripsi: description,
        gambar: image
    });

    alert("Produk berhasil ditambahkan!");
    location.reload();  // Reload halaman untuk melihat produk yang baru
});
