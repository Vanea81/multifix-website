const translations = {
  en: {
    title: "MultiFix",
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_about: "About",
    page_title: "Our Services",
    service_painting: "Painting works",
    service_electric: "Light electrical repairs",
    service_appliances: "Appliance diagnostics and repair",
    service_ventilation: "Fan and hood installation",
    service_seasonal: "Seasonal home maintenance",
    service_ac: "Air conditioner repair and maintenance",
    service_plumbing: "Light plumbing",
    service_demolition: "Demolition and minor concrete works",
    service_furniture: "Furniture assembly"
  },
  fr: {
    title: "MultiFix",
    nav_home: "Accueil",
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_contact: "Contact",
    nav_about: "À propos",
    page_title: "Nos Services",
    service_painting: "Travaux de peinture",
    service_electric: "Réparations électriques légères",
    service_appliances: "Diagnostic et réparation d’appareils",
    service_ventilation: "Installation de hottes et ventilateurs",
    service_seasonal: "Entretien saisonnier des maisons",
    service_ac: "Réparation et entretien de climatiseurs",
    service_plumbing: "Plomberie légère",
    service_demolition: "Travaux de démolition et de béton mineurs",
    service_furniture: "Assemblage de meubles"
  },
  uk: {
    title: "MultiFix",
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_gallery: "Галерея",
    nav_contact: "Контакти",
    nav_about: "Про нас",
    page_title: "Наші послуги",
    service_painting: "Малярні роботи",
    service_electric: "Легка електрика",
    service_appliances: "Діагностика і ремонт побутової техніки",
    service_ventilation: "Монтаж витяжок і вентиляторів",
    service_seasonal: "Сезонне обслуговування будинків",
    service_ac: "Ремонт і обслуговування кондиціонерів",
    service_plumbing: "Легка сантехніка",
    service_demolition: "Демонтаж і дрібні бетонні роботи",
    service_furniture: "Збірка меблів"
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
