let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    NavBar.classList.remove('active');
}

let shoopingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoopingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    NavBar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoopingCart.classList.remove('active');
    NavBar.classList.remove('active');
}

let NavBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    NavBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoopingCart.classList.remove('active');
    loginForm.classList.remove('active');

}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    NavBar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});