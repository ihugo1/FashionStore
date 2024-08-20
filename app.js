import { initializeSideMenus } from "./js/module/side-menus.js";
import { cart } from "./js/module/shopping-cart.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeSideMenus();
  cart.loadCart();

  if(window.location.pathname.includes("home")){
    import("./js/module/home-banner.js")
      .then((module) => {
        module.changeImg();
        setInterval(module.changeImg, 3000);
      })
      .catch((error) => alert.error("Error Loading PageModule", error));

    import("./js/module/load-best-sellers.js")
      .then((module) => module.loadBestSellers())
      .catch((error) => alert.error("Error Loading PageModule", error));
  } 
  
  else if (window.location.pathname.includes("catalogue")) {
    import("./js/module/load-catalogue.js")
      .then((module) => module.loadCatalogue())
      .catch((error) => alert.error("Error Loading PageModule", error));
  } 
  
  else if (window.location.pathname.includes("product-details")) {
    import("./js/module/load-product.js")
      .then((module) => module.loadProductDetails())
      .catch((error) => alert.error("Error loading PageModule", error));
  }
});
