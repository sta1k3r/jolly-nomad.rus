// main.js — Чистая версия для jolly-nomad.ru

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initSlider();
  initSmoothScroll();
});

// Открытие/закрытие меню
function initMenu() {
  const menuButton = document.querySelector(".menu-preview-home");
  const menu = document.querySelector(".menu");

  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      menu.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }
}

// Инициализация слайдера (Slick)
function initSlider() {
  if (typeof $ !== "undefined" && $(".slider").length) {
    $(".slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000
    });
  }
}

// Плавная прокрутка до якорей
function initSmoothScroll() {
  const links = document.querySelectorAll("a[href^='#']:not([href='#'])");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
