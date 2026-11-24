// app/layout.tsx
import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google"; // <-- Importamos la fuente
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Configuramos la fuente manuscrita
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes", 
});

export const metadata: Metadata = {
  // 1. URL base para que las rutas de imágenes funcionen en redes sociales
  metadataBase: new URL("https://corporacionsanfrancisco.cl"), 
  
  // 2. Título con plantilla
  title: {
    default: "Corporación San Francisco | Patrimonio y Comunidad en Valparaíso",
    template: "%s | Corporación San Francisco",
  },
  
  // 3. Descripción atractiva para Google
  description: "Sitio oficial de la Corporación San Francisco, Valparaíso. Gestión del patrimonio de la Iglesia y Convento del Cerro Barón, cultura y comunidad franciscana.",
  
  // 4. Palabras clave de posicionamiento
  keywords: [
    "Iglesia San Francisco del Barón",
    "Cerro Barón Valparaíso",
    "Patrimonio religioso Valparaíso",
    "Corporación San Francisco",
    "Familia Franciscana",
    "Monumento Histórico Valparaíso",
    "Cultura Cerro Barón",
  ],

  // 5. Instrucciones para los robots de búsqueda
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 6. Open Graph
  openGraph: {
    title: "Corporación San Francisco | Patrimonio y Comunidad",
    description: "Raíces en Barón, proyección al mundo. Gestión del patrimonio y la comunidad franciscana en Valparaíso.",
    url: "/",
    siteName: "Corporación San Francisco",
    images: [
      {
        url: "/Templo_SFB.jpg", 
        width: 1200,
        height: 630,
        alt: "Vista aérea del Templo San Francisco del Cerro Barón",
      },
    ],
    locale: "es_CL",
    type: "website",
  },

  // 7. Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Corporación San Francisco | Patrimonio y Comunidad",
    description: "Gestión del patrimonio de la Iglesia San Francisco del Cerro Barón, Valparaíso.",
    images: ["/Templo_SFB.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Inyectamos la variable de la fuente en el HTML
    <html lang="es" className={`${greatVibes.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}