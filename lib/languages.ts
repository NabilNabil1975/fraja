export const languages = [
  { code: "en", aliases: ["eng", "en-us", "en-gb"], name: "English", dir: "ltr" },
  { code: "fr", aliases: ["fra", "fre"], name: "Français", dir: "ltr" },
  { code: "ar", aliases: ["ara"], name: "العربية", dir: "rtl" },
  { code: "ar-ma", aliases: ["ary", "darija", "ma"], name: "الدارجة المغربية", dir: "rtl" },

  { code: "tzm", aliases: ["ber", "zgh", "tamazight"], name: "ⵜⴰⵎⴰⵣⵉⵖⵜ", dir: "ltr" },
  { code: "rif", aliases: ["tarifit"], name: "ⵜⴰⵔⵉⴼⵉⵜ", dir: "ltr" },
  { code: "shi", aliases: ["tachelhit", "tachlhit"], name: "ⵜⴰⵛⵍⵃⵉⵜ", dir: "ltr" },

  { code: "es", aliases: ["spa", "es-es", "es-latam"], name: "Español", dir: "ltr" },
  { code: "pt-br", aliases: ["por-br"], name: "Português (Br)", dir: "ltr" },
  { code: "pt-pt", aliases: ["por-pt", "pt"], name: "Português (Eu)", dir: "ltr" },
  { code: "de", aliases: ["deu", "ger"], name: "Deutsch", dir: "ltr" },
  { code: "it", aliases: ["ita"], name: "Italiano", dir: "ltr" },
  { code: "zh", aliases: ["chi", "zho", "zh-cn"], name: "汉语", dir: "ltr" },
  { code: "ja", aliases: ["jpn", "jp"], name: "日本語", dir: "ltr" },
  { code: "ko", aliases: ["kor"], name: "한국어", dir: "ltr" },
  { code: "ru", aliases: ["rus"], name: "Русский", dir: "ltr" },
  { code: "tr", aliases: ["tur"], name: "Türkçe", dir: "ltr" },
  { code: "fa", aliases: ["per", "fas"], name: "فارسی", dir: "rtl" },
  { code: "he", aliases: ["heb"], name: "עברית", dir: "rtl" },
  { code: "ur", aliases: ["urd"], name: "اردو", dir: "rtl" },
  { code: "hi", aliases: ["hin"], name: "हिंदी", dir: "ltr" },
  { code: "bn", aliases: ["ben"], name: "বাংলা", dir: "ltr" },
  { code: "ta", aliases: ["tam"], name: "தமிழ்", dir: "ltr" },
  { code: "th", aliases: ["tha"], name: "ภาษาไทย", dir: "ltr" },
  { code: "sw", aliases: ["swa"], name: "Kiswahili", dir: "ltr" },
  { code: "ha", aliases: ["hau"], name: "Hausa", dir: "ltr" },
  { code: "yo", aliases: ["yor"], name: "Yorùbá", dir: "ltr" },
  { code: "am", aliases: ["amh"], name: "አማርኛ", dir: "ltr" },
] as const;

export const defaultLanguage = "en";

export function normalizeLanguageCode(input?: string) {
  if (!input) return defaultLanguage;

  const value = input.toLowerCase();

  const found = languages.find(
    (lang) => lang.code === value || lang.aliases.includes(value)
  );

  return found?.code ?? defaultLanguage;
}