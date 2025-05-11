// main.js — восстановленная версия с современным синтаксисом

document.addEventListener("DOMContentLoaded", () => {
  initCursorEffects();
  initMenu();
  initSlider();
  initProjectNavigation();
  initScrollAnimations();
  initButtonLetterAnimation();
});

// Состояние
let step = 0;
let project = 0;
let profile = 0;
let isProject = false;
const projectTotal = 4;
const profileTotal = 3;

// Навигация по меню
function updateMenuHighlight() {
  document.querySelectorAll(".menu li").forEach((el, idx) => {
    el.classList.toggle("active", idx === step);
  });
}

// Загрузка проекта
function openProject(delay = 0, scrollToSlide = true) {
  window.location.hash = "project" + project;
  document.body.className = `step-${step} project-${project} profile-${profile} is-project`;

  document.querySelector(".project-details-content")?.classList.remove("is-loaded");
  $(".project-description").load(`project_${project}.html .project-description`, () => {
    setTimeout(() => {
      $(".project-details-content").addClass("is-loaded");
    }, delay);
  });

  $(".project-casestudy").load(`project_${project}.html .casestudy-content`);
  setTimeout(() => {
    document.body.className += " ov-visible";
    document.querySelectorAll(`.casestudy-nav[data-project]`).forEach((el) => {
      el.classList.toggle("active", parseInt(el.dataset.project) === project);
    });
  }, 2000);

  if (scrollToSlide) {
    $(".slider").slick("slickGoTo", project);
  }

  isProject = true;
}

// Закрытие проекта
function closeProject() {
  isProject = false;
  document.querySelector(".project-details-content")?.classList.add("exit-anim");
  document.body.className = `step-${step} project-${project} profile-${profile} ov-visible`;

  $("html, body").animate({ scrollTop: 0 }, 500);
  setTimeout(() => {
    document.querySelector(".project-details-content")?.classList.remove("exit-anim");
    document.body.className = `step-${step} project-${project} profile-${profile}`;
  }, 1000);
  updateMenuHighlight();
}

// Слайдер
function initSlider() {
  if (typeof $ !== "undefined" && $(".slider").length) {
    $(".slider").slick({
      centerMode: true,
      centerPadding: "0",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 2000,
      cssEase: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    });

    $(".slider").on("swipe", (e, t, dir) => {
      $(".project-details-content").addClass("exit-anim");
      if (dir === "left") nextProject();
      else if (dir === "right") prevProject();
      refreshProject();
    });
  }
}

function prevProject() {
  project = project === 0 ? projectTotal : project - 1;
  $(".slider").slick("slickPrev");
}

function nextProject() {
  project = project < projectTotal ? project + 1 : 0;
  $(".slider").slick("slickNext");
}

function refreshProject() {
  updateMenuHighlight();
  openProject(10, false);
  setTimeout(() => {
    document.querySelector(".project-details-content")?.classList.remove("exit-anim");
  }, 1000);
}

// Прокрутка, свайпы и логика
function initProjectNavigation() {
  document.querySelectorAll(".open-project")?.forEach(btn => {
    btn.addEventListener("click", () => {
      openProject(2500);
      window.scrollTo({ top: 0 });
    });
  });

  document.querySelector(".logo")?.addEventListener("click", () => {
    if (isProject) {
      document.querySelector(".project-details-content")?.classList.add("exit-anim");
      setTimeout(() => {
        step = 0;
        profile = 0;
        isProject = false;
        project = 0;
        updateMenuHighlight();
        document.body.className = `step-${step} project-${project} profile-${profile}`;
      }, 2000);
    } else {
      step = 0;
      project = 0;
      profile = 0;
      updateMenuHighlight();
    }
  });
}

// Эффект букв в кнопках
function initButtonLetterAnimation() {
  $(".button, .project-name span").each(function () {
    const $el = $(this);
    $el.html($el.text().replace(/([^
