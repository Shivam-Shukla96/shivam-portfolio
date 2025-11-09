"use client";
import React from 'react';
import { Code, Database, Cloud, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type Props = { skills: Record<string, string[]> };

export default function Skills({ skills }: Props) {
    const { isDark } = useTheme();
    return (
        <section id="skills" className={`py-20 ${isDark ? 'bg-slate-800/50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={index} className="glass p-6 rounded-2xl card-hover">
                            <h3 className={`text-xl font-bold mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {index === 0 && <Code className="mr-2 text-indigo-500" size={24} />}
                                {index === 1 && <Database className="mr-2 text-purple-500" size={24} />}
                                {index === 2 && <Cloud className="mr-2 text-pink-500" size={24} />}
                                {index === 3 && <Zap className="mr-2 text-green-500" size={24} />}
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill, i) => (
                                    <span key={i} className={`skill-tag px-4 py-2 rounded-lg cursor-pointer ${isDark ? 'bg-slate-700 text-gray-200 hover:bg-indigo-600' : 'bg-gray-100 text-gray-800 hover:bg-indigo-100'}`}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
