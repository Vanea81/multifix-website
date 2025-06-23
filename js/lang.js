
const translations = {
    en: {
        title: "Welcome to MultiFix!",
        services: "Services",
        gallery: "Gallery",
        contact: "Contact",
        "about-title": "About Us",
        "about-content": "MultiFix is a professional home repair and maintenance service in Montreal. Our approach is honesty, quality, and calm confidence in completing each task.",
        "about-nav": "About"
    },
    fr: {
        title: "Bienvenue chez MultiFix!",
        services: "Services",
        gallery: "Galerie",
        contact: "Contact",
        "about-title": "À propos de nous",
        "about-content": "MultiFix est un service professionnel de réparation et d'entretien résidentiel à Montréal. Notre approche est l'honnêteté, la qualité et la confiance calme dans la réalisation de chaque tâche.",
        "about-nav": "À propos"
    },
    uk: {
        title: "Ласкаво просимо до MultiFix!",
        services: "Послуги",
        gallery: "Галерея",
        contact: "Контакти",
        "about-title": "Про нас",
        "about-content": "MultiFix — це професійний сервіс для ремонту та обслуговування будинків у Монреалі. Наш підхід — чесність, якість та спокійна впевненість у виконанні кожного завдання.",
        "about-nav": "Про нас"
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    document.querySelector("[data-title]").textContent = translations[lang].title;
    document.querySelector("[data-services]").textContent = translations[lang].services;
    document.querySelector("[data-gallery]").textContent = translations[lang].gallery;
    document.querySelector("[data-contact]").textContent = translations[lang].contact;

    if (document.querySelector("[data-about-title]")) {
        document.querySelector("[data-about-title]").textContent = translations[lang]["about-title"];
        document.querySelector("[data-about-content]").textContent = translations[lang]["about-content"];
        document.querySelector("[data-about-nav]").textContent = translations[lang]["about-nav"];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "uk";
    setLanguage(savedLang);
});
