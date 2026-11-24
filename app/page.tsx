// app/page.tsx
import WaveDivider from "./components/WaveDivider";
import PhotoGallery from "./components/PhotoGallery";
import InstagramFeed from "./components/InstagramFeed";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-marfil min-h-screen flex items-center overflow-hidden">
        
        {/* Imagen de Fondo Rectangular */}
        <div className="absolute inset-0">
          <Image
            src="/Templo_SFB.jpg" 
            alt="Vista aérea del Templo San Francisco del Cerro Barón"
            fill
            className="object-cover object-center" 
            priority
          />
          {/* Capa oscura semitransparente */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Degradado sutil en la parte inferior para fundirse con la ola */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-cafe-patrimonial/90"></div>
        </div>

        {/* Contenido del Hero */}
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center w-full pt-24 flex flex-col items-center">
          
          {/* 1. Estilo Original (Manual de Marca) */}
          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight drop-shadow-xl">
            Corporación<br/>
            <span className="text-arena">San Francisco</span>
          </h1>

          {/* 2. Nota Manuscrita (Desplazada a la derecha) */}
          <div className="w-full max-w-lg md:max-w-xl flex justify-end mb-12 pr-4 md:pr-12">
            <span 
              className="text-3xl md:text-5xl text-marfil drop-shadow-2xl -rotate-2" 
              style={{ fontFamily: 'var(--font-great-vibes)' }}
            >
              ... del Cerro Barón
            </span>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agenda" className="bg-terracota text-white px-8 py-3 rounded-full font-semibold hover:bg-arena hover:text-cafe-patrimonial transition-all shadow-xl">
              Ver Agenda Cultural
            </Link>
            <Link href="/visitanos" className="border-2 border-marfil text-marfil px-8 py-3 rounded-full font-semibold hover:bg-marfil hover:text-cafe-patrimonial transition-all shadow-xl backdrop-blur-sm">
              Ser Voluntario
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OLA ANIMADA (Transición) */}
      <WaveDivider />

      {/* 3. GALERÍA DE FOTOS */}
      <PhotoGallery />

      {/* 4. MÓDULO DE INSTAGRAM */}
      <InstagramFeed />

      {/* 5. OLA ANIMADA (Invertida) */}
      <WaveDivider flip />

    </main>
  );
}