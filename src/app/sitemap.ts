import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://logikamobile.com.mx';

  const paths = [
    '',
    '/nosotros',
    '/en/about',
    '/metodologia',
    '/en/methodology',
    '/servicios',
    '/en/services',
    '/lmaas',
    '/en/lmaas'
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
