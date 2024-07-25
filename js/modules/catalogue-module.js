import { products } from "../data-base/products.js";
import { loadProducts } from "../scripts/load-products.js";
import { filterProducts } from "../scripts/filter-products.js";

const $filterBtn = document.getElementById("dropdown-menu-filter-btn");

document.addEventListener("DOMContentLoaded", ()=> loadProducts(products));
$filterBtn.addEventListener("click", ()=> filterProducts());

