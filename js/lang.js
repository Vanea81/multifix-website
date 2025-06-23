const translations = {
  en: {
    title: "MultiFix",
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_about: "About",

    page_title: "Welcome!",
    page_description: "This is a sample paragraph in English.",

    contact_title: "Contact Us",
    phone_label: "Phone:",
    service_area: "We serve Westmount, Downtown, Côte-des-Neiges, NDG.",
    motto: "Good work is done calmly."
  },

  fr: {
    title: "MultiFix",
    nav_home: "Accueil",
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_contact: "Contact",
    nav_about: "À propos",

    page_title: "Bienvenue!",
    page_description: "Ceci est un paragraphe en français.",

    contact_title: "Contactez-nous",
    phone_label: "Téléphone:",
    service_area: "Nous desservons Westmount, le Centre-ville, Côte-des-Neiges, NDG.",
    motto: "De bons travaux se font calmement."
  },

  uk: {
    title: "MultiFix",
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_gallery: "Галерея",
    nav_contact: "Контакти",
    nav_about: "Про нас",

    page_title: "Вітаємо!",
    page_description: "Це приклад тексту українською мовою.",

    contact_title: "Зв’яжіться з нами",
    phone_label: "Телефон:",
    service_area: "Обслуговуємо Вестмаунт, Центр, Кот-де-Неж, Нотр-Дам-де-Грас.",
    motto: "Хороші роботи робляться спокійно."
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
