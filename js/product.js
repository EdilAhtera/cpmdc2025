import { db } from "./firebase-config.js";
import { get, ref } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("product");

    const dbRef = ref(db, `products/${productId}`);
    const snapshot = await get(dbRef);
    const product = snapshot.val();

    const productDetails = document.getElementById("product-details");
    productDetails.innerHTML = `
        <div class="bg-white shadow-md p-4 rounded">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded mb-4">
            <h1 class="text-2xl font-bold">${product.name}</h1>
            <p class="text-gray-600">Price: Rp${product.price}</p>
            <p>${product.description}</p>
            <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add to Cart</button>
        </div>
    `;
});
