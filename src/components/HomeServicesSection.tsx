"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import TrackedLink from '@/components/TrackedLink';

export default function HomeServicesSection() {
  const t = useTranslations();

  return (
    <section className="py-24 md:py-36 px-6 max-w-7xl mx-auto border-b border-zinc-900/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7B2CBF]/10 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="mb-16 md:mb-20 text-center md:text-left">
        <span className="inline-block px-3 py-1 bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 text-[#6CD3D3] font-mono text-xs rounded-full uppercase tracking-widest mb-4">
          {t('HomeSections.services_tag')}
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          {t('HomeSections.services_title_1')}
          <span className="text-[#7B2CBF]">{t('HomeSections.services_title_2')}</span>
          <span className="text-orange-500">.</span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          {t('HomeSections.services_subtitle')}
        </p>
      </div>

      {/* 4 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Card 1: Arquitectura */}
        <div className="border border-zinc-800/80 bg-zinc-950/60 p-8 md:p-10 rounded-2xl hover:border-orange-500/50 hover:bg-black transition-all duration-300 group relative">
          <div className="w-16 h-16 mb-6">
            <img src="/logos/computerLogo.svg" alt="Arquitectura" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
            {t('Services.arch_title')}
          </h3>
          <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 font-mono text-xs mb-4 rounded border border-orange-500/20">
            {t('Services.arch_tags')}
          </span>
          <p className="text-zinc-400 text-base leading-relaxed">
            {t('Services.arch_desc')}
          </p>
        </div>

        {/* Card 2: Auditoría */}
        <div className="border border-zinc-800/80 bg-zinc-950/60 p-8 md:p-10 rounded-2xl hover:border-[#7B2CBF]/50 hover:bg-black transition-all duration-300 group relative">
          <div className="w-16 h-16 mb-6">
            <img src="/logos/Audit.svg" alt="Auditoría" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(123,44,191,0.2)] group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#6CD3D3] transition-colors">
            {t('Services.audit_title')}
          </h3>
          <span className="inline-block px-3 py-1 bg-[#7B2CBF]/10 text-[#6CD3D3] font-mono text-xs mb-4 rounded border border-[#7B2CBF]/20">
            {t('Services.audit_tags')}
          </span>
          <p className="text-zinc-400 text-base leading-relaxed">
            {t('Services.audit_desc')}
          </p>
        </div>

        {/* Card 3: Software a la Medida */}
        <div className="border border-zinc-800/80 bg-zinc-950/60 p-8 md:p-10 rounded-2xl hover:border-orange-500/50 hover:bg-black transition-all duration-300 group relative">
          <div className="w-16 h-16 mb-6">
            <img src="/logos/LM_NBG.svg" alt="Software a la Medida" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
            {t('Services.custom_title')}
          </h3>
          <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 font-mono text-xs mb-4 rounded border border-orange-500/20">
            {t('Services.custom_tags')}
          </span>
          <p className="text-zinc-400 text-base leading-relaxed">
            {t('Services.custom_desc')}
          </p>
        </div>

        {/* Card 4: Hardware as a Service */}
        <div className="border border-zinc-800/80 bg-zinc-950/60 p-8 md:p-10 rounded-2xl hover:border-[#7B2CBF]/50 hover:bg-black transition-all duration-300 group relative">
          <div className="w-16 h-16 mb-6 text-orange-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
            {t('Services.haas_title')}
          </h3>
          <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 font-mono text-xs mb-4 rounded border border-orange-500/20">
            {t('Services.haas_tags')}
          </span>
          <p className="text-zinc-400 text-base leading-relaxed">
            {t('Services.haas_desc')}
          </p>
        </div>
      </div>

      {/* Featured LMaaS Subscription Card */}
      <div className="bg-gradient-to-br from-[#110524] to-black border border-[#7B2CBF]/50 rounded-3xl p-8 md:p-12 mb-12 shadow-[0_0_50px_rgba(123,44,191,0.25)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#7B2CBF]/10 blur-[90px] rounded-full pointer-events-none"></div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-[#7B2CBF]/20 text-[#6CD3D3] font-mono text-xs rounded-full border border-[#7B2CBF]/40 font-bold mb-4 uppercase tracking-widest">
              {t('HomeSections.lmaas_card_tag')}
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {t('HomeSections.lmaas_card_title')}
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              {t('HomeSections.lmaas_card_desc')}
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/lmaas"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#7B2CBF] hover:bg-orange-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(123,44,191,0.5)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105"
            >
              <span>{t('HomeSections.lmaas_card_cta')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-orange-400 transition-colors uppercase tracking-widest"
        >
          <span>{t('HomeSections.explore_all_services')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </Link>
      </div>
    </section>
  );
}
