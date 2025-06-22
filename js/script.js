function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  updateLanguage();
}
function updateLanguage() {
  const lang = localStorage.getItem('lang') || 'ua';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
document.addEventListener('DOMContentLoaded', updateLanguage);