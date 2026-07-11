import React from 'react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import LmaasQuoteModal from '@/components/LmaasQuoteModal';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'LmaasMetadata' });
  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/logos/LMaaSLogo.svg',
    }
  };
}

export default function LMaasPage() {
  const t = useTranslations('Lmaas');

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-[#7B2CBF]/30 selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#7B2CBF]/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3b1a00]/30 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      {/* Navbar Minimalista */}
      <nav className="relative z-10 w-full p-6 flex justify-between items-center border-b border-zinc-900/50 bg-black/50 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6CD3D3]">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span className="font-mono text-sm text-zinc-400">{t('back')}</span>
        </Link>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center w-full mb-24">
          <div className="flex items-center justify-center gap-8 mb-12">
            <img src="/logos/Logo.svg" alt="Logika Logo" className="w-20 h-20 md:w-32 md:h-32 object-contain opacity-80" />
            <img src="/logos/computerLogo.svg" alt="Computer Logo" className="w-20 h-20 md:w-32 md:h-32 object-contain opacity-80" />
          </div>
          
          <div className="flex flex-col items-center mb-16">
            <div className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4">
              <span className="text-[#7B2CBF]">Logika</span><span className="text-orange-500">Mobile</span><span className="text-[#6CD3D3]">.</span>
            </div>
            <p className="text-2xl md:text-3xl font-mono text-zinc-500 tracking-widest uppercase mb-12">
              {t('presents')}
            </p>
          </div>
          
          <div className="w-full max-w-2xl mx-auto mb-8 drop-shadow-[0_0_30px_rgba(123,44,191,0.4)]">
            <img src="/logos/LMaaSLogo.svg" alt="LMaaS Logo" className="w-full h-auto object-contain" />
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter drop-shadow-2xl mb-8">
            <span className="text-[#7B2CBF]">L</span><span className="text-orange-500">M</span><span className="text-[#6CD3D3]">aaS</span>
          </h1>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            {t('subtitle')}<span className="text-[#6CD3D3]">.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed">
            {t('desc_1')}
            <strong className="text-zinc-200 font-semibold block mt-4">{t('desc_2')}</strong>
          </p>
        </div>

        {/* Ecosistema Section */}
        <div className="w-full mb-32">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-zinc-800 flex-grow"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-widest uppercase">
              {t('eco_title')} <span className="text-orange-500">{t('eco_subtitle')}</span>
            </h2>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Consultoría */}
            <div className="bg-zinc-950 border border-zinc-800 p-10 rounded-2xl relative overflow-hidden group hover:border-[#7B2CBF]/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7B2CBF]/5 blur-3xl group-hover:bg-[#7B2CBF]/10 transition-colors"></div>
              <span className="inline-block px-3 py-1 bg-zinc-900 text-zinc-400 font-mono text-xs rounded-full border border-zinc-800 mb-6 uppercase tracking-widest">
                {t('consult_plan')}
              </span>
              <h3 className="text-3xl font-bold text-white mb-6">{t('consult_title')}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {t('consult_desc')}
              </p>
            </div>

            {/* Infraestructura */}
            <div className="bg-zinc-950 border border-zinc-800 p-10 rounded-2xl relative overflow-hidden group hover:border-orange-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl group-hover:bg-orange-500/10 transition-colors"></div>
              <span className="inline-block px-3 py-1 bg-zinc-900 text-zinc-400 font-mono text-xs rounded-full border border-zinc-800 mb-6 uppercase tracking-widest">
                {t('infra_plan')}
              </span>
              <h3 className="text-3xl font-bold text-white mb-6">{t('infra_title')}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {t('infra_desc')}
              </p>
            </div>
          </div>

          {/* El Core - Desarrollo Continuo */}
          <div className="bg-gradient-to-br from-[#110524] to-black border border-[#7B2CBF]/30 p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(123,44,191,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7B2CBF] via-[#6CD3D3] to-orange-500"></div>
            
            <div className="max-w-3xl mb-16">
              <span className="inline-flex items-center px-4 py-2 bg-[#7B2CBF]/20 text-[#7B2CBF] font-mono text-sm rounded-full border border-[#7B2CBF]/30 mb-6 font-bold tracking-widest">
                {t('core_tag')}
              </span>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t('core_title')}</h3>
              <p className="text-zinc-300 text-xl leading-relaxed font-light mb-8">
                {t('core_desc')}
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#7B2CBF]/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#7B2CBF]"></div>
                  </div>
                  <span className="text-lg text-zinc-300">{t('core_point_1')}</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#7B2CBF]/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#7B2CBF]"></div>
                  </div>
                  <span className="text-lg text-zinc-300">{t('core_point_2')}</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#7B2CBF]/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#7B2CBF]"></div>
                  </div>
                  <span className="text-lg text-zinc-300">{t('core_point_3')}</span>
                </li>
              </ul>
            </div>

            {/* Diagrama de Flujo Visual */}
            <div className="bg-black/50 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-8 text-center">{t('pipeline')}</h4>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative">
                {/* Solicitud */}
                <div className="flex flex-col items-center gap-4 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <span className="font-bold text-sm text-zinc-300">{t('step_req')}</span>
                </div>
                
                {/* Arrow */}
                <div className="hidden md:block h-px bg-zinc-700 flex-grow relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 border-t-2 border-r-2 border-zinc-500 rotate-45"></div>
                </div>
                <div className="block md:hidden w-px h-8 bg-zinc-700"></div>

                {/* Desarrollo */}
                <div className="flex flex-col items-center gap-4 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#7B2CBF]/10 border border-[#7B2CBF]/50 flex items-center justify-center text-[#7B2CBF] shadow-[0_0_15px_rgba(123,44,191,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <span className="font-bold text-sm text-[#7B2CBF]">{t('step_dev')}</span>
                </div>

                {/* Arrow */}
                <div className="hidden md:block h-px bg-[#7B2CBF]/50 flex-grow relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 border-t-2 border-r-2 border-[#7B2CBF]/50 rotate-45"></div>
                </div>
                <div className="block md:hidden w-px h-8 bg-[#7B2CBF]/50"></div>

                {/* QA */}
                <div className="flex flex-col items-center gap-4 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/50 flex items-center justify-center text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  </div>
                  <span className="font-bold text-sm text-orange-500">{t('step_qa')}</span>
                </div>

                {/* Arrow */}
                <div className="hidden md:block h-px bg-orange-500/50 flex-grow relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 border-t-2 border-r-2 border-orange-500/50 rotate-45"></div>
                </div>
                <div className="block md:hidden w-px h-8 bg-orange-500/50"></div>

                {/* Entrega */}
                <div className="flex flex-col items-center gap-4 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#6CD3D3]/10 border border-[#6CD3D3]/50 flex items-center justify-center text-[#6CD3D3] shadow-[0_0_15px_rgba(108,211,211,0.2)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <span className="font-bold text-sm text-[#6CD3D3]">{t('step_del')}</span>
                </div>

                {/* Arrow */}
                <div className="hidden md:block h-px bg-[#6CD3D3]/50 flex-grow relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 border-t-2 border-r-2 border-[#6CD3D3]/50 rotate-45"></div>
                </div>
                <div className="block md:hidden w-px h-8 bg-[#6CD3D3]/50"></div>

                {/* Cooldown */}
                <div className="flex flex-col items-center gap-4 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.13 15.57a9 9 0 1 0 12.82 5.08M21.5 22v-6h-6M2.13 8.43a9 9 0 1 1 12.82-5.08"></path></svg>
                  </div>
                  <span className="font-bold text-sm text-zinc-400">{t('step_cool')}</span>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center">
          <LmaasQuoteModal trigger={
            <div className="inline-flex items-center justify-center px-8 py-4 bg-[#7B2CBF] text-white font-bold rounded-lg hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(123,44,191,0.5)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] cursor-pointer">
              {t('cta')}
            </div>
          } />
        </div>
      </main>
    </div>
  );
}
