import { getDatabase, ref, push } from "firebase/database";

document.getElementById("product-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const product = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    description: document.getElementById("description").value,
  };
  const db = getDatabase();
  push(ref(db, "products"), product);
});
