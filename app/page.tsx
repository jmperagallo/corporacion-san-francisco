// app/page.tsx
import WaveDivider from "./components/WaveDivider";
import PhotoGallery from "./components/PhotoGallery";
import InstagramFeed from "./components/InstagramFeed";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION (Portada principal) */}
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
          {/* Degradado para fundir con la ola */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-cafe-patrimonial/90"></div>
        </div>

        {/* Contenido del Hero */}
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center w-full pt-24 flex flex-col items-center">
          
          {/* Texto Superior */}
          <span className="text-xl md:text-2xl font-medium tracking-[0.4em] uppercase drop-shadow-lg text-marfil mb-2">
            Corporación
          </span>

          {/* Nombre Principal (Fuente Manuscrita Great Vibes) */}
          <h1 
            className="text-7xl md:text-9xl text-arena drop-shadow-2xl mb-4" 
            style={{ fontFamily: 'var(--font-great-vibes)' }}
          >
            San Francisco
          </h1>

          {/* Texto Inferior (Cerro Barón) */}
          <span className="text-2xl md:text-4xl font-medium tracking-[0.3em] uppercase drop-shadow-lg text-marfil mb-10">
            Cerro Barón
          </span>

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

      {/* 2. OLA ANIMADA */}
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