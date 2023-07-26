var tombolMenu = document.getElementsByClassName("tombol-menu")[0];
var menu = document.getElementsByClassName("menu")[0];

tombolMenu.onclick = function () {
  menu.classList.toggle("active");
};

menu.onclick = function () {
  menu.classList.toggle("active");
};
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// section about
const smoothScroll = (about) => {
  const element = document.querySelector(about);
  element.scrollIntoView({
    behavior: "smooth",
  });
};
// end section
