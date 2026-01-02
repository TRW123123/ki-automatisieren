"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: "green" | "blue" | "purple" | "red" | "yellow" | "cyan" | "lime";
  size?: "sm" | "md" | "lg";
}

const glowColors = {
  green: "shadow-emerald-500/20 border-emerald-500/20 hover:shadow-emerald-500/40",
  blue: "shadow-sky-500/20 border-sky-500/20 hover:shadow-sky-500/40", 
  purple: "shadow-purple-500/20 border-purple-500/20 hover:shadow-purple-500/40",
  red: "shadow-red-500/20 border-red-500/20 hover:shadow-red-500/40",
  yellow: "shadow-yellow-500/20 border-yellow-500/20 hover:shadow-yellow-500/40",
  cyan: "shadow-cyan-500/20 border-cyan-500/20 hover:shadow-cyan-500/40",
  lime: "shadow-lime-500/20 border-lime-500/20 hover:shadow-lime-500/40"
};

const glowHues = {
  green: "142",
  blue: "200",
  purple: "256", 
  red: "0",
  yellow: "48",
  cyan: "189",
  lime: "84"
};

const sizes = {
  sm: "p-4 min-h-[200px]",
  md: "p-6 min-h-[250px]", 
  lg: "p-8 min-h-[300px]"
};

export function GlowCard({ 
  children, 
  className, 
  glowColor = "lime", 
  size = "md",
  ...props 
}: GlowCardProps) {
  const divRef = React.useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    divRef.current.style.setProperty('--x', `${x}px`);
    divRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <div
      ref={divRef}
      data-glow
      onPointerMove={handlePointerMove}
      className={cn(
        "relative rounded-lg border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]",
        "shadow-lg hover:shadow-2xl",
        glowColors[glowColor],
        sizes[size],
        className
      )}
      style={{
        '--hue': glowHues[glowColor],
        '--border-size': '2px',
        '--radius': '8'
      } as React.CSSProperties}
      {...props}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}