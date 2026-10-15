"use client";
import { useState } from 'react';
import { Link } from '@/i18n/routing';
import TrackedLink from '@/components/TrackedLink';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo Text */}
          <Link id="nav-logo" href="/" className="inline-block font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-widest text-[#7B2CBF] shrink-0" aria-label="LogikaMobile Home">
            LOGIKA<span className="text-orange-500">MOBILE</span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-bold uppercase tracking-wider text-zinc-400 whitespace-nowrap">
          <div className="relative group shrink-0">
            <span className="cursor-pointer hover:text-orange-500 transition-colors duration-300 py-4 flex items-center gap-1 whitespace-nowrap">
              {t('Navigation.about')}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-180">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            <div className="absolute top-full left-0 mt-0 w-56 bg-black/95 backdrop-blur-md border border-zinc-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden flex flex-col z-50">
              <TrackedLink href="/manifiesto" targetName="nav_manifiesto" className="px-5 py-3 hover:bg-zinc-900 hover:text-orange-500 transition-colors duration-200">{t('Navigation.manifesto')}</TrackedLink>
              <TrackedLink href="/identidad" targetName="nav_identidad" className="px-5 py-3 hover:bg-zinc-900 hover:text-orange-500 transition-colors duration-200 border-t border-zinc-800/50">{t('Navigation.identity')}</TrackedLink>
              <TrackedLink href="/about" targetName="nav_vision" className="px-5 py-3 hover:bg-zinc-900 hover:text-orange-500 transition-colors duration-200 border-t border-zinc-800/50">{t('Navigation.vision')}</TrackedLink>
            </div>
          </div>
          <TrackedLink href="/methodology" targetName="workflow" className="hover:text-orange-500 transition-colors duration-300 whitespace-nowrap">{t('Navigation.workflow')}</TrackedLink>
          <TrackedLink href="/services" targetName="services" className="hover:text-orange-500 transition-colors duration-300 whitespace-nowrap">{t('Navigation.services')}</TrackedLink>

          {/* Productos Dropdown */}
          <div className="relative group shrink-0">
            <span className="cursor-pointer hover:text-orange-500 transition-colors duration-300 py-4 flex items-center gap-1.5 whitespace-nowrap">
              {t('Navigation.products')}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-180">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-black/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden flex flex-col z-50 divide-y divide-zinc-900">
              <TrackedLink 
                href="/logikafiskal" 
                targetName="nav_dropdown_logikafiskal" 
                className="p-4 hover:bg-zinc-900/80 transition-colors flex flex-col group/item"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white group-hover/item:text-orange-400 transition-colors">
                    Logika<span className="text-orange-500">Fiskal</span>
                  </span>
                  <span className="text-[10px] font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30 px-1.5 py-0.5 rounded tracking-normal">
                    {t('Navigation.badge_new')}
                  </span>
                </div>
                <span className="text-xs text-zinc-400 font-normal normal-case leading-relaxed">
                  {t('Navigation.logikafiskal_desc')}
                </span>
              </TrackedLink>

              <TrackedLink 
                href="/sekurita" 
                targetName="nav_dropdown_sekurita" 
                className="p-4 hover:bg-zinc-900/80 transition-colors flex flex-col group/item"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white group-hover/item:text-cyan-400 transition-colors">
                    SeKurita
                  </span>
                  <span className="text-[10px] font-mono bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 px-1.5 py-0.5 rounded tracking-normal">
                    ISO 27001
                  </span>
                </div>
                <span className="text-xs text-zinc-400 font-normal normal-case leading-relaxed">
                  {t('Navigation.sekurita_desc')}
                </span>
              </TrackedLink>

              <TrackedLink 
                href="/business-center" 
                targetName="nav_dropdown_portal" 
                className="p-4 hover:bg-zinc-900/80 transition-colors flex flex-col group/item"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white group-hover/item:text-purple-400 transition-colors">
                    Business Center
                  </span>
                  <span className="text-[10px] font-mono bg-purple-500/15 text-purple-400 border border-purple-500/30 px-1.5 py-0.5 rounded tracking-normal">
                    B2B
                  </span>
                </div>
                <span className="text-xs text-zinc-400 font-normal normal-case leading-relaxed">
                  {t('Navigation.portal_desc')}
                </span>
              </TrackedLink>
            </div>
          </div>

          <TrackedLink href="/#contact" targetName="contact" className="hover:text-orange-500 transition-colors duration-300 whitespace-nowrap">{t('Navigation.contact')}</TrackedLink>
        </nav>

        {/* Mobile Menu Icon */}
        <button 
          id="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-zinc-400 hover:text-[#7B2CBF] focus:outline-none" 
          aria-label={t('Navigation.open_menu')}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-900 bg-black/95 backdrop-blur-xl px-6 py-8 flex flex-col gap-6 text-base font-bold uppercase tracking-widest text-zinc-300">
          {/* Productos Section in Mobile */}
          <div className="border-b border-zinc-900 pb-4">
            <span className="text-xs font-mono font-bold text-zinc-500 tracking-widest uppercase block mb-3">
              {t('Navigation.products')}
            </span>
            <div className="flex flex-col gap-3 pl-2">
              <TrackedLink href="/logikafiskal" targetName="nav_mobile_logikafiskal" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-orange-400 hover:text-orange-300 py-1">
                <span>LogikaFiskal</span>
                <span className="text-[10px] font-mono bg-orange-500/20 text-orange-300 border border-orange-500/40 px-2 py-0.5 rounded">{t('Navigation.badge_new_upper')}</span>
              </TrackedLink>
              <TrackedLink href="/sekurita" targetName="nav_mobile_sekurita" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-cyan-400 hover:text-cyan-300 py-1">
                <span>SeKurita</span>
                <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded">ISO 27001</span>
              </TrackedLink>
              <TrackedLink href="/business-center" targetName="nav_mobile_portal" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-purple-400 hover:text-purple-300 py-1">
                <span>Business Center</span>
                <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/40 px-2 py-0.5 rounded">B2B</span>
              </TrackedLink>
            </div>
          </div>

          <TrackedLink href="/services" targetName="nav_mobile_services" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-900 hover:text-orange-500">
            {t('Navigation.services')}
          </TrackedLink>
          <TrackedLink href="/methodology" targetName="nav_mobile_workflow" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-900 hover:text-orange-500">
            {t('Navigation.workflow')}
          </TrackedLink>
          <TrackedLink href="/manifiesto" targetName="nav_mobile_manifiesto" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-900 hover:text-orange-500 text-zinc-400">
            {t('Navigation.manifesto')}
          </TrackedLink>
          <TrackedLink href="/identidad" targetName="nav_mobile_identidad" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-900 hover:text-orange-500 text-zinc-400">
            {t('Navigation.identity')}
          </TrackedLink>
          <TrackedLink href="/about" targetName="nav_mobile_vision" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-900 hover:text-orange-500 text-zinc-400">
            {t('Navigation.vision')}
          </TrackedLink>
          <TrackedLink href="/#contact" targetName="nav_mobile_contact" onClick={() => setMobileMenuOpen(false)} className="py-3 text-center bg-orange-600 text-white rounded font-bold uppercase tracking-widest text-sm hover:bg-orange-500">
            {t('Navigation.contact')}
          </TrackedLink>
        </div>
      )}
    </header>
  );
}
