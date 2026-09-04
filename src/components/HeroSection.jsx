"use client";

import React from "react";
import { ArrowRight, Flame } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(100vh-76px)] overflow-hidden text-white"
      style={{
        background: `
          radial-gradient(circle at 78% 45%, rgba(122, 25, 20, 0.22), transparent 35%),
          radial-gradient(circle at 10% 80%, rgba(230, 57, 47, 0.08), transparent 30%),
          #16090B
        `
      }}
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      {/* Vibrant Coral Blobs */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-[#FF6B35]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#E63946]/8 blur-[120px]" />

      {/* Small Floating Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
        {/* Gold Star 1 */}
        <span className="absolute left-[10%] top-[25%] text-[18px] text-[#C89A4A] animate-float-slow opacity-60">✦</span>
        {/* Red Star 2 */}
        <span className="absolute left-[45%] top-[15%] text-[14px] text-[#E4572E] animate-float-fast opacity-50">✦</span>
        {/* Gold Star 3 */}
        <span className="absolute right-[35%] bottom-[20%] text-[24px] text-[#C89A4A] animate-float-slow opacity-40">✦</span>

        {/* Tiny Dots */}
        <div className="absolute left-[30%] top-[60%] h-2 w-2 rounded-full bg-[#E63946] animate-pulse-slow blur-[1px]" />
        <div className="absolute right-[15%] top-[30%] h-3 w-3 rounded-full bg-[#F59E0B] animate-pulse-slow blur-[2px]" />
        <div className="absolute left-[5%] bottom-[30%] h-2.5 w-2.5 rounded-full bg-[#C89A4A] animate-float-fast opacity-50" />
      </div>

      {/* Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 mix-blend-multiply opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto max-w-[1440px] px-6 py-20 lg:px-12 mt-[72px] z-10">
        <div className="grid min-h-[700px] items-center gap-10 lg:grid-cols-2">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="relative z-10 max-w-[680px]">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-2.5 py-2.5 pr-4.5 backdrop-blur-sm shadow-[0_4px_14px_rgba(0,0,0,0.3)]">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gradient-to-br from-[#F04432] to-[#FF7518] text-[12px] text-white">
                🔥
              </span>
              <span className="text-[12.5px] font-bold uppercase tracking-[1.5px] text-[#FFF8F2]">
                Authentic Awadhi Kitchen
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif leading-[0.98] tracking-[-0.5px]">
              <span className="mb-[6px] block text-[16px] font-bold uppercase tracking-[3px] text-[#D8C4BE]">
                The Ultimate
              </span>
              <span
                className="block text-[clamp(64px,7.5vw,110px)] font-black text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #F04432 0%, #FF7518 100%)' }}
              >
                CHICKEN
              </span>
              <span className="block text-[clamp(40px,4.6vw,64px)] font-extrabold text-[#FFF8F2]">
                Experience
              </span>
            </h1>

            {/* Divider */}
            <div className="relative my-[26px] h-[3px] w-[120px] bg-gradient-to-r from-[#C89A4A] to-transparent">
              <span className="absolute -top-[9px] left-0 text-[16px] text-[#C89A4A]">✦</span>
            </div>

            {/* Description */}
            <p className="mb-[34px] max-w-[480px] text-[17.5px] leading-[1.65] text-[#D8C4BE]">
              Rich Awadhi flavours. Smoky kebabs. Juicy tikkas.
              Fragrant biryani. Every dish is crafted with passion
              and served with pride.
            </p>

            {/* =====================================================
                INFO PILLS
            ====================================================== */}
            <div className="mb-[38px] flex flex-wrap gap-[14px]">
              <div className="flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 backdrop-blur-sm px-2.5 py-2.5 pr-4.5 text-[14px] font-semibold text-[#FFF8F2] shadow-[0_4px_14px_rgba(0,0,0,0.3)]">
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gradient-to-br from-[#F04432] to-[#FF7518] text-[14px] text-white">🔥</span>
                Freshly grilled
              </div>
              <div className="flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 backdrop-blur-sm px-2.5 py-2.5 pr-4.5 text-[14px] font-semibold text-[#FFF8F2] shadow-[0_4px_14px_rgba(0,0,0,0.3)]">
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#39A96B] text-[14px] text-white">🛵</span>
                25–35 min
              </div>
              <div className="flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 backdrop-blur-sm px-2.5 py-2.5 pr-4.5 text-[14px] font-semibold text-[#FFF8F2] shadow-[0_4px_14px_rgba(0,0,0,0.3)]">
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#F5B942] text-[14px] text-[#16090B]">⭐</span>
                4.6 rating
              </div>
            </div>

            {/* =====================================================
                BUTTONS
            ====================================================== */}
            <div className="flex flex-wrap gap-4">
              {/* Primary */}
              <button
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2.5 rounded-[14px] bg-gradient-to-br from-[#4A1620] to-[#2A080F] px-[30px] py-[17px] text-[15.5px] font-semibold text-white shadow-[0_10px_24px_rgba(42,8,15,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(42,8,15,0.45)]"
              >
                View Full Menu
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary */}
              <button
                onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 rounded-[14px] border-[1.5px] border-[#F5B942]/50 bg-white/5 backdrop-blur-sm px-[28px] py-[17px] text-[15.5px] font-semibold text-[#FFF8F2] shadow-[0_6px_16px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-1 hover:border-[#F5B942]"
              >
                <span className="text-[18px]">🛵</span> Order Online
              </button>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}
          <div className="relative mx-auto w-full max-w-[720px]">
            {/* Image Glow */}
            <div className="absolute inset-[-40px] z-[-1] blur-[30px] bg-[radial-gradient(circle_at_60%_40%,rgba(228,87,46,0.35),transparent_60%)]" />

            {/* Main image wrap */}
            <div className="relative overflow-hidden rounded-[200px_40px_40px_200px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6),0_0_0_3px_rgba(255,255,255,0.12),0_0_0_6px_rgba(240,68,50,0.2)] aspect-[4/4.3]">
              <img
                src="/images/chicken-hero.jpg"
                alt="Grilled Chicken Kebab"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            {/* =====================================================
                TODAY SPECIAL
            ====================================================== */}
            <div className="absolute left-[-20px] top-[46px] z-20 max-w-[200px] rotate-[-3deg] scale-90 origin-bottom-left rounded-[18px] bg-gradient-to-br from-[#E4572E] to-[#B5231B] px-[22px] py-[16px] text-white shadow-[0_16px_30px_rgba(180,35,27,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] animate-bob">
              <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[1.5px] opacity-90">
                <Flame size={14} fill="currentColor" />
                Today&apos;s Special
              </div>
              <div className="mb-1 font-serif text-[20px] font-bold leading-tight">
                Signature Chicken Kebab
              </div>
              <div className="text-[12px] opacity-85">
                Smoky • Juicy • Signature
              </div>
            </div>

            {/* =====================================================
                SIGNATURE TAG
            ====================================================== */}
            <div className="absolute bottom-[130px] left-[-30px] z-20 flex items-center gap-3 rounded-[16px] bg-white px-5 py-[14px] shadow-[0_14px_28px_rgba(58,13,20,0.18)] animate-bob" style={{ animationDelay: '1s' }}>
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#3A0D14] text-[18px] text-[#C89A4A] shadow-[0_4px_10px_rgba(58,13,20,0.25)]">
                ✦
              </div>
              <div>
                <strong className="block text-[14px] font-black uppercase tracking-[1px] text-[#3A0D14]">
                  Signature
                </strong>
                <span className="text-[11px] font-bold uppercase tracking-[1px] text-[#8A7466]">
                  Awadhi Recipe
                </span>
              </div>
            </div>

            {/* =====================================================
                ROYAL AWADHI SEAL
            ====================================================== */}
            <div className="absolute bottom-[-22px] right-[20px] z-20 flex h-[110px] w-[110px] flex-col items-center justify-center rounded-full border-[2px] border-dashed border-[#3A0D14]/25 bg-gradient-to-br from-[#E6C989] to-[#C89A4A] text-center text-[#2A080F] shadow-[0_16px_30px_rgba(200,154,74,0.45),0_0_0_6px_#fff] animate-bob" style={{ animationDelay: '2s' }}>
              <div className="mb-0.5 text-[20px]">👑</div>
              <div className="text-[8px] font-bold uppercase tracking-[1px]">
                Since Day One
              </div>
              <div className="font-serif text-[13px] font-bold leading-[1.1]">
                Royal<br />Awadhi
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
