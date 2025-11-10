"use client";
import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
    const { isDark } = useTheme();
    return (
        <footer className={`py-8 border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        © {new Date().getFullYear()} Shivam Shukla. Building Next Gen Tech Solutions
                    </p>
                    <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Full-Stack Developer | Microservices Architect | AI-powered integrations | Building scalable web apps

                    </p>
                </div>
            </div>
        </footer>
    );
}
