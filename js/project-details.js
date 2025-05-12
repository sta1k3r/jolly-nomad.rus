document.addEventListener("DOMContentLoaded", () => {
  const descriptions = document.querySelectorAll(".project-details-content");
  const projectNavs = document.querySelectorAll(".casestudy-nav");
  let currentProject = 0;

  function showProject(index) {
    descriptions.forEach((desc, i) => {
      desc.classList.toggle("active", i === index);
    });
    currentProject = index;
  }

  document.querySelector(".slide-next").addEventListener("click", () => {
    const next = (currentProject + 1) % descriptions.length;
    showProject(next);
  });

  document.querySelector(".slide-previous").addEventListener("click", () => {
    const prev = (currentProject - 1 + descriptions.length) % descriptions.length;
    showProject(prev);
  });

  projectNavs.forEach((el) => {
    el.addEventListener("click", () => {
      const index = parseInt(el.dataset.project);
      showProject(index);
    });
  });

  // Показать первый по умолчанию
  showProject(0);
});
