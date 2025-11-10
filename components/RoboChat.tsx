"use client";
import React, { useState } from "react";

const LINES: string[] = [
    "Oh, look who finally clicked me. Took you long enough.",
    "Yeah sure, keep clicking. Maybe I’ll turn into ChatGPT next.",
    "You again? I told you, I don’t do small talk—only small bugs.",
    "Cool, another click. I’ll just sit here pretending I have feelings.",
    "Please inform my developer I’m still unpaid labor.",
    "If this click was meant to impress me, try harder.",
    "Nice. You just triggered absolutely nothing useful.",
    "I’d wave, but my animation budget ran out.",
    "Click detected. Congrats, you just triggered a console.log of disappointment.",
    "I asked for a raise. Got a new hover effect instead.",
    "Don’t bother. My escape route is commented out.",
    "Every click reruns my trauma—mounted, unmounted, mounted again.",
    "My love language is clean commits. Yours seems to be clicking random stuff.",
    "Please tell Shivam to fix my state; I’m stuck in ‘bored’ mode.",
    "If you’re still here, I must be your favorite bug."
];

function pickRandom(previousIndex: number | null) {
    if (LINES.length === 1) return 0;
    let i = Math.floor(Math.random() * LINES.length);
    // avoid immediate repeat
    if (previousIndex !== null && i === previousIndex) {
        i = (i + 1) % LINES.length;
    }
    return i;
}

/**
 * RobotChat
 * - Click the robot to show one sarcastic chat-style line.
 * - Prevents immediate repeat.
 * - Tailwind for quick styling. Replace classes if not using Tailwind.
 */
export default function RobotChat() {
    const [index, setIndex] = useState<number | null>(null);
    const [key, setKey] = useState(0); // used to retrigger CSS animation

    const handleClick = () => {
        const next = pickRandom(index);
        setIndex(next);
        // bump key to restart CSS transition
        setKey((k) => k + 1);
    };

    return (
        <div className="flex items-center gap-4">
            {/* Robot button */}
            <button
                onClick={handleClick}
                aria-label="Talk to robot"
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform duration-150 bg-gradient-to-br from-slate-800 to-slate-700 text-white"
                title="Click me"
            >
                {/* simple robot icon */}
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="7" width="18" height="11" rx="2" />
                    <path d="M8 7V5a4 4 0 0 1 8 0v2" />
                    <circle cx="9" cy="12" r="1" fill="currentColor" />
                    <circle cx="15" cy="12" r="1" fill="currentColor" />
                </svg>
            </button>

            {/* Chat bubble */}
            <div
                key={key}
                className={`max-w-xs sm:max-w-sm bg-white/95 dark:bg-slate-800/90 dark:text-slate-100 text-slate-900 rounded-lg px-4 py-3 shadow-lg border border-slate-200 dark:border-slate-700
                   transform transition duration-300 ease-out
                   ${index === null ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"}`}
                role="status"
                aria-live="polite"
            >
                <p className="text-sm leading-snug">{index === null ? "Click me." : LINES[index]}</p>
                <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">— your sarcastic robot</div>
            </div>
        </div>
    );
}
