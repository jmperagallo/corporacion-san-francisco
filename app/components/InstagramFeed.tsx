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
    <section className="py-16 md:py-24 bg-marfil relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-terracota text-sm tracking-[0.2em] uppercase font-bold">
            Síguenos
          </span>
          <h2 className="text-3xl md:text-5xl text-cafe-patrimonial mt-2 font-bold">
            Nuestro Instagram
          </h2>
          <p className="text-cafe-patrimonial/70 mt-4 max-w-md mx-auto text-lg">
            Lo que estamos creando en tiempo real
          </p>
        </motion.div>

        {/* Contenedor del Feed de Instagram (Ancho Completo) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <div
            className="w-full instagram-feed-wrapper"
            dangerouslySetInnerHTML={{
              __html: `
                <blockquote 
                  class="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/corporacion_sanfrancisco/" 
                  data-instgrm-version="14" 
                  style="
                    background: #F5F0E7; 
                    border: none;
                    padding: 0;
                    margin: 0 auto;
                    max-width: 100%;
                    width: 100%;
                    min-width: 0;
                    box-shadow: none;
                  "
                >
                </blockquote>
              `,
            }}
          />
        </motion.div>

        {/* Botón "Ver más" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 md:mt-14"
        >
          <Link
            href="https://www.instagram.com/corporacion_sanfrancisco/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-terracota text-terracota px-8 py-3 rounded-full text-sm font-bold hover:bg-terracota hover:text-marfil transition-colors"
          >
            Ver más en Instagram →
          </Link>
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* CSS CRÍTICO: Oculta la cabecera y hace que el feed ocupe todo el ancho */}
      {/* ========================================= */}
      <style jsx>{`
        /* Quita el fondo blanco y bordes por defecto de Instagram */
        .instagram-feed-wrapper :global(.instagram-media) {
          background: #F5F0E7 !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
        }
        
        /* Oculta la cabecera (foto de perfil, nombre, seguidores) */
        .instagram-feed-wrapper :global(.instagram-media) > div:first-child {
          display: none !important;
        }
        
        /* Oculta el pie de página (botón de me gusta, comentarios) */
        .instagram-feed-wrapper :global(.instagram-media) > div:last-child {
          display: none !important;
        }
        
        /* Fuerza a la cuadrícula de fotos a ocupar el 100% del ancho */
        .instagram-feed-wrapper :global(.instagram-media) > div:nth-child(2) {
          width: 100% !important;
          max-width: 100% !important;
        }
        
        /* Hace que cada foto sea responsiva */
        .instagram-feed-wrapper :global(.instagram-media) img {
          width: 100% !important;
          height: auto !important;
        }
      `}</style>
    </section>
  );
}