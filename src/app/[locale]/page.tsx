import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import QuoteModal from '@/components/QuoteModal';
import AdminLogo from '@/components/AdminLogo';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('title'),
    description: t('description')
  };
}

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen text-zinc-300 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Global Navbar */}
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
            <TrackedLink href="#about" targetName="about" className="hover:text-orange-500 hover: transition-colors duration-300">{t('Navigation.about')}</TrackedLink>
            <TrackedLink href="#services" targetName="services" className="hover:text-orange-500 hover: transition-colors duration-300">{t('Navigation.services')}</TrackedLink>
            <TrackedLink href="#contact" targetName="contact" className="hover:text-orange-500 hover: transition-colors duration-300">{t('Navigation.contact')}</TrackedLink>
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

      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 min-h-[85vh] py-20 relative">
          {/* Subtle radial glow behind hero */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-600/5 blur-[150px] pointer-events-none rounded-full"></div>
          
          <AdminLogo />
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[#7B2CBF]  mb-8 relative z-10">
            Logika<span className="text-orange-500 ">Mobile</span><span className="text-[#6CD3D3]">.</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-300 text-justify max-w-4xl mb-16 leading-relaxed font-light relative z-10">
            {t('Hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto relative z-10">
            <QuoteModal />
          </div>
        </section>


        {/* About Us */}
        <section id="about" className="py-32 md:py-48 max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#7B2CBF]  mb-6">
              <span className="text-orange-500 ">{t('About.title_system_info')}</span> <span className="text-[#6CD3D3]">//</span> {t('About.title_about_us')}
            </h2>
            <div className="h-1 w-32 bg-orange-500"></div>
            <div className="h-px w-full bg-zinc-900/80 mt-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 leading-relaxed">
            <div className="bg-black/40 p-10 md:p-16 border border-zinc-900/50 hover:border-zinc-700 transition-colors duration-500">
              <h3 className="text-orange-500  font-extrabold tracking-widest uppercase mb-8 text-2xl md:text-3xl">{t('About.mission_title')}</h3>
              <p className="text-zinc-300 text-justify text-xl md:text-2xl font-light">
                {t('About.mission_text_1')}<strong className="text-[#7B2CBF]  font-bold">{t('About.mission_text_2')}</strong>{t('About.mission_text_3')}
              </p>
            </div>
            <div className="bg-black/40 p-10 md:p-16 border border-zinc-900/50 hover:border-zinc-700 transition-colors duration-500">
              <h3 className="text-orange-500  font-extrabold tracking-widest uppercase mb-8 text-2xl md:text-3xl">{t('About.vision_title')}</h3>
              <p className="text-zinc-300 text-justify text-xl md:text-2xl font-light">
                {t('About.vision_text_1')}<strong className="text-[#7B2CBF]  font-bold">{t('About.vision_text_2')}</strong>{t('About.vision_text_3')}
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-black/40 p-10 md:p-16 border border-zinc-900/50 hover:border-zinc-700 transition-colors duration-500">
            <h3 className="text-[#7B2CBF] font-extrabold tracking-widest uppercase mb-8 text-2xl md:text-3xl border-b border-zinc-900 pb-4">
              {t('About.leadership_title')}<span className="text-[#6CD3D3]">_</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="md:w-1/3 flex flex-col gap-2 items-center text-center">
                <div className="w-full flex justify-center mb-6">
                  <img src="/logos/Vector.svg" alt="LogikaMobile Vector" className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(123,44,191,0.3)]" />
                </div>
                <strong className="text-orange-500 font-bold text-2xl uppercase tracking-wider">Luis Daniel Michel</strong>
                <span className="text-zinc-300 font-mono text-sm tracking-widest uppercase">{t('About.leadership_role')}</span>
                
                <div className="mt-6 space-y-2 text-sm font-mono text-zinc-500 flex flex-col items-center">
                  <p className="flex items-center gap-2"><span className="text-[#6CD3D3]">/</span> {t('About.leadership_edu_1')}</p>
                  <p className="flex items-center gap-2"><span className="text-[#6CD3D3]">/</span> {t('About.leadership_edu_2')}</p>
                  <p className="flex items-center gap-2"><span className="text-[#6CD3D3]">/</span> {t('About.leadership_edu_3')}</p>
                </div>
              </div>
              <div className="md:w-2/3 md:border-l border-zinc-900 md:pl-10 pt-6 md:pt-0 border-t md:border-t-0">
                <p className="text-zinc-300 text-justify text-lg md:text-xl font-light leading-relaxed mb-4">
                  {t('About.leadership_desc_1')}
                </p>
                <p className="text-zinc-400 text-justify text-base md:text-lg font-light leading-relaxed">
                  {t('About.leadership_desc_2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="services" className="py-32 md:py-48 bg-black/60 border-t border-zinc-900/50 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24">
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#7B2CBF]  mb-6">
                {t('Services.title_our')} <span className="text-orange-500 ">{t('Services.title_services')}</span><span className="text-[#6CD3D3] animate-pulse">_</span>
              </h2>
              <div className="h-1 w-32 bg-orange-500"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Card 1 */}
              <div className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="mb-10 w-28 h-28 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110">
                  <img src="/logos/computerLogo.svg" alt="Arquitectura y Desarrollo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF]  mb-6 leading-tight" dangerouslySetInnerHTML={{__html: t('Services.arch_title')}}></h3>
                <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">{t('Services.arch_tags')}</span>
                <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
                  {t('Services.arch_desc')}
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="mb-10 w-28 h-28 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110">
                  <img src="/logos/Audit.svg" alt="Auditoría de Código" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF]  mb-6 leading-tight" dangerouslySetInnerHTML={{__html: t('Services.audit_title')}}></h3>
                <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">{t('Services.audit_tags')}</span>
                <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
                  {t('Services.audit_desc')}
                </p>
              </div>

              {/* Card 3 */}
              <div className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="mb-10 w-28 h-28 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110">
                  <img src="/logos/LM_NBG.svg" alt="Software a la Medida" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF]  mb-6 leading-tight" dangerouslySetInnerHTML={{__html: t('Services.custom_title')}}></h3>
                <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">{t('Services.custom_tags')}</span>
                <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
                  {t('Services.custom_desc')}
                </p>
              </div>

              {/* Card 4 - HaaS */}
              <div className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="mb-10 w-28 h-28 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110 text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF]  mb-6 leading-tight" dangerouslySetInnerHTML={{__html: t('Services.haas_title')}}></h3>
                <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">{t('Services.haas_tags')}</span>
                <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
                  {t('Services.haas_desc')}
                </p>
              </div>

              {/* Card 5 - LMaaS (Estrella) */}
              <TrackedLink href="/lmaas" targetName="service_lmaas_card" className="border border-[#7B2CBF]/50 bg-black p-12 hover:border-[#7B2CBF] hover:bg-zinc-950/80 transition-all duration-500 group relative overflow-hidden shadow-[0_0_30px_rgba(123,44,191,0.2)] hover:shadow-[0_0_50px_rgba(123,44,191,0.5)] md:col-span-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#7B2CBF] scale-x-100 origin-left"></div>
                
                <div className="flex justify-between items-start mb-10">
                  <div className="w-28 h-28 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110">
                    <img src="/logos/LMaaSLogo.svg" alt="LMaaS Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(123,44,191,0.2)] group-hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.6)]" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight group-hover:text-[#6CD3D3] transition-colors">
                  <strong>LMaaS</strong>
                </h3>
                <span className="inline-block px-4 py-2 bg-[#7B2CBF]/10 text-[#7B2CBF] font-mono text-sm mb-8 border border-[#7B2CBF]/30 font-bold">{t('Services.lmaas_subtitle')}</span>
                <p className="text-zinc-300 text-justify text-lg md:text-xl font-light leading-relaxed mb-6">
                  {t('Services.lmaas_desc')}
                </p>
                
                <div className="flex items-center text-[#7B2CBF] font-bold group-hover:text-[#6CD3D3] transition-colors">
                  <span>{t('Services.learn_more')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-2 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </TrackedLink>
            </div>
          </div>
        </section>
        {/* Trusted By */}
        <section className="py-24 border-y border-zinc-900/50 bg-black/40 backdrop-blur-sm relative z-10 overflow-hidden">
          <div className="max-w-full mx-auto">
            <h2 className="text-center text-lg md:text-xl font-bold text-zinc-500 mb-16 uppercase tracking-[0.2em] px-6">
              {t('TrustedBy.title')}
            </h2>
            
            <div className="relative flex overflow-hidden py-12 -my-12">
              <div className="flex w-max animate-marquee gap-16 md:gap-32 pr-16 md:pr-32 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                {/* Original Items */}
                <TrackedLink href="https://www.roche.com.mx/" target="_blank" rel="noopener noreferrer" targetName="logo_roche" className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/roche_logo.svg" alt="Roche Logo" className="max-w-full max-h-full object-contain" />
                </TrackedLink>
                <TrackedLink href="https://apps.apple.com/mx/app/ibero-fetal-med-risk-calc/id6595885332" target="_blank" rel="noopener noreferrer" targetName="logo_irn" className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/irn_logo_complete.svg" alt="Iberoamerican Research Network Logo" className="max-w-full max-h-full object-contain" />
                </TrackedLink>
                <TrackedLink href="https://asesoria-certificada.com/" target="_blank" rel="noopener noreferrer" targetName="logo_asesoria" className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/asesoria_certificada_logo.svg" alt="Asesoría Certificada Logo" className="max-w-full max-h-full object-contain" />
                </TrackedLink>
                <TrackedLink href="https://clinvelt.com.mx/" target="_blank" rel="noopener noreferrer" targetName="logo_clinvelt" className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/ClinveltLogo.svg" alt="Clinvelt Logo" className="max-w-full max-h-full object-contain" />
                </TrackedLink>
                <TrackedLink href="https://pjlegalcontable.com.mx/" target="_blank" rel="noopener noreferrer" targetName="logo_pj" className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/P-J_LEGAL_Y_CONTABLE_logo.svg" alt="P&J Legal y Contable Logo" className="max-w-full max-h-full object-contain" />
                </TrackedLink>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-orange-500 text-center group-hover:text-orange-400 transition-colors duration-300">{t('TrustedBy.grow_here')}</div>
                  <div className="w-64 h-24 bg-zinc-900/50 border border-orange-500/20 rounded flex items-center justify-center">
                    <span className="text-sm font-mono text-orange-600/50">{t('TrustedBy.space_available')}</span>
                  </div>
                </div>

                {/* Duplicated Items for Marquee Loop */}
                <TrackedLink href="https://www.roche.com.mx/" target="_blank" rel="noopener noreferrer" targetName="logo_roche" className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/roche_logo.svg" alt="Roche Logo" className="max-w-full max-h-full object-contain" />
                </TrackedLink>
                <TrackedLink href="https://apps.apple.com/mx/app/ibero-fetal-med-risk-calc/id6595885332" target="_blank" rel="noopener noreferrer" targetName="logo_irn" className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/irn_logo_complete.svg" alt="Iberoamerican Research Network Logo" className="max-w-full max-h-full object-contain" />
                </TrackedLink>
                <TrackedLink href="https://asesoria-certificada.com/" target="_blank" rel="noopener noreferrer" targetName="logo_asesoria" className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/asesoria_certificada_logo.svg" alt="Asesoría Certificada Logo" className="max-w-full max-h-full object-contain" />
                </TrackedLink>
                <TrackedLink href="https://clinvelt.com.mx/" target="_blank" rel="noopener noreferrer" targetName="logo_clinvelt" className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/ClinveltLogo.svg" alt="Clinvelt Logo" className="max-w-full max-h-full object-contain" />
                </TrackedLink>
                <TrackedLink href="https://pjlegalcontable.com.mx/" target="_blank" rel="noopener noreferrer" targetName="logo_pj" className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/P-J_LEGAL_Y_CONTABLE_logo.svg" alt="P&J Legal y Contable Logo" className="max-w-full max-h-full object-contain" />
                </TrackedLink>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-orange-500 text-center group-hover:text-orange-400 transition-colors duration-300">{t('TrustedBy.grow_here')}</div>
                  <div className="w-64 h-24 bg-zinc-900/50 border border-orange-500/20 rounded flex items-center justify-center">
                    <span className="text-sm font-mono text-orange-600/50">{t('TrustedBy.space_available')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
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
    </div>
  );
}
