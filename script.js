document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a");
    let navItems = document.querySelectorAll("nav ul li");
    let projectSlides = document.querySelectorAll(".project-slide");
    let sectionIds = Array.from(sections).map(sec => sec.id);
    let currentSection = 0;
    let currentProject = 0;
    let isScrolling = false;

    function showSection(index) {
        sections.forEach((section, i) => {
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
            section.style.transition = "opacity 1s ease-in-out, visibility 1s ease-in-out";
        });

        navLinks.forEach(link => link.classList.remove("active"));
        let activeNav = document.querySelector(`nav ul li[data-section='${sections[index].dataset.section}'] a`);
        if (activeNav) activeNav.classList.add("active");

        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 1000);
    }

    function showProject(index) {
        projectSlides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
            slide.style.visibility = i === index ? "visible" : "hidden";
        });
    }

    window.addEventListener("wheel", (event) => {
        if (isScrolling) return;

        if (sections[currentSection].dataset.section === "projects") {
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
    });

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            let targetId = link.parentElement.dataset.section;
            let targetIndex = sectionIds.indexOf(targetId);
            if (targetIndex !== -1) {
                currentSection = targetIndex;
                showSection(currentSection);
                if (targetId === "projects") {
                    showProject(0);
                }
            }
        });
    });

    let projectsButton = document.querySelector("nav ul li.projects a");
    if (projectsButton) {
        projectsButton.addEventListener("click", (event) => {
            event.preventDefault();
            let projectsIndex = sectionIds.indexOf("projects");
            if (projectsIndex !== -1) {
                currentSection = projectsIndex;
                showSection(currentSection);
                showProject(0);
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (currentSection !== sectionIds.indexOf("projects")) return;

        if (event.key === "ArrowRight") {
            currentProject = (currentProject + 1) % projectSlides.length;
            showProject(currentProject);
        } else if (event.key === "ArrowLeft") {
            currentProject = (currentProject - 1 + projectSlides.length) % projectSlides.length;
            showProject(currentProject);
        }
    });

    showSection(currentSection);
    showProject(0);
});
