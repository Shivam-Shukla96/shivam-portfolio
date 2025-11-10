"use client";
import React from 'react';
import { Zap, Code, Cloud } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { educationTimeline } from '../data/siteData';

export default function About() {
    const { isDark } = useTheme();
    return (
        <section id="about" className={`py-20 ${isDark ? 'bg-slate-800/50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    About <span className="gradient-text">Me</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="fade-in-left glass p-8 rounded-2xl card-hover">
                        <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Professional Experience
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h4 className={`text-lg font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                            Software Developer
                                        </h4>
                                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            WASSERSTOFF RJ INNOVATIONS
                                        </p>
                                    </div>
                                    <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                        June 2023 – Present
                                    </span>
                                </div>
                                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    <li className="flex items-start">
                                        <Zap size={16} className="mr-2 mt-1 text-indigo-500 flex-shrink-0" />
                                        <span>2+ years of full-stack development with MERN Stack. Node.js, Express.js, PostgreSQL, MongoDB, and React.js</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Code size={16} className="mr-2 mt-1 text-purple-500 flex-shrink-0" />
                                        <span>Expert in Frontend Development, UI/UX design, microservices architecture, WebSockets, and real-time communication</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Cloud size={16} className="mr-2 mt-1 text-pink-500 flex-shrink-0" />
                                        <span>Led teams of 5+ developers, deploying scalable solutions with Docker, AWS, and CI/CD</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="fade-in-right glass p-8 rounded-2xl card-hover">
                        <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Education
                        </h3>
                        <div className="space-y-6">
                            {/* <div>
                                <h4 className={`text-lg font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                    Master of Computer Applications
                                </h4>
                                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Institute of Engineering and Technology, Lucknow
                                </p>
                                <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                    Aug 2022 – Aug 2024 | CGPA: 8.2/10
                                </p>
                            </div> */}

                            <div className="pt-4">
                                {/* Education timeline */}

                                <div className="relative pl-8">
                                    <div className={`absolute left-3 top-0 bottom-0 w-px ${isDark ? 'bg-indigo-700' : 'bg-indigo-200'}`} />
                                    <ul className="space-y-8">
                                        {educationTimeline.map((item, idx) => (
                                            <li className="relative" key={idx}>
                                                <span className={`absolute -left-5 top-1 w-2 h-2 rounded-full bg-indigo-500 ring-2 ${isDark ? 'ring-white' : 'ring-slate-900'}`} />
                                                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.period}</div>
                                                <h4 className={`text-lg font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{item.title}</h4>
                                                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.org}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
