document.addEventListener('DOMContentLoaded', () => {

  const infoBtn = document.getElementById('infoBtn');
  const homeBtn = document.getElementById('homeBtn');
  const header = document.querySelector('.headermiguel');
  const info = document.getElementById('infoSection');
  const projects = document.querySelector('.thumb-container');

  homeBtn.style.display = "none";
  info.style.display = "none";

  // INFO MODE
  infoBtn.onclick = () => {
    info.style.display = "block";
    projects.style.display = "none";
    infoBtn.style.display = "none";
    homeBtn.style.display = "inline-block";
    header.classList.add("info-mode");
  };

  // HOME MODE
  homeBtn.onclick = () => {
    info.style.display = "none";
    projects.style.display = "flex";
    homeBtn.style.display = "none";
    infoBtn.style.display = "inline-block";
    header.classList.remove("info-mode");
  };

  // LIGHTBOX
  const lightboxOverlay = document.createElement('div');
  lightboxOverlay.classList.add('lightbox-overlay');

  const lightbox = document.createElement('img');
  lightbox.classList.add('lightbox-img');

  lightboxOverlay.appendChild(lightbox);
  document.body.appendChild(lightboxOverlay);

  const thumbs = document.querySelectorAll('.thumb-container .media-thumb');

  thumbs.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.src = img.src;
      lightboxOverlay.classList.add('active');
    });
  });

  // Cerrar al clicar fuera de la imagen
  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.classList.remove('active');
      lightbox.src = '';
    }
  });

  // Opcional: cerrar también clicando la imagen
  lightbox.addEventListener('click', () => {
    lightboxOverlay.classList.remove('active');
    lightbox.src = '';
  });

});