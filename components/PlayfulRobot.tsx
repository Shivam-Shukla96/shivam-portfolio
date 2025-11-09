"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

type Props = {
    mousePosition: { x: number; y: number };
};

export default function PlayfulRobot({ mousePosition }: Props) {
    const { isDark } = useTheme();
    // Robot visual/interaction state
    const [isJumping, setIsJumping] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const anchorRef = React.useRef<HTMLDivElement | null>(null);
    const robotRef = React.useRef<HTMLDivElement | null>(null); // moving element
    const leftPupilRef = React.useRef<SVGCircleElement | null>(null);
    const rightPupilRef = React.useRef<SVGCircleElement | null>(null);
    const rafRef = React.useRef<number | null>(null);
    const targetRef = React.useRef({ x: 0, y: 0 });
    const posRef = React.useRef({ x: 0, y: 0 });
    // keep latest mouse position in a ref so RAF loop can read it without re-subscribing
    const mouseRef = React.useRef<{ x: number; y: number }>(mousePosition);

    // Smooth follow cursor using requestAnimationFrame and lerp
    // update target based on mouse position relative to anchor (bottom-right)
    useEffect(() => {
        if (!anchorRef.current) return;
        const rect = anchorRef.current.getBoundingClientRect();
        const anchorX = rect.left + rect.width / 2;
        const anchorY = rect.top + rect.height / 2;
        const dx = mousePosition.x - anchorX;
        const dy = mousePosition.y - anchorY;
        // factor to reduce movement and max clamp
        const factor = 0.06;
        const maxOffset = 40;
        const tx = Math.max(-maxOffset, Math.min(maxOffset, dx * factor));
        const ty = Math.max(-maxOffset, Math.min(maxOffset, dy * factor));
        targetRef.current = { x: tx, y: ty };
    }, [mousePosition]);

    // sync mouseRef whenever prop updates
    useEffect(() => {
        mouseRef.current = mousePosition;
    }, [mousePosition]);

    // start RAF loop once to smoothly move robot towards target
    useEffect(() => {
        // RAF loop: update posRef, apply transform to robot DOM and update pupils directly
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const loop = () => {
            const current = posRef.current;
            const target = targetRef.current;
            const next = {
                x: lerp(current.x, target.x, 0.12),
                y: lerp(current.y, target.y, 0.12),
            };
            posRef.current = next;

            // Apply transform directly to avoid React re-renders
            if (robotRef.current) {
                const jump = isJumping ? ' translateY(-20px)' : '';
                robotRef.current.style.transform = `translate(${next.x}px, ${next.y}px)${jump}`;
            }

            // Update pupil positions directly on the SVG elements
            const updatePupil = (pupilRef: React.RefObject<SVGCircleElement | null> | null, eyeCx: number, eyeCy: number) => {
                if (!pupilRef || !pupilRef.current || !robotRef.current) return;
                const rect = robotRef.current.getBoundingClientRect();
                const eyeScreenX = rect.left + eyeCx;
                const eyeScreenY = rect.top + eyeCy;
                const mp = mouseRef.current || mousePosition;
                const angle = Math.atan2(mp.y - eyeScreenY, mp.x - eyeScreenX);
                const distance = 6; // pupil movement
                const px = eyeCx + Math.cos(angle) * distance;
                const py = eyeCy + Math.sin(angle) * distance;
                try {
                    pupilRef.current.setAttribute('cx', String(px));
                    pupilRef.current.setAttribute('cy', String(py));
                } catch {
                    // ignore if DOM not ready
                }
            };

            updatePupil(leftPupilRef, 40, 30);
            updatePupil(rightPupilRef, 60, 30);

            rafRef.current = requestAnimationFrame(loop);
        };

        rafRef.current = requestAnimationFrame(loop);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        };
        // mousePosition intentionally not listed to avoid restarting loop; loop reads it from closure
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isJumping]);

    // Pupils will be updated directly inside RAF loop using leftPupilRef/rightPupilRef

    const handleRobotClick = () => {
        setIsJumping(true);
        setShowMessage(true);
        setTimeout(() => setIsJumping(false), 500);
        setTimeout(() => setShowMessage(false), 2000);
    };

    return (
        <div ref={anchorRef} className="fixed bottom-8 right-8 z-50 pointer-events-none">
            <div
                ref={robotRef}
                className="pointer-events-auto cursor-pointer transition-transform duration-200"
                onClick={handleRobotClick}
            >
                {/* Speech bubble */}
                {showMessage && (
                    <div
                        className={`absolute bottom-28 right-0 px-4 py-2 rounded-lg shadow-lg animate-bounce ${isDark ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900 border border-indigo-200'
                            }`}
                    >
                        <p className="text-sm font-medium whitespace-nowrap">Hey! I&apos;m following you! 👀</p>
                        <div
                            className={`absolute bottom-0 right-8 w-3 h-3 transform rotate-45 translate-y-1/2 ${isDark ? 'bg-indigo-600' : 'bg-white border-r border-b border-indigo-200'
                                }`}
                        />
                    </div>
                )}

                <div className={`transition-transform duration-200 ${isJumping ? 'scale-110' : 'scale-100'}`}>
                    <svg width="100" height="120" viewBox="0 0 100 120" className="drop-shadow-lg">
                        <defs>
                            <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Antenna */}
                        <line x1="50" y1="15" x2="50" y2="5" stroke="url(#robotGradient)" strokeWidth="2" />
                        <circle cx="50" cy="5" r="3" fill="#ec4899" filter="url(#glow)">
                            <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
                        </circle>

                        {/* Head */}
                        <rect x="30" y="15" width="40" height="35" rx="8" fill="url(#robotGradient)" />

                        {/* Eyes container */}
                        <g>
                            {/* Left eye white - bulging */}
                            <circle cx="40" cy="30" r="7" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                            {/* Left eye pupil - follows cursor */}
                            <circle ref={leftPupilRef} cx="40" cy="30" r="4" fill="#0f172a" />

                            {/* Right eye white - bulging */}
                            <circle cx="60" cy="30" r="7" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                            {/* Right eye pupil - follows cursor */}
                            <circle ref={rightPupilRef} cx="60" cy="30" r="4" fill="#0f172a" />
                        </g>

                        {/* Smile */}
                        <path d="M40 40 Q50 45 60 40" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />

                        {/* Body */}
                        <rect x="25" y="55" width="50" height="40" rx="10" fill="url(#robotGradient)" />

                        {/* Chest panel */}
                        <rect x="40" y="65" width="20" height="20" rx="3" fill="white" opacity="0.3" />
                        <circle cx="50" cy="75" r="3" fill="#10b981">
                            <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
                        </circle>

                        {/* Arms */}
                        <rect x="15" y="60" width="8" height="25" rx="4" fill="url(#robotGradient)" />
                        <rect x="77" y="60" width="8" height="25" rx="4" fill="url(#robotGradient)" />

                        {/* Hands */}
                        <circle cx="19" cy="87" r="5" fill="#ec4899" />
                        <circle cx="81" cy="87" r="5" fill="#ec4899" />

                        {/* Legs */}
                        <rect x="35" y="95" width="10" height="20" rx="5" fill="url(#robotGradient)" />
                        <rect x="55" y="95" width="10" height="20" rx="5" fill="url(#robotGradient)" />

                        {/* Feet */}
                        <ellipse cx="40" cy="115" rx="8" ry="4" fill="#1e293b" />
                        <ellipse cx="60" cy="115" rx="8" ry="4" fill="#1e293b" />
                    </svg>
                </div>
            </div>

            {/* Hint text */}
            <div className={`absolute -bottom-6 right-0 text-xs text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Click me!</div>
        </div>
    );
}
