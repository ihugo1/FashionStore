import { toggleSideMenu } from "../scripts/toggle-side-menu.js";

document.getElementById("side-menu-open-btn").addEventListener("click", () => {
    toggleSideMenu();
});

document.getElementById("side-menu-close-btn").addEventListener("click", () => {
    toggleSideMenu();
});