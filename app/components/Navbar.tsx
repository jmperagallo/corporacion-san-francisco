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
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      
      {/* La "Píldora" flotante: Más alta, color Arena y efecto de cristal */}
      <nav className="relative overflow-hidden rounded-full shadow-2xl border border-white/40 px-6 py-5 md:py-6 flex justify-between items-center transition-all duration-300">
        
        {/* 1. Capa de color Arena semitransparente con desenfoque */}
        <div className="absolute inset-0 bg-arena/80 backdrop-blur-lg"></div>
        
        {/* 2. Textura sutil de fondo (opcional, le da un toque orgánico) */}
        <div className="absolute inset-0 bg-[url('/navbar-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>

        {/* 3. Contenido del Navbar */}
        <div className="relative z-10 flex justify-between items-center w-full">
          
          {/* LOGO HORIZONTAL (Sin fondo blanco, flotando libre) */}
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <Image 
              src="/logohortra.png" 
              alt="Corporación San Francisco" 
              width={240} 
              height={80} 
              className="object-contain h-12 md:h-16 w-auto drop-shadow-sm" // Altura aumentada
              priority
            />
          </Link>

          {/* Menú Escritorio (Botones con contraste oscuro) */}
          <div className="hidden lg:flex gap-3 items-center">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="px-5 py-2.5 rounded-full bg-white/40 border border-white/50 text-cafe-patrimonial hover:bg-white hover:shadow-md transition-all duration-300 text-base font-semibold"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Botón Destacado Visítanos */}
            <Link 
              href="/visitanos" 
              className="bg-terracota text-white px-7 py-2.5 ml-2 rounded-full hover:bg-cafe-patrimonial transition-all shadow-lg border border-terracota/50 font-bold text-base"
            >
              Visítanos
            </Link>
          </div>

          {/* Botón Menú Móvil (Ahora en color café) */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-cafe-patrimonial hover:text-terracota p-2 bg-white/40 rounded-full border border-white/50 shadow-sm transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil Desplegable (Fondo Arena con letras Café) */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-arena/95 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl overflow-hidden">
          <div className="px-4 py-5 space-y-3">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-4 py-3 rounded-full bg-white/50 border border-white/60 text-lg font-semibold text-cafe-patrimonial hover:bg-white hover:text-terracota transition-colors text-center shadow-sm"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/visitanos" 
              className="block px-4 py-3.5 mt-3 rounded-full text-lg font-bold text-center text-white bg-terracota hover:bg-cafe-patrimonial transition-colors shadow-md"
            >
              Visítanos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}