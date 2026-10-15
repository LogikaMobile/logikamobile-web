"use client";

import { useTranslations } from "next-intl";
import TrackedLink from "@/components/TrackedLink";

export default function LogikaFiskalSection() {
  const t = useTranslations("LogikaFiskalHome");

  return (
    <section id="logikafiskal" className="py-28 md:py-36 border-t border-zinc-900/80 bg-gradient-to-b from-black via-zinc-950/60 to-black relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#7B2CBF]/10 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-orange-600/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Badge & Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-orange-500/30 text-orange-400 text-xs md:text-sm font-mono tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {t("badge")}
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            <span className="text-[#7B2CBF]">{t("title_prefix")}</span>
            <span className="text-orange-500">{t("title_highlight")}</span>
            <span className="text-[#6CD3D3]">{t("title_dot")}</span>
          </h2>

          <p className="text-2xl md:text-3xl font-extrabold text-zinc-100 tracking-tight max-w-4xl mb-6">
            {t("tagline")}
          </p>

          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed text-justify md:text-center">
            {t("desc")}
          </p>
        </div>

        {/* 4 Technical Highlights / Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          <div className="bg-black/60 border border-zinc-800/70 p-6 rounded-2xl relative overflow-hidden group hover:border-[#7B2CBF]/60 transition-colors">
            <div className="text-3xl md:text-4xl font-mono font-black text-orange-400 mb-2">
              {t("metric_1_val")}
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-400">
              {t("metric_1_label")}
            </div>
          </div>

          <div className="bg-black/60 border border-zinc-800/70 p-6 rounded-2xl relative overflow-hidden group hover:border-orange-500/60 transition-colors">
            <div className="text-3xl md:text-4xl font-mono font-black text-[#6CD3D3] mb-2">
              {t("metric_2_val")}
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-400">
              {t("metric_2_label")}
            </div>
          </div>

          <div className="bg-black/60 border border-zinc-800/70 p-6 rounded-2xl relative overflow-hidden group hover:border-[#7B2CBF]/60 transition-colors">
            <div className="text-3xl md:text-4xl font-mono font-black text-[#7B2CBF] mb-2">
              {t("metric_3_val")}
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-400">
              {t("metric_3_label")}
            </div>
          </div>

          <div className="bg-black/60 border border-zinc-800/70 p-6 rounded-2xl relative overflow-hidden group hover:border-orange-500/60 transition-colors">
            <div className="text-3xl md:text-4xl font-mono font-black text-emerald-400 mb-2">
              {t("metric_4_val")}
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-400">
              {t("metric_4_label")}
            </div>
          </div>
        </div>

        {/* 3 Architecture Layers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Layer 1: SeKurita */}
          <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_35px_rgba(249,115,22,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-orange-400 tracking-widest uppercase">
                  {t("layer1_level")}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  {t("layer1_tag")}
                </span>
              </div>
              <TrackedLink href="/sekurita" targetName="home_layer1_sekurita_logo" className="block w-16 h-16 mb-6 p-2 rounded-xl bg-black/60 border border-orange-500/20 flex items-center justify-center group-hover:border-orange-500/40 group-hover:scale-110 transition-all duration-300">
                <img src="/logos/sekurita_logo.svg" alt="SeKurita Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]" />
              </TrackedLink>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-orange-400 transition-colors">
                <TrackedLink href="/sekurita" targetName="home_layer1_sekurita_title" className="hover:underline inline-flex items-center gap-2">
                  <span>{t("layer1_title")}</span>
                  <span className="text-sm font-mono text-orange-400">→</span>
                </TrackedLink>
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed text-justify font-light">
                {t("layer1_desc")}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>Google Cloud KMS · Tink 1.7</span>
              <TrackedLink href="/sekurita" targetName="home_layer1_sekurita_link" className="text-orange-400 hover:text-orange-300 font-bold underline">
                Ver SeKurita →
              </TrackedLink>
            </div>
          </div>

          {/* Layer 2: FisKalApi */}
          <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-8 hover:border-[#6CD3D3]/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_35px_rgba(108,211,211,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6CD3D3] to-cyan-500"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-[#6CD3D3] tracking-widest uppercase">
                  {t("layer2_level")}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#6CD3D3]/10 text-[#6CD3D3] border border-[#6CD3D3]/20">
                  {t("layer2_tag")}
                </span>
              </div>
              <div className="w-16 h-16 mb-6 p-2 rounded-xl bg-black/60 border border-[#6CD3D3]/20 flex items-center justify-center text-[#6CD3D3] group-hover:border-[#6CD3D3]/40 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_12px_rgba(108,211,211,0.4)]">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m8 17 4 4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#6CD3D3] transition-colors">
                {t("layer2_title")}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed text-justify font-light">
                {t("layer2_desc")}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-zinc-900 flex items-center text-xs font-mono text-zinc-500">
              <span>FlowSAT SOAP · Playwright · FlowBD Proxy</span>
            </div>
          </div>

          {/* Layer 3: LogiKont */}
          <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-8 hover:border-[#7B2CBF]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_35px_rgba(123,44,191,0.25)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7B2CBF] to-purple-500"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-[#7B2CBF] tracking-widest uppercase">
                  {t("layer3_level")}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#7B2CBF]/10 text-[#7B2CBF] border border-[#7B2CBF]/30">
                  {t("layer3_tag")}
                </span>
              </div>
              <div className="w-16 h-16 mb-6 p-2 rounded-xl bg-black/60 border border-[#7B2CBF]/30 flex items-center justify-center group-hover:border-[#7B2CBF]/60 group-hover:scale-110 transition-all duration-300">
                <img src="/logos/logikont_logo.svg" alt="LogiKont Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(123,44,191,0.5)]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-purple-300 transition-colors">
                {t("layer3_title")}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed text-justify font-light">
                {t("layer3_desc")}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-zinc-900 flex items-center text-xs font-mono text-zinc-500">
              <span>Schema-per-Tenant · Next.js 16 · Gemini AI</span>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <TrackedLink 
            href="/logikafiskal" 
            targetName="home_fiskal_explore"
            className="px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:shadow-[0_0_35px_rgba(249,115,22,0.5)] flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <span>{t("btn_explore")}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </TrackedLink>

          <TrackedLink 
            href="/#contact" 
            targetName="home_fiskal_quote"
            className="px-10 py-4 border border-[#7B2CBF] text-[#7B2CBF] hover:bg-[#7B2CBF]/10 font-bold tracking-widest uppercase text-sm transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            {t("btn_quote")}
          </TrackedLink>
        </div>

      </div>
    </section>
  );
}
