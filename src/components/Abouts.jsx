import React from 'react';

export default function Abouts() {
  return (
    <div className="wrap" id="abouts">
      <section className="about-section" style={{ marginTop: '60px', marginBottom: '80px', padding: '50px 40px', background: '#fff', borderRadius: '24px', border: '1px solid rgba(184, 134, 59, 0.18)', boxShadow: '0 26px 54px rgba(92, 22, 32, 0.06)', position: 'relative', overflow: 'hidden' }}>
        
        {/* Decorative corner elements */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '100px', background: 'radial-gradient(circle at top left, rgba(184, 134, 59, 0.15), transparent 70%)' }}></div>
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle at bottom right, rgba(92, 22, 32, 0.1), transparent 70%)' }}></div>

        <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 'clamp(32px, 4.5vw, 48px)', color: '#111', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>About Us</h2>
          <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', margin: '0 auto 20px' }}></div>
          <h3 style={{ fontFamily: "var(--font-pinyon-script), 'Pinyon Script', cursive", fontSize: 'clamp(32px, 4vw, 44px)', color: 'var(--maroon-dark)', fontWeight: 400 }}>Welcome to Chicken Extension</h3>
        </div>
        
        <div style={{ maxWidth: '840px', margin: '0 auto', color: '#444', lineHeight: 1.8, fontSize: '16px', position: 'relative', zIndex: 2 }}>
          <p style={{ fontWeight: 800, fontSize: '20px', color: 'var(--maroon-dark)', textAlign: 'center', marginBottom: '25px', fontStyle: 'italic' }}>
            Where the flavours of Old Delhi meet the spirit of Noida Extension.
          </p>
          
          <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
            <p>
              Chicken Extension is a modern Indian restaurant bringing together the rich, indulgent flavours of authentic Mughlai cuisine with a fresh, contemporary dining experience.
            </p>
            <p>
              Our menu is inspired by the legendary food culture of Delhi—where smoky kebabs, perfectly marinated tikkas, slow-cooked curries and fragrant biryanis have been loved for generations. We’ve brought those timeless flavours to Noida Extension, creating a place where great food, generous portions and memorable flavours come together.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: '24px', color: '#111', fontWeight: 800, marginBottom: '16px', borderBottom: '1px solid rgba(184, 134, 59, 0.3)', paddingBottom: '8px', display: 'inline-block' }}>Our Food. Our Passion.</h4>
              <p style={{ marginBottom: '12px' }}>
                At Chicken Extension, we believe great Mughlai food starts with quality ingredients, carefully balanced spices and the right cooking technique.
              </p>
              <p style={{ marginBottom: '12px' }}>
                From our signature Chicken Kalimirch Tikka and juicy seekh kebabs to creamy Butter Chicken, rich Mughlai curries and aromatic Dum Biryani, every dish is prepared with attention to flavour and consistency.
              </p>
              <p>
                Our kitchen brings together the smoky character of the tandoor, the richness of traditional gravies and the unmistakable aroma of freshly prepared Indian spices.
              </p>
            </div>

            <div>
              <h4 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: '24px', color: '#111', fontWeight: 800, marginBottom: '16px', borderBottom: '1px solid rgba(184, 134, 59, 0.3)', paddingBottom: '8px', display: 'inline-block' }}>More Than Just Chicken</h4>
              <p style={{ marginBottom: '12px' }}>
                While chicken is at the heart of our name, there’s something for everyone.
              </p>
              <p style={{ marginBottom: '12px' }}>
                Our menu features a delicious selection of <strong style={{ color: 'var(--maroon-dark)' }}>Kebabs • Tikkas • Curries • Biryani</strong>, along with carefully chosen vegetarian favourites including Paneer Tikkas, Shahi Paneer, Kadhai Paneer and Dal Makhani.
              </p>
              <p>
                Whether you’re dropping in for a quick meal, enjoying dinner with family, meeting friends or ordering your favourite Mughlai dishes at home, Chicken Extension is all about making every meal worth remembering.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--cream)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(184, 134, 59, 0.2)', textAlign: 'center' }}>
            <h4 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: '22px', color: '#111', fontWeight: 800, marginBottom: '15px' }}>The Chicken Extension Promise</h4>
            <p style={{ fontWeight: 700, color: 'var(--maroon-dark)', fontSize: '18px', marginBottom: '15px', letterSpacing: '1px' }}>
              BOLD FLAVOURS. FRESH PREPARATION. HONEST FOOD.
            </p>
            <p style={{ marginBottom: '20px' }}>
              We want every visit to feel familiar yet exciting—a place where the food speaks for itself and every plate carries the warmth and richness of Delhi’s culinary heritage.
            </p>
            <div style={{ width: '40px', height: '2px', background: 'var(--maroon-dark)', margin: '0 auto 20px' }}></div>
            <p style={{ fontWeight: 700, color: '#111', fontSize: '17px' }}>
              Chicken Extension — Noida Extension’s destination for Mughlai flavours.
            </p>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <span style={{ fontFamily: "var(--font-pinyon-script), 'Pinyon Script', cursive", fontSize: 'clamp(36px, 5vw, 48px)', color: 'var(--gold)', textShadow: '1px 2px 4px rgba(184, 134, 59, 0.2)' }}>
              Come hungry. Leave happy.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
