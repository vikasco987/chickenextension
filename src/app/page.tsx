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
  const [logoSizeMobile, setLogoSizeMobile] = useState(160);
  const [showBottomNav, setShowBottomNav] = useState(false);

  useEffect(() => {
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
        setLogoSizeMobile(data.logoSizeMobile || 160);
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
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a href="#" className="btn-order-now">Order Now</a>
      </nav>

      {/* Mobile Navbar Removed as per request */}

      <section className="hero">
        <div className="hero-grid">

          <div className="hero-content-left relative z-10 pt-4 sm:pt-8">
            <div className="mobile-main-logo-container mobile-only">
              <img src="/chicken-logo-transparent.png" alt="Chicken Extension" className="mobile-huge-logo" style={{ height: `${logoSizeMobile}px` }} />
            </div>
            {!useBakedLayout && (
              <div className={useHybridLayout ? "hero-text text-center hybrid-spacing" : "hero-text"}>
                <h1>AUTHENTIC<br /><span className="exp-block">Mughlai Experience</span></h1>

                <div className="tagline center-tagline">
                  <div><span>Kebabs</span><span className="sep">·</span><span>Tikkas</span><span className="sep">·</span><span>Curries</span></div>
                  <div style={{ marginTop: '4px' }}><span>Biryani</span><span className="sep">·</span><span>North Indian</span><span className="sep">·</span><span>Shawarma</span></div>
                </div>
                
                <div className="order-now-heading">
                  <span className="ornament"></span>
                  <h2>ORDER NOW</h2>
                  <span className="ornament"></span>
                </div>
              </div>
            )}

            <div className={(useBakedLayout || useHybridLayout) ? "baked-order-card" : "order-card"} style={{ marginTop: useBakedLayout ? '330px' : (useHybridLayout ? '20px' : '0') }}>
              <div className="linktree-section">
                <div className="lt-box">
                  <div className="lt-badge">CLICK TO ORDER</div>
                  <div className="lt-grid-4">
                    <a href="https://www.zomato.com/" target="_blank" rel="noopener" className="lt-btn lt-zomato">
                      <span className="logo">zomato</span>
                      <small>ORDER NOW</small>
                    </a>
                    <a href="https://www.swiggy.com/" target="_blank" rel="noopener" className="lt-btn lt-swiggy">
                      <span className="logo-icon">S</span><span className="logo">SWIGGY</span>
                      <small>ORDER NOW</small>
                    </a>
                    <a href="#" target="_blank" rel="noopener" className="lt-btn lt-toing">
                      <span className="logo">toing</span>
                      <small>ORDER NOW</small>
                    </a>
                    <a href="https://wa.me/919315225535" target="_blank" rel="noopener" className="lt-btn lt-whatsapp">
                      <span className="logo-icon">💬</span>
                      <small>WHATSAPP<br/>ORDER NOW</small>
                    </a>
                  </div>
                </div>

                <a href="tel:+919315225535" className="lt-box lt-call-box">
                  <div className="icon-circle">📞</div>
                  <div className="text-col">
                    <div className="lbl">DIRECT ORDER / CALL</div>
                    <div className="num">9315225535</div>
                  </div>
                </a>

                <a href="https://share.google/z056pHEGQhTC9oWAE" className="lt-box lt-review-box">
                  <div className="icon-map">📍</div>
                  <div className="text-col">
                    <div className="lbl">REVIEW US ON</div>
                    <div className="title">GOOGLE</div>
                    <div className="sub">BUSINESS PROFILE</div>
                    <div className="tags">Reviews • Photos • Location</div>
                  </div>
                  <div className="arrow">➔</div>
                </a>

                <div className="lt-box lt-social-box">
                  <div className="lt-badge">FOLLOW US ON</div>
                  <div className="lt-grid-4">
                    <a href="https://www.instagram.com/chickenextension?igsi=MW5pdXNrbzNidXpoNw%3D%3D&utm_source=qr" className="s-btn s-ig"><span className="icon">📷</span><small>INSTAGRAM</small></a>
                    <a href="https://www.facebook.com/share/19DJDYoqse/?mibextid=wwXIfr" className="s-btn s-fb"><span className="icon">f</span><small>FACEBOOK</small></a>
                    <a href="https://www.threads.com/@chickenextension?igshid=NTc4MTIwNjQ2YQ==" className="s-btn s-th"><span className="icon">@</span><small>THREADS</small></a>
                    <a href="https://youtube.com/@chickenextension?si=QFKfcNAB70SVrdXE" className="s-btn s-yt"><span className="icon">▶</span><small>YOUTUBE</small></a>
                  </div>
                </div>

                <div className="lt-footer">
                  <div className="icon">⭐</div>
                  <div className="icon-text">
                    <span className="pin">📍</span>
                    Shop No-G/F-36, Central Plaza, Sector-4,<br/>Near Madan Sweets, Greater Noida West,<br/>GB Nagar, U.P. - 201318
                  </div>
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
        <a href="https://wa.me/919315225535" className="nav-btn btn-wa"><div>💬</div><div>WhatsApp</div></a>
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
