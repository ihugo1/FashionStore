import { productsDatabase } from "../data-base/products-database.js";

const $productDetails = document.getElementById("product-details");

export function loadProductDetails() {
  const param = new URLSearchParams(window.location.search);
  const productId = param.get("id");
  const productToShow = productsDatabase.find(
    (product) => product.id === parseInt(productId)
  );

  $productDetails.innerHTML = `
      <div class="product-details-left">
        <img src="${productToShow.image}" class="product-details-img" />
      </div>
      <div class="product-details-right">
        <div class="product-details-info">
          <h2 class="product-details-name">${productToShow.name}</h2>
          <p class="product-details-price">$${productToShow.price}</p>
          <p class="product-details-category">${productToShow.category}</p>
          <p class="product-details-description">${productToShow.description}</p>
        </div>
        <div class="product-buy-section" id="product-buy-section">
          <p>Sizes:</p>
          <div class="sizes-inputs" id="sizes-input-container">
          </div>
          <button class="buy-btn animated-btn-pink">Buy Now!</button>
        </div>
      </div>
    `;

  if(productToShow.available===false){
    const productBuySection = document.getElementById("product-buy-section");
    productBuySection.innerHTML = "<p>This product is not available at this moment</p>";
  }
  else{
    const sizesInputsContainer = document.getElementById("sizes-input-container");
    productToShow.sizes.forEach((size) => {
      sizesInputsContainer.innerHTML += `
          <div class="sizes-inputs">
              <div class="size-input">
                  <input type="radio" id="${size}" name="sizes" value="${size}" />
                  <label for="${size}">${size}</label>
              </div>
          </div>
        `;
    });
  }
}
