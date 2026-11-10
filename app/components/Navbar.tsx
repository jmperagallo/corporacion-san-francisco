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
    // 1. Contenedor principal: 'fixed' para que flote, centrado y con margen superior
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      
      {/* 2. La "Píldora" flotante: Fondo oscuro semitransparente, blur y bordes redondeados */}
      <nav className="bg-cafe-patrimonial/85 backdrop-blur-md rounded-full shadow-2xl border border-white/10 px-6 py-3 flex justify-between items-center transition-all duration-300">
        
        {/* Logo y Nombre */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-white/10 p-1.5 rounded-full">
            <Image 
              src="/logo.png" 
              alt="Logo Corporación San Francisco" 
              width={40} 
              height={40} 
              className="object-contain"
            />
          </div>
          <span className="font-bold text-sm sm:text-base text-white hidden sm:block leading-tight tracking-wide">
            Corporación<br/>San Francisco
          </span>
        </Link>

        {/* Menú Escritorio */}
        <div className="hidden md:flex gap-6 items-center font-medium text-sm text-white/90">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-arena transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/visitanos" className="bg-terracota text-white px-5 py-2 rounded-full hover:bg-arena hover:text-cafe-patrimonial transition-colors shadow-md ml-2">
            Visítanos
          </Link>
        </div>

        {/* Botón Menú Móvil */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-arena p-1">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil Desplegable (Flota justo debajo de la píldora) */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-cafe-patrimonial/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="block px-4 py-2 rounded-xl text-base font-medium text-white hover:bg-white/10 hover:text-arena transition-colors">
                {link.name}
              </Link>
            ))}
            <Link href="/visitanos" className="block px-4 py-3 mt-2 rounded-xl text-base font-bold text-center text-white bg-terracota hover:bg-arena hover:text-cafe-patrimonial transition-colors">
              Visítanos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}