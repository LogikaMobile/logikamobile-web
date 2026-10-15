"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import TrackedLink from '@/components/TrackedLink';

export default function HomeBusinessCenterSection() {
  const t = useTranslations();

  return (
    <section className="py-24 md:py-36 px-6 max-w-7xl mx-auto border-b border-zinc-900/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7B2CBF]/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-5 text-center lg:text-left">
          <span className="inline-block px-3 py-1 bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 text-[#6CD3D3] font-mono text-xs rounded-full uppercase tracking-widest mb-4">
            {t('HomeSections.portal_tag')}
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            <span className="text-zinc-100">{t('HomeSections.portal_title_1')}</span>
            <span className="text-[#7B2CBF]">{t('HomeSections.portal_title_2')}</span>
            <span className="text-orange-500">.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-8">
            {t('HomeSections.portal_desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/business-center"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7B2CBF] hover:bg-[#6824a3] text-white font-bold text-sm tracking-wider uppercase rounded-xl transition-colors shadow-[0_0_25px_rgba(123,44,191,0.4)]"
            >
              <span>{t('HomeSections.portal_cta_view')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>

            <TrackedLink
              href="https://portal.logikamobile.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              targetName="home_b2b_login"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-700 hover:border-orange-500/50 text-zinc-200 font-bold text-sm tracking-wider uppercase rounded-xl transition-colors"
            >
              <span>{t('HomeSections.portal_cta_login')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </TrackedLink>
          </div>
        </div>

        {/* Right Column: Mini Interactive Dashboard Preview */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden group hover:border-[#7B2CBF]/50 transition-colors duration-500">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-2 font-mono text-xs text-zinc-500">portal.logikamobile.com.mx</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                100% SLA Cumplido
              </span>
            </div>

            {/* Metrics Snippets */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 block mb-1">Bolsa de Horas</span>
                <div className="text-2xl font-black text-white">77.5 <span className="text-xs text-zinc-500 font-normal">/ 120 hrs</span></div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#7B2CBF] to-orange-500" style={{ width: '35%' }}></div>
                </div>
              </div>

              <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 block mb-1">SLA Promedio</span>
                <div className="text-2xl font-black text-orange-400">48 min</div>
                <span className="text-xs font-mono text-zinc-500 mt-1 block">Objetivo &lt; 2h</span>
              </div>
            </div>

            {/* Live Ticket Row Sample */}
            <div className="bg-black/80 border border-zinc-800/80 rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#7B2CBF] bg-[#7B2CBF]/10 px-2 py-0.5 rounded border border-[#7B2CBF]/30 font-bold">#TK-204</span>
                <span className="text-sm font-medium text-zinc-300 truncate max-w-xs md:max-w-md">API Pagos Stripe v3 & Webhooks Idempotentes</span>
              </div>
              <span className="text-xs font-mono text-white bg-[#7B2CBF] px-2.5 py-0.5 rounded-full shrink-0">
                En Desarrollo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
