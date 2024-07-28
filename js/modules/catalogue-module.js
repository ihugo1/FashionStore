import { productsDatabase } from "../data-base/products-database.js";
import { loadProducts } from "../scripts/load-products.js";
import { filterProducts } from "../scripts/filter-products.js";
import { toggleSideMenu } from "../scripts/toggle-side-menu.js";

document.addEventListener("DOMContentLoaded", ()=> loadProducts(productsDatabase));

document.getElementById("dropdown-menu-filter-btn").addEventListener("click", ()=> filterProducts());

document.getElementById("side-menu-open-btn").addEventListener("click", () => {
    toggleSideMenu();
});

document.getElementById("side-menu-close-btn").addEventListener("click", () => {
    toggleSideMenu();
});

