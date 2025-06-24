
const translations = {
  en: {
    title: "MultiFix",
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_about: "About",
    about_title: "About MultiFix",
    about_text: "We are a company in Montreal offering maintenance and repair services for apartments and buildings. We aim to deliver quality work with calm and professionalism.",
  },
  fr: {
    title: "MultiFix",
    nav_home: "Accueil",
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_contact: "Contact",
    nav_about: "À propos",
    about_title: "À propos de MultiFix",
    about_text: "Nous sommes une entreprise à Montréal offrant des services d’entretien et de réparation pour appartements et immeubles. Nous visons un travail de qualité avec calme et professionnalisme.",
  },
  uk: {
    title: "MultiFix",
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_gallery: "Галерея",
    nav_contact: "Контакти",
    nav_about: "Про нас",
    about_title: "Про MultiFix",
    about_text: "Ми компанія в Монреалі, що надає послуги з обслуговування та ремонту квартир і будівель. Наша мета — якісна робота з спокоєм і професіоналізмом.",
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
