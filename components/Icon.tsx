"use client";
import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

type IconProps = {
    id: string;
    size?: number;
    className?: string;
};

export default function Icon({ id, size = 24, className }: IconProps) {
    switch (id) {
        case 'github':
            return <Github size={size} className={className} />;
        case 'linkedin':
            return <Linkedin size={size} className={className} />;
        case 'phone':
            return <Phone size={size} className={className} />;
        case 'email':
            return <Mail size={size} className={className} />;
        default:
            // fallback for text-only entries (like leetcode)
            return <span className={className}>{id === 'leetcode' ? 'Leet' : id}</span>;
    }
}
