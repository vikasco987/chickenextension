"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-32px)] max-w-[1380px] -translate-x-1/2">
      <div className="flex h-[72px] items-center justify-between rounded-full border border-[#3A0D14]/10 bg-[#FBF1E4]/85 px-5 shadow-[0_10px_40px_rgba(58,13,20,0.08)] backdrop-blur-md md:px-7">
        
        {/* BRAND */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative flex h-[48px] items-center justify-center rounded-[12px] bg-[#1A0A0B] px-4 shadow-[0_6px_16px_rgba(26,10,11,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-105">
            {/* Icon */}
            <div className="relative mr-2.5 flex h-[28px] w-[28px] items-center justify-center overflow-hidden rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
              <img src="/images/icon.png" alt="Chicken Extension Icon" className="h-full w-full object-cover" />
            </div>
            
            {/* Text */}
            <div className="flex flex-col justify-center pt-0.5">
              <span className="font-serif text-[17.5px] font-black uppercase leading-none tracking-[1.5px] text-transparent bg-clip-text bg-gradient-to-br from-[#F5D78D] via-[#C89A4A] to-[#996D29]">
                Chicken
              </span>
              <span className="font-serif text-[12.5px] font-black uppercase leading-[1.1] tracking-[3px] text-transparent bg-clip-text bg-gradient-to-br from-[#E6C989] to-[#C89A4A]">
                Extension
              </span>
            </div>
          </div>
        </a>

        {/* NAV LINKS */}
        <div className="hidden items-center gap-[38px] md:flex">
          <NavItem label="Special" href="#special" />
          <NavItem label="Menu" href="#menu" />
          <NavItem label="Order" href="#order" />
          <NavItem label="Location" href="#location" />
        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919315225535"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[9px] rounded-full bg-gradient-to-br from-[#4ECB78] to-[#3FB765] px-[22px] py-[12px] text-[14.5px] font-semibold text-white shadow-[0_8px_20px_rgba(63,183,101,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(63,183,101,0.5)]"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">Order on WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}

function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="group relative text-[15px] font-medium text-[#3A0D14] transition-colors duration-200 hover:text-[#B5231B] pb-1"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E4572E] transition-all duration-250 group-hover:w-full" />
    </a>
  );
}
