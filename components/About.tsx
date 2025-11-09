"use client";
import React from 'react';
import { Zap, Code, Cloud } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

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
                    <div className="glass p-8 rounded-2xl card-hover">
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
                                        <span>1+ years of full-stack development with Node.js, Express.js, PostgreSQL, MongoDB, and React.js</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Code size={16} className="mr-2 mt-1 text-purple-500 flex-shrink-0" />
                                        <span>Expert in microservices architecture, gRPC, WebSockets, and real-time communication</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Cloud size={16} className="mr-2 mt-1 text-pink-500 flex-shrink-0" />
                                        <span>Led teams of 5+ developers, deploying scalable solutions with Docker, AWS, and CI/CD</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl card-hover">
                        <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Education & Stats
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className={`text-lg font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                    Master of Computer Applications
                                </h4>
                                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Institute of Engineering and Technology, Lucknow
                                </p>
                                <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                    Aug 2022 – Aug 2024 | CGPA: 8.2/10
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="text-center p-4 glass rounded-lg">
                                    <div className="text-3xl font-bold gradient-text">99.9%</div>
                                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Uptime</div>
                                </div>
                                <div className="text-center p-4 glass rounded-lg">
                                    <div className="text-3xl font-bold gradient-text">2.3×</div>
                                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Throughput</div>
                                </div>
                                <div className="text-center p-4 glass rounded-lg">
                                    <div className="text-3xl font-bold gradient-text">1,500+</div>
                                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Concurrent Users</div>
                                </div>
                                <div className="text-center p-4 glass rounded-lg">
                                    <div className="text-3xl font-bold gradient-text">90K+</div>
                                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Monthly Users</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
