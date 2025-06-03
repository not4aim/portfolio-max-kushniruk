document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ua: {
            "nav-home": "Головна",
            "nav-about": "Про мене",
            "nav-projects": "Проєкти",
            "nav-contacts": "Контакти",
            "hero-title": "Ласкаво просимо на сайт Кушнірука Максима!",
            "hero-subtitle": "Я створюю креативні вебрішення",
            "hero-btn": "Дізнатися більше",
            "about-title": "Про мене",
            "about-desc": "Я веброзробник із досвідом створення сучасних сайтів і додатків, ботів, програм.",
            "about-short": "Я — Кушнірук Максим, розробник базового ПЗ, створюю різні скрипти,  веброзробник з маленьким досвідом у HTML, CSS, JavaScript. Створюю сучасні та адаптивні сайти.\n\nПрацюю з Git, Node.js, Python, Css, Cs, C++, маю досвід командної роботи та розробки SPA.",
            "projects-title": "Мої проєкти",
            "contacts-title": "Контакти",
            "form-email": "E-mail:",
            "form-message": "Повідомлення:",
            "form-send": "Надіслати",
            "form-success": "Дякуємо! Ваше повідомлення надіслано.",
            "to-top": "Догори ↑",
            "footer-copyright": "© 2025 Вебстудія Кушнірука Максима",
            "project1-title": "Проєкт 1",
            "project1-desc": "<Бот на Python>",
            "project2-title": "Проєкт 2",
            "project2-desc": "Тут міг бути мій 2-гий чудовий проект!",
            "project3-title": "Проєкт 3",
            "project3-desc": "Тут міг бути мій 3-ій чудовий проект!"
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About Me",
            "nav-projects": "Projects",
            "nav-contacts": "Contacts",
            "hero-title": "Welcome to Maksym Kushniruk's website!",
            "hero-subtitle": "I create creative web solutions",
            "hero-btn": "Learn more",
            "about-title": "About Me",
            "about-desc": "I am a web developer with experience in building modern websites, apps, bots, and programs.",
            "about-short": "I'm Maksym Kushniruk, a basic software developer. I create various scripts and have some experience in HTML, CSS, and JavaScript. I build modern and responsive websites.\n\nI work with Git, Node.js, Python, CSS, C#, C++, and have experience in teamwork and SPA development.",
            "projects-title": "My Projects",
            "contacts-title": "Contacts",
            "form-email": "E-mail:",
            "form-message": "Message:",
            "form-send": "Send",
            "form-success": "Thank you! Your message has been sent.",
            "to-top": "Back to Top ↑",
            "footer-copyright": "© 2025 Kushniruk Maksym Web Studio",
            "project1-title": "Project 1",
            "project1-desc": "<Python Bot>",
            "project2-title": "Project 2",
            "project2-desc": "This could have been my amazing second project!",
            "project3-title": "Project 3",
            "project3-desc": "This could have been my amazing third project!"
        }   

    };

    const langBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'ua';

    function setLang(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        langBtn.textContent = lang === 'ua' ? 'EN' : 'UA';
        localStorage.setItem('lang', lang);
        currentLang = lang;
    }

    langBtn.addEventListener('click', () => {
        setLang(currentLang === 'ua' ? 'en' : 'ua');
    });

    setLang(currentLang);
});