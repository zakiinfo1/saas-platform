import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const i18nConfig = {
    locales: ['en', 'ar'],
    defaultLocale: 'en'
};

export default i18nConfig;

export async function initTranslations(locale: string, namespaces: string[]) {
    const i18nInstance = createInstance();

    await i18nInstance
        .use(initReactI18next)
        .use(resourcesToBackend((language: string, namespace: string) => import(`@/locales/${language}.json`)))
        .init({
            lng: locale,
            fallbackLng: i18nConfig.defaultLocale,
            supportedLngs: i18nConfig.locales,
            defaultNS: namespaces[0],
            fallbackNS: namespaces[0],
            ns: namespaces,
            preload: i18nConfig.locales
        });

    return {
        i18n: i18nInstance,
        resources: i18nInstance.services.resourceStore.data,
        t: i18nInstance.t
    };
}
