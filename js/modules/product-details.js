import { loadProductDetails } from "../scripts/load-product-details.js";
import { toggleSideMenu } from "../scripts/toggle-side-menu.js";
import { toggleShoppingCart } from "../scripts/toggle-side-menu.js";

document.addEventListener("DOMContentLoaded", ()=> loadProductDetails());

document.getElementById("side-menu-open-btn").addEventListener("click", () => {
    toggleSideMenu();
});
document.getElementById("side-menu-close-btn").addEventListener("click", () => {
    toggleSideMenu();
});


document.getElementById("shopping-cart-open-btn").addEventListener("click", () => {
    toggleShoppingCart();
});
document.getElementById("shopping-cart-close-btn").addEventListener("click", () => {
    toggleShoppingCart();
});