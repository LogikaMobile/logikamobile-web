import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Navigation' });
  return {
    title: `LogikaMobile | ${t('about')}`,
    description: "Conoce más sobre LogikaMobile, nuestra misión y cómo desarrollamos software a la medida con altos estándares de calidad.",
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        'es': '/es/about',
        'en': '/en/about',
      },
    },
  };
}

export default function AboutPage() {
  const t = useTranslations();

  return (
    <article className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto selection:bg-orange-500/30 selection:text-orange-200">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#7B2CBF] mb-16 text-center">
        {t('Navigation.about')}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Terminal Window */}
        <div className="bg-black border border-zinc-800 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(123,44,191,0.15)] hover:shadow-[0_0_80px_rgba(123,44,191,0.3)] transition-shadow duration-500 group">
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-xs font-mono text-zinc-500">{t('About.title_system_info')}</span>
          </div>
          <div className="p-8 font-mono text-sm md:text-base">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-orange-500 mt-1">{'>'}</span>
              <p className="text-zinc-300 leading-relaxed">
                <span className="text-[#6CD3D3]">const</span> <span className="text-[#7B2CBF]">mission</span> = <span className="text-green-400">"{t('About.mission_text_1')}"</span> + <br className="hidden md:block" />
                <span className="text-orange-400 font-bold">"{t('About.mission_text_2')}"</span>;
              </p>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <span className="text-orange-500 mt-1">{'>'}</span>
              <div>
                <span className="text-[#6CD3D3]">await</span> <span className="text-[#7B2CBF]">LogikaMobile</span>.<span className="text-blue-400">execute</span>(&#123;
                <div className="ml-4 text-zinc-400">
                  focus: <span className="text-green-400">"{t('About.focus_val')}"</span>,<br/>
                  approach: <span className="text-green-400">"{t('About.approach_val')}"</span>,<br/>
                  result: <span className="text-green-400">"{t('About.result_val')}"</span>
                </div>
                &#125;);
              </div>
            </div>
            <div className="flex items-center gap-4 text-zinc-500 animate-pulse">
              <span className="text-orange-500">{'>'}</span>_
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-8">
            {t('About.title_about_us')}<span className="text-orange-500">.</span>
          </h2>
          <div className="space-y-6 text-zinc-400 text-lg md:text-xl font-light text-justify leading-relaxed">
            <p>{t('About.desc_p1')}</p>
            <p>{t('About.desc_p2')}</p>
            <div className="pt-6 mt-6 border-t border-zinc-800">
              <p className="font-mono text-orange-500 font-bold uppercase tracking-widest text-sm">
                // {t('About.mission_title')}
              </p>
              <p className="mt-4 text-white font-medium italic">
                "{t('About.mission_quote')}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
