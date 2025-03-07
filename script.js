document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    
    function revealSections() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8) {
                section.classList.add("active");
            }
        });
    }

    // Прокрутка к следующей секции
    function scrollToNext() {
        const activeIndex = [...sections].findIndex(section => section.classList.contains("active"));
        if (activeIndex < sections.length - 1) {
            sections[activeIndex + 1].scrollIntoView({ behavior: "smooth" });
        }
    }

    document.querySelector("button").addEventListener("click", scrollToNext);
    window.addEventListener("scroll", revealSections);
    revealSections();
});
