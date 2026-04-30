"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ✅ detect active route

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Pipeline", href: "/pipeline" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Team", href: "/team" },
    { label: "Investor Relation", href: "/investor" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-22.5">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="GM Nanotherapeutics"
            width={180}
            height={60}
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[15px] font-medium transition ${
                  isActive
                    ? "text-[#324a6d]"
                    : "text-[#324a6d]/80 hover:text-[#324a6d]"
                }`}
              >
                {item.label}

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#324a6d] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#324a6d] text-2xl transition"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-125" : "max-h-0"
        }`}
      >
        <div className="bg-white px-6 py-4 flex flex-col">

          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-3 rounded-md text-sm font-medium transition ${
                  isActive
                    ? "bg-[#324a6d]/10 text-[#324a6d]" // ✅ selected bg
                    : "text-[#324a6d]/80 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

        </div>
      </div>
    </nav>
  );
}