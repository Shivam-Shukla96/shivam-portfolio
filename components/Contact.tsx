"use client";
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { contacts } from '../data/contacts';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';


export default function Contact() {
    const { isDark } = useTheme();

    // refs that will add/remove animation classes on intersection so animations replay on re-entry
    const outerRef = useAnimateOnScroll('fade-in-up', { rootMargin: '0px 0px -10% 0px', once: false });
    const listRef = useAnimateOnScroll('fade-in-left', { rootMargin: '0px 0px -10% 0px', once: false });
    const locationRef = useAnimateOnScroll('fade-in-right', { rootMargin: '0px 0px -10% 0px', once: false });
    const socialsRef = useAnimateOnScroll('fade-in-right', { rootMargin: '0px 0px -10% 0px', once: false });

    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

                <div ref={outerRef} className="max-w-2xl mx-auto">
                    <div className="glass p-8 rounded-2xl">
                        <div ref={listRef} className="space-y-6">
                            {contacts
                                .filter((c) => ['email', 'phone'].includes(c.id))
                                .map((c) => (
                                    <a
                                        key={c.id}
                                        href={c.href}
                                        className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 group"
                                    >
                                        <div
                                            className={`p-3 rounded-lg group-hover:scale-110 transition-all duration-300 ${c.id === 'email'
                                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600'
                                                : 'bg-gradient-to-r from-purple-600 to-pink-600'
                                                }`}
                                        >
                                            {c.id === 'email' && <Mail className="text-white" size={24} />}
                                            {c.id === 'phone' && <Phone className="text-white" size={24} />}
                                        </div>

                                        <div>
                                            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {c.id}
                                            </div>
                                            <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                {c.label}
                                            </div>
                                        </div>
                                    </a>
                                ))}

                            <div ref={locationRef} className="flex items-center space-x-4 p-4 glass rounded-lg">
                                <div className="p-3 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg">
                                    <MapPin className="text-white" size={24} />
                                </div>
                                <div>
                                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Location</div>
                                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Gurugram, Haryana, India</div>
                                </div>
                            </div>

                            <div className=" pt-6 border-t border-gray-700">
                                <div ref={socialsRef} className={`flex justify-center space-x-4 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                                    {contacts
                                        .filter((c) => ['github', 'linkedin'].includes(c.id))
                                        .map((c) => (
                                            <a
                                                key={c.id}
                                                href={c.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 glass rounded-lg hover:scale-110 transition-all duration-300"
                                            >
                                                {c.id === 'github' && <Github size={28} />}
                                                {c.id === 'linkedin' && <Linkedin size={28} />}
                                            </a>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
