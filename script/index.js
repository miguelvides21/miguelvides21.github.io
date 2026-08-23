document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // ELEMENTOS
  // =========================

  const infoBtn = document.getElementById("infoBtn");
  const homeBtn = document.getElementById("homeBtn");
  const info = document.getElementById("infoSection");
  const projects = document.getElementById("projectsSection");
  const header = document.querySelector(".headermiguel");
  const hoverText = document.getElementById("projectHover");


  // =========================
  // DUPLICAR PROYECTOS
  // =========================

  const originalItems = [...projects.children];

  // Creamos 3 bloques
  originalItems.forEach(item => {
    projects.appendChild(item.cloneNode(true));
  });

  originalItems.forEach(item => {
    projects.appendChild(item.cloneNode(true));
  });


  // =========================
  // LOOP INFINITO
  // =========================

  let loopReady = false;
  let blockHeight = 0;


  function setupLoop() {

    blockHeight = projects.scrollHeight / 3;

    // Empezamos en el bloque central
    window.scrollTo({
      top: blockHeight,
      behavior: "instant"
    });

    loopReady = true;
  }


  // Esperamos a que carguen todas las imágenes
  window.addEventListener("load", function () {

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {

        setupLoop();

      });
    });

  });


  // =========================
  // SCROLL INFINITO
  // =========================

  window.addEventListener("scroll", () => {

    if (!loopReady || !blockHeight) return;

    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop;


    // =========================
    // FINAL
    // =========================

    if (scrollTop >= blockHeight * 2) {

      window.scrollTo({
        top: scrollTop - blockHeight,
        behavior: "instant"
      });

    }


    // =========================
    // PRINCIPIO
    // =========================

    else if (scrollTop <= 0) {

      window.scrollTo({
        top: scrollTop + blockHeight,
        behavior: "instant"
      });

    }

  });


  // =========================
  // HEADER / INFO
  // =========================

  homeBtn.style.display = "none";
  info.style.display = "none";


  // =========================
  // INFO
  // =========================

  infoBtn.onclick = () => {

    info.style.display = "block";
    projects.style.display = "none";

    infoBtn.style.display = "none";
    homeBtn.style.display = "inline-block";

    header.classList.add("info-mode");

  };


  // =========================
  // BACK
  // =========================

  homeBtn.onclick = () => {

    info.style.display = "none";
    projects.style.display = "flex";

    homeBtn.style.display = "none";
    infoBtn.style.display = "inline-block";

    header.classList.remove("info-mode");

    window.scrollTo({
      top: blockHeight,
      behavior: "instant"
    });

  };


  // =========================
  // LIGHTBOX
  // =========================

  const lightbox = document.createElement("img");

  lightbox.classList.add("lightbox-img");
  lightbox.style.display = "none";

  document.body.appendChild(lightbox);


  const thumbs = document.querySelectorAll(".media-thumb");


  thumbs.forEach(img => {

    img.addEventListener("click", () => {

      lightbox.src = img.src;
      lightbox.style.display = "block";

    });

  });


  lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";
    lightbox.src = "";

  });


  // =========================
  // HOVER PROYECTOS
  // =========================

  const projectsHover =
    document.querySelectorAll(".proyectomiguel");


  projectsHover.forEach(project => {

    const name = project.dataset.project;


    project.addEventListener("mouseenter", () => {

      hoverText.textContent = name;

    });


    project.addEventListener("mouseleave", () => {

      hoverText.textContent = "";

    });

  });

});