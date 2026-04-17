document.addEventListener('DOMContentLoaded', () => {

  // === ELEMENTOS PRINCIPALES ===
  const infoBtn = document.getElementById('infoBtn');
  const homeBtn = document.getElementById('homeBtn');
  const header = document.querySelector('.headermiguel');
  const info = document.getElementById('infoSection');
  const projects = document.querySelector('.contenedor-proyecto'); // puede ser null
  const animation = document.querySelector('.animacion-proyecto'); // animación principal

  const thumbsBtn = document.querySelector('.thumbs');
  const listBtn = document.querySelector('.list');
  const switchView = document.querySelector('.switch-view');

  // === SWITCH VIEW (thumbs/list) ===
  const activateThumbs = () => {
    if (projects) projects.classList.remove('list-view');
    if (thumbsBtn) thumbsBtn.classList.add('active');
    if (listBtn) listBtn.classList.remove('active');
  };

  const activateList = () => {
    if (projects) projects.classList.add('list-view');
    if (listBtn) listBtn.classList.add('active');
    if (thumbsBtn) thumbsBtn.classList.remove('active');
  };

  // Inicialización según pantalla
  if (window.innerWidth > 768) {
    activateThumbs();
  } else {
    activateList();
    if (switchView) switchView.style.display = 'none';
  }

  if (thumbsBtn && listBtn) {
    thumbsBtn.onclick = activateThumbs;
    listBtn.onclick = activateList;
  }

  // === INFO / HOME ===
  if (homeBtn) homeBtn.style.display = "none";
  if (info) info.style.display = "none";

  if (infoBtn) {
    infoBtn.onclick = () => {
      if (info) info.style.display = "block";
      if (projects) projects.style.display = "none";
      if (animation) animation.style.display = "none"; // ocultar animación
      infoBtn.style.display = "none";
      if (homeBtn) homeBtn.style.display = "inline-block";
      if (header) header.classList.add("info-mode");
      if (switchView) switchView.style.display = "none";
    };
  }

  if (homeBtn) {
    homeBtn.onclick = () => {
      if (info) info.style.display = "none";
      if (projects) projects.style.display = "flex";
      if (animation) animation.style.display = "block"; // mostrar animación
      homeBtn.style.display = "none";
      if (infoBtn) infoBtn.style.display = "inline-block";
      if (header) header.classList.remove("info-mode");
      if (switchView) switchView.style.display = "grid";
    };
  }

  // === LIGHTBOX ===
  const lightbox = document.createElement('img');
  lightbox.classList.add('lightbox-img');
  lightbox.style.display = 'none';
  document.body.appendChild(lightbox);

  const thumbs = document.querySelectorAll('.thumb-container .media-thumb');
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