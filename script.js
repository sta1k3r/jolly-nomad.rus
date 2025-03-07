document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".project-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateY(${(i - index) * 100}vh)`;
        });
    }

    window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            currentSlide = Math.min(currentSlide + 1, slides.length - 1);
        } else {
            currentSlide = Math.max(currentSlide - 1, 0);
        }
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    // Мобильное меню
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("mobile-visible");
    });
});
