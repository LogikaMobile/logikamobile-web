"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

export default function BusinessCenterMockup() {
  const t = useTranslations('BusinessCenter');

  return (
    <div className="w-full my-16 bg-zinc-950 border border-zinc-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(123,44,191,0.25)] relative group">
      {/* Glow overlay */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7B2CBF]/10 blur-[100px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 blur-[100px] pointer-events-none rounded-full"></div>

      {/* Browser Chrome Header */}
      <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
          <div className="ml-4 hidden sm:flex items-center gap-2 px-3 py-1 bg-black/60 border border-zinc-800 rounded-md font-mono text-xs text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>portal.logikamobile.com.mx/dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B2CBF]/20 text-[#6CD3D3] border border-[#7B2CBF]/40 font-mono text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            {t('mockup_badge')}
          </span>
        </div>
      </div>

      {/* Mockup Dashboard Content */}
      <div className="p-6 md:p-10 space-y-8 font-sans">
        
        {/* Top Org & Status Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7B2CBF] to-orange-500 flex items-center justify-center font-bold text-white text-base shadow-lg">
                LM
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  {t('mockup_client_name')}
                </h4>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="text-[#6CD3D3]">ID: #CLI-8842</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">SLA Enterprise Activo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs rounded-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Sprint 14.2 // En Curso
            </span>
            <span className="px-3 py-1.5 bg-[#7B2CBF]/20 text-white border border-[#7B2CBF]/40 font-mono text-xs rounded-lg font-bold">
              + Nuevo Ticket
            </span>
          </div>
        </div>

        {/* 3 Metrics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Metric 1: Bolsa de Horas */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 relative overflow-hidden group/card hover:border-[#7B2CBF]/60 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">{t('mockup_hours_title')}</span>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">65% Disp.</span>
            </div>
            <div className="text-3xl font-black text-white mb-2">
              77.5 <span className="text-sm font-normal text-zinc-400">/ 120 hrs</span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden my-3">
              <div className="h-full bg-gradient-to-r from-[#7B2CBF] to-orange-500 rounded-full" style={{ width: '35%' }}></div>
            </div>

            <div className="flex justify-between text-xs font-mono text-zinc-400 mt-2">
              <span>{t('mockup_hours_used')}</span>
              <span className="text-zinc-500">Reset: 14 días</span>
            </div>
          </div>

          {/* Metric 2: SLA Promedio */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 relative overflow-hidden group/card hover:border-orange-500/60 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">{t('mockup_sla_title')}</span>
              <span className="text-xs font-mono font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">100% On-Time</span>
            </div>
            <div className="text-3xl font-black text-orange-400 mb-2">
              {t('mockup_sla_val')}
            </div>
            <p className="text-xs font-mono text-zinc-400 mt-4 flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><polyline points="20 6 9 17 4 12"/></svg>
              {t('mockup_sla_target')}
            </p>
          </div>

          {/* Metric 3: Estado de Tickets */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 relative overflow-hidden group/card hover:border-[#6CD3D3]/60 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">{t('mockup_tickets_title')}</span>
              <span className="text-xs font-mono font-bold text-[#6CD3D3] bg-[#6CD3D3]/10 px-2 py-0.5 rounded border border-[#6CD3D3]/20">Ágil</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center my-2">
              <div className="bg-black/50 p-2 rounded-lg border border-zinc-800">
                <span className="block text-xl font-bold text-white">3</span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Dev</span>
              </div>
              <div className="bg-black/50 p-2 rounded-lg border border-zinc-800">
                <span className="block text-xl font-bold text-yellow-400">1</span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase">QA</span>
              </div>
              <div className="bg-black/50 p-2 rounded-lg border border-zinc-800">
                <span className="block text-xl font-bold text-green-400">14</span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Done</span>
              </div>
            </div>
            <p className="text-xs font-mono text-zinc-400 text-center mt-2">
              {t('mockup_tickets_done')}
            </p>
          </div>

        </div>

        {/* Live Requirement Queue (Ticket Board Table) */}
        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-sm font-mono uppercase tracking-wider text-zinc-300 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              {t('mockup_recent_title')}
            </h5>
            <span className="text-xs font-mono text-zinc-500">Actualizado hace 4 min</span>
          </div>

          <div className="space-y-3">
            {/* Ticket 1 */}
            <div className="bg-black/60 border border-zinc-800 hover:border-[#7B2CBF]/60 transition-colors rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-start md:items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#7B2CBF] bg-[#7B2CBF]/10 px-2 py-1 rounded border border-[#7B2CBF]/30 shrink-0">
                  {t('mockup_ticket_1_id')}
                </span>
                <span className="text-sm md:text-base font-medium text-zinc-200">
                  {t('mockup_ticket_1_title')}
                </span>
              </div>
              <div className="flex items-center gap-3 self-end md:self-auto">
                <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                  {t('mockup_ticket_1_prio')}
                </span>
                <span className="text-xs font-mono font-semibold text-white bg-[#7B2CBF] px-3 py-1 rounded-full shadow-[0_0_10px_rgba(123,44,191,0.4)]">
                  {t('mockup_ticket_1_status')}
                </span>
              </div>
            </div>

            {/* Ticket 2 */}
            <div className="bg-black/60 border border-zinc-800 hover:border-yellow-500/60 transition-colors rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-start md:items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#6CD3D3] bg-[#6CD3D3]/10 px-2 py-1 rounded border border-[#6CD3D3]/30 shrink-0">
                  {t('mockup_ticket_2_id')}
                </span>
                <span className="text-sm md:text-base font-medium text-zinc-200">
                  {t('mockup_ticket_2_title')}
                </span>
              </div>
              <div className="flex items-center gap-3 self-end md:self-auto">
                <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                  {t('mockup_ticket_2_prio')}
                </span>
                <span className="text-xs font-mono font-semibold text-yellow-300 bg-yellow-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
                  {t('mockup_ticket_2_status')}
                </span>
              </div>
            </div>

            {/* Ticket 3 */}
            <div className="bg-black/60 border border-zinc-800 hover:border-green-500/60 transition-colors rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-start md:items-center gap-3">
                <span className="font-mono text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/30 shrink-0">
                  {t('mockup_ticket_3_id')}
                </span>
                <span className="text-sm md:text-base font-medium text-zinc-200">
                  {t('mockup_ticket_3_title')}
                </span>
              </div>
              <div className="flex items-center gap-3 self-end md:self-auto">
                <span className="text-xs font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                  {t('mockup_ticket_3_prio')}
                </span>
                <span className="text-xs font-mono font-semibold text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                  {t('mockup_ticket_3_status')}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
