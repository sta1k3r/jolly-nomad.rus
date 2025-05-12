document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(document.querySelectorAll(".step, #about, #contact")); // расширяем список
  let currentIndex = 0;
  let isThrottled = false;

  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;
    isThrottled = true;
    sections[index].scrollIntoView({ behavior: "smooth", block: "start" });
    currentIndex = index;
    setTimeout(() => {
      isThrottled = false;
    }, 1200); // немного меньше задержка, но плавно
  };

  window.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (isThrottled) return;
    e.deltaY > 0 ? scrollToSection(currentIndex + 1) : scrollToSection(currentIndex - 1);
  }, { passive: false });

  window.addEventListener("keydown", (e) => {
    if (isThrottled) return;
    if (e.key === "ArrowDown") scrollToSection(currentIndex + 1);
    if (e.key === "ArrowUp") scrollToSection(currentIndex - 1);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentIndex = sections.indexOf(entry.target);
      }
    });
  }, { threshold: 0.6 });

  sections.forEach((section) => observer.observe(section));
});

document.querySelectorAll(".project-details-content").forEach((el) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        el.setAttribute("animate", "true");
      }
    });
  }, { threshold: 0.6 });

  observer.observe(el);
});
