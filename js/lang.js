
const translations = {
  en: {
    title: "MultiFix",
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_about: "About",
    contact_title: "Contact Us",
    contact_phone_full: "Phone: +1 438 365 5756",
    contact_email_full: "Email: hybridheating38@gmail.com",
    contact_area: "We serve Westmount, Downtown, Côte-des-Neiges, NDG.",
    motto: "Good work is done calmly.",
    footer_text: "Home Repair Services in Montreal"
  },
  fr: {
    title: "MultiFix",
    nav_home: "Accueil",
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_contact: "Contact",
    nav_about: "À propos",
    contact_title: "Contactez-nous",
    contact_phone_full: "Téléphone : +1 438 365 5756",
    contact_email_full: "Email : hybridheating38@gmail.com",
    contact_area: "Nous desservons Westmount, Centre-ville, Côte-des-Neiges, NDG.",
    motto: "De bons travaux se font calmement.",
    footer_text: "Services de réparation à Montréal"
  },
  uk: {
    title: "MultiFix",
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_gallery: "Галерея",
    nav_contact: "Контакти",
    nav_about: "Про нас",
    contact_title: "Зв'яжіться з нами",
    contact_phone_full: "Телефон: +1 438 365 5756",
    contact_email_full: "Електронна пошта: hybridheating38@gmail.com",
    contact_area: "Ми обслуговуємо Вестмаунт, Центр міста, Кот-де-Неж, Нотр-Дам-де-Грас.",
    motto: "Хороші роботи робляться спокійно.",
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
