"use client";
import { Link } from '@/i18n/routing';
import TrackedLink from '@/components/TrackedLink';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900/50">
      <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo Text */}
          <Link id="nav-logo" href="/" className="flex items-center gap-2 font-extrabold text-3xl md:text-4xl tracking-widest text-[#7B2CBF] " aria-label="LogikaMobile Home">
            LOGIKA<span className="text-orange-500 ">MOBILE</span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-base font-bold uppercase tracking-widest text-zinc-400">
          <div className="relative group">
            <span className="cursor-pointer hover:text-orange-500 transition-colors duration-300 py-4 flex items-center gap-1">
              {t('Navigation.about')}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-180">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            <div className="absolute top-full left-0 mt-0 w-56 bg-black/95 backdrop-blur-md border border-zinc-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden flex flex-col z-50">
              <TrackedLink href="/manifiesto" targetName="nav_manifiesto" className="px-5 py-3 hover:bg-zinc-900 hover:text-orange-500 transition-colors duration-200">{t('Navigation.manifesto')}</TrackedLink>
              <TrackedLink href="/identidad" targetName="nav_identidad" className="px-5 py-3 hover:bg-zinc-900 hover:text-orange-500 transition-colors duration-200 border-t border-zinc-800/50">{t('Navigation.identity')}</TrackedLink>
              <TrackedLink href="/about" targetName="nav_vision" className="px-5 py-3 hover:bg-zinc-900 hover:text-orange-500 transition-colors duration-200 border-t border-zinc-800/50">{t('Navigation.vision')}</TrackedLink>
            </div>
          </div>
          <TrackedLink href="/methodology" targetName="workflow" className="hover:text-orange-500 hover: transition-colors duration-300">{t('Navigation.workflow')}</TrackedLink>
          <TrackedLink href="/services" targetName="services" className="hover:text-orange-500 hover: transition-colors duration-300">{t('Navigation.services')}</TrackedLink>
          <TrackedLink href="/#contact" targetName="contact" className="hover:text-orange-500 hover: transition-colors duration-300">{t('Navigation.contact')}</TrackedLink>
        </nav>

        {/* Mobile Menu Icon */}
        <button id="mobile-menu-btn" className="md:hidden text-zinc-400 hover:text-[#7B2CBF] hover:" aria-label={t('Navigation.open_menu')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
