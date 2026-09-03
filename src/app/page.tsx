"use client";
import React, { useState, useEffect } from 'react';
import HeroWrapper from '../components/HeroWrapper';
import SplashScreen from '../components/SplashScreen';

export default function Home() {
  const [showFloating, setShowFloating] = useState(false);
  const [useBakedLayout, setUseBakedLayout] = useState(false);
  const [useHybridLayout, setUseHybridLayout] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);
  const [logoSizeDesktop, setLogoSizeDesktop] = useState(280);
  const [logoSizeMobile, setLogoSizeMobile] = useState(220);
  const [showBottomNav, setShowBottomNav] = useState(false);

  useEffect(() => {
    // Ensure the page always starts at the top, fixing browsers opening halfway down
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowBottomNav(true);
      } else {
        setShowBottomNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fetch global settings
    fetch('/api/settings?t=' + new Date().getTime(), { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        setShowFloating(data.showFloating || false);
        setHideLogo(data.hideLogo || false);
        setUseBakedLayout(data.useBakedLayout || false);
        setUseHybridLayout(data.useHybridLayout || false);
        setLogoSizeDesktop(data.logoSizeDesktop || 280);
        setLogoSizeMobile(data.logoSizeMobile || 220);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <SplashScreen />
      <HeroWrapper>
        {/* Desktop Navbar */}
        <nav className="topbar desktop-only">
        {!useBakedLayout && !useHybridLayout && !hideLogo && (
          <div className="brand">
            <img src="/chicken-logo-transparent.png" alt="Chicken Extension Logo" className="huge-logo" style={{ width: `${logoSizeDesktop}px` }} />
          </div>
        )}
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Order Now</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </nav>

      <section className="hero">
        <div className="hero-grid">

          <div className="hero-content-left relative z-10 pt-4 sm:pt-8">
            <div className="mobile-main-logo-container mobile-only text-center w-full flex justify-center">
              <img src="/chicken-logo-transparent.png" alt="Chicken Extension" className="mobile-huge-logo" style={{ width: '240px', maxWidth: '100%', margin: '0 auto' }} />
            </div>
            {!useBakedLayout && (
              <div className={useHybridLayout ? "hero-text text-center hybrid-spacing" : "hero-text"}>
                <div className="light-hero-title">
                  <span className="cursive">Authentic</span>
                  <span className="mughlai">MUGHLAI</span>
                  <span className="cursive bottom">Experience</span>
                </div>

                <div className="light-tagline">
                  <div><span>KEBABS</span><span className="sep">·</span><span>TIKKAS</span><span className="sep">·</span><span>CURRIES</span><span className="sep">·</span><span>BIRYANI</span></div>
                  <div style={{ marginTop: '2px' }}><span>NORTH INDIAN</span><span className="sep">·</span><span>SHAWARMA</span></div>
                </div>
                
                <div className="order-now-heading light-heading">
                  <h2>ORDER NOW</h2>
                </div>
              </div>
            )}

            <div className="order-card light-theme-card">
              <div className="light-divider"><span>ORDER DIRECTLY</span></div>
              <div className="light-grid-2">
                <a href="https://wa.me/919315225535" target="_blank" rel="noopener" className="l-btn l-whatsapp">
                  <span className="icon"><svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></span> WHATSAPP
                </a>
                <a href="tel:+919315225535" className="l-btn l-call">
                  <span className="icon">📞</span> CALL NOW
                </a>
              </div>

              <div className="light-divider"><span>ORDER ON DELIVERY APPS</span></div>
              <div className="light-grid-3">
                <a href="https://www.swiggy.com/" target="_blank" rel="noopener" className="l-btn l-swiggy">
                  <span className="icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span> SWIGGY
                </a>
                <a href="https://www.zomato.com/" target="_blank" rel="noopener" className="l-btn l-zomato">
                  zomato
                </a>
                <a href="#" target="_blank" rel="noopener" className="l-btn l-toing">
                  <span className="toing-logo">toing</span>
                </a>
              </div>

              <div className="light-review-box relative overflow-hidden">
                <div className="star-icon relative z-10">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="#f7a81b" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div className="review-content relative z-10 w-full">
                  <h3>REVIEW US & GET DISCOUNT</h3>
                  <p>Leave a Google Review and<br/>unlock your special discount!</p>
                  <a href="https://share.google/z056pHEGQhTC9oWAE" className="review-btn">
                    REVIEW US ON GOOGLE
                    <div className="g-icon">
                      <svg width="14" height="14" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                      </svg>
                    </div>
                  </a>
                  <div className="stars">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f7a81b"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f7a81b"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f7a81b"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f7a81b"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f7a81b"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  </div>
                </div>
                
                <div className="absolute right-4 bottom-8 opacity-70 pointer-events-none">
                  <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M70,10 C85,35 65,75 25,85" stroke="#a33232" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="6,4"/>
                    <path d="M25,85 L40,85 M25,85 L30,70" stroke="#a33232" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
              </div>

              <div className="light-divider"><span>FOLLOW US</span></div>
              <div className="light-social-grid">
                <a href="https://www.instagram.com/chickenextension?igsi=MW5pdXNrbzNidXpoNw%3D%3D&utm_source=qr" className="s-link"><div className="s-icon ig"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div><span>Instagram</span></a>
                <a href="https://www.facebook.com/share/19DJDYoqse/?mibextid=wwXIfr" className="s-link"><div className="s-icon fb"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></div><span>Facebook</span></a>
                <a href="https://www.threads.com/@chickenextension?igshid=NTc4MTIwNjQ2YQ==" className="s-link"><div className="s-icon th"><svg width="32" height="32" viewBox="0 0 192 192" fill="currentColor"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/></svg></div><span>Threads</span></a>
                <a href="#" className="s-link"><div className="s-icon yt"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.58,7.2A2.71,2.71,0,0,0,19.67,5.3C17.96,4.83,12,4.83,12,4.83s-5.95,0-7.66.47A2.71,2.71,0,0,0,2.42,7.2C1.95,8.91,1.95,12,1.95,12s0,3.09.47,4.8a2.71,2.71,0,0,0,1.91,1.9c1.71.47,7.66.47,7.66.47s5.96,0,7.67-.47a2.71,2.71,0,0,0,1.91-1.9c.47-1.71.47-4.8.47-4.8s0-3.09-.47-4.8ZM10,15V9l6,3Z"/></svg></div><span>YouTube</span></a>
              </div>

              <div className="light-info-grid">
                <div className="info-item">
                  <div className="i-icon">📍</div>
                  <span>ADDRESS</span>
                </div>
                <a href="tel:+919315225535" className="info-item">
                  <div className="i-icon">📞</div>
                  <span>CALL US</span>
                </a>
                <div className="info-item">
                  <div className="i-icon">🕒</div>
                  <span>OPENING HOURS</span>
                </div>
                <div className="info-item">
                  <div className="i-icon">🛵</div>
                  <span>FREE DELIVERY</span>
                </div>
              </div>
            </div>
          </div>

          {showFloating && (
            <div className="hero-visual">
              <div className="collage-img ci-main"><img src="/images/mughlai_curry_bowl_1787676794438.png" alt="Butter chicken curry" /></div>
              <div className="collage-img ci-side"><img src="/images/mughlai_thali_1787676811246.png" alt="Mughlai thali" /></div>
              <div className="float-badge fb-top">
                <div className="photo"><img src="/images/seekh_kebab_skewers_1787676824584.png" alt="Seekh kebab skewers" /></div>
                <div><div className="t">Best Seller</div><div className="v">Seekh Kebab</div></div>
              </div>
              <div className="rating-badge">
                <span className="stars">★★★★★</span>
                <div><div className="num">4.7</div><div className="lab">Google Rating</div></div>
                <div className="v">4.9/5</div>
              </div>
            </div>
          )}

        </div>
      </section>
      </HeroWrapper>

      {/* Mobile Sticky Bottom Navbar */}
      <div className={`mobile-bottom-nav mobile-only ${showBottomNav ? 'visible' : 'hidden'}`}>
        <a href="https://wa.me/919315225535" className="nav-btn btn-wa"><div><svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor" style={{ margin: "0 auto" }}><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></div><div>WhatsApp</div></a>
        <a href="tel:+919315225535" className="nav-btn btn-call"><div>📞</div><div>Call Now</div></a>
        <a href="#" className="nav-btn btn-swiggy"><div>🛵</div><div>Swiggy</div></a>
        <a href="#" className="nav-btn btn-zomato"><div>🏍️</div><div>Zomato</div></a>
        <a href="#" className="nav-btn btn-toing"><div>🚀</div><div>Toing</div></a>
      </div>

      <div className="wrap hide-on-mobile">
        <section className="review-banner compact-review">
          <div className="review-left">
            <div className="star-badge">📍</div>
            <div className="t1">GOOGLE REVIEW &amp;<br/>GET DISCOUNT</div>
          </div>
          <div className="review-mid">Loved our food? Leave us a Google Review and unlock your special discount!</div>
          <div className="review-right">
            <a href="#" className="btn-google">🅖 Review Us ➔</a>
            <div className="stars-sm">★★★★★ <span style={{fontFamily:'var(--font-great-vibes), cursive', fontSize:'18px', color:'var(--gold)'}}>Thank you!</span></div>
          </div>
        </section>

        <section className="social-banner">
          <div className="social-title">Follow The Extension</div>
          <div className="social-row">
            <a href="#" className="social-item"><span className="social-icon ig">📷</span><span className="txt"><strong>Instagram</strong><span>Follow Us</span></span></a>
            <a href="#" className="social-item"><span className="social-icon fb">f</span><span className="txt"><strong>Facebook</strong><span>Like Our Page</span></span></a>
            <a href="#" className="social-item"><span className="social-icon th">@</span><span className="txt"><strong>Threads</strong><span>Join the Conversation</span></span></a>
          </div>
        </section>

        <section className="info-strip">
          <div className="info-item"><span className="ic">📍</span><div><div className="lbl">Address</div><div className="val">Shop No-C/F-36, Central Plaza, Sector-4, Near Madan Sweets, Greater Noida West, GB Nagar, U.P.-201318</div></div></div>
          <div className="info-item"><span className="ic">📞</span><div><div className="lbl">Call Us</div><div className="val">9315225535</div></div></div>
          <div className="info-item"><span className="ic">🕐</span><div><div className="lbl">Opening Hours</div><div className="val">11:00 AM – 11:30 PM<br/>(All Days Open)</div></div></div>
          <div className="info-item"><span className="ic">🛵</span><div><div className="lbl">Free Delivery</div><div className="val">Up to 2 KM</div></div></div>
          <div className="info-item"><span className="ic">🛍️</span><div><div className="lbl">Order Online</div><div className="val">Swiggy | Zomato | toing</div></div></div>
        </section>
      </div>

      <div className="wrap">
        <section className="signatures">
          <div>
            <div className="sig-header">
              <h2>OUR SIGNATURES</h2>
              <p>Experience the best of our kitchen</p>
            </div>
            <div className="sig-grid">
              <div className="sig-card"><img src="/kebab_platter.png" alt="Kebabs"/><div className="label">Kebabs</div></div>
              <div className="sig-card"><img src="/chicken_tikka.png" alt="Tikkas"/><div className="label">Tikkas</div></div>
              <div className="sig-card"><img src="/chicken_curry.png" alt="Curries"/><div className="label">Curries</div></div>
              <div className="sig-card"><img src="/dum_biryani.png" alt="Biryani"/><div className="label">Biryani</div></div>
            </div>
          </div>
          <div className="welcome-block">
            <div className="script">Welcome to</div>
            <h3>CHICKEN EXTENSION</h3>
            <p>A destination for authentic Mughlai flavours, where every dish is made with passion and the finest ingredients.</p>
            <a href="#" className="btn-story">Explore Our Story</a>
          </div>
        </section>
      </div>
    </>
  );
}
