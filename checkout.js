// checkout.js
window.onload = function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutItemsContainer = document.getElementById('checkout-items');
    let total = 0;
    
    if (cart.length === 0) {
        checkoutItemsContainer.innerHTML = '<p>Keranjang Anda kosong.</p>';
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
                    </div>
                `;
                checkoutItemsContainer.innerHTML += productCard;
                total += product.price;
                document.getElementById('total-price').innerText = new Intl.NumberFormat('id-ID').format(total);
            });
        });
    }
};
