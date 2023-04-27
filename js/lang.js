const allLangs = ['ru', 'en'];
let currentLang = 'ru';
const langButtons = document.querySelectorAll('[data-btn]');
const currentPathName = window.location.pathname;
let currentText = {};

const homeTexts = {
  'name-title': {
    ru: 'Ильшат Саетгареев',
    en: 'Ilshat Saetgareev',
  },
  'name-title1': {
    ru: 'Ильшат Саетгареев',
    en: 'Ilshat Saetgareev',
  },
  'post-title': {
    ru: 'Front-end разработчик',
    en: 'Front-end developer',
  },
  'btn-download-cv': {
    ru: 'Скачать резюме',
    en: 'Download CV',
  },
  'btn-download-cv2': {
    ru: 'Скачать резюме',
    en: 'Download CV',
  },
  contact: {
    ru: 'Связаться',
    en: 'Contact',
  },
  copyright: {
    ru: '© 2023 Все права защищены.',
    en: '© 2023 All rights reserved.',
  },
  'change-text': {
    ru: 'Front-end Разработчик',
    en: 'Front-end Developer',
  },
  'change-texts': {
    ru: 'UI Дизайнер',
    en: 'UI Designer',
  },
  'text-greeting': {
    ru: 'Привет. Я занимаюсь frontend-разработкой. Создаю интерактивные и адаптивные сайты. Проектирую SPA и другие типы web-приложений. Готов к переезду.',
    en: 'Hello there. I do front-end development. I create interactive and responsive websites. I develop SPA and other types of web applications. Ready to move.',
  },
  whatido: {
    ru: 'Что я могу предложить',
    en: 'What I Do',
  },
  'service1-title': {
    ru: 'Электронная коммерция',
    en: 'E-Commerce',
  },
  'service1-subscription': {
    ru: 'Создание landing-страниц, онлайн-магазинов.',
    en: 'Creation of landing pages, online stores.',
  },
  'service2-title': {
    ru: 'Копирайтинг',
    en: 'Copywriting',
  },
  'service2-subscription': {
    ru: 'Создание креативных текстов для сайта, посадочной страницы, лендинга.',
    en: 'Creation of creative texts for the website, landing page, landing page.',
  },
  'service3-title': {
    ru: 'Веб-дизайн',
    en: 'Web Design',
  },
  'service3-subscription': {
    ru: 'Эстетичный дизайн, продуманная структура интерфейса сайтов.',
    en: 'Aesthetic design, well-thought-out site interface structure.',
  },
  'service4-title': {
    ru: 'Менеджмент',
    en: 'Management',
  },
  'service4-subscription': {
    ru: 'Качественная организация исполнения проекта.',
    en: 'Quality organization of project execution.',
  },
  aboutme: {
    ru: 'Обо Мне',
    en: 'About Мe',
  },
  resume: {
    ru: 'Резюме',
    en: 'Resume',
  },
  portfolio: {
    ru: 'Портфолио',
    en: 'Portfolio',
  },
  'contact-btn': {
    ru: 'Контакты',
    en: 'Contact',
  },
  'resume-title': {
    ru: 'Резюме',
    en: 'Resume',
  },
  'resume-discription': {
    ru: '3 года коммерческого опыта',
    en: '3 Years of Commercial Experience',
  },
  edu: {
    ru: 'Образование',
    en: 'Education',
  },
  'edu-place': {
    ru: 'Санкт-Петербургский государственный лесотехнический университет им. С.М.Кирова, Сыктывкар',
    en: 'Saint-Petersburg State Forest Technical University',
  },
  'edu-fac': {
    ru: 'Факультет экономики и управления',
    en: 'Faculty of Economics and Management',
  },
  'edu-spec': {
    ru: 'Менеджмент организации',
    en: 'Organisation Management',
  },
  'place-job': {
    ru: 'ООО «Завод металлокровли «Сталькомплект»',
    en: '«Stalcomplect»',
  },
  vacancy: {
    ru: 'Frontend-разработчик',
    en: 'Frontend-developer',
  },
  responsibilities: {
    ru: 'Разработка прототипа веб-сайтов. Создание макета в Figma. Верстка сайта. Создание лендингов для филиалов компании.',
    en: 'Creation of landing pages for company.',
  },
  'place-job2': {
    ru: 'ООО «Урал»',
    en: '«Ural»',
  },
  vacancy2: {
    ru: 'Web-разработчик',
    en: 'Web-developer',
  },
  responsibilities2: {
    ru: 'Создание сайта для кинотеатра «ParkCinema». Поддержка, верстка, обновление расписания киносеансов.',
    en: 'Creation of a website for the cinema "ParkCinema". Support, site layout, updating the schedule of film screenings.',
  },
  'hard-skills': {
    ru: 'Технические навыки',
    en: 'Hard Skills',
  },
  knowledges: {
    ru: 'Ключевые навыки',
    en: 'Knowledges',
  },
  english: {
    ru: 'Английский язык',
    en: 'English',
  },
  goal: {
    ru: 'Нацеленность на результат',
    en: 'Focus on Results',
  },
  teamwork: {
    ru: 'Работа в команде',
    en: 'Teamwork',
  },
  'responsive-design': {
    ru: 'Адаптивная верстка',
    en: 'Responsive Design',
  },

  'portfolio-title': {
    ru: 'Портфолио',
    en: 'Portfolio',
  },
  'my-projects': {
    ru: 'Мои проекты',
    en: 'My Projects',
  },
  all: {
    ru: 'Все',
    en: 'All',
  },
  sites: {
    ru: 'Сайты',
    en: 'Web-sites',
  },
  apps: {
    ru: 'Приложения',
    en: 'Apps',
  },
  games: {
    ru: 'Игры',
    en: 'Games',
  },
  other: {
    ru: 'Прочее',
    en: 'Other',
  },
  'contacts-title': {
    ru: 'Контакты',
    en: 'Contacts',
  },
  'contact-info': {
    ru: 'Контактная информация',
    en: 'Get in Touch',
  },
  city: {
    ru: 'Уфа',
    en: 'Ufa',
  },
  'any-qestions': {
    ru: 'Остались вопросы?',
    en: 'How Can I Help You?',
  },
  fullname: {
    ru: 'Ваше имя',
    en: 'Full Name',
  },
  'email-address': {
    ru: 'Адрес электронной почты',
    en: 'Email Address',
  },
  subject: {
    ru: 'Тема вопроса',
    en: 'Subject',
  },
  message: {
    ru: 'Сообщение',
    en: 'Message',
  },
  'send-message2': {
    ru: 'Отправить сообщение',
    en: 'Send Message',
  },
};

function checkPagePathName() {
  switch (currentPathName) {
    case '/index.html':
      currentText = homeTexts;

      break;

    default:
      currentText = homeTexts;
      break;
  }
}

checkPagePathName();

function changeLang() {
  for (const key in currentText) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentText[key][currentLang];
    }
  }
}

changeLang();

langButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    currentLang = event.target.dataset.btn;
    resetActiveClass(langButtons, 'active');
    btn.classList.add('active');
    changeLang();
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}
