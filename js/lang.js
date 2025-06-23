
const translations = {
  en: {
    "title": "MultiFix",
    "welcome": "Welcome to MultiFix!",
    "desc": "We serve Westmount, Downtown, Côte-des-Neiges, NDG.",
    "services": "Services",
    "about": "About Us",
    "gallery": "Gallery",
    "contact": "Contact"
  },
  fr: {
    "title": "MultiFix",
    "welcome": "Bienvenue chez MultiFix!",
    "desc": "Nous desservons Westmount, Centre-ville, Côte-des-Neiges, NDG.",
    "services": "Services",
    "about": "À propos",
    "gallery": "Galerie",
    "contact": "Contact"
  },
  uk: {
    "title": "MultiFix",
    "welcome": "Ласкаво просимо до MultiFix!",
    "desc": "Ми обслуговуємо райони Вестмоунт, Центр, Кот-де-Неж, Нотр-Дам-де-Грас.",
    "services": "Послуги",
    "about": "Про нас",
    "gallery": "Галерея",
    "contact": "Контакти"
  }
};

function setLanguage(lang) {
  for (const key in translations[lang]) {
    const el = document.getElementById(key);
    if (el) {
      el.textContent = translations[lang][key];
    }
  }
}
