// cart.js
window.onload = function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Keranjang Anda kosong.</p>';
    } else {
        cart.forEach(productId => {
            const productRef = db.ref('products/' + productId);
            productRef.once('value', function(snapshot) {
                const product = snapshot.val();
                const productCard = `
                    <div class="card bg-white shadow-md rounded-lg overflow-hidden p-4 mb-4">
                        <img src="${product.images[0]}" alt="${product.name}" class="w-full h-48 object-cover">
                        <h2 class="font-bold text-lg">${product.name}</h2>
                        <p class="text-gray-700">Rp ${new Intl.NumberFormat('id-ID').format(product.price)}</p>
                        <button class="bg-red-500 text-white p-2 rounded" onclick="removeFromCart('${productId}')">Hapus</button>
                    </div>
                `;
                cartItemsContainer.innerHTML += productCard;
            });
        });
    }
};

// Fungsi untuk menghapus produk dari keranjang
function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(id => id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
}
