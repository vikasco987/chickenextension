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

const MOBILE_BACKGROUNDS = [
  {
    id: "mob-clean",
    name: "Clean Parchment (No Logo)",
    path: "/images/hero_mobile_clean.jpg",
    desc: "A clean mobile layout. Logo is provided by the black navbar.",
    hidesLogo: false
  },
  {
    id: "mob-baked",
    name: "Fully Baked Mobile (With Logo)",
    path: "/images/hero_mobile_baked.jpg",
    desc: "The logo is built directly into this image. Automatically hides the HTML logo.",
    hidesLogo: true
  }
];

export default function AdminPage() {
  const [currentBg, setCurrentBg] = useState<string>("");
  const [currentMobileBg, setCurrentMobileBg] = useState<string>("");
  const [showFloating, setShowFloating] = useState<boolean>(false);
  const [useBakedLayout, setUseBakedLayout] = useState<boolean>(false);
  const [hideLogo, setHideLogo] = useState<boolean>(false);

  useEffect(() => {
    const savedBg = localStorage.getItem('chicken-extension-bg') || BACKGROUNDS[0].path;
    setCurrentBg(savedBg);
    
    const savedMobileBg = localStorage.getItem('chicken-extension-bg-mobile') || "/images/hero_mobile.jpg";
    setCurrentMobileBg(savedMobileBg);
    
    const savedFloating = localStorage.getItem('chicken-extension-floating');
    setShowFloating(savedFloating === 'true');

    const savedBaked = localStorage.getItem('chicken-extension-baked-layout');
    setUseBakedLayout(savedBaked === 'true');

    const savedHideLogo = localStorage.getItem('chicken-extension-hide-logo');
    setHideLogo(savedHideLogo === 'true');
  }, []);

  const handleSetBackground = (path: string) => {
    localStorage.setItem('chicken-extension-bg', path);
    setCurrentBg(path);
  };

  const handleSetMobileBackground = (path: string, autoHideLogo: boolean) => {
    localStorage.setItem('chicken-extension-bg-mobile', path);
    setCurrentMobileBg(path);
    
    // Auto-update hide logo based on image selection
    setHideLogo(autoHideLogo);
    localStorage.setItem('chicken-extension-hide-logo', autoHideLogo ? 'true' : 'false');
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

  const handleToggleHideLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setHideLogo(isChecked);
    localStorage.setItem('chicken-extension-hide-logo', isChecked ? 'true' : 'false');
  };

  return (
    <>
    <style dangerouslySetInnerHTML={{__html: `
      .admin-container { padding: 40px; max-width: 800px; margin: 0 auto; font-family: sans-serif; }
      .admin-card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
      .bg-item { display: flex; gap: 20px; padding: 20px; border-radius: 12px; cursor: pointer; transition: all 0.2s; }
      .bg-preview { width: 150px; height: 100px; border-radius: 8px; background-size: cover; background-position: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
      
      @media (max-width: 768px) {
        .admin-container { padding: 15px; }
        .admin-card { padding: 15px; }
        .bg-item { flex-direction: column; }
        .bg-preview { width: 100%; height: 180px; }
        .admin-header { flex-direction: column; gap: 15px; align-items: flex-start !important; }
      }
    `}} />
    <div className="admin-container">
      <div className="admin-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#5C1620', fontSize: '24px', margin: 0 }}>Admin Panel: Settings</h1>
        <Link href="/" style={{ padding: '10px 20px', background: '#5C1620', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>
          View Live Site
        </Link>
      </div>

      <div className="admin-card">
        
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
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '15px', color: '#555', marginBottom: '12px' }}>
            <input 
              type="checkbox" 
              checked={hideLogo}
              onChange={handleToggleHideLogo}
              style={{ width: '20px', height: '20px', cursor: 'pointer', flexShrink: 0, marginTop: '2px' }}
            />
            <div>
              <strong>Hide HTML Logo Everywhere</strong><br/>
              <span style={{fontSize: '13px', color: '#888'}}>Useful if your background image already has a logo baked into it.</span>
            </div>
          </label>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '15px', color: '#555' }}>
            <input 
              type="checkbox" 
              checked={useBakedLayout}
              onChange={handleToggleBakedLayout}
              style={{ width: '20px', height: '20px', cursor: 'pointer', flexShrink: 0, marginTop: '2px' }}
            />
            <div>
              <strong>Use "Baked Image" Layout</strong><br/>
              <span style={{fontSize: '13px', color: '#888'}}>Hides web text completely, expecting text in the background image.</span>
            </div>
          </label>
        </div>

        <div style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>Mobile Specific Settings</h2>
          <p style={{ color: '#666', marginBottom: '15px' }}>Select a mobile background. Some images have the logo baked in, which will automatically hide the HTML logo.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
            {MOBILE_BACKGROUNDS.map((mobBg) => (
              <div 
                key={mobBg.id}
                className="bg-item"
                onClick={() => handleSetMobileBackground(mobBg.path, mobBg.hidesLogo)}
                style={{
                  border: `3px solid ${currentMobileBg === mobBg.path ? '#B8863B' : '#eee'}`,
                  backgroundColor: currentMobileBg === mobBg.path ? '#Fcf9f2' : 'white',
                  padding: '15px'
                }}
              >
                <div className="bg-preview" style={{ backgroundImage: `url('${mobBg.path}')`, width: '100px', height: '150px' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                  <h3 style={{ margin: '0 0 8px 0', color: '#5C1620', fontSize: '18px' }}>{mobBg.name}</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{mobBg.desc}</p>
                  {currentMobileBg === mobBg.path && (
                    <span style={{ marginTop: '12px', color: '#B8863B', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>
                      ✓ Currently Active
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>Custom Mobile Image URL:</p>
            <input 
              type="text" 
              value={currentMobileBg}
              onChange={(e) => {
                const newPath = e.target.value;
                localStorage.setItem('chicken-extension-bg-mobile', newPath);
                setCurrentMobileBg(newPath);
              }}
              style={{ width: '100%', boxSizing: 'border-box', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '15px' }}
              placeholder="/images/your_mobile_image.jpg"
            />
          </div>
        </div>

        <h2 style={{ marginBottom: '20px', color: '#333' }}>Select Hero Background</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {BACKGROUNDS.map((bg) => (
            <div 
              key={bg.id}
              className="bg-item"
              onClick={() => handleSetBackground(bg.path)}
              style={{
                border: `3px solid ${currentBg === bg.path ? '#B8863B' : '#eee'}`,
                backgroundColor: currentBg === bg.path ? '#Fcf9f2' : 'white'
              }}
            >
              <div className="bg-preview" style={{ backgroundImage: `url('${bg.path}')` }}></div>
              
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
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
    </>
  );
}
