/*Mobile Side Menu*/

const $sideMenu = document.getElementById("side-menu");

function toggleSideMenu (){
    $sideMenu.classList.toggle("side-menu-active");
    disableOverflow()
}

/*Shopping Cart Side Menu*/

const $shoppingCart = document.getElementById("shopping-cart");

function toggleShoppingCart (){
    $shoppingCart.classList.toggle("shopping-cart-active");
    disableOverflow()
}

/* Disable Overflow */

function disableOverflow (){
    if(document.body.style.overflow === "hidden"){
        document.body.style.overflow = "auto";
    }else{
        document.body.style.overflow = "hidde";
    }
}

/* Buttons Listeners */

export function initializeSideMenus (){
    /* side menu*/
    document.getElementById("side-menu-open-btn").addEventListener("click", () => {
        toggleSideMenu();
    });
    document.getElementById("side-menu-close-btn").addEventListener("click", () => {
        toggleSideMenu();
    });

    /* shopping cart*/
    document.getElementById("shopping-cart-open-btn").addEventListener("click", () => {
        toggleShoppingCart();
    });
    document.getElementById("shopping-cart-close-btn").addEventListener("click", () => {
        toggleShoppingCart();
    });
}