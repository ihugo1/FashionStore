import { productsDatabase } from "../data-base/products-database.js";

class ShoppingCart {
  constructor(containerId) {
    this.$shoppingCartItemsContainer = document.getElementById(containerId);
    this.shoppingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    this.productCartIdGenerator = JSON.parse(localStorage.getItem("cartIdGenerator")) || 0;
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.shoppingCartItems));
    localStorage.setItem("cartIdGenerator", JSON.stringify(this.productCartIdGenerator));
  }

  addToCart(productId, productSize) {
    this.productCartIdGenerator++;
    const productInDataBase = productsDatabase.find((product) => product.id === productId);
    const productToAdd = {...productInDataBase, selectedSize: productSize, cartId: this.productCartIdGenerator,};
    this.shoppingCartItems.push(productToAdd);
    this.saveCart();
    this.loadCart();
  }

  loadCart() {
    let temp = "";
    this.shoppingCartItems.forEach((item) => {
      temp += `
        <div class="shopping-cart-item">
          <span class="shopping-cart-item-id">${item.id}</span>
          <span class="shopping-cart-item-name">${item.name}</span>
          <span class="shopping-cart-item-size">${item.selectedSize}</span>
          <span class="shopping-cart-item-price">$${item.price}</span>
          <button class="shopping-cart-item-remove-btn animated-btn-pink" in-cart-id="${item.cartId}">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      `;
    });
    this.$shoppingCartItemsContainer.innerHTML = temp;
    document.querySelectorAll(".shopping-cart-item-remove-btn").forEach(
      (removeBtn) => removeBtn.addEventListener("click", () => 
        this.removeFromCart(parseInt(removeBtn.getAttribute("in-cart-id")))
    ));
  }

  removeFromCart(itemId) {
    this.shoppingCartItems = this.shoppingCartItems.filter((item) => item.cartId !== itemId);
    this.saveCart();
    this.loadCart();
  }

  clearCart(){
    this.shoppingCartItems = [];
    this.saveCart();
    this.loadCart();
  }
}

document.getElementById("shopping-cart-clear-btn").addEventListener("click", () => {
  cart.clearCart();
});

export const cart = new ShoppingCart("shopping-cart-items");
