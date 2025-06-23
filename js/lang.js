
const translations = {
    en: {title: "Welcome to MultiFix!", services: "Services", gallery: "Gallery", contact: "Contact", "about-nav": "About",},
    fr: {title: "Bienvenue chez MultiFix!", services: "Services", gallery: "Galerie", contact: "Contact", "about-nav": "À propos",},
    uk: {title: "Ласкаво просимо до MultiFix!", services: "Послуги", gallery: "Галерея", contact: "Контакти", "about-nav": "Про нас",}
};
function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    document.querySelector("[data-title]").textContent = translations[lang].title;
    document.querySelector("[data-services]").textContent = translations[lang].services;
    document.querySelector("[data-gallery]").textContent = translations[lang].gallery;
    document.querySelector("[data-contact]").textContent = translations[lang].contact;
    document.querySelector("[data-about-nav]").textContent = translations[lang]["about-nav"];
}
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "uk";
    setLanguage(savedLang);
});
