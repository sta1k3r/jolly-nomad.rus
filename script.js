document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
