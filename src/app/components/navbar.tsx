"use client";
import Image from "next/image";
import Link from "next/link";  // Import Link from Next.js

// Updated image paths (from the public/Navbar folder)
const socialIcons = [
  { src: "/Navbar/12.png", alt: "user" },
  { src: "/Navbar/6.png", alt: "search" },
  { src: "/Navbar/7.png", alt: "cart" },
  { src: "/Navbar/8.png", alt: "mail" },
];

import { useState } from "react"; // Import useState for toggling hamburger menu

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state on hamburger click
  };

  return (
    <div className="lg:w-[1437px] lg:h-[58px] w-full h-[532px] lg:absolute lg:top-[70px]">
      <div className="absolute left-[38px] flex items-center gap-[10px]">
        <h3 className="font-Montserrat font-semibold leading-[32px] text-[24px] sm:hiddden w-[12px] h-[38] text-[#252B42]">Bandage</h3>
      </div>

      {/* Desktop Menu */}
      <div className="w-[1155px] h-[58px] absolute left-[265px] hidden lg:block">
        <div className="w-[361px] h-[25px] absolute top-[10.5px] flex gap-[20px]">
          <ul className="font-Montserrat font-semibold text-[14px] text-[#737373] gap-[15px] leading-[24px] flex justify-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Shop">Shop</Link></li>  
            <li><Link href="/About">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>
        </div>

        {/* Login / Register section */}
        <div className="w-[324px] h-[54px] absolute top-[2px] left-[832px] flex justify-between items-center">
          <div className="w-[166px] h-[54px] p-[15px] flex items-center gap-[5px]">
            <div className="w-[12px] h-[12px] mt-[6px]">
              <Image src={socialIcons[0].src} alt={socialIcons[0].alt} width={12} height={12} />
            </div>
            <span className="w-[119px] h-[24px] font-Montserrat font-semibold text-[14px] leading-[24px] text-[#23A6F0]">
              Login / Register
            </span>
          </div>

          {/* Icons section */}
          <ul className="flex gap-[15px] items-center">
            {socialIcons.slice(1).map((icon, index) => (
              <li key={index}>
                <Image src={icon.src} alt={icon.alt} width={16} height={16} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden w-full flex items-center justify-between p-4">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold leading-[32px] text-[24px]">Bandage</h3>

        {/* Hamburger Icon */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black"></div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute bottom-0 w-full bg-[#252B42] p-4 flex flex-col items-center gap-4`}
      >
        <ul className="font-Montserrat font-semibold text-[14px] text-white leading-[24px] gap-4 flex flex-col items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/pricing">Pricing</Link></li> {/* New Pricing Link */}
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="text-white font-Montserrat text-[14px]"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
}
