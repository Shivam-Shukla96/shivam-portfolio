"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type Project = {
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    link: string;
    metrics: string[];
};

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
    const { isDark } = useTheme();
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

                <div className="fade-in-up grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass p-6 rounded-2xl card-hover group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-sm ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                        {project.subtitle}
                                    </p>
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 glass rounded-lg hover:scale-110 transition-all duration-300"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            </div>

                            <p className={`mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className={`px-3 py-1 text-xs rounded-full ${isDark ? 'bg-slate-700 text-indigo-300' : 'bg-indigo-50 text-indigo-600'}`}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-1 pt-4 border-t border-gray-700">
                                {project.metrics.map((metric, i) => (
                                    <div key={i} className="text-center">
                                        <div className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {metric}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
