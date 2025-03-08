document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".section");
    let navLinks = document.querySelectorAll("nav ul li a");
    let projectSlides = document.querySelectorAll(".project-slide");
    let currentSection = 0;
    let currentProject = 0;
    let isScrolling = false;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.toggle("active", i === index);
        });
        document.body.classList.toggle("section-active", index !== 0);
    }

    function showProject(index) {
        projectSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    window.addEventListener("wheel", (event) => {
        if (isScrolling) return;
        if (sections[currentSection].id === "projects") {
            if (event.deltaY > 0) {
                currentProject = Math.min(currentProject + 1, projectSlides.length - 1);
            } else {
                currentProject = Math.max(currentProject - 1, 0);
            }
            showProject(currentProject);
        } else {
            if (event.deltaY > 0) {
                currentSection = Math.min(currentSection + 1, sections.length - 1);
            } else {
                currentSection = Math.max(currentSection - 1, 0);
            }
            showSection(currentSection);
        }
        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 1200);
    });

    navLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            currentSection = index;
            showSection(currentSection);
        });
    });

    showSection(currentSection);
    showProject(currentProject);
});
