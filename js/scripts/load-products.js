import { products } from "../data-base/products.js";

let $productsContainer = document.getElementById("products-container");

export function loadProducts() {
  let temp = "";
  products.forEach((product) => {
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
