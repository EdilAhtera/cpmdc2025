// store.js
const productList = document.getElementById('product-list');

// Ambil data produk dari Firestore
firebase.firestore().collection('produk').get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            const product = doc.data();
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h3>${product.nama}</h3>
                <p>Harga: Rp ${product.harga}</p>
                <p>Stok: ${product.sisa}</p>
                <a href="product.html?id=${doc.id}">Lihat Detail</a>
            `;
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error("Error getting documents: ", error));
