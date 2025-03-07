document.addEventListener("DOMContentLoaded", function () {
    // Плавная прокрутка при клике на пункты меню
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Инициализация анимации (AOS.js)
    AOS.init({
        duration: 1000, // Длительность анимации (в миллисекундах)
        once: true // Анимация выполняется только один раз
    });

    // Мобильное меню (гамбургер)
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("mobile-visible"); // Показывает/скрывает меню
    });
});
