import { db } from "./firebase-config.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

document.addEventListener("DOMContentLoaded", async () => {
  const productDetails = document.getElementById("product-details");
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    const snapshot = await get(ref(db, `products/${productId}`));
    const product = snapshot.val();

    if (product) {
      productDetails.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded mb-4">
        <h1 class="text-2xl font-bold">${product.name}</h1>
        <p class="text-lg text-gray-600 mb-4">Rp${product.price}</p>
        <p>${product.description}</p>
        <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
      `;
    } else {
      productDetails.innerHTML = "<p>Product not found.</p>";
    }
  } else {
    productDetails.innerHTML = "<p>Invalid Product ID.</p>";
  }
});
