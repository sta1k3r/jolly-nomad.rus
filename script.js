document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let currentSection = 0;
    let isScrolling = false;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.transition = "opacity 1s ease-in-out, visibility 1s ease-in-out";
            section.style.opacity = i === index ? "1" : "0";
            section.style.visibility = i === index ? "visible" : "hidden";
            section.style.position = "absolute";
            section.style.top = "0";
            section.style.left = "0";
            section.style.width = "100vw";
            section.style.height = "100vh";
            section.style.display = i === index ? "flex" : "none";
            section.style.justifyContent = "center";
            section.style.alignItems = "center";
        });
        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 1200); // Защита от быстрого скролла
    }

    window.addEventListener("wheel", (event) => {
        if (isScrolling) return;
        if (event.deltaY > 0) {
            currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else {
            currentSection = Math.max(currentSection - 1, 0);
        }
        showSection(currentSection);
    });

    showSection(currentSection);

    // Убираем скролл
    document.body.style.overflow = "hidden";

    // Мобильное меню
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("mobile-visible");
    });

    // Улучшенная стрелка вниз
    let scrollIndicator = document.createElement("div");
    scrollIndicator.innerHTML = "&#9660;"; // Символ стрелки вниз
    scrollIndicator.style.position = "fixed";
    scrollIndicator.style.bottom = "50px";
    scrollIndicator.style.left = "50%";
    scrollIndicator.style.transform = "translateX(-50%)";
    scrollIndicator.style.fontSize = "32px";
    scrollIndicator.style.color = "white";
    scrollIndicator.style.opacity = "0.8";
    scrollIndicator.style.animation = "bounce 1.5s infinite";
    scrollIndicator.style.cursor = "pointer";

    scrollIndicator.addEventListener("click", () => {
        if (currentSection < sections.length - 1) {
            currentSection++;
            showSection(currentSection);
        }
    });

    document.body.appendChild(scrollIndicator);

    let style = document.createElement("style");
    style.innerHTML = "@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }";
    document.head.appendChild(style);
});
