"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Flame, Leaf, Coffee } from "lucide-react";

const categories = [
  {
    id: "chicken-starters",
    title: "Chicken Starters",
    image: "/images/categories/tandoori-chicken.jpg",
    icon: <Flame size={16} fill="currentColor" />,
    badge: "MUST TRY",
    color: "from-[#E4572E] to-[#B5231B]"
  },
  {
    id: "chicken-curries",
    title: "Chicken Curries",
    image: "/images/categories/butter-chicken.jpg",
    icon: <Flame size={16} fill="currentColor" />,
    badge: "BESTSELLER",
    color: "from-[#E4572E] to-[#B5231B]"
  },
  {
    id: "mutton-specials",
    title: "Mutton Specials",
    image: "/images/categories/mutton.jpg",
    icon: <Flame size={16} fill="currentColor" />,
    color: "from-[#8B1625] to-[#4A0D1A]"
  },
  {
    id: "veg-delights",
    title: "Veg Delights",
    image: "/images/categories/paneer-tikka.jpg",
    icon: <Leaf size={16} fill="currentColor" />,
    color: "from-[#2F9E58] to-[#1F7A41]"
  },
  {
    id: "biryani-rice",
    title: "Biryani & Rice",
    image: "/images/categories/biryani.jpg",
    icon: <Flame size={16} fill="currentColor" />,
    color: "from-[#C89A4A] to-[#996D29]"
  },
  {
    id: "rolls-shawarma",
    title: "Rolls & Shawarma",
    image: "/images/categories/shawarma.jpg",
    icon: <Flame size={16} fill="currentColor" />,
    color: "from-[#E4572E] to-[#B5231B]"
  },
  {
    id: "chinese-momos",
    title: "Chinese & Momos",
    image: "/images/categories/momos.jpg",
    icon: <Leaf size={16} fill="currentColor" />,
    color: "from-[#E4572E] to-[#B5231B]"
  },
  {
    id: "breads-beverages",
    title: "Breads & Beverages",
    image: "/images/categories/dal-makhani.jpg",
    icon: <Coffee size={16} fill="currentColor" />,
    color: "from-[#C89A4A] to-[#996D29]"
  }
];

export default function CategorySection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FBF1E4] py-20 pb-28">
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#E4572E]/5 blur-[120px]" />
      
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 font-serif text-[20px] italic text-[#C89A4A]">
              Our Menu <span className="text-[24px]">🍗</span>
            </div>
            <h2 className="font-serif text-[42px] font-black uppercase leading-tight tracking-tight text-[#3A0D14] md:text-[56px]">
              Category Collection
            </h2>
          </div>

          <button className="group flex items-center gap-2 rounded-full border border-[#C89A4A] bg-transparent px-[24px] py-[12px] text-[13px] font-bold uppercase tracking-[1.5px] text-[#3A0D14] transition-all hover:bg-[#C89A4A] hover:text-white">
            View Full Menu
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Scroll Controls (Desktop only) */}
        <div className="absolute right-12 top-24 hidden items-center gap-3 lg:flex">
          <button 
            onClick={() => scroll("left")} 
            disabled={!canScrollLeft}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#3A0D14]/10 bg-white text-[#3A0D14] shadow-sm transition-all disabled:opacity-40 disabled:hover:bg-white hover:bg-[#3A0D14] hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll("right")} 
            disabled={!canScrollRight}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#3A0D14]/10 bg-white text-[#3A0D14] shadow-sm transition-all disabled:opacity-40 disabled:hover:bg-white hover:bg-[#3A0D14] hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 pt-4 lg:-mx-12 lg:px-12"
        >
          {categories.map((cat, idx) => (
            <div 
              key={cat.id} 
              className="group relative flex w-[260px] shrink-0 snap-start flex-col rounded-[24px] bg-white p-2.5 shadow-[0_12px_24px_rgba(58,13,20,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(58,13,20,0.12)] md:w-[280px]"
            >
              {/* Image Container */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-[18px] bg-[#F5EAD9]">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient for bottom text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Badge */}
                {cat.badge && (
                  <div className="absolute -left-[30px] top-[24px] z-10 w-[140px] -rotate-45 bg-[#E4572E] py-1.5 text-center text-[10px] font-black uppercase tracking-[2px] text-white shadow-md">
                    {cat.badge}
                  </div>
                )}
              </div>

              {/* Floating Icon */}
              <div className="absolute left-1/2 top-[270px] flex h-[46px] w-[46px] -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <div className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${cat.color} text-white`}>
                  {cat.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex grow flex-col items-center justify-center px-4 pb-6 pt-10 text-center">
                <h3 className="font-serif text-[22px] font-bold leading-tight text-[#3A0D14]">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
