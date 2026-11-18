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
    <section className="py-24 relative bg-[#F5F0E7] bg-[url('/instagram-bg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      
      <div className="absolute inset-0 bg-[#F5F0E7]/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-terracota text-sm tracking-[0.2em] uppercase font-bold bg-white/90 px-4 py-1.5 rounded-full shadow-sm">
            Síguenos
          </span>
          <h2 className="text-4xl md:text-5xl text-cafe-patrimonial mt-4 font-bold drop-shadow-md">
            Nuestro Instagram
          </h2>
        </motion.div>

        {/* Aquí está el cambio: Contenedor blanco intencional con sombra y rotación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <div className="bg-white p-3 pb-8 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] rotate-1 hover:rotate-0 transition-transform duration-500 w-full max-w-5xl border border-arena/30">
            {/* Cinta adhesiva simulada (opcional) */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/60 backdrop-blur-sm -rotate-2 shadow-sm z-20"></div>

            <div
              className="w-full instagram-feed-wrapper overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: `
                  <blockquote 
                    class="instagram-media" 
                    data-instgrm-permalink="https://www.instagram.com/corporacion_sanfrancisco/" 
                    data-instgrm-version="14" 
                    style="
                      background: #ffffff; 
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
          </div>
        </motion.div>

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
        }
      `}</style>
    </section>
  );
}