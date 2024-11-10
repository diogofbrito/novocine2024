import * as React from "react";
import { useState, useEffect, useContext } from "react";

const LangContext = React.createContext({ lang: "PT", toggle: () => {} });

export const useLang = () => useContext(LangContext);

export function LangProvider({ children }) {
    const [lang, setLang] = useState("PT");

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

    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LangContext.Provider>
    );
}
