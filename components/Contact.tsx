"use client";
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
    const { isDark } = useTheme();
    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

                <div className="max-w-2xl mx-auto">
                    <div className="glass p-8 rounded-2xl">
                        <div className="space-y-6">
                            <a href="mailto:shivam.learning96@gmail.com" className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 group">
                                <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg group-hover:scale-110 transition-all duration-300">
                                    <Mail className="text-white" size={24} />
                                </div>
                                <div>
                                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</div>
                                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>shivam.learning96@gmail.com</div>
                                </div>
                            </a>

                            <a href="tel:+916307687424" className="flex items-center space-x-4 p-4 glass rounded-lg hover:scale-105 transition-all duration-300 group">
                                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg group-hover:scale-110 transition-all duration-300">
                                    <Phone className="text-white" size={24} />
                                </div>
                                <div>
                                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phone</div>
                                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>+91 6307687424</div>
                                </div>
                            </a>

                            <div className="flex items-center space-x-4 p-4 glass rounded-lg">
                                <div className="p-3 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg">
                                    <MapPin className="text-white" size={24} />
                                </div>
                                <div>
                                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Location</div>
                                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Gurugram, Haryana, India</div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-700">
                                <div className={`flex justify-center space-x-4 ${isDark ? 'text-white' : 'text-gray-700'}`}>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-lg hover:scale-110 transition-all duration-300">
                                        <Github size={28} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-lg hover:scale-110 transition-all duration-300">
                                        <Linkedin size={28} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
