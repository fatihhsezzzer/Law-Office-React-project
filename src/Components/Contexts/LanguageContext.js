import React, { createContext, useContext, useState, useEffect } from 'react';
import translationsData from '../../translations.json';

const LanguageContext = createContext();

export function useTranslations() {
    return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
    const [translations, setTranslations] = useState(translationsData[language]);

    useEffect(() => {
        localStorage.setItem('language', language);
        setTranslations(translationsData[language]);
    }, [language]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ translations, language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
