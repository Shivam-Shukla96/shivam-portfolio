"use client";
import React from 'react';
import { Code, Database, Cloud, Zap, Sparkles, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

type Props = { skills: Record<string, string[]> };

export default function Skills({ skills }: Props) {
    const { isDark } = useTheme();
    const gridRef = useAnimateOnScroll('fade-in-up', { rootMargin: '0px 0px 0px 0px', once: false });

    const getCategoryStyles = (category: string) => {
        const cat = category.toLowerCase();
        
        if (cat.includes('ai') || cat.includes('generative')) {
            return {
                icon: <Sparkles className="mr-2 text-amber-500" size={24} />,
                cardClass: isDark ? 'border border-amber-500/20 shadow-[0_8px_30px_rgba(245,158,11,0.03)]' : 'border border-amber-500/10 shadow-[0_8px_30px_rgba(245,158,11,0.02)]',
                tagClass: isDark 
                    ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/25 hover:shadow-[0_4px_12px_rgba(245,158,11,0.45)]' 
                    : 'bg-amber-50/80 text-amber-900 border border-amber-200/60 hover:bg-amber-100 hover:shadow-[0_4px_12px_rgba(245,158,11,0.25)]'
            };
        }
        
        if (cat.includes('frontend')) {
            return {
                icon: <Code className="mr-2 text-indigo-505 text-indigo-500" size={24} />,
                cardClass: isDark ? 'border border-indigo-500/20 shadow-[0_8px_30px_rgba(99,102,241,0.03)]' : 'border border-indigo-500/10 shadow-[0_8px_30px_rgba(99,102,241,0.02)]',
                tagClass: isDark 
                    ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/25 hover:shadow-[0_4px_12px_rgba(99,102,241,0.45)]' 
                    : 'bg-indigo-50/80 text-indigo-900 border border-indigo-200/60 hover:bg-indigo-100 hover:shadow-[0_4px_12px_rgba(99,102,241,0.25)]'
            };
        }
        
        if (cat.includes('backend') || cat.includes('database')) {
            return {
                icon: <Database className="mr-2 text-purple-500" size={24} />,
                cardClass: isDark ? 'border border-purple-500/20 shadow-[0_8px_30px_rgba(139,92,246,0.03)]' : 'border border-purple-500/10 shadow-[0_8px_30px_rgba(139,92,246,0.02)]',
                tagClass: isDark 
                    ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/25 hover:shadow-[0_4px_12px_rgba(139,92,246,0.45)]' 
                    : 'bg-purple-50/80 text-purple-900 border border-purple-200/60 hover:bg-purple-100 hover:shadow-[0_4px_12px_rgba(139,92,246,0.25)]'
            };
        }
        
        if (cat.includes('devops') || cat.includes('tool')) {
            return {
                icon: <Cloud className="mr-2 text-pink-500" size={24} />,
                cardClass: isDark ? 'border border-pink-500/20 shadow-[0_8px_30px_rgba(236,72,153,0.03)]' : 'border border-pink-500/10 shadow-[0_8px_30px_rgba(236,72,153,0.02)]',
                tagClass: isDark 
                    ? 'bg-pink-500/10 text-pink-300 border border-pink-500/20 hover:bg-pink-500/25 hover:shadow-[0_4px_12px_rgba(236,72,153,0.45)]' 
                    : 'bg-pink-50/80 text-pink-900 border border-pink-200/60 hover:bg-pink-100 hover:shadow-[0_4px_12px_rgba(236,72,153,0.25)]'
            };
        }
        
        if (cat.includes('architecture') || cat.includes('api')) {
            return {
                icon: <Zap className="mr-2 text-emerald-500" size={24} />,
                cardClass: isDark ? 'border border-emerald-500/20 shadow-[0_8px_30px_rgba(16,185,129,0.03)]' : 'border border-emerald-500/10 shadow-[0_8px_30px_rgba(16,185,129,0.02)]',
                tagClass: isDark 
                    ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/25 hover:shadow-[0_4px_12px_rgba(16,185,129,0.45)]' 
                    : 'bg-emerald-50/80 text-emerald-900 border border-emerald-200/60 hover:bg-emerald-100 hover:shadow-[0_4px_12px_rgba(16,185,129,0.25)]'
            };
        }
        
        return {
            icon: <Cpu className="mr-2 text-blue-500" size={24} />,
            cardClass: isDark ? 'border border-blue-500/20 shadow-[0_8px_30px_rgba(59,130,246,0.03)]' : 'border border-blue-500/10 shadow-[0_8px_30px_rgba(59,130,246,0.02)]',
            tagClass: isDark 
                ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/25 hover:shadow-[0_4px_12px_rgba(59,130,246,0.45)]' 
                : 'bg-blue-50/80 text-blue-900 border border-blue-200/60 hover:bg-blue-100 hover:shadow-[0_4px_12px_rgba(59,130,246,0.25)]'
        };
    };

    return (
        <section id="skills" className={`py-20 ${isDark ? 'bg-slate-800/50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

                <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => {
                        const styles = getCategoryStyles(category);
                        return (
                            <div key={index} className={`glass p-6 rounded-2xl card-hover ${styles.cardClass}`}>
                                <h3 className={`text-xl font-bold mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {styles.icon}
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill, i) => (
                                        <span key={i} className={`skill-tag px-3.5 py-1.5 text-sm rounded-lg cursor-pointer transition-all duration-300 ${styles.tagClass}`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
