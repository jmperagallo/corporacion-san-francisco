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
    // Aquí agregamos la imagen de fondo (bg-[url]) y una capa oscura encima para legibilidad
    <nav className="sticky top-0 z-50 shadow-md bg-cafe-patrimonial bg-[url('/navbar-bg.jpg')] bg-cover bg-center relative">
      
      {/* Capa oscura semitransparente para asegurar que el texto blanco se lea bien */}
      <div className="absolute inset-0 bg-cafe-patrimonial/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo y Nombre */}
          <Link href="/" className="flex items-center gap-3">
            {/* Le quitamos el fondo blanco al logo porque el navbar ya es oscuro */}
            <Image 
              src="/logo.png" 
              alt="Logo Corporación San Francisco" 
              width={60} 
              height={60} 
              className="object-contain drop-shadow-md"
            />
            <span className="font-bold text-lg text-white hidden sm:block leading-tight drop-shadow-md">
              Corporación<br/>San Francisco
            </span>
          </Link>

          {/* Menú Escritorio (Textos blancos) */}
          <div className="hidden md:flex gap-8 items-center font-semibold text-white">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-arena transition-colors drop-shadow-sm">
                {link.name}
              </Link>
            ))}
            <Link href="/visitanos" className="bg-terracota text-white px-6 py-2.5 rounded-md hover:bg-white hover:text-cafe-patrimonial transition-colors shadow-lg border border-terracota/50">
              Visítanos
            </Link>
          </div>

          {/* Botón Menú Móvil (Blanco) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-arena drop-shadow-md">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden bg-cafe-patrimonial/95 backdrop-blur-md border-t border-white/10 absolute w-full z-20">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-white/10 hover:text-arena">
                {link.name}
              </Link>
            ))}
            <Link href="/visitanos" className="block px-3 py-3 mt-2 rounded-md text-base font-bold text-center text-white bg-terracota hover:bg-white hover:text-cafe-patrimonial">
              Visítanos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}