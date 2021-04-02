export const storageVersion = 'v0-alpha';

/** @enum {String} */
export const VideoSide = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  // TOP: 'TOP'
};

/** @enum {String} */
export const TextDirection = {
  TOP: 'TOP',
  BOTTOM: 'BOTTOM'
};

// Js enum omegalul
/** @enum {number} */
export const Browser = {
  FIREFOX: 0,
  CHROME: 1,
  SAFARI: 2,
  ANDROID: 3
};

export const BROWSER = (() => {
  if (/Firefox/.exec(navigator.userAgent)) {
    return Browser.FIREFOX;
  }
  if (window.isAndroid || window.chrome == null) {
    return Browser.ANDROID;
  }
  if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    return Browser.SAFARI;
  }
  return Browser.CHROME;
})();

/** @enum {number} */
export const AuthorType = {
  moderator: 1,
  verified: 2,
  distinguished: 4,
  standard: 8
};

export const languages = [
  { code: 'en', name: 'English', lang: 'English' },
  { code: 'jp', name: 'Japanese', lang: '日本語' },
  { code: 'es', name: 'Spanish', lang: 'Español' },
  { code: 'id', name: 'Indonesian', lang: 'bahasa Indonesia' },
  { code: 'kr', name: 'Korean', lang: '한국' },
  { code: 'ch', name: 'Chinese', lang: '中文' },
  { code: 'ru', name: 'Russian', lang: 'русский' },
  { code: 'fr', name: 'French', lang: 'Français' }
];

export const languageConversionTable = {};
export const languageNameCode = {};
export const languageNameValues = languages.map(lang => ({
  name: createLangSelectionName(lang), value: lang.lang
}));

function createLangSelectionName(lang) {
  return `${lang.name} (${lang.lang})`;
}

languages.forEach(i => languageConversionTable[createLangSelectionName(i)] = i);
languages.forEach(lang => languageNameCode[lang.name] = lang);