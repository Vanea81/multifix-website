const translations = {
  en: {
    title: "MultiFix",
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_about: "About",
    main_heading: "Welcome to MultiFix!",
    main_intro: "We provide high-quality, honest maintenance and repair services in Montreal.",
    main_zones: "Serving Westmount, Downtown, Côte-des-Neiges, NDG.",
    main_motto: "Good work is done calmly."
  },
  fr: {
    title: "MultiFix",
    nav_home: "Accueil",
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_contact: "Contact",
    nav_about: "À propos",
    main_heading: "Bienvenue chez MultiFix!",
    main_intro: "Nous fournissons des services de maintenance et de réparation honnêtes et de qualité à Montréal.",
    main_zones: "Nous desservons Westmount, le centre-ville, Côte-des-Neiges, NDG.",
    main_motto: "De bons travaux se font calmement."
  },
  uk: {
    title: "MultiFix",
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_gallery: "Галерея",
    nav_contact: "Контакти",
    nav_about: "Про нас",
    main_heading: "Ласкаво просимо до MultiFix!",
    main_intro: "Ми надаємо якісні та чесні послуги з обслуговування і ремонту в Монреалі.",
    main_zones: "Обслуговуємо райони Вестмаунт, Центр, Кот-де-Неж, Нотр-Дам-де-Грас.",
    main_motto: "Хороші роботи робляться спокійно."
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
