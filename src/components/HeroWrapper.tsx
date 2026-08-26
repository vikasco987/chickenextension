"use client";

import React, { useEffect, useState } from 'react';

export default function HeroWrapper({ children }: { children: React.ReactNode }) {
  const [showFloating, setShowFloating] = useState<boolean>(false);

  useEffect(() => {
    // Fetch global settings on mount
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data.showFloating) setShowFloating(true);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="hero-wrapper hero-bg-gradient">
      {children}
    </div>
  );
}
