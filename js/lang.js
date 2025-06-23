const translations = {
  en: {
    title: "MultiFix",
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_about: "About",
    
    page_title: "Welcome!",
    page_description: "We provide honest, calm and quality repair services in Montreal. Serving Westmount, Downtown, Côte-des-Neiges, NDG.",
    
    services_title: "Our Services",
    s_painting: "Painting",
    s_electric: "Light electrical work (switches, outlets)",
    s_appliances: "Appliance diagnostics and repair",
    s_ventilation: "Fan and hood installation",
    s_seasonal: "Seasonal home maintenance",
    s_ac: "Air conditioner repair and service",
    s_plumbing: "Light plumbing",
    s_furniture: "Furniture assembly",
    s_concrete: "Minor concrete and repair works"
  },

  fr: {
    title: "MultiFix",
    nav_home: "Accueil",
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_contact: "Contact",
    nav_about: "À propos",

    page_title: "Bienvenue!",
    page_description: "Nous offrons des services de réparation honnêtes, calmes et de qualité à Montréal. Nous desservons Westmount, le centre-ville, Côte-des-Neiges, NDG.",
    
    services_title: "Nos services",
    s_painting: "Travaux de peinture",
    s_electric: "Électricité légère (interrupteurs, prises)",
    s_appliances: "Diagnostic et réparation des appareils",
    s_ventilation: "Installation de hottes et ventilateurs",
    s_seasonal: "Entretien saisonnier",
    s_ac: "Entretien des climatiseurs",
    s_plumbing: "Plomberie légère",
    s_furniture: "Assemblage de meubles",
    s_concrete: "Petits travaux de béton et réparations"
  },

  uk: {
    title: "MultiFix",
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_gallery: "Галерея",
    nav_contact: "Контакти",
    nav_about: "Про нас",

    page_title: "Вітаємо!",
    page_description: "Ми надаємо чесні, спокійні та якісні ремонтні послуги в Монреалі. Обслуговуємо Вестмаунт, Центр, Кот-де-Неж, Нотр-Дам-де-Грас.",
    
    services_title: "Наші послуги",
    s_painting: "Малярні роботи",
    s_electric: "Легка електрика (вимикачі, розетки)",
    s_appliances: "Діагностика і ремонт техніки",
    s_ventilation: "Монтаж витяжок, вентиляторів",
    s_seasonal: "Сезонне обслуговування",
    s_ac: "Ремонт і обслуговування кондиціонерів",
    s_plumbing: "Легка сантехніка",
    s_furniture: "Збірка меблів",
    s_concrete: "Дрібні бетонні/ремонтні роботи"
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
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  applyTranslations(lang);
});
