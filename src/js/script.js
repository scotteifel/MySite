// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const navEl = document.querySelector(".main-nav");

navEl.addEventListener("click", function (e) {
  headerEl.classList.toggle("nav-open");
});
