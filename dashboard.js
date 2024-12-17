// dashboard.js
window.onload = function() {
    // Ambil referensi ke database
    const productsRef = db.ref('products');
    
    // Tampilkan daftar produk
    productsRef.once('value', function(snapshot) {
        const products = snapshot.val();
        const productListContainer = document.getElementById('products');
        productListContainer.innerHTML = '';
        
        for (const id in products) {
            const product = products[id];
            const productCard = `
                <div class="card bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="${product.images[0]}" alt="${product.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h2 class="font-bold text-lg">${product.name}</h2>
                        <p class="text-gray-700">Rp ${new Intl.NumberFormat('id-ID').format(product.price)}</p>
                        <p class="text-sm text-gray-500">${product.description}</p>
                        <button class="bg-yellow-500 text-white p-2 rounded" onclick="editProduct('${id}')">Edit</button>
                        <button class="bg-red-500 text-white p-2 rounded" onclick="deleteProduct('${id}')">Hapus</button>
                    </div>
                </div>
            `;
            productListContainer.innerHTML += productCard;
        }
    });

    // Form submit handler untuk tambah/edit produk
    const productForm = document.getElementById('product-form');
    productForm.onsubmit = function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const stock = document.getElementById('stock').value;
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;
        const images = document.getElementById('images').value.split(',');

        const newProduct = {
            name: name,
            price: price,
            stock: stock,
            category: category,
            description: description,
            images: images
        };

        // Jika ID ada, update produk, jika tidak, buat produk baru
        const productId = document.getElementById('product-id')?.value;
        if (productId) {
            productsRef.child(productId).set(newProduct);
        } else {
            productsRef.push(newProduct);
        }

        // Clear form setelah submit
        productForm.reset();
    };
};

// Fungsi untuk menghapus produk
function deleteProduct(productId) {
    const productRef = db.ref('products/' + productId);
    productRef.remove();
    alert('Produk berhasil dihapus!');
    window.location.reload();
}

// Fungsi untuk mengedit produk
function editProduct(productId) {
    const productRef = db.ref('products/' + productId);
    productRef.once('value', function(snapshot) {
        const product = snapshot.val();
        
        // Isi form dengan data produk yang ada
        document.getElementById('name').value = product.name;
        document.getElementById('price').value = product.price;
        document.getElementById('stock').value = product.stock;
        document.getElementById('category').value = product.category;
        document.getElementById('description').value = product.description;
        document.getElementById('images').value = product.images.join(',');
        
        // Tambahkan ID produk di hidden input
        const productIdInput = document.createElement('input');
        productIdInput.type = 'hidden';
        productIdInput.id = 'product-id';
        productIdInput.value = productId;
        document.getElementById('product-form').appendChild(productIdInput);
    });
}
