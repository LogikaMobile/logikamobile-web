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
        <p className="text-zinc-400 text-justify mb-16 text-2xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed">
          {t('Contact.desc')}
        </p>
        <QuoteModal trigger={
          <span 
            className="inline-block text-orange-500  hover:text-orange-400 hover: text-3xl md:text-5xl font-extrabold underline underline-offset-[16px] decoration-orange-500/40 hover:decoration-orange-400 transition-all duration-300 cursor-pointer"
          >
            contacto@logikamobile.com
          </span>
        } />
      </div>
    </footer>
  );
}
