// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "La Corporación", href: "/la-corporacion" },
    { name: "Patrimonio", href: "/patrimonio" },
    { name: "Agenda", href: "/agenda" },
    { name: "Noticias", href: "/noticias" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      
      {/* La "Píldora" flotante con Fondo Cielo */}
      <nav className="relative overflow-hidden rounded-full shadow-xl border border-white/60 px-6 py-3 md:py-4 flex justify-between items-center">
        
        {/* 1. Tu imagen real de cielo */}
        <div className="absolute inset-0 bg-[url('/cielo-bg.jpg')] bg-cover bg-center"></div>
        
        {/* 2. Capa blanca/marfil para que el logo y textos resalten (Efecto Cristal) */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        {/* 3. Contenido del Navbar */}
        <div className="relative z-10 flex justify-between items-center w-full">
          
          {/* LOGO HORIZONTAL */}
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <Image 
              src="/logohortra.png" 
              alt="Corporación San Francisco" 
              width={300} 
              height={100} 
              className="object-contain h-14 md:h-20 w-auto drop-shadow-sm" 
              priority
            />
          </Link>

          {/* Menú Escritorio */}
          <div className="hidden lg:flex gap-2 items-center">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                // Botones blancos semitransparentes
                className="px-4 py-2 rounded-full bg-white/60 text-cafe-patrimonial hover:bg-cafe-patrimonial hover:text-white transition-all duration-300 text-base font-semibold border border-white/80 shadow-sm"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Botón Destacado Visítanos */}
            <Link 
              href="/visitanos" 
              className="bg-terracota text-white px-6 py-2.5 ml-2 rounded-full hover:bg-cafe-patrimonial transition-all shadow-md font-bold text-base"
            >
              Visítanos
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-cafe-patrimonial hover:text-terracota p-2 transition-colors">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-3xl border border-sky-100 shadow-2xl overflow-hidden">
          <div className="px-4 py-5 space-y-2">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-4 py-3 rounded-2xl bg-white text-lg font-bold text-cafe-patrimonial hover:bg-cafe-patrimonial hover:text-white transition-colors text-center border border-sky-50"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/visitanos" 
              className="block px-4 py-3.5 mt-3 rounded-2xl text-lg font-bold text-center text-white bg-terracota hover:bg-cafe-patrimonial transition-colors shadow-md"
            >
              Visítanos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}