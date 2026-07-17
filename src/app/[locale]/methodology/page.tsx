import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import WorkflowSection from '@/components/WorkflowSection';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Navigation' });
  return {
    title: `LogikaMobile | ${t('workflow')}`,
    description: "Nuestra metodología de desarrollo de software. Descubre cómo transformamos ideas en productos digitales de alta disponibilidad sin zonas grises."
  };
}

export default function MethodologyPage() {
  const t = useTranslations();

  return (
    <article className="min-h-screen pt-12 pb-20 selection:bg-orange-500/30 selection:text-orange-200">
      <h1 className="sr-only">
        {t('Navigation.workflow')} - LogikaMobile
      </h1>
      
      <WorkflowSection />
    </article>
  );
}
