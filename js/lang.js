
const translations = {
    en: {
        title: "Welcome to MultiFix!",
        services: "Services",
        gallery: "Gallery",
        contact: "Contact"
    },
    fr: {
        title: "Bienvenue chez MultiFix!",
        services: "Services",
        gallery: "Galerie",
        contact: "Contact"
    },
    uk: {
        title: "Ласкаво просимо до MultiFix!",
        services: "Послуги",
        gallery: "Галерея",
        contact: "Контакти"
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    document.querySelector("[data-title]").textContent = translations[lang].title;
    document.querySelector("[data-services]").textContent = translations[lang].services;
    document.querySelector("[data-gallery]").textContent = translations[lang].gallery;
    document.querySelector("[data-contact]").textContent = translations[lang].contact;
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "uk";
    setLanguage(savedLang);
});
