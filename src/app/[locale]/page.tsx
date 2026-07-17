import TrackedLink from '@/components/TrackedLink';
import AdminLogo from '@/components/AdminLogo';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'es': '/es',
        'en': '/en',
      },
    },
  };
}

export default function Home() {
  const t = useTranslations();

  return (
    <div className="text-zinc-300 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 min-h-[85vh] py-20 relative overflow-hidden">
        {/* Subtle radial glow behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-600/5 blur-[150px] pointer-events-none rounded-full"></div>
        
        <AdminLogo />
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[#7B2CBF] mb-8 relative z-10">
          Logika<span className="text-orange-500">Mobile</span><span className="text-[#6CD3D3]">.</span>
        </h1>
        
        <p className="text-xl md:text-3xl font-light max-w-3xl mb-12 text-zinc-400 relative z-10 leading-relaxed">
          {t('Hero.description')}
        </p>

        <div className="flex flex-col md:flex-row gap-6 relative z-10 mt-8">
          <Link 
            href="/services" 
            className="px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold tracking-widest uppercase text-sm transition-colors duration-300 flex items-center justify-center gap-2"
          >
            {t('Navigation.services')}
          </Link>
          <Link 
            href="/methodology" 
            className="px-10 py-4 border border-[#7B2CBF] text-[#7B2CBF] hover:bg-[#7B2CBF]/10 font-bold tracking-widest uppercase text-sm transition-colors duration-300 flex items-center justify-center gap-2"
          >
            {t('Navigation.workflow')}
          </Link>
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
    </div>
  );
}
