"use client";
import React from 'react';

type Props = { mousePosition: { x: number; y: number } };

export default function CursorGlow({ mousePosition }: Props) {
    return (
        <div
            className="cursor-glow hidden lg:block"
            style={{ left: mousePosition.x, top: mousePosition.y }}
        />
    );
}
