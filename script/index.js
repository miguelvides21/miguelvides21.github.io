document.addEventListener("DOMContentLoaded", function() {
  // === Header / Info ===
  const infoBtn = document.getElementById("infoBtn");
  const homeBtn = document.getElementById("homeBtn");
  const info = document.getElementById("infoSection");
  const projects = document.getElementById("projectsSection");
  const header = document.querySelector(".headermiguel");

  let loopActive = true;
  let isJumping = false;
  let blockHeight = 0;

  // Duplicar contenido para scroll infinito
  const originalProjects = projects.innerHTML;
  projects.innerHTML = originalProjects.repeat(3);

  // ⚡ Calcular altura y posicionar scroll al centro
  window.addEventListener("load", () => {
    blockHeight = projects.scrollHeight / 3;
    window.scrollTo({ top: blockHeight, behavior: "instant" });
  });

  // === Función scroll infinito sin rebote ===
  function handleScroll() {
    if (!loopActive || isJumping || !blockHeight) return;

    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop >= blockHeight * 2) {
      jump(blockHeight); // salto al centro
    } else if (scrollTop <= 0) {
      jump(blockHeight * 2); // salto al centro
    }
  }

  function jump(position) {
    isJumping = true;
    document.body.style.overflow = "hidden";

    window.scrollTo({ top: position, behavior: "instant" });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.style.overflow = "";
        isJumping = false;
      });
    });
  }

  // Optimización con requestAnimationFrame
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // === Estado inicial header/info ===
  homeBtn.style.display = "none";
  info.style.display = "none";

  infoBtn.onclick = () => {
    loopActive = false;
    info.style.display = "block";
    projects.style.display = "none";
    infoBtn.style.display = "none";
    homeBtn.style.display = "inline-block";
    header.classList.add("info-mode");
  };

  homeBtn.onclick = () => {
    loopActive = true;
    info.style.display = "none";
    projects.style.display = "flex";
    homeBtn.style.display = "none";
    infoBtn.style.display = "inline-block";
    header.classList.remove("info-mode");

    // reset scroll al centro
    window.scrollTo({ top: blockHeight, behavior: "instant" });
  };

  // === Lightbox simple ===
  const lightbox = document.createElement('img');
  lightbox.classList.add('lightbox-img');
  lightbox.style.display = "none"; // evitar flash inicial
  document.body.appendChild(lightbox);

  const thumbs = document.querySelectorAll('.media-thumb');
  thumbs.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.src = img.src;
      lightbox.style.display = 'block';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightbox.src = '';
  });
});