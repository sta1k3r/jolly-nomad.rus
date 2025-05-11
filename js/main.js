document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".step");
  let currentIndex = 0;
  let isThrottled = false;

  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;
    isThrottled = true;
    sections[index].scrollIntoView({ behavior: "smooth" });
    currentIndex = index;
    setTimeout(() => {
      isThrottled = false;
    }, 1500); // задержка больше, чтобы не перескакивать
  };

  window.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (isThrottled) return;
    if (e.deltaY > 0) {
      scrollToSection(currentIndex + 1);
    } else if (e.deltaY < 0) {
      scrollToSection(currentIndex - 1);
    }
  }, { passive: false });

  window.addEventListener("keydown", (e) => {
    if (isThrottled) return;
    if (e.key === "ArrowDown") {
      scrollToSection(currentIndex + 1);
    } else if (e.key === "ArrowUp") {
      scrollToSection(currentIndex - 1);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentIndex = [...sections].indexOf(entry.target);
      }
    });
  }, { threshold: 0.6 });

  sections.forEach((section) => observer.observe(section));
});
