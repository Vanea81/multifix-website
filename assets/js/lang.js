const langData = {
  en: {
    header: "MultiFix - Repair Services",
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    about_title: "About Us",
    about_text: "With over 25 years of experience, Ivan provides reliable and calm repair services in Montreal.",
    services_title: "Services",
    service_painting: "Painting",
    service_electricity: "Light Electrical Work",
    service_plumbing: "Light Plumbing",
    service_ventilation: "Ventilation Installation",
    service_appliances: "Appliance Repair",
    service_diagnostics: "Diagnostics",
    service_furniture: "Furniture Assembly",
    service_concrete: "Small Concrete Work",
    service_seasonal: "Seasonal Maintenance",
    service_removal: "Appliance/Waste Removal",
    service_ac: "AC Repair & Maintenance",
    gallery_title: "Our Projects",
    contact_title: "Contact",
    footer_text: "© 2025 MultiFix. All rights reserved."
  },
  fr: {
    header: "MultiFix - Services de réparation",
    nav_home: "Accueil",
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_contact: "Contact",
    about_title: "À propos",
    about_text: "Avec plus de 25 ans d'expérience, Ivan fournit des services fiables et calmes à Montréal.",
    services_title: "Services",
    service_painting: "Peinture",
    service_electricity: "Électricité légère",
    service_plumbing: "Plomberie légère",
    service_ventilation: "Installation de ventilation",
    service_appliances: "Réparation d'appareils",
    service_diagnostics: "Diagnostics",
    service_furniture: "Assemblage de meubles",
    service_concrete: "Petits travaux de béton",
    service_seasonal: "Entretien saisonnier",
    service_removal: "Enlèvement d'appareils/déchets",
    service_ac: "Climatisation - entretien & réparation",
    gallery_title: "Nos projets",
    contact_title: "Contact",
    footer_text: "© 2025 MultiFix. Tous droits réservés."
  },
  ua: {
    header: "MultiFix – Ремонтні послуги",
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_gallery: "Галерея",
    nav_contact: "Контакти",
    about_title: "Про нас",
    about_text: "Маючи понад 25 років досвіду, Іван надає спокійні та надійні послуги у Монреалі.",
    services_title: "Послуги",
    service_painting: "Малярні роботи",
    service_electricity: "Легка електрика",
    service_plumbing: "Легка сантехніка",
    service_ventilation: "Монтаж вентиляцій",
    service_appliances: "Ремонт техніки",
    service_diagnostics: "Діагностика",
    service_furniture: "Збірка меблів",
    service_concrete: "Дрібні бетонні роботи",
    service_seasonal: "Сезонне обслуговування",
    service_removal: "Вивіз техніки / сміття",
    service_ac: "Обслуговування і ремонт кондиціонерів",
    gallery_title: "Наші проєкти",
    contact_title: "Контакти",
    footer_text: "© 2025 MultiFix. Всі права захищені."
  }
};

const switcher = document.getElementById("languageSwitcher");
switcher.addEventListener("change", () => updateLanguage(switcher.value));

function updateLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (langData[lang][key]) el.textContent = langData[lang][key];
  });
}
updateLanguage("en");