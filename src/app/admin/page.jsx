"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import QRGenerator from '../../components/QRGenerator';

const BACKGROUNDS = [
  {
    id: "bg-kebab-biryani",
    name: "Kebab & Biryani Feast (New)",
    path: "/images/hero_custom_kebab_biryani.jpg",
    desc: "A stunning layout of kebabs, biryani, and tikka masala on a textured background."
  },
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
    id: "mob-none",
    name: "No Image (Solid Color)",
    path: "none",
    desc: "A completely clean canvas with no background image, perfect for floating designs.",
    hidesLogo: false
  },
  {
    id: "mob-marble",
    name: "Luxury Marble Feast",
    path: "/images/hero_mobile_marble.jpg",
    desc: "Top half is clean white marble, bottom half is a photorealistic Mughlai feast. Very premium.",
    hidesLogo: false
  },
  {
    id: "mob-generated",
    name: "AI Perfected Mobile (Recommended)",
    path: "/images/hero_mobile_generated.jpg",
    desc: "Custom generated with empty parchment at the top and beautiful Mughlai food at the bottom. The HTML logo remains visible in the black navbar.",
    hidesLogo: false
  },
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
  const [selectedBgId, setSelectedBgId] = useState(BACKGROUNDS[0].id);
  const [selectedMobileBgId, setSelectedMobileBgId] = useState(MOBILE_BACKGROUNDS[0].id);
  const [showFloating, setShowFloating] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);
  const [logoSizeDesktop, setLogoSizeDesktop] = useState(280);
  const [logoSizeMobile, setLogoSizeMobile] = useState(180);
  const [activeTab, setActiveTab] = useState('settings');
  const [qrUrl, setQrUrl] = useState('https://chickenextension.vercel.app/');
  const [qrDesign, setQrDesign] = useState('premium-dark');

  useEffect(() => {
    fetch('/api/settings?t=' + new Date().getTime(), { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (data.bgDesktop) {
          const matchedBg = BACKGROUNDS.find(b => b.path === data.bgDesktop);
          if (matchedBg) setSelectedBgId(matchedBg.id);
        }
        if (data.bgMobile) {
          const matchedMobBg = MOBILE_BACKGROUNDS.find(b => b.path === data.bgMobile);
          if (matchedMobBg) setSelectedMobileBgId(matchedMobBg.id);
        }
        setShowFloating(data.showFloating || false);
        setHideLogo(data.hideLogo || false);
        setLogoSizeDesktop(data.logoSizeDesktop || 280);
        setLogoSizeMobile(data.logoSizeMobile || 180);
      })
      .catch(console.error);
  }, []);

  const handleSave = async (bgId) => {
    const bg = BACKGROUNDS.find(b => b.id === bgId);
    if (!bg) return;
    
    const mobBg = MOBILE_BACKGROUNDS.find(b => b.id === selectedMobileBgId) || MOBILE_BACKGROUNDS[0];
    
    // Auto-determine layout
    const isBaked = bg.path === '/images/hero_baked.jpg' || mobBg.path === '/images/hero_mobile_baked.jpg';
    const isHybrid = bg.path === '/images/hero_hybrid.jpg';

    const settings = {
      bgDesktop: bg.path,
      bgMobile: mobBg.path,
      showFloating: showFloating,
      hideLogo: hideLogo || (bg.id === 'bg-baked-custom') || mobBg.hidesLogo,
      useBakedLayout: isBaked,
      useHybridLayout: isHybrid,
      logoSizeDesktop: logoSizeDesktop,
      logoSizeMobile: logoSizeMobile
    };

    try {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Save Error:", errorData);
        alert('Server Error: Failed to save settings. Check browser console for logs.\n\nDetails: ' + (errorData.error || response.statusText) + '\n\nNote: If you are on Vercel, saving to local files is blocked by default.');
        return;
      }

      alert(`Global Settings Saved successfully!\n\nDesktop: ${bg.name}\nMobile: ${mobBg.name}\nLayout updated automatically.`);
    } catch (e) {
      console.error("Network Error:", e);
      alert('Failed to save settings globally. Network error occurred.');
    }
  };

  const handleToggleFloating = (e) => {
    setShowFloating(e.target.checked);
  };

  const handleToggleHideLogo = (e) => {
    setHideLogo(e.target.checked);
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
      <div className="admin-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#5C1620', fontSize: '24px', margin: 0 }}>Admin Panel</h1>
        <Link href="/" style={{ padding: '10px 20px', background: '#5C1620', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>
          View Live Site
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <button 
          onClick={() => setActiveTab('settings')}
          style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: activeTab === 'settings' ? '#B8863B' : '#eee', color: activeTab === 'settings' ? 'white' : '#333', fontWeight: 'bold' }}
        >
          Layout Settings
        </button>
        <button 
          onClick={() => setActiveTab('qrcode')}
          style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: activeTab === 'qrcode' ? '#B8863B' : '#eee', color: activeTab === 'qrcode' ? 'white' : '#333', fontWeight: 'bold' }}
        >
          QR Code Generator
        </button>
      </div>

      {activeTab === 'settings' && (
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
        </div>

        <div style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>Logo Settings</h2>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', color: '#555', fontWeight: 'bold' }}>
              Desktop Logo Width ({logoSizeDesktop}px)
            </label>
            <input 
              type="range" 
              min="100" max="600" step="10"
              value={logoSizeDesktop} 
              onChange={(e) => setLogoSizeDesktop(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', color: '#555', fontWeight: 'bold' }}>
              Mobile Logo Height ({logoSizeMobile}px)
            </label>
            <input 
              type="range" 
              min="80" max="300" step="10"
              value={logoSizeMobile} 
              onChange={(e) => setLogoSizeMobile(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>Mobile Specific Settings</h2>
          <p style={{ color: '#666', marginBottom: '15px' }}>Select a mobile background. Some images have the logo baked in, which will automatically hide the HTML logo.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
            {MOBILE_BACKGROUNDS.map((mobBg) => (
              <div 
                key={mobBg.id}
                className="bg-item"
                onClick={() => setSelectedMobileBgId(mobBg.id)}
                style={{
                  border: `3px solid ${selectedMobileBgId === mobBg.id ? '#B8863B' : '#eee'}`,
                  backgroundColor: selectedMobileBgId === mobBg.id ? '#Fcf9f2' : 'white',
                  padding: '15px'
                }}
              >
                <div className="bg-preview" style={{ backgroundImage: `url('${mobBg.path}')`, width: '100px', height: '150px' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                  <h3 style={{ margin: '0 0 8px 0', color: '#5C1620', fontSize: '18px' }}>{mobBg.name}</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{mobBg.desc}</p>
                  {selectedMobileBgId === mobBg.id && (
                    <span style={{ marginTop: '12px', color: '#B8863B', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>
                      ✓ Currently Active
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ marginBottom: '20px', color: '#333' }}>Select Hero Background</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {BACKGROUNDS.map((bg) => (
            <div 
              key={bg.id}
              className="bg-item"
              onClick={() => setSelectedBgId(bg.id)}
              style={{
                border: `3px solid ${selectedBgId === bg.id ? '#B8863B' : '#eee'}`,
                backgroundColor: selectedBgId === bg.id ? '#Fcf9f2' : 'white'
              }}
            >
              <div className="bg-preview" style={{ backgroundImage: `url('${bg.path}')` }}></div>
              
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#5C1620' }}>{bg.name}</h3>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{bg.desc}</p>
                {selectedBgId === bg.id && (
                  <span style={{ marginTop: '12px', color: '#B8863B', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>
                    ✓ Currently Active
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      {activeTab === 'qrcode' && (
      <div className="admin-card" style={{ padding: '40px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>QR Code Generator</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Target URL</label>
          <input 
            type="text" 
            value={qrUrl}
            onChange={(e) => setQrUrl(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Select Design</label>
          <select 
            value={qrDesign}
            onChange={(e) => setQrDesign(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }}
          >
            <option value="premium-dark">Premium Dark (Best for night mode)</option>
            <option value="clean-light">Clean Light (Minimalist white)</option>
            <option value="modern-accent">Modern Accent (Bold Orange)</option>
          </select>
        </div>

        <div style={{ background: '#f5f5f5', padding: '40px', borderRadius: '12px', border: '1px dashed #ccc' }}>
          <QRGenerator url={qrUrl} design={qrDesign} />
        </div>
      </div>
      )}
      
      {activeTab === 'settings' && (
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, 
        background: 'rgba(255,255,255,0.95)', 
        padding: '15px', 
        borderTop: '1px solid #ddd', 
        textAlign: 'center',
        boxShadow: '0 -4px 15px rgba(0,0,0,0.1)',
        zIndex: 1000,
        backdropFilter: 'blur(5px)'
      }}>
        <button 
          onClick={() => handleSave(selectedBgId)}
          style={{ 
            padding: '15px 50px', 
            background: '#5C1620', 
            color: 'white', 
            border: 'none', 
            borderRadius: '12px',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(92, 22, 32, 0.4)',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          💾 Save All Settings
        </button>
      </div>
      )}
      <div style={{ height: '80px' }}></div> {/* Spacer for sticky footer */}
    </div>
    </>
  );
}
