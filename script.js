let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navtag.classList.remove('active');
};

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navtag.classList.remove('active');

};
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navtag.classList.remove('active');
};
let navtag = document.querySelector('.navtag');
document.querySelector('#menu-btn').onclick = () => {
    navtag.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
};
window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navtag.classList.remove('active');

};




  var swiper = new Swiper(".products-slider", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
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
    grabCursor: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
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

  


  fetch('products.php')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.swiper-wrapper');
    container.innerHTML = data.map(product => `
      <div class="swiper-slide box">
        <img src="${product.image}" alt="${product.name}">
        <h1>${product.name}</h1>
        <div class="price">$${product.price}</div>
        <div class="stars">
          <i class="fa fa-star"></i><i class="fa fa-star"></i>
          <i class="fa fa-star"></i><i class="fa fa-star"></i>
          <i class="fa fa-star-half"></i>
        </div>
        <a href="#" class="btn">Add to cart</a>
      </div>
    `).join('');
  });

  

    
