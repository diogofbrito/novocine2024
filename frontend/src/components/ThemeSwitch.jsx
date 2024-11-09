import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="px-3 py-2 border rounded-full hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
        </button>
    );
}
