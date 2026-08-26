"use client";

import React, { useEffect, useState } from 'react';

const DEFAULT_BG = "/images/hero_background_mughlai_1787676838358.png";

export default function HeroWrapper({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<string>(DEFAULT_BG);
  const [bgImageMobile, setBgImageMobile] = useState<string>("/images/hero_mobile.jpg");

  useEffect(() => {
    // Read from localStorage on mount
    const savedBg = localStorage.getItem('chicken-extension-bg');
    if (savedBg) {
      setBgImage(savedBg);
    }
    
    // Check if user set a specific mobile bg
    const savedMobileBg = localStorage.getItem('chicken-extension-bg-mobile');
    if (savedMobileBg) {
      setBgImageMobile(savedMobileBg);
    } else if (savedBg) {
      // Fallback: if no mobile bg is set, but desktop is set, use desktop for mobile too temporarily
      setBgImageMobile(savedBg);
    }
  }, []);

  return (
    <div 
      className="hero-wrapper" 
      style={{
        '--bg-desktop': `url('${bgImage}')`,
        '--bg-mobile': `url('${bgImageMobile}')`,
        transition: "background-image 0.5s ease-in-out"
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
