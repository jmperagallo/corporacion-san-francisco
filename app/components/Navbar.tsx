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
      <nav className="relative overflow-hidden rounded-full shadow-2xl border border-white/20 px-6 py-4 flex justify-between items-center">
        
        {/* 1. Imagen de Fondo (navbar-bg.jpg) con opacidad MUY BAJA para que sea sutil */}
        <div className="absolute inset-0 bg-[url('/navbar-bg.jpg')] bg-cover bg-center opacity-30"></div>
        
        {/* 2. Capa oscura semitransparente + Desenfoque (Backdrop Blur) */}
        <div className="absolute inset-0 bg-cafe-patrimonial/40 backdrop-blur-md"></div>

        {/* 3. Contenido del Navbar */}
        <div className="relative z-10 flex justify-between items-center w-full">
          
          {/* Logo y Nombre */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white/10 p-1.5 rounded-full border border-white/20">
              <Image 
                src="/logo.png" 
                alt="Logo Corporación San Francisco" 
                width={45}
                height={45} 
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg text-white hidden sm:block leading-tight tracking-wide drop-shadow-md">
              Corporación<br/>San Francisco
            </span>
          </Link>

          {/* Menú Escritorio (Cada enlace es un botón) */}
          <div className="hidden md:flex gap-2 items-center text-white">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                // Aquí está la magia: fondo sutil, borde, padding y efecto hover
                className="px-5 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/25 hover:border-white/40 hover:text-arena transition-all duration-300 text-sm font-medium shadow-sm"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Botón Destacado Visítanos (Sólido, para que resalte) */}
            <Link 
              href="/visitanos" 
              className="bg-terracota text-white px-6 py-2.5 ml-2 rounded-full hover:bg-white hover:text-cafe-patrimonial transition-all shadow-lg border border-terracota/50 font-semibold text-sm"
            >
              Visítanos
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-arena p-1">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-cafe-patrimonial/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-base font-medium text-white hover:bg-white/20 hover:text-arena transition-colors text-center"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/visitanos" 
              className="block px-4 py-3 mt-2 rounded-full text-base font-bold text-center text-white bg-terracota hover:bg-arena hover:text-cafe-patrimonial transition-colors"
            >
              Visítanos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}