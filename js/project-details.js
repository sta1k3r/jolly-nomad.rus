document.addEventListener("DOMContentLoaded", function () {
  const descriptions = document.querySelectorAll(".project-description[data-project]");
  const navItems = document.querySelectorAll(".casestudy-nav");

  function showProject(index) {
    descriptions.forEach((desc, i) => {
      desc.style.display = (i === index) ? "block" : "none";
    });
  }

  // Показываем первый проект по умолчанию
  showProject(0);

  // При клике на меню проекта
  navItems.forEach((nav) => {
    nav.addEventListener("click", () => {
      const index = parseInt(nav.getAttribute("data-project"));
      showProject(index);
    });
  });
});
