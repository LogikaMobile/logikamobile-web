"use client";
import QuoteModal from '@/components/QuoteModal';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer id="contact" className="py-40 bg-black/20 backdrop-blur-md border-t border-zinc-900/50 text-center px-6 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[#7B2CBF]  mb-10">
          {t('Contact.title_lets_talk')}<span className="text-orange-500 ">{t('Contact.title_your_project')}</span><span className="text-[#6CD3D3]">.</span>
        </h2>
        <p className="text-zinc-400 text-center mb-16 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
          {t('Contact.desc')}
        </p>

        {/* Primary Interactive Profiling CTA */}
        <div className="mb-12">
          <QuoteModal trigger={
            <button 
              type="button"
              className="group relative inline-flex flex-col items-center justify-center px-10 md:px-16 py-6 bg-gradient-to-r from-orange-600 to-[#7B2CBF] hover:from-orange-500 hover:to-[#9D4EDD] text-white font-extrabold text-xl md:text-2xl rounded-2xl shadow-[0_0_50px_rgba(249,115,22,0.4)] hover:shadow-[0_0_80px_rgba(123,44,191,0.6)] transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20"
            >
              <span className="flex items-center gap-3">
                {t('Contact.btn_start_profiling')}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className="text-xs md:text-sm font-mono font-normal text-white/80 mt-2">
                {t('Contact.btn_start_profiling_sub')}
              </span>
            </button>
          } />
        </div>

        {/* Secondary Channel */}
        <div className="pt-8 border-t border-zinc-900/80 max-w-xl mx-auto space-y-3">
          <p className="text-sm md:text-base text-zinc-400 font-light">
            {t('Contact.or_write_directly')}{' '}
            <a 
              href="mailto:contacto@logikamobile.com" 
              className="text-orange-400 hover:text-orange-300 font-mono font-medium underline underline-offset-4 transition-colors"
            >
              contacto@logikamobile.com
            </a>
          </p>
          <p className="text-xs font-mono text-zinc-500 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            {t('Contact.sla_response')}
          </p>
        </div>
      </div>
    </footer>
  );
}
