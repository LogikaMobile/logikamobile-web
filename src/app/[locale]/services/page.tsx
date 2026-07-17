import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import TrackedLink from '@/components/TrackedLink';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Navigation' });
  return {
    title: `LogikaMobile | ${t('services')}`,
    description: "Conoce nuestros servicios de ingeniería de software: Arquitectura Backend, Desarrollo Web y Móvil, y nuestro modelo único de CTO as a Service (LMaaS).",
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        'es': '/es/services',
        'en': '/en/services',
      },
    },
  };
}

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <article className="min-h-screen pt-32 pb-48 max-w-7xl mx-auto px-6 selection:bg-orange-500/30 selection:text-orange-200">
      <div className="mb-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#7B2CBF] mb-6">
          {t('Services.title_our')} <span className="text-orange-500">{t('Services.title_services')}</span><span className="text-[#6CD3D3] animate-pulse">_</span>
        </h1>
        <div className="h-1 w-32 bg-orange-500"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <section className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          
          <div className="mb-10 w-28 h-28 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110">
            <img src="/logos/computerLogo.svg" alt="Arquitectura y Desarrollo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF] mb-6 leading-tight" dangerouslySetInnerHTML={{__html: t('Services.arch_title')}}></h2>
          <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">{t('Services.arch_tags')}</span>
          <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
            {t('Services.arch_desc')}
          </p>
        </section>

        {/* Card 2 */}
        <section className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          
          <div className="mb-10 w-28 h-28 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110">
            <img src="/logos/Audit.svg" alt="Auditoría de Código" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF] mb-6 leading-tight" dangerouslySetInnerHTML={{__html: t('Services.audit_title')}}></h2>
          <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">{t('Services.audit_tags')}</span>
          <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
            {t('Services.audit_desc')}
          </p>
        </section>

        {/* Card 3 */}
        <section className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          
          <div className="mb-10 w-28 h-28 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110">
            <img src="/logos/LM_NBG.svg" alt="Software a la Medida" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF] mb-6 leading-tight" dangerouslySetInnerHTML={{__html: t('Services.custom_title')}}></h2>
          <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">{t('Services.custom_tags')}</span>
          <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
            {t('Services.custom_desc')}
          </p>
        </section>

        {/* Card 4 - HaaS */}
        <section className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          
          <div className="mb-10 w-28 h-28 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110 text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF] mb-6 leading-tight" dangerouslySetInnerHTML={{__html: t('Services.haas_title')}}></h2>
          <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">{t('Services.haas_tags')}</span>
          <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
            {t('Services.haas_desc')}
          </p>
        </section>

        {/* Card 5 - LMaaS (Estrella) */}
        <TrackedLink href="/lmaas" targetName="service_lmaas_card" className="border border-[#7B2CBF]/50 bg-black p-12 hover:border-[#7B2CBF] hover:bg-zinc-950/80 transition-all duration-500 group relative overflow-hidden shadow-[0_0_30px_rgba(123,44,191,0.2)] hover:shadow-[0_0_50px_rgba(123,44,191,0.5)] md:col-span-2 block">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#7B2CBF] scale-x-100 origin-left"></div>
          
          <div className="flex justify-between items-start mb-10">
            <div className="w-28 h-28 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110">
              <img src="/logos/LMaaSLogo.svg" alt="LMaaS Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(123,44,191,0.2)] group-hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.6)]" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight group-hover:text-[#6CD3D3] transition-colors">
            <strong>LMaaS</strong>
          </h2>
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
    </article>
  );
}
