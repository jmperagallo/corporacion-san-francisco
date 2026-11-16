// app/components/Footer.tsx
"use client"; 

import { useState, useEffect } from "react"; 
import Link from "next/link";
import Image from "next/image"; 
import { MapPin, Globe } from "lucide-react"; 
import { FaInstagram, FaFacebook } from "react-icons/fa"; 

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-cafe-patrimonial text-marfil py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Columna 1: Identidad */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-arena">Corporación San Francisco</h3>
          <p className="text-sm text-marfil/80 leading-relaxed">
            Raíces en Barón, proyección al mundo. Dedicados a la gestión cultural, social y educacional de nuestro patrimonio.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-arena">Contacto</h3>
          <ul className="text-sm text-marfil/80 space-y-3">
            <li className="flex items-center gap-2"><MapPin size={18} /> Blanco Viel 572 – Cerro Barón</li>
            <li className="flex items-center gap-2"><Globe size={18} /> www.corporacionsanfrancisco.cl</li>
          </ul>
        </div>

        {/* Columna 3: Redes */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-arena">Síguenos</h3>
          <p className="text-sm text-marfil/80 mb-4">Mantente al día con nuestras actividades.</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/corporacion_sanfrancisco/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-terracota transition-colors text-sm font-medium">
              <FaInstagram size={20} /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-terracota transition-colors text-sm font-medium">
              <FaFacebook size={20} /> Facebook
            </a>
          </div>
        </div>

      </div>

      {/* Copyright y Crédito de Diseño con Logo */}
      <div className="mt-12 pt-8 border-t border-arena/20 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center text-xs text-marfil/60">
        
        <span>© {year} Corporación San Francisco. Todos los derechos reservados.</span>
        
        <span className="hidden md:inline">·</span>
        
        {/* ENLACE CON EL LOGO DE IAMAKER */}
        <div className="flex items-center gap-3">
          <span>Diseño y desarrollo por</span>
          <a 
            href="https://www.iamaker.cl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group"
            title="Visitar iamaker.cl"
          >
            <Image 
              src="/Logo_IAMaker-transparente.png" // <-- Nombre exacto de tu archivo
              alt="iamaker" 
              width={120} 
              height={40} 
              // Ajusté la altura a h-7 para que se vea un poco más grande y legible.
              // SI EL LOGO ES OSCURO, descomenta la siguiente clase quitando los dos '//':
              // className="object-contain h-7 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 brightness-0 invert" 
              className="object-contain h-7 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300" 
            />
          </a>
        </div>

      </div>
    </footer>
  );
}