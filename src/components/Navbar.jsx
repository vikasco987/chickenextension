"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="relative z-50 w-full flex justify-center pt-4 sm:pt-6 pb-4 md:pb-8 desktop-only">
      <div className="w-full xl:max-w-[1260px] lg:max-w-[1000px] md:max-w-[900px] max-w-auto
       flex items-center justify-between px-8 md:px-12 lg:px-16 xl:px-20">

        {/* BRAND LOGO */}
        <a href="#" className="group flex items-center transition-transform duration-300 hover:scale-105 shrink-0 z-10">
          <div className="flex items-center justify-center w-[120px] xl:w-[160px]">
            <img src="/chicken-logo-transparent.png" alt="Chicken Extension Logo" style={{ width: '100%' }} className="h-auto object-contain" />
          </div>
        </a>

        {/* NAV LINKS */}
        <div className="hidden items-center gap-[24px] lg:gap-[32px] xl:gap-[38px] md:flex">
          <NavItem label="Home" href="#home" />
          <NavItem label="Order Now" href="#order-now" />
          <NavItem label="Menu" href="#menu" />
          <NavItem label="Abouts" href="#abouts" />
          <NavItem label="Contact" href="#contact" />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ label, href }) {
  return (
    <a
      href={href}
      className="group relative text-[14px] font-bold text-[#F7ECD9] uppercase tracking-[1px] transition-colors duration-200 hover:text-[#B8863B] pb-1.5"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B8863B] transition-all duration-250 group-hover:w-full" />
    </a>
  );
}
