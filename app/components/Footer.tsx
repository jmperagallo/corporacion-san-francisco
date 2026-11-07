// app/components/Footer.tsx
"use client"; // <-- ESTA LÍNEA SOLUCIONA EL ERROR DE VERCEL

import Link from "next/link";
import { MapPin, Globe } from "lucide-react"; 
import { FaInstagram, FaFacebook } from "react-icons/fa"; 

export default function Footer() {
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

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-arena/20 text-center text-xs text-marfil/60">
        © {new Date().getFullYear()} Corporación San Francisco. Todos los derechos reservados.
      </div>
    </footer>
  );
}