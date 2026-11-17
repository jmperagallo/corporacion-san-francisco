// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  // 1. URL base para que las rutas de imágenes funcionen en redes sociales
  metadataBase: new URL("https://corporacionsanfrancisco.cl"), // Recuerda cambiarlo por tu dominio o link de Vercel
  
  // 2. Título con plantilla (las subpáginas heredarán el nombre de la corporación)
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

  // 5. Instrucciones para los robots de búsqueda (Google, Bing, etc.)
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

  // 6. Open Graph (Para que se vea bonito al compartir en WhatsApp, Facebook o LinkedIn)
  openGraph: {
    title: "Corporación San Francisco | Patrimonio y Comunidad",
    description: "Raíces en Barón, proyección al mundo. Gestión del patrimonio y la comunidad franciscana en Valparaíso.",
    url: "/",
    siteName: "Corporación San Francisco",
    images: [
      {
        url: "/Templo_SFB.jpg", // Asegúrate de que esta foto esté en la carpeta public
        width: 1200,
        height: 630,
        alt: "Vista aérea del Templo San Francisco del Cerro Barón",
      },
    ],
    locale: "es_CL",
    type: "website",
  },

  // 7. Twitter Card (Para cuando compartan el enlace en X/Twitter)
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
    <html lang="es">
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