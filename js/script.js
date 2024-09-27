const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
menuIcon.addEventListener("click", () => {
   
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    
    mobileMenuContainer.classList.remove("active");
});

var carousel = document.querySelector('#carouselExampleDark');
var carouselInstance = new bootstrap.Carousel(carousel);
var carouselCurrent = document.getElementById('carouselCurrent');

carousel.addEventListener('slide.bs.carousel', function (e) {
    carouselCurrent.textContent = ('0' + (e.to + 1)).slice(-2);
});
  document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselExampleDark');
    const carouselCurrent = document.querySelector('#carouselCurrent');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    // Set total slide count
    document.querySelector('#carouselTotal').textContent = totalItems.toString().padStart(2, '0');

    // Update counter when slide changes
    carousel.addEventListener('slid.bs.carousel', function () {
      const activeSlideIndex = Array.from(document.querySelectorAll('.carousel-item')).findIndex(item =>
        item.classList.contains('active')
      );
      carouselCurrent.textContent = (activeSlideIndex + 1).toString().padStart(2, '0');
    });
  });