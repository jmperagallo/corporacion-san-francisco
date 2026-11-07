// app/components/PhotoGallery.tsx
import Link from "next/link";

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-arena/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-cafe-patrimonial mb-6 leading-tight">
              Un patrimonio que<br />
              <span className="text-terracota">renace y se proyecta</span>
            </h2>
            <p className="text-cafe-patrimonial/80 mb-8 text-lg">
              Nuestra historia está marcada por la resiliencia. Desde el Cerro Barón, cuidamos y difundimos el legado arquitectónico y espiritual de la Iglesia y Convento San Francisco.
            </p>
            <Link href="/patrimonio" className="inline-block bg-cafe-patrimonial text-marfil px-8 py-3 rounded-md font-semibold hover:bg-terracota transition-colors">
              Conoce nuestra historia
            </Link>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {/* Cuadro grande */}
            <div className="col-span-2 relative h-64 rounded-xl overflow-hidden shadow-lg bg-arena flex items-center justify-center text-cafe-patrimonial/50 font-medium">
               [Foto Principal del Templo]
            </div>
            {/* Cuadros pequeños */}
            <div className="relative h-40 rounded-xl overflow-hidden shadow-md bg-arena flex items-center justify-center text-cafe-patrimonial/50 font-medium">
               [Detalle]
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden shadow-md bg-arena flex items-center justify-center text-cafe-patrimonial/50 font-medium">
               [Comunidad]
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}