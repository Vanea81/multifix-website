const translations = {
  en: {
    title: "MultiFix",
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_about: "About",
    home_title: "Reliable Home Repair Services in Montreal",
    home_description: "We offer professional maintenance and repairs with attention to detail.",
    footer_text: "Home Repair Services in Montreal"
  },
  fr: {
    title: "MultiFix",
    nav_home: "Accueil",
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_contact: "Contact",
    nav_about: "À propos",
    home_title: "Services de réparation fiables à Montréal",
    home_description: "Nous offrons un entretien et des réparations professionnels avec le souci du détail.",
    footer_text: "Services de réparation à Montréal"
  },
  uk: {
    title: "MultiFix",
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_gallery: "Галерея",
    nav_contact: "Контакти",
    nav_about: "Про нас",
    home_title: "Надійні послуги з ремонту в Монреалі",
    home_description: "Пропонуємо професійне обслуговування та ремонт з увагою до деталей.",
    footer_text: "Послуги ремонту в Монреалі"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  applyTranslations(lang);
});
