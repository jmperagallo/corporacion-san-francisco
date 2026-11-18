// app/components/InstagramFeed.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InstagramFeed() {
  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    // Fondo completo: bg-cover para que llene toda la pantalla
    <section className="py-24 relative bg-[#F5F0E7] bg-[url('/instagram-bg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      
      {/* Velo sutil para que el texto resalte y las fotos de Instagram no se pierdan en la textura */}
      <div className="absolute inset-0 bg-[#F5F0E7]/60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-terracota text-sm tracking-[0.2em] uppercase font-bold bg-white/90 px-4 py-1.5 rounded-full shadow-sm">
            Síguenos
          </span>
          <h2 className="text-4xl md:text-5xl text-cafe-patrimonial mt-4 font-bold drop-shadow-md">
            Nuestro Instagram
          </h2>
        </motion.div>

        {/* Contenedor del Feed - Tamaño intermedio (max-w-5xl) */}
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
                    background: #F5F0E7; /* Color Marfil para que la cabecera de Insta se fusione */
                    border: 1px solid #D7B98A;
                    border-radius: 16px;
                    padding: 0;
                    margin: 0 auto;
                    max-width: 100%;
                    width: 100%;
                    min-width: 0;
                    box-shadow: 0 15px 35px rgba(89, 56, 47, 0.2);
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

      <style jsx>{`
        .instagram-feed-wrapper :global(iframe) {
          width: 100% !important;
          min-width: 100% !important;
          border-radius: 16px;
        }
        
        .instagram-feed-wrapper :global(.instagram-media) {
          width: 100% !important;
        }
      `}</style>
    </section>
  );
}