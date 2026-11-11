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
      
      {/* La "Píldora" flotante con efecto de cristal transparente */}
      <nav className="relative overflow-hidden rounded-full shadow-2xl border border-white/20 px-4 py-2 flex justify-between items-center">
        
        {/* 1. Imagen de Fondo (navbar-bg.jpg) */}
        <div className="absolute inset-0 bg-[url('/navbar-bg.jpg')] bg-cover bg-center opacity-30"></div>
        
        {/* 2. Capa oscura semitransparente + Desenfoque */}
        <div className="absolute inset-0 bg-cafe-patrimonial/40 backdrop-blur-md"></div>

        {/* 3. Contenido del Navbar */}
        <div className="relative z-10 flex justify-between items-center w-full">
          
          {/* LOGO HORIZONTAL CON FONDO BLANCO */}
          <Link href="/" className="flex items-center">
            {/* Contenedor blanco para que resalte el logo oscuro */}
            <div className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logohortra.png" 
                alt="Corporación San Francisco" 
                width={200} // Ancho para formato horizontal
                height={60} // Altura proporcional
                className="object-contain h-10 md:h-12 w-auto" // h-10/h-12 controla la altura real
                priority
              />
            </div>
          </Link>

          {/* Menú Escritorio (Botones de cristal) */}
          <div className="hidden lg:flex gap-3 items-center text-white">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/25 hover:border-white/40 hover:text-arena transition-all duration-300 text-base font-medium shadow-sm"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Botón Destacado Visítanos */}
            <Link 
              href="/visitanos" 
              className="bg-terracota text-white px-7 py-2.5 ml-2 rounded-full hover:bg-white hover:text-cafe-patrimonial transition-all shadow-lg border border-terracota/50 font-bold text-base"
            >
              Visítanos
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-arena p-2 bg-white/10 rounded-full border border-white/20">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-cafe-patrimonial/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="px-4 py-5 space-y-3">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-4 py-3 rounded-full bg-white/10 border border-white/20 text-lg font-medium text-white hover:bg-white/20 hover:text-arena transition-colors text-center"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/visitanos" 
              className="block px-4 py-3.5 mt-3 rounded-full text-lg font-bold text-center text-white bg-terracota hover:bg-arena hover:text-cafe-patrimonial transition-colors"
            >
              Visítanos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}