export const useLanguage = () => {
  const currentLang = useState<"en" | "id">("currentLang", () => "en")

  const translations = {
    en: {
      greeting: "Hello, welcome!",
      about: "About us",
      contact: "Contact",
    },
    id: {
      greeting: "Halo, selamat datang!",
      about: "Tentang kami",
      contact: "Kontak",
    },
  }

  const t = (key: keyof typeof translations["en"]) => {
    return translations[currentLang.value][key]
  }

  const setLang = (lang: "en" | "id") => {
    currentLang.value = lang
  }

  return {
    currentLang,
    t,
    setLang,
  }
}
