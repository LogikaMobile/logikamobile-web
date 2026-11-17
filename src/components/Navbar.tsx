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
            <div className="absolute top-full left-0 pt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-zinc-950/95 backdrop-blur-2xl border border-zinc-800/90 rounded-2xl p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.06)] flex flex-col gap-1 text-sm font-sans normal-case tracking-normal">
                <TrackedLink href="/manifiesto" targetName="nav_manifiesto" className="px-4 py-2.5 rounded-xl hover:bg-white/[0.05] hover:text-orange-400 text-zinc-300 font-medium transition-colors duration-200 flex items-center justify-between group/link">
                  <span>{t('Navigation.manifesto')}</span>
                  <svg className="w-3.5 h-3.5 text-zinc-600 group-hover/link:text-orange-400 group-hover/link:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </TrackedLink>
                <TrackedLink href="/identidad" targetName="nav_identidad" className="px-4 py-2.5 rounded-xl hover:bg-white/[0.05] hover:text-orange-400 text-zinc-300 font-medium transition-colors duration-200 flex items-center justify-between group/link">
                  <span>{t('Navigation.identity')}</span>
                  <svg className="w-3.5 h-3.5 text-zinc-600 group-hover/link:text-orange-400 group-hover/link:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </TrackedLink>
                <TrackedLink href="/about" targetName="nav_vision" className="px-4 py-2.5 rounded-xl hover:bg-white/[0.05] hover:text-orange-400 text-zinc-300 font-medium transition-colors duration-200 flex items-center justify-between group/link">
                  <span>{t('Navigation.vision')}</span>
                  <svg className="w-3.5 h-3.5 text-zinc-600 group-hover/link:text-orange-400 group-hover/link:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </TrackedLink>
              </div>
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
            
            {/* Dropdown panel with invisible hover bridge */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[460px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-zinc-950/95 backdrop-blur-2xl border border-zinc-800/90 rounded-2xl p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.06)] flex flex-col gap-1.5 normal-case font-sans tracking-normal">
                {/* LogikaFiskal */}
                <TrackedLink 
                  href="/logikafiskal" 
                  targetName="nav_dropdown_logikafiskal" 
                  className="group/item flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-orange-500/20 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/25 p-2 flex items-center justify-center shrink-0 group-hover/item:border-orange-500/60 group-hover/item:bg-orange-500/15 group-hover/item:shadow-[0_0_20px_rgba(249,115,22,0.25)] transition-all">
                    <img src="/logos/logikafiskal_icon.png" alt="LogikaFiskal" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-sm font-bold text-white group-hover/item:text-orange-400 transition-colors tracking-tight flex items-center gap-1">
                        Logika<span className="text-orange-500">Fiskal</span>
                      </span>
                      <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30 shrink-0">
                        {t('Navigation.badge_new')}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-normal leading-relaxed whitespace-normal group-hover/item:text-zinc-300 transition-colors">
                      {t('Navigation.logikafiskal_desc')}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-zinc-600 group-hover/item:text-orange-400 group-hover/item:translate-x-0.5 transition-all shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </TrackedLink>

                {/* SeKurita */}
                <TrackedLink 
                  href="/sekurita" 
                  targetName="nav_dropdown_sekurita" 
                  className="group/item flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-cyan-500/20 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/25 p-2 flex items-center justify-center shrink-0 group-hover/item:border-cyan-500/60 group-hover/item:bg-cyan-500/15 group-hover/item:shadow-[0_0_20px_rgba(66,200,198,0.25)] transition-all">
                    <img src="/logos/sekurita_logo.svg" alt="SeKurita" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-sm font-bold text-white group-hover/item:text-cyan-400 transition-colors tracking-tight">
                        SeKurita
                      </span>
                      <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shrink-0">
                        ISO 27001
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-normal leading-relaxed whitespace-normal group-hover/item:text-zinc-300 transition-colors">
                      {t('Navigation.sekurita_desc')}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-zinc-600 group-hover/item:text-cyan-400 group-hover/item:translate-x-0.5 transition-all shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </TrackedLink>

                {/* Business Center */}
                <TrackedLink 
                  href="/business-center" 
                  targetName="nav_dropdown_portal" 
                  className="group/item flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-purple-500/20 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/25 p-2 flex items-center justify-center shrink-0 group-hover/item:border-purple-500/60 group-hover/item:bg-purple-500/15 group-hover/item:shadow-[0_0_20px_rgba(123,44,191,0.3)] transition-all text-[#7B2CBF] group-hover/item:text-purple-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2"/>
                      <path d="M3 9h18"/>
                      <path d="M9 21V9"/>
                    </svg>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-sm font-bold text-white group-hover/item:text-purple-400 transition-colors tracking-tight">
                        Business Center
                      </span>
                      <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30 shrink-0">
                        B2B
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-normal leading-relaxed whitespace-normal group-hover/item:text-zinc-300 transition-colors">
                      {t('Navigation.portal_desc')}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-zinc-600 group-hover/item:text-purple-400 group-hover/item:translate-x-0.5 transition-all shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </TrackedLink>

                {/* Bottom Ecosystem Bar */}
                <div className="mt-1 pt-2.5 pb-0.5 px-3 border-t border-zinc-900/90 flex items-center justify-between text-[11px] text-zinc-500 font-sans normal-case">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Ecosistema LogikaMobile
                  </span>
                  <TrackedLink 
                    href="/services" 
                    targetName="nav_dropdown_all_services" 
                    className="text-zinc-400 hover:text-orange-400 transition-colors font-medium flex items-center gap-1"
                  >
                    {t('Navigation.services')} →
                  </TrackedLink>
                </div>
              </div>
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
          <div className="border-b border-zinc-900 pb-5">
            <span className="text-xs font-mono font-bold text-zinc-500 tracking-widest uppercase block mb-3">
              {t('Navigation.products')}
            </span>
            <div className="flex flex-col gap-2.5 normal-case tracking-normal">
              <TrackedLink 
                href="/logikafiskal" 
                targetName="nav_mobile_logikafiskal" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-orange-500/40 text-white transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/25 p-1.5 flex items-center justify-center shrink-0">
                    <img src="/logos/logikafiskal_icon.png" alt="LogikaFiskal" className="w-full h-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-sm text-white block">Logika<span className="text-orange-500">Fiskal</span></span>
                    <span className="text-xs text-zinc-400 font-normal truncate block">{t('Navigation.logikafiskal_desc')}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 shrink-0 ml-2">
                  {t('Navigation.badge_new')}
                </span>
              </TrackedLink>

              <TrackedLink 
                href="/sekurita" 
                targetName="nav_mobile_sekurita" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-cyan-500/40 text-white transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/25 p-1.5 flex items-center justify-center shrink-0">
                    <img src="/logos/sekurita_logo.svg" alt="SeKurita" className="w-full h-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-sm text-white block">SeKurita</span>
                    <span className="text-xs text-zinc-400 font-normal truncate block">{t('Navigation.sekurita_desc')}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shrink-0 ml-2">
                  ISO 27001
                </span>
              </TrackedLink>

              <TrackedLink 
                href="/business-center" 
                targetName="nav_mobile_portal" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-purple-500/40 text-white transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/25 p-1.5 flex items-center justify-center shrink-0 text-[#7B2CBF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-sm text-white block">Business Center</span>
                    <span className="text-xs text-zinc-400 font-normal truncate block">{t('Navigation.portal_desc')}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 shrink-0 ml-2">
                  B2B
                </span>
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

          {/* Quick Direct Mobile Contact */}
          <div className="flex items-center gap-2 pt-1 normal-case tracking-normal">
            <a 
              href="https://wa.me/522212592266?text=Hola%20LogikaMobile%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-xs font-mono"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <a 
              href="tel:+522212592266" 
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400 hover:text-cyan-300 text-xs font-mono"
            >
              <svg className="w-3.5 h-3.5 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>221 259 2266</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
