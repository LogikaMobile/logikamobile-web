import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import TrackedLink from '@/components/TrackedLink';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'BlogManifiesto' });
  return {
    title: `LogikaMobile | ${t('title')}`,
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/manifiesto`,
      languages: {
        'es': '/es/manifiesto',
        'en': '/en/manifiesto',
      },
    },
  };
}

export default function ManifiestoPage() {
  const t = useTranslations('BlogManifiesto');

  return (
    <article className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto selection:bg-orange-500/30 selection:text-orange-200">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-orange-500 font-light">
          {t('subtitle')}
        </p>
      </div>

      <div className="space-y-12 text-zinc-300 text-lg md:text-xl font-light text-justify leading-relaxed">
        
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#7B2CBF] mb-4">
            {t('h2_1')}
          </h2>
          <p className="mb-4">{t('p_1_1')}</p>
          <p>{t('p_1_2')}</p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#7B2CBF] mb-4">
            {t('h2_2')}
          </h2>
          <p className="mb-4">
            El famoso "Juego de la Imitación" (hoy conocido como el Test de Turing) fue diseñado originalmente para evaluar si una máquina podía exhibir un comportamiento inteligente indistinguible del de un humano. Pero si analizamos el fondo de este ejercicio, el Test de Turing es en realidad una prueba de estrés adversarial: el interrogador (humano) está buscando activamente el fallo, intentando encontrar la grieta en <Link href="/identidad" className="text-orange-400 hover:text-orange-300 underline decoration-orange-500/50 underline-offset-4">{t('link_identidad')}</Link>, buscando ese error sutil que delate a la máquina.
          </p>
          <p>{t('p_2_2')}</p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#7B2CBF] mb-4">
            {t('h2_3')}
          </h2>
          <p className="mb-4">{t('p_3_1')}</p>
          <p>{t('p_3_2')}</p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#7B2CBF] mb-4">
            {t('h2_4')}
          </h2>
          <p>{t('p_4_1')}</p>
        </section>

        <div className="mt-16 pt-8 border-t border-zinc-800 bg-zinc-900/30 p-8 rounded-2xl">
          <p className="text-xl md:text-2xl text-white font-medium mb-6 text-center">
            {t('cta')}
          </p>
          <div className="flex justify-center">
            <TrackedLink 
              href="/#contact"
              targetName="manifiesto_cta"
              className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)]"
            >
              Hablemos
            </TrackedLink>
          </div>
        </div>

      </div>
    </article>
  );
}
