"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    isDark: boolean;
    setIsDark: (v: boolean) => void;
    toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window === "undefined") return false;
        try {
            const saved = localStorage.getItem("theme");
            if (saved) return saved === "dark";
        } catch { }
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) root.classList.add("dark");
        else root.classList.remove("dark");
        try {
            localStorage.setItem("theme", isDark ? "dark" : "light");
        } catch { }
    }, [isDark]);

    const toggle = () => setIsDark((v) => !v);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark, toggle }}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
};

export default ThemeContext;
