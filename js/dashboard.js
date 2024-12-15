// dashboard.js
const form = document.getElementById('add-product-form');
const productList = document.getElementById('product-list');

// Menambahkan produk
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const harga = document.getElementById('harga').value;
    const sisa = document.getElementById('sisa').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const gambar = document.getElementById('gambar').value;
    const kategori = document.getElementById('kategori').value;

    firebase.firestore().collection('produk').add({
        nama,
        harga,
        sisa,
        deskripsi,
        gambar,
        kategori
    }).then(() => {
        alert('Produk berhasil ditambahkan');
        window.location.reload();
    }).catch(error => console.error("Error adding document: ", error));
});

// Mengambil data produk dan menampilkannya
firebase.firestore().collection('produk').get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            const product = doc.data();
            const li = document.createElement('li');
            li.innerHTML = `${product.nama} <button onclick="deleteProduct('${doc.id}')">Hapus</button>`;
            productList.appendChild(li);
        });
    });

// Menghapus produk
function deleteProduct(id) {
    firebase.firestore().collection('produk').doc(id).delete()
        .then(() => {
            alert('Produk berhasil dihapus');
            window.location.reload();
        })
        .catch(error => console.error("Error deleting document: ", error));
}
