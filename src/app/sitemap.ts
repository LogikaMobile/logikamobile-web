import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://logikamobile.com.mx';

  const paths = [
    '/es',
    '/en',
    '/es/nosotros',
    '/en/about',
    '/es/metodologia',
    '/en/methodology',
    '/es/servicios',
    '/en/services',
    '/es/lmaas',
    '/en/lmaas',
    '/es/identidad',
    '/en/identity',
    '/es/manifiesto',
    '/en/manifesto',
    '/es/business-center',
    '/en/business-center',
    '/es/logikafiskal',
    '/en/logikafiskal'
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: (path === '/es' || path === '/en') ? 1 : 0.8,
  }));
}
