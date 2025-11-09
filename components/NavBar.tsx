"use client";
import { Menu, X, Sun, Moon } from 'lucide-react';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

type Props = {
    isMenuOpen: boolean;
    setIsMenuOpen: (v: boolean) => void;
    activeSection: string;
    scrollToSection: (id: string) => void;
    isScrolled: boolean;
};

export default function NavBar({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection, isScrolled }: Props) {
    const { isDark, toggle } = useTheme();
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className={`text-2xl font-bold gradient-text transition-all duration-300 ${isScrolled ? 'scale-90' : ''}`}>
                        SS
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`relative px-3 py-2 transition-all duration-300 ${activeSection === item.toLowerCase()
                                    ? isDark ? 'text-indigo-400' : 'text-indigo-600'
                                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {item}
                                {activeSection === item.toLowerCase() && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => toggle()}
                            className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isDark ? 'bg-slate-800 text-yellow-400' : 'bg-white text-indigo-600'
                                }`}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden glass">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === item.toLowerCase()
                                    ? isDark ? 'bg-slate-800 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                                    : isDark ? 'text-gray-300' : 'text-gray-600'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
