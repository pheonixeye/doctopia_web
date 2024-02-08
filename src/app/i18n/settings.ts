export const fallbackLng = "ar";
export const languages = [fallbackLng, "en"];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng: string = fallbackLng, ns: string = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
