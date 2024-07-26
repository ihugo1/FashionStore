const $sideMenu = document.getElementById("side-menu");

export function toggleSideMenu (){
    $sideMenu.classList.toggle("side-menu-active");
    if(document.body.style.overflow === 'hidden'){
        document.body.style.overflow = 'auto';
    }else{
        document.body.style.overflow = 'hidden';
    }
}