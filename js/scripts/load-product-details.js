import { products } from "../data-base/products.js";

const $productDetails = document.getElementById("product-details");

export function loadProductDetails (){
    const param  = new URLSearchParams(window.location.search); 
    const productId = param.get("id");
    const productToShow = products.find((product)=>product.id === parseInt(productId));

    $productDetails.innerHTML=`
    <div class="product-details-img-container">
      <img src="${productToShow.image}" class="product-details-img">
    </div>
    <div class="product-details-info">
      <h2 class="product-details-name">${productToShow.name}</h2>
      <p class="product-details-category">${productToShow.category}</p>
      <p class="product-details-price">$${productToShow.price}</p>
    </div>
    `;
}