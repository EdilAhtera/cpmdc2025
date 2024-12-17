import { db } from "./firebase-config.js";
import { ref, push, remove, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

document.addEventListener("DOMContentLoaded", () => {
  const productForm = document.getElementById("product-form");
  const productList = document.getElementById("product-list");

  const fetchProducts = async () => {
    const snapshot = await get(ref(db, "products"));
    const products = snapshot.val();
    productList.innerHTML = "";

    if (products) {
      Object.entries(products).forEach(([key, product]) => {
        productList.innerHTML += `
          <div class="bg-white shadow-md rounded p-4 mb-4">
            <h2 class="text-lg font-bold">${product.name}</h2>
            <p>Price: Rp${product.price}</p>
            <p>${product.description}</p>
            <button class="bg-red-500 text-white px-4 py-2 rounded" onclick="deleteProduct('${key}')">Delete</button>
          </div>
        `;
      });
    }
  };

  productForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const description = document.getElementById("product-description").value;
    const image = document.getElementById("product-image").value;

    if (name && price && description && image) {
      await push(ref(db, "products"), { name, price, description, image });
      alert("Product added!");
      productForm.reset();
      fetchProducts();
    } else {
      alert("Please fill in all fields!");
    }
  });

  window.deleteProduct = async (key) => {
    if (confirm("Are you sure?")) {
      await remove(ref(db, `products/${key}`));
      alert("Product deleted!");
      fetchProducts();
    }
  };

  fetchProducts();
});
