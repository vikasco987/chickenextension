"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BACKGROUNDS = [
  {
    id: "bg-hybrid-custom",
    name: "Perfect Hybrid Layout (Newest)",
    path: "/images/hero_hybrid.jpg",
    desc: "Logo baked in, but left space empty for high-quality web text and buttons. The most professional look."
  },
  {
    id: "bg-baked-custom",
    name: "Fully Baked Image Layout (New)",
    path: "/images/hero_baked.jpg",
    desc: "The custom image with logo, text, and food all baked in. Enable 'Use Baked Image Layout' toggle below for best results."
  },
  {
    id: "bg-original",
    name: "Customer Approved Layout (Original)",
    path: "/images/hero_background_mughlai_1787676838358.png",
    desc: "The exact layout requested featuring a beautiful arrangement of kebab skewers, biryani, and curry bowls on the right side."
  },
  {
    id: "bg-balanced",
    name: "Balanced & Elegant (Spices)",
    path: "/images/hero_bg_balanced_1787678010249.png",
    desc: "Perfect mix of spices and empty space for text readability."
  },
  {
    id: "bg-minimalist",
    name: "Ultra Minimalist",
    path: "/images/hero_bg_minimalist_1787677854809.png",
    desc: "Very clean with just a few spices on the far right."
  },
  {
    id: "bg-heavy",
    name: "Heavy Leaves & Spices",
    path: "/images/hero_bg_leaves_1787677554358.png",
    desc: "Rich, dense borders with lots of coriander."
  }
];

export default function AdminPage() {
  const [currentBg, setCurrentBg] = useState<string>("");
  const [currentMobileBg, setCurrentMobileBg] = useState<string>("");
  const [showFloating, setShowFloating] = useState<boolean>(false);
  const [useBakedLayout, setUseBakedLayout] = useState<boolean>(false);

  useEffect(() => {
    const savedBg = localStorage.getItem('chicken-extension-bg') || BACKGROUNDS[0].path;
    setCurrentBg(savedBg);
    
    const savedMobileBg = localStorage.getItem('chicken-extension-bg-mobile') || "/images/hero_mobile.jpg";
    setCurrentMobileBg(savedMobileBg);
    
    const savedFloating = localStorage.getItem('chicken-extension-floating');
    setShowFloating(savedFloating === 'true');

    const savedBaked = localStorage.getItem('chicken-extension-baked-layout');
    setUseBakedLayout(savedBaked === 'true');
  }, []);

  const handleSetBackground = (path: string) => {
    localStorage.setItem('chicken-extension-bg', path);
    setCurrentBg(path);
  };

  const handleSetMobileBackground = (path: string) => {
    localStorage.setItem('chicken-extension-bg-mobile', path);
    setCurrentMobileBg(path);
  };

  const handleToggleFloating = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setShowFloating(isChecked);
    localStorage.setItem('chicken-extension-floating', isChecked ? 'true' : 'false');
  };

  const handleToggleBakedLayout = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setUseBakedLayout(isChecked);
    localStorage.setItem('chicken-extension-baked-layout', isChecked ? 'true' : 'false');
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#5C1620' }}>Admin Panel: Hero Settings</h1>
        <Link href="/" style={{ padding: '10px 20px', background: '#5C1620', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>
          View Live Site
        </Link>
      </div>

      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        
        <div style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>Layout Options</h2>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '16px', color: '#555', marginBottom: '12px' }}>
            <input 
              type="checkbox" 
              checked={showFloating}
              onChange={handleToggleFloating}
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            Show Floating Food Collage (Circular Images)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '16px', color: '#555' }}>
            <input 
              type="checkbox" 
              checked={useBakedLayout}
              onChange={handleToggleBakedLayout}
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            Use "Baked Image" Layout (Hides web text/logo expecting them in the image)
          </label>
        </div>

        <div style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>Mobile Specific Settings</h2>
          <p style={{ color: '#666', marginBottom: '15px' }}>Enter the path to your mobile background image. The mobile layout expects the logo in the top black navbar, so the image should NOT have a logo baked in.</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              value={currentMobileBg}
              onChange={(e) => handleSetMobileBackground(e.target.value)}
              style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '15px' }}
              placeholder="/images/your_mobile_image.jpg"
            />
          </div>
          {currentMobileBg && (
            <div style={{ marginTop: '15px' }}>
              <p style={{ fontSize: '13px', color: '#888', marginBottom: '5px' }}>Mobile Background Preview:</p>
              <img src={currentMobileBg} alt="Mobile Bg Preview" style={{ height: '150px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #ddd' }} />
            </div>
          )}
        </div>

        <h2 style={{ marginBottom: '20px', color: '#333' }}>Select Hero Background</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {BACKGROUNDS.map((bg) => (
            <div 
              key={bg.id}
              onClick={() => handleSetBackground(bg.path)}
              style={{
                display: 'flex',
                gap: '20px',
                padding: '20px',
                border: `3px solid ${currentBg === bg.path ? '#B8863B' : '#eee'}`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: currentBg === bg.path ? '#Fcf9f2' : 'white'
              }}
            >
              <div style={{
                width: '150px',
                height: '100px',
                borderRadius: '8px',
                backgroundImage: `url('${bg.path}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}></div>
              
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#5C1620' }}>{bg.name}</h3>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{bg.desc}</p>
                {currentBg === bg.path && (
                  <span style={{ marginTop: '12px', color: '#B8863B', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>
                    ✓ Currently Active
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
