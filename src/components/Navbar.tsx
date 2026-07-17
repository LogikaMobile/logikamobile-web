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
          <TrackedLink href="/about" targetName="about" className="hover:text-orange-500 hover: transition-colors duration-300">{t('Navigation.about')}</TrackedLink>
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
