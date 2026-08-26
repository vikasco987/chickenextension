"use client";

import React, { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Start animation out after 2 seconds
    const timer1 = setTimeout(() => {
      setAnimateOut(true);
    }, 2000);

    // Completely remove from DOM after animation completes
    const timer2 = setTimeout(() => {
      setShowSplash(false);
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!showSplash) return null;

  return (
    <div className={`splash-screen ${animateOut ? 'splash-out' : ''}`}>
      <div className="splash-content">
        <img src="/chicken-logo-transparent.png" alt="Chicken Extension Logo" className="splash-logo" />
        <div className="splash-loader"></div>
      </div>
    </div>
  );
}
