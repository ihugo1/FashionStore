import { productsDatabase } from "../data-base/products-database.js";

const $productsContainer = document.getElementById("products-container");
const $dropdownMenu = document.getElementById("dropdown-menu");

export function loadCatalogue() {
  const selectedCategory = $dropdownMenu.value;
  let productsToload = [];

  if (selectedCategory === "all") {
    productsToload = productsDatabase;
  } else {
    productsToload = productsDatabase.filter((product) => {
      return product.category === selectedCategory;
    });
  }

  $productsContainer.innerHTML = "";
  let temp = "";

  productsToload.forEach((product) => {
    temp += `
      <div class="product-card">
        <a href="product-details.html?id=${product.id}" class="product-card-img-container">
          <img src="${product.image}" class="product-card-img">
        </a>
        <div class="product-card-info">
          <a href="product-details.html?id=${product.id}" class="product-card-name">${product.name}</a>
          <p class="product-card-price">$${product.price}</p>
        </div>
      </div>
    `;
  });

  $productsContainer.innerHTML = temp;
}

document.getElementById("dropdown-menu-filter-btn").addEventListener("click", () => loadCatalogue());
