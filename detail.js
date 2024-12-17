// detail.js
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    
    if (productId) {
        const productRef = db.ref('products/' + productId);
        
        productRef.once('value', function(snapshot) {
            const product = snapshot.val();
            const productDetailContainer = document.getElementById('product-detail');
            
            productDetailContainer.innerHTML = `
                <div class="card bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="${product.images[0]}" alt="${product.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h2 class="font-bold text-lg">${product.name}</h2>
                        <p class="text-gray-700">Rp ${new Intl.NumberFormat('id-ID').format(product.price)}</p>
                        <p class="text-sm text-gray-500">${product.description}</p>
                        <button class="bg-blue-500 text-white p-2 rounded">Beli Sekarang</button>
                        <button class="bg-gray-500 text-white p-2 rounded" onclick="addToCart('${productId}')">Masukkan ke Keranjang</button>
                    </div>
                </div>
            `;
        });
    }
};

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}
