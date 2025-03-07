document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li");
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
            section.style.display = "flex";
            section.style.justifyContent = "center";
            section.style.alignItems = "center";
        });

        document.body.classList.toggle("section-active", index !== 0);

        // Логика отображения кнопок
        navLinks.forEach((link) => link.style.display = "none"); // Скрываем все кнопки

        let activeSection = sections[index].dataset.section;

        if (activeSection === "projects") {
            document.querySelector("nav ul li.projects").style.display = "block";
        } else {
            let activeLink = document.querySelector(`nav ul li[data-section='${activeSection}']`);
            if (activeLink) activeLink.style.display = "block";
        }

        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 1200);
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
});
