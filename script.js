function menuMobileShow() {
    let menuMobile = document.getElementById('menu-mobile');
    if (menuMobile.classList.contains('menu-mobile-show')){
        menuMobile.classList.remove('menu-mobile-show');
        document.getElementById('btn-menu-mobile').src = "./assets/icons/bars-solid.svg";
    } else {
        menuMobile.classList.add('menu-mobile-show');
        document.getElementById('btn-menu-mobile').src = "./assets/icons/xmark-solid.svg";
    }
}