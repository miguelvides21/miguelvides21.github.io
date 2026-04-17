const header = document.querySelector('.headermiguel');

function setHeaderHeight() {
  document.documentElement.style.setProperty(
    '--header-height',
    header.offsetHeight + 'px'
  );
}

setHeaderHeight();
window.addEventListener('resize', setHeaderHeight);

// =========================
// === LIGHTBOX ===
// =========================

const lightbox = document.createElement('img');
lightbox.classList.add('lightbox-img');
document.body.appendChild(lightbox);

const thumbs = document.querySelectorAll('.imagenes-proyecto img');

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