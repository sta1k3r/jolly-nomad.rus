document.addEventListener("DOMContentLoaded", function () {
    // Плавная прокрутка при клике на меню
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

    // Подключение библиотеки анимации AOS.js
    AOS.init({
        duration: 1000,
        once: true
    });
});
