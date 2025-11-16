"use client";

import { useMemo } from "react";

const solarCellPattern = (
  <pattern id="solarCells" width="0.12" height="0.3" patternUnits="objectBoundingBox">
    <rect x="0" y="0" width="1" height="1" fill="rgba(30, 72, 120, 0.92)" />
    <rect x="0.02" y="0.04" width="0.08" height="0.22" rx="0.02" fill="rgba(80, 178, 255, 0.35)" />
  </pattern>
);

export function FlyingWingIllustration() {
  const gradientId = useMemo(() => `wingGradient-${Math.random().toString(36).slice(2)}`, []);
  const glowId = useMemo(() => `glow-${Math.random().toString(36).slice(2)}`, []);

  return (
    <svg
      viewBox="0 0 960 540"
      width="100%"
      height="100%"
      role="img"
      aria-labelledby="title desc"
    >
      <title id="title">Solar-powered flying wing soaring through high atmosphere</title>
      <desc id="desc">
        Futuristic flying wing aircraft with iridescent solar panels illuminated by sunlight and gliding above clouds.
      </desc>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="30%" x2="100%" y2="70%">
          <stop offset="0%" stopColor="#0f3055" />
          <stop offset="45%" stopColor="#1a5f99" />
          <stop offset="100%" stopColor="#112a46" />
        </linearGradient>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(74, 193, 255, 0.45)" />
          <stop offset="100%" stopColor="rgba(11, 24, 45, 0)" />
        </radialGradient>
        {solarCellPattern}
        <filter id="softShadow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="12" stdDeviation="24" floodColor="rgba(0, 26, 51, 0.8)" />
        </filter>
        <filter id="edgeGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="960" height="540" fill={`url(#${glowId})`} opacity="0.75" />

      <g filter="url(#softShadow)" transform="translate(60 70)">
        <g transform="rotate(-6 420 220)">
          <path
            d="M40 270 Q340 120 620 160 Q820 190 900 240 Q640 340 320 350 Q120 320 40 270 Z"
            fill={`url(#${gradientId})`}
            stroke="rgba(120, 210, 255, 0.42)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M56 266 Q340 140 622 180 Q780 206 872 242 Q632 320 324 342 Q164 316 56 266 Z"
            fill="url(#solarCells)"
            opacity="0.9"
            filter="url(#edgeGlow)"
          />
          <path
            d="M302 266 Q352 206 428 202 Q502 196 562 228 Q516 248 460 258 Q410 266 360 270 Q330 270 302 266 Z"
            fill="rgba(17, 44, 72, 0.82)"
            opacity="0.95"
          />
          <path
            d="M680 210 Q730 220 788 246 Q744 264 702 274 Q660 284 620 288 Q626 244 680 210 Z"
            fill="rgba(14, 36, 60, 0.94)"
          />
          <path
            d="M120 280 Q320 200 520 226 Q360 300 160 312 Q132 302 120 280 Z"
            fill="rgba(12, 42, 75, 0.74)"
          />
          <path
            d="M56 266 Q340 140 622 180"
            stroke="rgba(74, 193, 255, 0.55)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M324 342 Q632 320 872 242"
            stroke="rgba(74, 193, 255, 0.25)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <g opacity="0.6" stroke="rgba(182, 230, 255, 0.22)" strokeWidth="1.5">
            <path d="M120 278 Q300 220 480 244" />
            <path d="M160 296 Q340 240 520 268" />
            <path d="M210 310 Q370 260 560 284" />
            <path d="M260 320 Q400 280 620 296" />
          </g>
          <g>
            <circle cx="476" cy="232" r="12" fill="rgba(74, 193, 255, 0.74)" />
            <circle cx="476" cy="232" r="32" fill="rgba(74, 193, 255, 0.18)" />
            <path
              d="M470 212 Q478 206 486 212"
              stroke="rgba(195, 240, 255, 0.7)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>

      <g opacity="0.28">
        <path
          d="M220 428 Q480 380 760 410"
          stroke="rgba(12, 44, 74, 0.8)"
          strokeWidth="28"
          strokeLinecap="round"
        />
      </g>

      <g opacity="0.4" stroke="rgba(74, 193, 255, 0.18)" strokeWidth="2">
        <path d="M120 160 Q220 140 340 180" />
        <path d="M620 120 Q720 140 840 180" />
        <path d="M160 420 Q300 380 460 392" />
        <path d="M540 422 Q700 400 840 420" />
      </g>
    </svg>
  );
}
