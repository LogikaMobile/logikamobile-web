import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'es',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      es: '/nosotros'
    },
    '/methodology': {
      en: '/methodology',
      es: '/metodologia'
    },
    '/services': {
      en: '/services',
      es: '/servicios'
    },
    '/lmaas': {
      en: '/lmaas',
      es: '/lmaas'
    },
    '/informationSent': {
      en: '/informationSent',
      es: '/informacionEnviada'
    }
  }
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
