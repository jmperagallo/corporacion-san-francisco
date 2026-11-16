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
    // Usamos 'pointer-events-none' para que el espacio vacío entre el círculo y la barra no bloquee los clics en la página
    <header className="fixed top-4 md:top-6 left-0 w-full px-4 md:px-8 z-50 flex justify-between items-center pointer-events-none">
      
      {/* 1. CÍRCULO DEL LOGO (Izquierda) */}
      <Link 
        href="/" 
        className="pointer-events-auto bg-[#F5F0E7]/90 backdrop-blur-md border border-[#D7B98A]/40 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300"
      >
        <Image 
          src="/logo.png" // <-- AQUÍ USAMOS EL LOGO CUADRADO
          alt="Corporación San Francisco" 
          width={60} 
          height={60} 
          className="object-contain w-12 h-12 md:w-16 md:h-16" 
          priority
        />
      </Link>

      {/* 2. BARRA DE BOTONES (Derecha - Escritorio) */}
      <nav className="pointer-events-auto hidden lg:flex bg-[#F5F0E7]/90 backdrop-blur-md border border-[#D7B98A]/40 rounded-full px-4 py-2 shadow-xl items-center gap-1.5">
        {links.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="px-5 py-2.5 rounded-full text-[#59382F] hover:bg-[#59382F] hover:text-[#F5F0E7] transition-all duration-300 text-base font-bold"
          >
            {link.name}
          </Link>
        ))}
        
        {/* Botón Destacado Visítanos */}
        <Link 
          href="/visitanos" 
          className="bg-[#A95035] text-white px-6 py-2.5 ml-2 rounded-full hover:bg-[#59382F] transition-all shadow-md font-bold text-base"
        >
          Visítanos
        </Link>
      </nav>

      {/* 3. BOTÓN MENÚ MÓVIL (Derecha - Celular) */}
      <div className="pointer-events-auto lg:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="bg-[#F5F0E7]/90 backdrop-blur-md border border-[#D7B98A]/40 rounded-full p-3 shadow-xl text-[#59382F] hover:text-[#A95035] transition-colors"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* 4. MENÚ DESPLEGABLE MÓVIL */}
      {isOpen && (
        <div className="absolute top-20 right-4 w-64 pointer-events-auto bg-[#F5F0E7]/95 backdrop-blur-xl rounded-3xl border border-[#D7B98A]/50 shadow-2xl overflow-hidden lg:hidden">
          <div className="px-3 py-4 space-y-2 flex flex-col">
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
              className="block px-4 py-3.5 mt-2 rounded-2xl text-lg font-bold text-center text-white bg-[#A95035] hover:bg-[#59382F] transition-colors shadow-md"
            >
              Visítanos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}