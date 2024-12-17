import { getDatabase, ref, onValue } from "firebase/database";

// Ambil data produk
const db = getDatabase();
const productRef = ref(db, 'products');
onValue(productRef, (snapshot) => {
  const products = snapshot.val();
  renderProducts(products);
});

function renderProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  for (let id in products) {
    const product = products[id];
    productList.innerHTML += `
      <div class="card border rounded-lg p-4 w-full sm:w-1/3 lg:w-1/6">
        <img src="${product.images[0]}" alt="${product.name}" class="w-full h-40 object-cover">
        <h2 class="text-lg font-bold">${product.name}</h2>
        <p class="text-sm">Harga: Rp${product.price}</p>
        <button class="btn bg-blue-500 text-white mt-2" onclick="addToCart('${id}')">Masukkan ke Keranjang</button>
        <a href="/detail.html?product=${id}" class="btn bg-gray-500 text-white mt-2">Detail</a>
      </div>`;
  }
}
