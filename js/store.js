// store.js
const productList = document.getElementById('product-list');

// Memastikan Firestore sudah terhubung
firebase.firestore().collection('produk').get()
    .then(snapshot => {
        if (snapshot.empty) {
            console.log('Tidak ada produk dalam database');
            return;
        }

        snapshot.forEach(doc => {
            const product = doc.data();
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-card');
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


firebase.firestore().collection('produk').get()
    .then(snapshot => {
        console.log("Data produk:", snapshot);
        if (snapshot.empty) {
            console.log('Tidak ada produk dalam database');
            return;
        }

        snapshot.forEach(doc => {
            const product = doc.data();
            console.log("Produk:", product);
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-card');
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
