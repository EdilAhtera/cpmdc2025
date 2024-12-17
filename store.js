// store.js
window.onload = function() {
    const productsRef = db.ref('products');
    
    productsRef.once('value', function(snapshot) {
        const products = snapshot.val();
        const productsContainer = document.getElementById('products');
        
        for (const id in products) {
            const product = products[id];
            const productCard = `
                <div class="card bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="${product.images[0]}" alt="${product.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h2 class="font-bold text-lg">${product.name}</h2>
                        <p class="text-gray-700">Rp ${new Intl.NumberFormat('id-ID').format(product.price)}</p>
                        <p class="text-sm text-gray-500">${product.description}</p>
                        <a href="detail.html?product=${id}" class="text-blue-600">Lihat Detail</a>
                    </div>
                    <div class="p-4">
                        <button class="bg-blue-500 text-white p-2 rounded">Beli Sekarang</button>
                        <button class="bg-gray-500 text-white p-2 rounded" onclick="addToCart('${id}')">Masukkan ke Keranjang</button>
                    </div>
                </div>
            `;
            productsContainer.innerHTML += productCard;
        }
    });
};

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}
