import { productsDatabase } from "../data-base/products-database.js";

class ShoppingCart {
  
  constructor(containerId) {
    this.shoppingCartItems = [];
    this.productCartIdGenerator = 0;
    this.$shoppingCartItemsContainer = document.getElementById(containerId);
  }

  addToCart(productId, productSize) {
    this.productCartIdGenerator++;
    const productInDataBase = productsDatabase.find(product => product.id === productId);
    const productToAdd = { ...productInDataBase, selectedSize: productSize, cartId: this.productCartIdGenerator };
    this.shoppingCartItems.push(productToAdd);
    this.loadCart();
  }

  loadCart() {
    let temp = "";

    this.shoppingCartItems.forEach(item => {
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
      removeBtn => removeBtn.addEventListener("click", () => 
        this.removeFromCart(removeBtn.getAttribute("in-cart-id"))
      )
    );
  }

  removeFromCart(itemId) {
    this.shoppingCartItems = this.shoppingCartItems.filter(item => item.cartId !== parseInt(itemId));
    this.loadCart();
  }

  clearCart() {
    this.shoppingCartItems = [];
    this.loadCart();
  }

}

export const cart = new ShoppingCart("shopping-cart-items");


