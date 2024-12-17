import { db } from "./firebase-config.js";
import { get, ref } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

document.addEventListener("DOMContentLoaded", async () => {
    const productList = document.getElementById("product-list");

    const dbRef = ref(db, "products/");
    const snapshot = await get(dbRef);
    const products = snapshot.val();

    for (const key in products) {
        const product = products[key];
        const card = `
            <div class="bg-white shadow-md p-4 rounded">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded mb-4">
                <h2 class="text-lg font-bold">${product.name}</h2>
                <p class="text-gray-600">Price: Rp${product.price}</p>
                <button 
                    class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" 
                    onclick="location.href='product.html?product=${key}'">
                    View Details
                </button>
            </div>
        `;
        productList.innerHTML += card;
    }
});
