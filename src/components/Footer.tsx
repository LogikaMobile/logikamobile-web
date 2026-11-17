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
              id="footer_start_profiling_btn"
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

        {/* Secondary Channels Hub */}
        <div className="pt-10 border-t border-zinc-900/80 max-w-2xl mx-auto space-y-6">
          <p className="text-sm md:text-base text-zinc-400 font-light">
            {t('Contact.or_direct_channels')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* WhatsApp Corporativo */}
            <a 
              href="https://wa.me/522212592266?text=Hola%20LogikaMobile%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios." 
              target="_blank" 
              rel="noopener noreferrer"
              id="footer_direct_whatsapp_link"
              className="inline-flex items-center gap-2.5 px-4 md:px-5 py-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/70 hover:bg-emerald-900/40 text-emerald-300 hover:text-emerald-200 transition-all text-sm font-medium shadow-[0_0_20px_rgba(16,185,129,0.15)] group"
            >
              <svg className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>{t('Contact.whatsapp_label')}</span>
              <span className="font-mono text-xs opacity-80">(221) 259 2266</span>
            </a>

            {/* Llamada Directa */}
            <a 
              href="tel:+522212592266" 
              id="footer_direct_phone_link"
              className="inline-flex items-center gap-2.5 px-4 md:px-5 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-800/60 text-zinc-300 hover:text-cyan-300 transition-all text-sm font-medium group"
            >
              <svg className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{t('Contact.call_label')}</span>
              <span className="font-mono text-xs text-zinc-400 group-hover:text-cyan-200">+52 221 259 2266</span>
            </a>

            {/* Correo Electrónico */}
            <a 
              href="mailto:contacto@logikamobile.com" 
              id="footer_direct_email_link"
              className="inline-flex items-center gap-2.5 px-4 md:px-5 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-800/60 text-zinc-300 hover:text-orange-300 transition-all text-sm font-medium group"
            >
              <svg className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="font-mono text-xs md:text-sm">contacto@logikamobile.com</span>
            </a>
          </div>

          <p className="text-xs font-mono text-zinc-500 flex items-center justify-center gap-1.5 pt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            {t('Contact.sla_response')}
          </p>
        </div>
      </div>
    </footer>
  );
}
