document.addEventListener('DOMContentLoaded', () => {

  const infoBtn = document.getElementById('infoBtn');
  const homeBtn = document.getElementById('homeBtn');
  const header = document.querySelector('.headermiguel');
  const info = document.getElementById('infoSection');
  const projects = document.querySelector('.thumb-container');

  homeBtn.style.display = "none";
  info.style.display = "none";

  infoBtn.onclick = () => {
    info.style.display = "block";
    projects.style.display = "none";
    infoBtn.style.display = "none";
    homeBtn.style.display = "inline-block";
    header.classList.add("info-mode");
  };

  homeBtn.onclick = () => {
    info.style.display = "none";
    projects.style.display = "flex";
    homeBtn.style.display = "none";
    infoBtn.style.display = "inline-block";
    header.classList.remove("info-mode");
  };

  // LIGHTBOX (lo puedes dejar igual)
  const lightbox = document.createElement('img');
  lightbox.classList.add('lightbox-img');
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