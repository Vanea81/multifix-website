const translations = {
  en: {
    title: "MultiFix",
    nav_home: "Home",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_about: "About",
    home_title: "Reliable Home Repair Services in Montreal",
    home_description: "We offer professional maintenance and repairs with attention to detail.",
    services_title: "Our Services",
    service_painting: "Painting works",
    service_electric: "Light electrical repairs",
    service_appliances: "Appliance diagnostics and repair",
    service_ventilation: "Fan and hood installation",
    service_seasonal: "Seasonal home maintenance",
    service_ac: "Air conditioner repair and maintenance",
    service_plumbing: "Light plumbing",
    service_demolition: "Demolition and minor concrete works",
    service_furniture: "Furniture assembly",
    contact_title: "Contact Us",
    contact_phone: "Phone",
    contact_email: "Email",
    contact_area: "Areas we serve",
    about_title: "About MultiFix",
    about_text: "We are a company in Montreal offering maintenance and repair services for apartments and buildings. We aim to deliver quality work with calm and professionalism.",
    footer_text: "Home Repair Services in Montreal"
  },
  fr: {
    title: "MultiFix",
    nav_home: "Accueil",
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_contact: "Contact",
    nav_about: "À propos",
    home_title: "Services de réparation fiables à Montréal",
    home_description: "Nous offrons un entretien et des réparations professionnels avec le souci du détail.",
    services_title: "Nos Services",
    service_painting: "Travaux de peinture",
    service_electric: "Réparations électriques légères",
    service_appliances: "Diagnostic et réparation d’appareils",
    service_ventilation: "Installation de hottes et ventilateurs",
    service_seasonal: "Entretien saisonnier des maisons",
    service_ac: "Réparation et entretien de climatiseurs",
    service_plumbing: "Plomberie légère",
    service_demolition: "Travaux de démolition et de béton mineurs",
    service_furniture: "Assemblage de meubles",
    contact_title: "Contactez-nous",
    contact_phone: "Téléphone",
    contact_email: "Email",
    contact_area: "Zones desservies",
    about_title: "À propos de MultiFix",
    about_text: "Nous sommes une entreprise à Montréal offrant des services d’entretien et de réparation pour appartements et immeubles. Nous visons un travail de qualité avec calme et professionnalisme.",
    footer_text: "Services de réparation à Montréal"
  },
  uk: {
    title: "MultiFix",
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_gallery: "Галерея",
    nav_contact: "Контакти",
    nav_about: "Про нас",
    home_title: "Надійні послуги з ремонту в Монреалі",
    home_description: "Пропонуємо професійне обслуговування та ремонт з увагою до деталей.",
    services_title: "Наші послуги",
    service_painting: "Малярні роботи",
    service_electric: "Легка електрика",
    service_appliances: "Діагностика і ремонт побутової техніки",
    service_ventilation: "Монтаж витяжок і вентиляторів",
    service_seasonal: "Сезонне обслуговування будинків",
    service_ac: "Ремонт і обслуговування кондиціонерів",
    service_plumbing: "Легка сантехніка",
    service_demolition: "Демонтаж і бетонні роботи",
    service_furniture: "Збірка меблів",
    contact_title: "Зв'яжіться з нами",
    contact_phone: "Телефон",
    contact_email: "Електронна пошта",
    contact_area: "Райони обслуговування",
    about_title: "Про MultiFix",
    about_text: "Ми компанія в Монреалі, що надає послуги з обслуговування та ремонту квартир і будівель. Наша мета — якісна робота з спокоєм і професіоналізмом.",
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
