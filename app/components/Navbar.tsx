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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      
      {/* 
        NAVBAR SIMÉTRICO Y CÁLIDO:
        - Fondo Marfil con 90% de opacidad y desenfoque (efecto cristal cálido).
        - Borde muy sutil en color Arena.
      */}
      <nav className="relative overflow-hidden rounded-full shadow-lg border border-[#D7B98A]/50 px-6 py-2 md:py-3 flex justify-between items-center bg-[#F5F0E7]/90 backdrop-blur-md">
        
        {/* Contenido del Navbar */}
        <div className="relative z-10 flex justify-between items-center w-full">
          
          {/* LOGO HORIZONTAL */}
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <Image 
              src="/logohortra.png" 
              alt="Corporación San Francisco" 
              width={300} 
              height={100} 
              // Tamaño equilibrado: h-12 en móvil, h-16 en escritorio
              className="object-contain h-12 md:h-16 w-auto" 
              priority
            />
          </Link>

          {/* Menú Escritorio */}
          <div className="hidden lg:flex gap-2 items-center">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                // Botones con hover en Café Patrimonial
                className="px-4 py-2 rounded-full text-[#59382F] hover:bg-[#59382F] hover:text-[#F5F0E7] transition-all duration-300 text-base font-bold"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Botón Destacado Visítanos (Terracota) */}
            <Link 
              href="/visitanos" 
              className="bg-[#A95035] text-white px-6 py-2 ml-2 rounded-full hover:bg-[#59382F] transition-all shadow-md font-bold text-base"
            >
              Visítanos
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#59382F] hover:text-[#A95035] p-2 transition-colors">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-[#F5F0E7]/95 backdrop-blur-xl rounded-3xl border border-[#D7B98A]/50 shadow-2xl overflow-hidden">
          <div className="px-4 py-5 space-y-2">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-4 py-3 rounded-2xl text-lg font-bold text-[#59382F] hover:bg-[#59382F] hover:text-[#F5F0E7] transition-colors text-center"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/visitanos" 
              className="block px-4 py-3.5 mt-3 rounded-2xl text-lg font-bold text-center text-white bg-[#A95035] hover:bg-[#59382F] transition-colors shadow-md"
            >
              Visítanos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}