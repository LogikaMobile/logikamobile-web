"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HomeMethodologySection() {
  const t = useTranslations();

  const steps = [
    {
      num: t('HomeSections.step1_num'),
      name: t('HomeSections.step1_name'),
      desc: t('HomeSections.step1_summary'),
      accent: 'border-orange-500/40 text-orange-400',
      badgeBg: 'bg-orange-500/10 text-orange-400'
    },
    {
      num: t('HomeSections.step2_num'),
      name: t('HomeSections.step2_name'),
      desc: t('HomeSections.step2_summary'),
      accent: 'border-[#6CD3D3]/40 text-[#6CD3D3]',
      badgeBg: 'bg-[#6CD3D3]/10 text-[#6CD3D3]'
    },
    {
      num: t('HomeSections.step3_num'),
      name: t('HomeSections.step3_name'),
      desc: t('HomeSections.step3_summary'),
      accent: 'border-[#7B2CBF]/40 text-[#7B2CBF]',
      badgeBg: 'bg-[#7B2CBF]/10 text-[#7B2CBF]'
    },
    {
      num: t('HomeSections.step4_num'),
      name: t('HomeSections.step4_name'),
      desc: t('HomeSections.step4_summary'),
      accent: 'border-green-500/40 text-green-400',
      badgeBg: 'bg-green-500/10 text-green-400'
    }
  ];

  return (
    <section className="py-24 md:py-36 px-6 max-w-7xl mx-auto border-b border-zinc-900/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-orange-600/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs rounded-full uppercase tracking-widest mb-4">
          {t('HomeSections.workflow_tag')}
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          {t('HomeSections.workflow_title_1')}
          <span className="text-orange-500">{t('HomeSections.workflow_title_2')}</span>
          <span className="text-[#6CD3D3]">.</span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
          {t('HomeSections.workflow_desc')}
        </p>
      </div>

      {/* 4 Steps Horizontal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {steps.map((step) => (
          <div 
            key={step.num}
            className={`bg-zinc-950/70 border ${step.accent} p-8 rounded-2xl relative overflow-hidden hover:bg-black transition-colors duration-300 group`}
          >
            <div className="flex items-center justify-between mb-6">
              <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md ${step.badgeBg}`}>
                FASE {step.num}
              </span>
              <span className="font-mono text-2xl font-black text-zinc-700 group-hover:text-zinc-500 transition-colors">
                {step.num}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              {step.name}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTAs to Methodology and Turing Manifesto */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link
          href="/methodology"
          className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm tracking-widest uppercase transition-colors duration-300 text-center"
        >
          {t('HomeSections.workflow_cta_method')}
        </Link>
        <Link
          href="/manifiesto"
          className="w-full sm:w-auto px-8 py-4 border border-[#7B2CBF] text-[#7B2CBF] hover:bg-[#7B2CBF]/10 font-bold text-sm tracking-widest uppercase transition-colors duration-300 text-center"
        >
          {t('HomeSections.workflow_cta_manifesto')}
        </Link>
      </div>
    </section>
  );
}
