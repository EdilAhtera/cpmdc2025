import { db } from "./firebase-config.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

document.addEventListener("DOMContentLoaded", async () => {
  const productGrid = document.getElementById("product-grid");

  const fetchProducts = async () => {
    const snapshot = await get(ref(db, "products"));
    const products = snapshot.val();

    if (products) {
      Object.entries(products).forEach(([key, product]) => {
        const card = `
          <div class="bg-white shadow-md rounded p-4">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded mb-2">
            <h2 class="text-lg font-bold">${product.name}</h2>
            <p class="text-sm text-gray-600">Rp${product.price}</p>
            <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onclick="location.href='product.html?id=${key}'">View Product</button>
          </div>
        `;
        productGrid.innerHTML += card;
      });
    } else {
      productGrid.innerHTML = "<p>No products available.</p>";
    }
  };

  fetchProducts();
});
