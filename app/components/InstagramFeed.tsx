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
    // Agregamos la imagen de fondo aquí (bg-[url])
    <section className="py-16 md:py-24 bg-[url('/instagram-bg.jpg')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
      
      {/* Capa opcional: Un velo blanco muy sutil para que el texto resalte más sobre la textura */}
      <div className="absolute inset-0 bg-marfil/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
          <h2 className="text-3xl md:text-5xl text-cafe-patrimonial mt-2 font-bold drop-shadow-sm">
            Nuestro Instagram
          </h2>
          <p className="text-cafe-patrimonial/80 mt-4 max-w-md mx-auto text-lg font-medium">
            Lo que estamos creando en tiempo real
          </p>
        </motion.div>

        {/* Contenedor del Feed de Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <div
            className="w-full max-w-4xl instagram-feed-wrapper"
            dangerouslySetInnerHTML={{
              __html: `
                <blockquote 
                  class="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/corporacion_sanfrancisco/" 
                  data-instgrm-version="14" 
                  style="
                    background: transparent; 
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
            className="inline-block bg-marfil/80 backdrop-blur-sm border-2 border-terracota text-terracota px-8 py-3 rounded-full text-sm font-bold hover:bg-terracota hover:text-marfil transition-all shadow-md"
          >
            Ver más en Instagram →
          </Link>
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* CSS CRÍTICO: Fondo transparente para ver la imagen */}
      {/* ========================================= */}
      <style jsx>{`
        /* Hacemos que el fondo del iframe sea transparente */
        .instagram-feed-wrapper :global(.instagram-media) {
          background: transparent !important;
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
        
        /* Hace que cada foto sea responsiva y le da bordes redondeados */
        .instagram-feed-wrapper :global(.instagram-media) img {
          width: 100% !important;
          height: auto !important;
          border-radius: 12px;
        }
      `}</style>
    </section>
  );
}