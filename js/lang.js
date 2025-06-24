const translations = {
  en: {
    title: "MultiFix",
    nav_home: "Home",
    nav_services: "Services",
    nav_contact: "Contact",
    nav_about: "About",
    home_title: "Reliable Home Repair Services in Montreal",
    home_description: "We offer professional maintenance and repairs with attention to detail.",
    services_title: "Our Services",
    service_painting: "Painting works",
    service_electric: "Light electrical repairs",
    contact_title: "Contact Us",
    contact_phone_full: "Phone: +1 438 365 5756",
    contact_email_full: "Email: hybridheating38@gmail.com",
    contact_area: "We serve Westmount, Downtown, Côte-des-Neiges, NDG.",
    motto: "Good work is done calmly.",
    about_title: "About MultiFix",
    about_text: "We are a company in Montreal offering maintenance and repair services for apartments and buildings.",
    footer_text: "Home Repair Services in Montreal"
  },
  fr: {
    title: "MultiFix",
    nav_home: "Accueil",
    nav_services: "Services",
    nav_contact: "Contact",
    nav_about: "À propos",
    home_title: "Services de réparation fiables à Montréal",
    home_description: "Nous offrons un entretien et des réparations professionnels avec le souci du détail.",
    services_title: "Nos Services",
    service_painting: "Travaux de peinture",
    service_electric: "Réparations électriques légères",
    contact_title: "Contactez-nous",
    contact_phone_full: "Téléphone : +1 438 365 5756",
    contact_email_full: "Email : hybridheating38@gmail.com",
    contact_area: "Nous desservons Westmount, Centre-ville, Côte-des-Neiges, NDG.",
    motto: "De bons travaux se font calmement.",
    about_title: "À propos de MultiFix",
    about_text: "Nous sommes une entreprise à Montréal offrant des services d’entretien et de réparation pour appartements et immeubles.",
    footer_text: "Services de réparation à Montréal"
  },
  uk: {
    title: "MultiFix",
    nav_home: "Головна",
    nav_services: "Послуги",
    nav_contact: "Контакти",
    nav_about: "Про нас",
    home_title: "Надійні послуги з ремонту в Монреалі",
    home_description: "Пропонуємо професійне обслуговування та ремонт з увагою до деталей.",
    services_title: "Наші послуги",
    service_painting: "Малярні роботи",
    service_electric: "Легка електрика",
    contact_title: "Зв'яжіться з нами",
    contact_phone_full: "Телефон: +1 438 365 5756",
    contact_email_full: "Електронна пошта: hybridheating38@gmail.com",
    contact_area: "Ми обслуговуємо Вестмаунт, Центр міста, Кот-де-Неж, Нотр-Дам-де-Грас.",
    motto: "Хороші роботи робляться спокійно.",
    about_title: "Про MultiFix",
    about_text: "Ми компанія в Монреалі, що надає послуги з обслуговування та ремонту квартир і будівель.",
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