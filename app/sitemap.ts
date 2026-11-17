import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://corporacionsanfrancisco.cl', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://corporacionsanfrancisco.cl/la-corporacion', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://corporacionsanfrancisco.cl/patrimonio', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://corporacionsanfrancisco.cl/visitanos', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}