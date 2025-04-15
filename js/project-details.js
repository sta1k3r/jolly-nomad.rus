document.addEventListener("DOMContentLoaded", function () {
  const descriptions = document.querySelectorAll(".project-description[data-project]");
  const navLinks = document.querySelectorAll(".casestudy-nav");

  function showDescription(index) {
    descriptions.forEach((desc) => {
      desc.style.display = desc.dataset.project == index ? "block" : "none";
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const projectIndex = link.dataset.project;
      showDescription(projectIndex);
    });
  });

  // Показываем описание первого проекта
  showDescription(0);
});
