import { products } from "../data-base/products.js";
import { loadProducts } from "./load-products.js";

const $productsContainer = document.getElementById("products-container");
const $dropdownMenu = document.getElementById("dropdown-menu");

export function filterProducts() {
  $productsContainer.innerHTML = "";
  const selectedCategory = $dropdownMenu.value;
  let filteredProducts = [];
  if (selectedCategory === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((product) => { return product.category === selectedCategory });
  }
  loadProducts(filteredProducts);
}
