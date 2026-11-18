// app/components/InstagramFeed.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InstagramFeed() {
  useEffect(() => {
    // 1. Cargar el script oficial de Instagram si no existe
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      // Si el script ya existe, procesamos los embeds de nuevo
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    // 1. bg-no-repeat evita que la imagen se duplique
    // 2. bg-cover la estira para cubrir todo (si quieres ver el marco completo, cambia bg-cover por bg-contain)
    // 3. Quitamos bg-fixed para que no haya desplazamientos raros
    <section className="py-20 bg-[url('/instagram-bg.jpg')] bg-cover bg-center bg-no-repeat relative overflow-hidden bg-marfil">
      
      {/* Velo sutil para que el texto resalte sobre la textura */}
      <div className="absolute inset-0 bg-marfil/60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-terracota text-sm tracking-[0.2em] uppercase font-bold bg-white/70 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
            Síguenos
          </span>
          <h2 className="text-4xl md:text-5xl text-cafe-patrimonial mt-4 font-bold drop-shadow-sm">
            Nuestro Instagram
          </h2>
          <p className="text-cafe-patrimonial/90 mt-3 max-w-md mx-auto text-lg font-semibold drop-shadow-sm">
            Lo que estamos creando en tiempo real
          </p>
        </motion.div>

        {/* Contenedor del Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <div
            className="w-full max-w-5xl instagram-feed-wrapper"
            dangerouslySetInnerHTML={{
              __html: `
                <blockquote 
                  class="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/corporacion_sanfrancisco/" 
                  data-instgrm-version="14" 
                  style="
                    background: #ffffff; 
                    border: none;
                    border-radius: 16px;
                    padding: 0;
                    margin: 0 auto;
                    max-width: 100%;
                    width: 100%;
                    min-width: 0;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                  "
                >
                </blockquote>
              `,
            }}
          />
        </motion.div>

        {/* Botón */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="https://www.instagram.com/corporacion_sanfrancisco/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-terracota text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-cafe-patrimonial transition-all shadow-xl hover:scale-105"
          >
            Ver más en Instagram →
          </Link>
        </motion.div>
      </div>

      {/* CSS CRÍTICO: Forzar a Instagram a ser ancho y quitar cabecera */}
      <style jsx>{`
        .instagram-feed-wrapper :global(iframe) {
          width: 100% !important;
          min-width: 100% !important;
          border-radius: 16px;
        }
        
        .instagram-feed-wrapper :global(.instagram-media) {
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          width: 100% !important;
        }

        .instagram-feed-wrapper :global(.instagram-media) > div > div:first-child {
          display: none !important;
        }
      `}</style>
    </section>
  );
}