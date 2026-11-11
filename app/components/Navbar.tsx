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
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      
      {/* Navbar 100% Transparente (Sin fondos, ni bordes, ni desenfoques) */}
      <nav className="px-4 py-6 md:py-8 flex justify-between items-center transition-all duration-300">
        
        {/* LOGO HORIZONTAL AGRANDADO */}
        <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
          <Image 
            src="/logohortra.png" 
            alt="Corporación San Francisco" 
            width={350} // Ancho aumentado
            height={120} // Alto aumentado
            className="object-contain h-16 md:h-24 w-auto drop-shadow-2xl" // Tamaño visual grande y sombra para resaltar
            priority
          />
        </Link>

        {/* Menú Escritorio */}
        <div className="hidden lg:flex gap-4 items-center">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              // Texto blanco con sombra para que resalte sobre cualquier imagen
              className="px-4 py-2 rounded-full text-white hover:text-arena transition-all duration-300 text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Botón Destacado Visítanos */}
          <Link 
            href="/visitanos" 
            className="bg-terracota text-white px-7 py-2.5 ml-2 rounded-full hover:bg-white hover:text-cafe-patrimonial transition-all shadow-xl font-bold text-base border border-terracota/50"
          >
            Visítanos
          </Link>
        </div>

        {/* Botón Menú Móvil */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-arena p-2 drop-shadow-lg">
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil Desplegable (Este sí necesita fondo para poder leerlo) */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-cafe-patrimonial/95 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="px-4 py-5 space-y-3">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-4 py-3 rounded-full bg-white/10 text-lg font-medium text-white hover:bg-white/20 hover:text-arena transition-colors text-center"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/visitanos" 
              className="block px-4 py-3.5 mt-3 rounded-full text-lg font-bold text-center text-white bg-terracota hover:bg-arena hover:text-cafe-patrimonial transition-colors shadow-md"
            >
              Visítanos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}