"use client";

import React, { useEffect, useState } from 'react';

const DEFAULT_BG = "/images/hero_background_mughlai_1787676838358.png";

export default function HeroWrapper({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<string>(DEFAULT_BG);
  const [bgImageMobile, setBgImageMobile] = useState<string>("/images/hero_mobile.jpg");
  const [showFloating, setShowFloating] = useState<boolean>(false);

  useEffect(() => {
    // Fetch global settings on mount
    fetch('/api/settings?t=' + new Date().getTime(), { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (data.bgDesktop) setBgImage(data.bgDesktop);
        if (data.bgMobile) setBgImageMobile(data.bgMobile);
        if (data.showFloating) setShowFloating(true);
      })
      .catch(console.error);
  }, []);

  return (
    <div 
      className="hero-wrapper" 
      style={{
        '--bg-desktop': bgImage === 'none' ? 'none' : `url('${bgImage}')`,
        '--bg-mobile': showFloating || bgImageMobile === 'none' ? 'none' : `url('${bgImageMobile}')`,
        transition: "background-image 0.5s ease-in-out"
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
