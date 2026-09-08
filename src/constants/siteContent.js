/**
 * Centralized site content and configuration.
 * Single source of truth for social links, hero copy, and the book link.
 *
 * Technology names are deliberately identical in both languages: Russian tech
 * writing keeps them in Latin, and translating them would read as wrong.
 */

export const WHATSAPP_NUMBER = '992928481064';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SOCIAL_LINKS = [
  { id: 'github', href: 'https://github.com/manuchehrqoriev798', iconClass: 'bx bxl-github', label: 'GitHub' },
  { id: 'linkedin', href: 'https://www.linkedin.com/in/manuchehr-qoriev-86b985265/', iconClass: 'bx bxl-linkedin', label: 'LinkedIn' },
  { id: 'email', href: 'mailto:manuchehrqoriev798@gmail.com', iconClass: 'bx bx-mail-send', label: 'Email' },
  { id: 'instagram', href: 'https://www.instagram.com/manuchehr_qoriev/', iconClass: 'bx bxl-instagram', label: 'Instagram' },
  { id: 'telegram', href: 'https://t.me/Manuchehr0', iconClass: 'bx bxl-telegram', label: 'Telegram' },
  { id: 'whatsapp', href: WHATSAPP_LINK, iconClass: 'bx bxl-whatsapp', label: 'WhatsApp' },
];

export const BOOK_URL = 'https://github.com/manuchehrqoriev798/my-story';

const STAT_ICONS = {
  location: 'bx bx-map',
  education: 'bx bxs-graduation',
  languages: 'bx bx-code-alt',
  ai: 'bx bx-chip',
  frontend: 'bx bx-layer',
  backend: 'bx bx-data',
  delivery: 'bx bx-rocket',
};

const STACK = {
  languages: 'TypeScript, JavaScript, Python, Java, Go, Swift, SQL',
  frontend: 'React, MobX, Vite, WebSockets, WebRTC',
  backend: 'Play Framework, FastAPI, PostgreSQL, MongoDB, Redis, Kafka',
  delivery: 'Docker, GitHub Actions CI/CD, Playwright, OpenReplay',
};

export const LANGUAGES = ['en', 'ru'];

export const CONTENT = {
  en: {
    htmlLang: 'en',
    documentTitle: 'Manuchehr Qoriev || Portfolio website',
    name: { first: 'Manuchehr', last: 'Qoriev' },
    title: 'Fullstack Developer',
    subtitle: '3+ Years Shipping Production Code',
    photoAlt: 'Manuchehr Qoriev',
    // Job title kept in English in both languages: it is the resume header
    // verbatim, and Russian tech writing leaves such titles untranslated.
    rotatingTagline: 'Forward Deployed Engineer. ',
    stats: {
      location: 'Bishkek, Kyrgyzstan, open to relocate',
      education: 'B.Sc. Computer Science, University of Central Asia',
      ai: 'OpenAI APIs, model cost and quality evals, MCP',
      ...STACK,
    },
    bookLabel: 'Writing a book',
    rights: 'All Rights Reserved.',
    switchToLanguage: 'Переключить на русский',
  },
  ru: {
    htmlLang: 'ru',
    documentTitle: 'Манучехр Кориев || Портфолио',
    name: { first: 'Манучехр', last: 'Кориев' },
    title: 'Фуллстек-разработчик',
    subtitle: '3+ года разработки в продакшене',
    photoAlt: 'Манучехр Кориев',
    rotatingTagline: 'Forward Deployed Engineer. ',
    stats: {
      location: 'Бишкек, Кыргызстан, готов к релокации',
      education: 'Бакалавр компьютерных наук, Университет Центральной Азии',
      ai: 'OpenAI APIs, оценка стоимости и качества моделей, MCP',
      ...STACK,
    },
    bookLabel: 'Пишу книгу',
    rights: 'Все права защищены.',
    switchToLanguage: 'Switch to English',
  },
};

/** Hero stat rows for a language, in display order, with their icons. */
export function heroStats(lang) {
  return Object.keys(STAT_ICONS).map((id) => ({
    id,
    iconClass: STAT_ICONS[id],
    text: CONTENT[lang].stats[id],
  }));
}
