"use client";

import React, { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import * as htmlToImage from 'html-to-image';
import { Download } from 'lucide-react';

type DesignType = 'premium-dark' | 'clean-light' | 'modern-accent';

interface QRGeneratorProps {
  url: string;
  design: DesignType;
}

export default function QRGenerator({ url, design }: QRGeneratorProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await htmlToImage.toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 });
      const link = document.createElement('a');
      link.download = `chicken-extension-qr-${design}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
      alert('Failed to generate image. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        ref={cardRef} 
        className={`qr-card-container ${design}`}
        style={{
          fontFamily: "'Work Sans', sans-serif",
          padding: '40px',
          background: design === 'premium-dark' ? '#0e0906' : design === 'clean-light' ? '#f8f4f0' : '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {design === 'premium-dark' && <PremiumDarkCard url={url} />}
        {design === 'clean-light' && <CleanLightCard url={url} />}
        {design === 'modern-accent' && <ModernAccentCard url={url} />}
      </div>

      <button 
        onClick={handleDownload}
        className="mt-6 flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold transition-colors"
      >
        <Download size={20} />
        Download QR Code
      </button>
    </div>
  );
}

// --- DESIGNS ---

function PremiumDarkCard({ url }: { url: string }) {
  return (
    <div style={{
      width: '620px',
      background: 'linear-gradient(180deg, #1c130d 0%, #140d09 55%, #0f0906 100%)',
      borderRadius: '28px',
      padding: '56px 48px 44px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 40px 80px rgba(0,0,0,0.55)'
    }}>
      <div style={{
        position: 'absolute', top: '-180px', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '500px',
        background: 'radial-gradient(circle, rgba(226,96,31,0.35) 0%, rgba(226,96,31,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        fontWeight: 600, fontSize: '13px', letterSpacing: '0.14em', color: '#d9a441',
        textAlign: 'center', position: 'relative', zIndex: 1, lineHeight: 1.6
      }}>
        KEBABS &nbsp;·&nbsp; TIKKAS &nbsp;·&nbsp; CURRIES <br /> 
        BIRYANI &nbsp;·&nbsp; NORTH INDIAN &nbsp;·&nbsp; SHAWARMA
      </div>
      
      <h1 style={{
        fontFamily: "'Fraunces', serif", fontWeight: 900, fontStyle: 'italic',
        fontSize: '58px', lineHeight: 1.02, textAlign: 'center', color: '#f6ece0',
        marginTop: '10px', position: 'relative', zIndex: 1
      }}>Chicken<span style={{
        display: 'block', fontSize: '30px', fontStyle: 'normal', fontWeight: 700,
        color: '#e2601f', letterSpacing: '0.01em', marginTop: '4px'
      }}>Extension</span></h1>
      
      <div style={{
        textAlign: 'center', color: '#cbb9a6', fontSize: '16px', fontWeight: 400,
        marginTop: '14px', position: 'relative', zIndex: 1
      }}>Awadhi flavours, straight from our tandoor</div>

      <div style={{
        width: '100%', height: '3px',
        background: 'linear-gradient(90deg, transparent, #d9a441 20%, #e2601f 50%, #a8331f 80%, transparent)',
        margin: '26px 0 34px', position: 'relative', zIndex: 1
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', margin: '8px 0 6px' }}>
        <div style={{
          background: '#f6ece0', padding: '22px', borderRadius: '20px',
          boxShadow: '0 0 0 1px rgba(217,164,65,0.4), 0 20px 45px rgba(0,0,0,0.45)'
        }}>
          <QRCodeSVG 
            value={url} 
            size={260} 
            bgColor="#f6ece0" 
            fgColor="#1c130d" 
            level="H" 
            imageSettings={{
              src: "/chicken-logo.png",
              x: undefined,
              y: undefined,
              height: 48,
              width: 48,
              excavate: true,
            }}
          />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '22px', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 700, fontSize: '22px', color: '#f6ece0' }}>
          Scan to explore our menu
        </div>
        <div style={{ fontSize: '14px', color: '#cbb9a6', marginTop: '4px' }}>Order online in under a minute</div>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
        marginTop: '34px', paddingTop: '26px', borderTop: '1px solid rgba(217,164,65,0.18)',
        position: 'relative', zIndex: 1
      }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 600, fontSize: '18px', color: '#d9a441' }}>
          Thank you for dining with us
        </span>
        <span style={{ color: '#e2601f', fontSize: '18px' }}>&#10084;</span>
      </div>
    </div>
  );
}

function CleanLightCard({ url }: { url: string }) {
  return (
    <div style={{
      width: '620px',
      background: '#ffffff',
      borderRadius: '28px',
      padding: '56px 48px 44px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 40px 80px rgba(0,0,0,0.08)'
    }}>
      <div style={{
        fontWeight: 600, fontSize: '13px', letterSpacing: '0.14em', color: '#a8331f',
        textAlign: 'center', position: 'relative', zIndex: 1
      }}>AUTHENTIC MUGHLAI EXPERIENCE</div>
      
      <h1 style={{
        fontFamily: "'Fraunces', serif", fontWeight: 900,
        fontSize: '54px', lineHeight: 1.02, textAlign: 'center', color: '#1c130d',
        marginTop: '10px', position: 'relative', zIndex: 1
      }}>Chicken<span style={{
        display: 'block', fontSize: '28px', fontWeight: 700,
        color: '#e2601f', letterSpacing: '0.01em', marginTop: '4px'
      }}>Extension</span></h1>
      
      <div style={{
        width: '100px', height: '4px',
        background: '#e2601f',
        margin: '26px auto 34px', borderRadius: '4px'
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', margin: '8px 0 6px' }}>
        <div style={{
          background: '#ffffff', padding: '22px', borderRadius: '20px',
          boxShadow: '0 0 0 1px rgba(0,0,0,0.05), 0 15px 35px rgba(0,0,0,0.05)'
        }}>
          <QRCodeSVG 
            value={url} 
            size={260} 
            bgColor="#ffffff" 
            fgColor="#1c130d" 
            level="H" 
            imageSettings={{
              src: "/chicken-logo.png",
              x: undefined,
              y: undefined,
              height: 48,
              width: 48,
              excavate: true,
            }}
          />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '22px', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 700, fontSize: '22px', color: '#1c130d' }}>
          Scan to Order
        </div>
        <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>View menu & place order instantly</div>
      </div>
    </div>
  );
}

function ModernAccentCard({ url }: { url: string }) {
  return (
    <div style={{
      width: '620px',
      background: '#e2601f',
      borderRadius: '28px',
      padding: '56px 48px 44px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 40px 80px rgba(226,96,31,0.3)'
    }}>
      <h1 style={{
        fontFamily: "'Fraunces', serif", fontWeight: 900,
        fontSize: '54px', lineHeight: 1.02, textAlign: 'center', color: '#ffffff',
        marginTop: '10px', position: 'relative', zIndex: 1
      }}>Chicken<span style={{
        display: 'block', fontSize: '28px', fontWeight: 700,
        color: '#1c130d', letterSpacing: '0.01em', marginTop: '4px'
      }}>Extension</span></h1>
      
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', margin: '34px 0' }}>
        <div style={{
          background: '#ffffff', padding: '22px', borderRadius: '20px',
          boxShadow: '0 20px 45px rgba(0,0,0,0.2)'
        }}>
          <QRCodeSVG 
            value={url} 
            size={260} 
            bgColor="#ffffff" 
            fgColor="#1c130d" 
            level="H" 
            imageSettings={{
              src: "/chicken-logo.png",
              x: undefined,
              y: undefined,
              height: 48,
              width: 48,
              excavate: true,
            }}
          />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '22px', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '26px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Scan For Menu
        </div>
        <div style={{
          width: '60px', height: '4px',
          background: '#1c130d',
          margin: '16px auto', borderRadius: '4px'
        }} />
        <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Delicious food is just a scan away</div>
      </div>
    </div>
  );
}
