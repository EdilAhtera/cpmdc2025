// product.js
const productId = new URLSearchParams(window.location.search).get('id');
const productDetail = document.getElementById('product-detail');

firebase.firestore().collection('produk').doc(productId).get()
    .then(doc => {
        const product = doc.data();
        productDetail.innerHTML = `
            <h1>${product.nama}</h1>
            <img src="${product.gambar}" alt="${product.nama}">
            <p>${product.deskripsi}</p>
            <p>Harga: Rp ${product.harga}</p>
            <p>Stok: ${product.sisa}</p>
        `;
    })
    .catch(error => console.error("Error getting document: ", error));
