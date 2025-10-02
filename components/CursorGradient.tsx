'use client';

import React, { useRef, useEffect, useState } from 'react';

interface CursorGradientProps {
  size?: string;
  colors?: {
    light: {
      primary: string;
      secondary: string;
    };
    dark: {
      primary: string;
      secondary: string;
    };
  };
  smoothing?: number;
  className?: string;
}

const CursorGradient: React.FC<CursorGradientProps> = ({
  size = 'w-[500px] h-[500px]',
  colors = {
    light: {
      primary: 'rgba(59, 130, 246, 0.06)',
      secondary: 'rgba(147, 51, 234, 0.03)',
    },
    dark: {
      primary: 'rgba(59, 130, 246, 0.1)',
      secondary: 'rgba(147, 51, 234, 0.06)',
    }
  },
  smoothing = 0.12,
  className = ''
}) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  // Theme detection
  const getCurrentTheme = () => {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  };

  // Client-side initialization
  useEffect(() => {
    setIsClient(true);
    
    // Add minimal CSS animations
    if (typeof document !== 'undefined') {
      const styleId = 'cursor-gradient-minimal';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          @keyframes gentleFloat {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.05) rotate(180deg); }
          }
          @keyframes subtleShift {
            0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            25% { border-radius: 30% 60% 40% 70% / 50% 60% 30% 60%; }
            50% { border-radius: 70% 30% 60% 40% / 40% 50% 60% 30%; }
            75% { border-radius: 40% 70% 30% 60% / 30% 40% 70% 60%; }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          }
        `;
        document.head.appendChild(style);
      }
    }
  }, []);

  // Update styles when theme changes
  useEffect(() => {
    if (!isClient) return;
    
    const updateThemeStyles = () => {
      const theme = getCurrentTheme();
      const themeColors = colors[theme];
      
      if (gradientRef.current) {
        gradientRef.current.style.background = `
          radial-gradient(circle at center, 
            ${themeColors.primary} 0%, 
            ${themeColors.secondary} 50%,
            transparent 100%
          )
        `;
      }
    };

    const observer = new MutationObserver(updateThemeStyles);
    if (typeof document !== 'undefined') {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
    }

    updateThemeStyles();
    return () => observer.disconnect();
  }, [colors, isClient]);

  // Smooth animation loop
  useEffect(() => {
    if (!isClient) return;
    
    let animationFrame: number;
    
    const animate = () => {
      const deltaX = targetPos.current.x - pos.current.x;
      const deltaY = targetPos.current.y - pos.current.y;
      
      pos.current.x += deltaX * smoothing;
      pos.current.y += deltaY * smoothing;
      
      if (gradientRef.current) {
        gradientRef.current.style.transform = `
          translate(${pos.current.x - 250}px, ${pos.current.y - 250}px)
        `;
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    // Initialize to center position
    if (typeof window !== 'undefined') {
      targetPos.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      };
      pos.current = { ...targetPos.current };
    }

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [smoothing, isClient]);

  if (!isClient) return null;

  return (
    <div 
      className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}
      style={{ mixBlendMode: 'normal' }}
    >
      {/* Main gradient */}
      <div
        ref={gradientRef}
        className={`absolute ${size} will-change-transform`}
        style={{
          left: '0',
          top: '0',
          animation: 'gentleFloat 8s ease-in-out infinite, subtleShift 12s ease-in-out infinite',
          transformOrigin: 'center center',
          filter: 'blur(40px)',
          transition: 'all 0.3s ease-out',
        }}
      />
      
      {/* Subtle accent gradient */}
      <div
        className="absolute w-[300px] h-[300px] opacity-30"
        style={{
          left: '20%',
          top: '60%',
          background: `radial-gradient(circle, ${colors[getCurrentTheme()]?.secondary || 'rgba(147, 51, 234, 0.06)'} 0%, transparent 70%)`,
          animation: 'gentleFloat 6s ease-in-out infinite reverse',
          filter: 'blur(30px)',
        }}
      />
      
      {/* Another subtle accent */}
      <div
        className="absolute w-[200px] h-[200px] opacity-20"
        style={{
          right: '15%',
          top: '20%',
          background: `radial-gradient(circle, ${colors[getCurrentTheme()]?.primary || 'rgba(59, 130, 246, 0.1)'} 0%, transparent 70%)`,
          animation: 'gentleFloat 10s ease-in-out infinite',
          filter: 'blur(25px)',
        }}
      />
    </div>
  );
};

export default CursorGradient;
