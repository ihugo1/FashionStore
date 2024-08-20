import { productsDatabase } from "../data-base/products-database.js";

const $bestSellersContainer = document.getElementById("best-sellers-products");
let bestSellersProducts = [];

export function loadBestSellers(){

    bestSellersProducts = productsDatabase.filter((product) => {
        return product.topSeller === true;
    });

    $bestSellersContainer.innerHTML = "";
    let temp = "";
  
    bestSellersProducts.forEach((product) => {
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

    $bestSellersContainer.innerHTML = temp;
}