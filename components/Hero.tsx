"use client";
import React from 'react';
import { Mail, Download, Github, Linkedin, Phone, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { contacts } from '../data/contacts';
import Image from 'next/image';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';

export default function Hero() {
    const { isDark } = useTheme();
    const leftRef = useAnimateOnScroll('fade-in-left', { rootMargin: '0px 0px -10% 0px', once: false });
    const imageRef = useAnimateOnScroll('fade-in-up', { rootMargin: '0px 0px -10% 0px', once: false });
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 animate-gradient ${isDark ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300'}`} />
                <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 animate-gradient ${isDark ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500' : 'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300'}`} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div ref={leftRef}>
                        <div className={`inline-block px-4 py-2 rounded-full mb-4 ${isDark ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-600'}`}>
                            👋 Welcome to my portfolio
                        </div>
                        <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Hi, I&apos;m <span className="gradient-text">Shivam Shukla</span>
                        </h1>
                        <p className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            Full-Stack Software Developer
                        </p>
                        <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            Building scalable microservices, AI-powered applications, and high-performance web solutions.
                            2+ year of experience delivering production-ready systems with 99.9% uptime.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <a href="mailto:shivam.learning96@gmail.com" className="group">
                                <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                    <Mail size={20} />
                                    <span>Get in Touch</span>
                                </button>
                            </a>
                            <a href="/Shivam_Shukla_FullstackdDev_Resume.pdf" download className={`flex items-center space-x-2 px-6 py-3 glass rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                                <Download size={20} />
                                <span>Download CV</span>
                            </a>
                        </div>

                        <div className={`flex space-x-4 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                            {contacts
                                .filter((c) => ['github', 'linkedin', 'leetcode', 'phone'].includes(c.id))
                                .map((c) => (
                                    <a
                                        key={c.id}
                                        href={c.href}
                                        target={c.href.startsWith('http') ? '_blank' : undefined}
                                        rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="p-3 glass rounded-lg hover:scale-120 transition-all duration-300"
                                    >
                                        {c.id === 'github' && <Github size={24} />}
                                        {c.id === 'linkedin' && <Linkedin size={24} />}
                                        {c.id === 'phone' && <Phone size={24} />}
                                        {c.id === 'leetcode' && <Code size={24} />}
                                    </a>
                                ))}
                        </div>
                    </div>

                    <div ref={imageRef} className="flex justify-center float-animation">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30" />
                            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden glass morph-shape">

                                {/* <svg viewBox="0 0 200 200" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="100" cy="60" r="35" fill="url(#grad1)   " />
                                    <path d="M100 100 Q80 110 70 130 L70 200 L130 200 L130 130 Q120 110 100 100 Z" fill="url(#grad1)" />
                                    <circle cx="85" cy="55" r="3" fill="white" />
                                    <circle cx="115" cy="55" r="3" fill="white" />
                                    <path d="M90 70 Q100 75 110 70" stroke="white" strokeWidth="2" fill="none" />
                                </svg> */}

                                <Image
                                    src='/shivam_work_ghibli.jpeg'
                                    alt="Shivam Shukla"
                                    width={800}
                                    height={800}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
