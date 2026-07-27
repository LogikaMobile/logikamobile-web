import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import TrackedLink from '@/components/TrackedLink';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'BusinessCenter' });
  return {
    title: `LogikaMobile | ${t('title_highlight')}`,
    description: t('intro_p2'),
    alternates: {
      canonical: `/${locale}/business-center`,
      languages: {
        'es': '/es/business-center',
        'en': '/en/business-center',
      },
    },
  };
}

export default function BusinessCenterPage() {
  const t = useTranslations('BusinessCenter');

  return (
    <article className="min-h-screen pt-32 pb-48 px-6 max-w-7xl mx-auto selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-zinc-100">{t('title_main')}</span> <br/>
          <span className="text-[#7B2CBF]">{t('title_highlight')}</span>
        </h1>
        <p className="text-xl md:text-2xl text-orange-400 font-medium mb-6">
          {t('intro_p1')}
        </p>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-12">
          {t('intro_p2')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <TrackedLink href="https://portal.logikamobile.com.mx" target="_blank" rel="noopener noreferrer" targetName="b2b_login" className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#7B2CBF] text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(123,44,191,0.5)] w-full sm:w-auto">
            <span className="relative z-10 flex items-center gap-2">
              {t('cta_login')}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#7B2CBF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </TrackedLink>
          <TrackedLink href="/#contact" targetName="b2b_contact" className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-300 font-bold text-lg rounded-full hover:bg-zinc-800 hover:text-white transition-colors duration-300 w-full sm:w-auto">
            {t('cta_contact')}
          </TrackedLink>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        
        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors duration-300 group">
          <div className="w-12 h-12 bg-[#7B2CBF]/20 text-[#7B2CBF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{t('feature_1_title')}</h3>
          <p className="text-zinc-400 leading-relaxed">{t('feature_1_desc')}</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors duration-300 group">
          <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{t('feature_2_title')}</h3>
          <p className="text-zinc-400 leading-relaxed">{t('feature_2_desc')}</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors duration-300 group">
          <div className="w-12 h-12 bg-[#7B2CBF]/20 text-[#7B2CBF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{t('feature_3_title')}</h3>
          <p className="text-zinc-400 leading-relaxed">{t('feature_3_desc')}</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors duration-300 group lg:col-span-2">
          <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{t('feature_4_title')}</h3>
          <p className="text-zinc-400 leading-relaxed">{t('feature_4_desc')}</p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors duration-300 group">
          <div className="w-12 h-12 bg-[#7B2CBF]/20 text-[#7B2CBF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{t('feature_5_title')}</h3>
          <p className="text-zinc-400 leading-relaxed">{t('feature_5_desc')}</p>
        </div>

      </section>

      {/* Security Section */}
      <section className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B2CBF] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-bold uppercase tracking-widest mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Enterprise Security
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('feature_6_title')}</h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              {t('feature_6_desc')}
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center">
             <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-black/50 border border-zinc-800 p-6 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-[#7B2CBF] mb-2">JWT</span>
                  <span className="text-sm text-zinc-500 uppercase tracking-wider">Auth Tokens</span>
                </div>
                <div className="bg-black/50 border border-zinc-800 p-6 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-orange-500 mb-2">BCrypt</span>
                  <span className="text-sm text-zinc-500 uppercase tracking-wider">Encryption</span>
                </div>
                <div className="bg-black/50 border border-zinc-800 p-6 rounded-xl text-center col-span-2">
                  <span className="block text-2xl font-bold text-green-400 mb-2">SSL/TLS</span>
                  <span className="text-sm text-zinc-500 uppercase tracking-wider">End-to-End Encryption</span>
                </div>
             </div>
          </div>
        </div>
      </section>

    </article>
  );
}
