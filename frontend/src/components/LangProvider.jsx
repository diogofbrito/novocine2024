import * as React from "react";
import { useState, useEffect, useContext } from "react";

const LangContext = React.createContext({ lang: "PT", toggle: () => {} });

export const useLang = () => useContext(LangContext);

export function LangProvider({ children }) {
    const [lang, setLang] = useState("PT");
        const [animationDone, setAnimationDone] = useState(false);


    const toggleLang = () => {
        const newLang = lang === "PT" ? "EN" : "PT";
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    useState(() => {
        const storedLang = localStorage.getItem("lang");
        if (storedLang) {
            setLang(storedLang);
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-lang", lang);
    }, [lang]);

   const translateRoute = routeKey => {
			const routeTranslations = {
				home: { pt: '/', en: '/en' },
				sobre: { pt: '/sobre', en: '/about' },
				arquivo: { pt: '/arquivo', en: '/archive' },
				filme: { pt: '/arquivo/:slug', en: '/archive/:slug' },
			};
			return routeTranslations[routeKey][lang.toLowerCase()];
    }; 
    
    return (
        <LangContext.Provider value={{ lang, toggleLang, animationDone, setAnimationDone, translateRoute }}>
            {children}
        </LangContext.Provider>
    );
}
