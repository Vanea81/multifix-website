
function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  location.reload();
}
function applyLanguage() {
  const lang = localStorage.getItem('lang') || 'en';
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    if (el.dataset[lang]) {
      el.textContent = el.dataset[lang];
    }
  });
}
document.addEventListener('DOMContentLoaded', applyLanguage);
