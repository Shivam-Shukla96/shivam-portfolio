"use client";
import React from 'react';
import { Zap, Code, Cloud, Briefcase, Calendar, Sparkles, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { educationTimeline, experiences } from '../data/siteData';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

export default function About() {
    const { isDark } = useTheme();
    const expRef = useAnimateOnScroll('fade-in-up', { rootMargin: '0px 0px -10% 0px', once: false });
    const eduRef = useAnimateOnScroll('fade-in-up', { rootMargin: '0px 0px -10% 0px', once: false });
    return (
        <section id="about" className={`py-20 ${isDark ? 'bg-slate-800/50' : 'bg-slate-50/80'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    About <span className="gradient-text">Me</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

                <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                    {/* Professional Experience Section */}
                    <div ref={expRef} className="space-y-6">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className={`p-2.5 rounded-xl ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className={`text-3xl  font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Professional Experience
                            </h3>
                        </div>

                        <div className="space-y-6">
                            {experiences.map((exp, idx) => (
                                <div
                                    key={idx}
                                    className={`glass p-6 md:p-8 rounded-2xl card-hover relative overflow-hidden transition-all duration-300 ${isDark
                                        ? 'bg-slate-900/60 border-l-4 border-l-indigo-500 hover:border-l-purple-500'
                                        : 'bg-white/95 border-l-4 border-l-indigo-600 hover:border-l-purple-600 shadow-xl shadow-slate-200/50'
                                        }`}
                                >
                                    {/* Ambient background glow gradient */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-bl-full pointer-events-none" />

                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                    {exp.role}
                                                </h4>
                                                <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${exp.period.includes('Present')
                                                    ? (isDark ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-100 text-emerald-700')
                                                    : (isDark ? 'bg-slate-800 text-gray-400' : 'bg-gray-100 text-gray-600')
                                                    }`}>
                                                    {exp.period.includes('Present') ? '• Current Role' : 'Past Role'}
                                                </span>
                                            </div>

                                            <p className={`text-base font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                                {exp.company}
                                            </p>

                                            {exp.product && (
                                                <p className={`text-xs font-medium mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-md ${isDark ? 'bg-purple-950/60 text-purple-300 border border-purple-800/40' : 'bg-purple-50 text-purple-700 border border-purple-200'
                                                    }`}>
                                                    <Sparkles size={13} className="text-purple-400" />
                                                    <span>{exp.product}</span>
                                                </p>
                                            )}
                                        </div>

                                        <div className={`flex items-center space-x-1.5 text-xs font-medium px-3 py-1.5 rounded-lg shrink-0 self-start ${isDark ? 'bg-slate-800/80 text-gray-300 border border-slate-700' : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            <Calendar size={14} className="text-indigo-500" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>

                                    <ul className={`space-y-3 text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {exp.highlights.map((item, hIdx) => {
                                            const icons = [Zap, Code, Cloud];
                                            const IconComp = icons[hIdx % icons.length];
                                            const iconColors = ['text-indigo-500', 'text-purple-500', 'text-pink-500'];
                                            return (
                                                <li key={hIdx} className="flex items-start">
                                                    <IconComp size={18} className={`mr-3 mt-1 ${iconColors[hIdx % iconColors.length]} shrink-0`} />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div ref={eduRef} className="glass p-6 md:p-8 rounded-2xl card-hover border-l-4 border-l-purple-500">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className={`p-2.5 rounded-xl ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Education
                            </h3>
                        </div>
                        <div className="pt-2">
                            <div className="relative pl-8">
                                <div className={`absolute left-3 top-0 bottom-0 w-px ${isDark ? 'bg-indigo-700' : 'bg-indigo-200'}`} />
                                <ul className="space-y-6">
                                    {educationTimeline.map((item, idx) => (
                                        <li className="relative" key={idx}>
                                            <span className={`absolute -left-5 top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ${isDark ? 'ring-slate-900' : 'ring-white'}`} />
                                            <div className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{item.period}</div>
                                            <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.org}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
