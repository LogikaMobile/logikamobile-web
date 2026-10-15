import React from "react";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import TrackedLink from "@/components/TrackedLink";

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LogikaFiskal" });
  return {
    title: t("metadata_title"),
    description: t("metadata_desc"),
    alternates: {
      canonical: `/${locale}/logikafiskal`,
      languages: {
        es: "/es/logikafiskal",
        en: "/en/logikafiskal",
      },
    },
  };
}

export default function LogikaFiskalPage() {
  const t = useTranslations("LogikaFiskal");

  return (
    <article className="min-h-screen pt-28 pb-48 px-6 max-w-7xl mx-auto selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7B2CBF]/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[400px] bg-orange-600/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative z-10">

        {/* HERO HEADER */}
        <header className="text-center max-w-5xl mx-auto mb-28">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2 rounded-full bg-zinc-900/80 border border-orange-500/30 text-orange-400 text-xs md:text-sm font-mono tracking-wider mb-8 shadow-[0_0_25px_rgba(249,115,22,0.15)]">
            <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 font-bold uppercase">{t("badge_new")}</span>
            <span className="text-zinc-200">{t("header_version")}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 hidden sm:inline-block"></span>
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {t("header_status")}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6">
            <span className="text-[#7B2CBF]">{t("title_main")}</span>
            <span className="text-orange-500">{t("title_highlight")}</span>
            <span className="text-[#6CD3D3]">.</span>
          </h1>

          <p className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8">
            {t("subtitle")}
          </p>

          <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-4xl mx-auto leading-relaxed mb-12">
            {t("sub_description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <TrackedLink 
              href="/#contact" 
              targetName="fiskal_page_contact"
              className="px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>{t("btn_contact")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </TrackedLink>

            <TrackedLink 
              href="/" 
              targetName="fiskal_page_back"
              className="px-8 py-4 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 font-bold tracking-widest uppercase text-sm transition-colors duration-300 w-full sm:w-auto text-center"
            >
              {t("btn_back_home")}
            </TrackedLink>
          </div>
        </header>

        {/* 01. VISIÓN EJECUTIVA Y PROPUESTA DE VALOR */}
        <section className="mb-32 bg-zinc-950/70 border border-zinc-800/80 rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-[#6CD3D3] tracking-widest uppercase">
              {t("section1_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
            {t("section1_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg md:text-xl text-zinc-300 font-light leading-relaxed text-justify">
            <div className="p-6 bg-red-950/15 border-l-4 border-red-500/80 rounded-r-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 block mb-3">
                [!] El problema en México
              </span>
              <p>{t("section1_p1")}</p>
            </div>

            <div className="p-6 bg-emerald-950/15 border-l-4 border-emerald-500/80 rounded-r-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-3">
                [✓] La Solución LogikaFiskal
              </span>
              <p>{t("section1_p2")}</p>
            </div>
          </div>
        </section>

        {/* 02. ARQUITECTURA DE TRES NIVELES */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-orange-400 tracking-widest uppercase">
              {t("section2_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            {t("section2_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Level 1 */}
            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 group">
              <div>
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block mb-4">
                  {t("layer1_level")}
                </span>
                <TrackedLink href="/sekurita" targetName="fiskal_arch_sekurita_logo" className="block w-16 h-16 mb-6 p-2 rounded-xl bg-black/60 border border-orange-500/20 flex items-center justify-center group-hover:border-orange-500/40 group-hover:scale-110 transition-all duration-300">
                  <img src="/logos/sekurita_logo.svg" alt="SeKurita Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]" />
                </TrackedLink>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-orange-400 transition-colors">
                  <TrackedLink href="/sekurita" targetName="fiskal_arch_sekurita_title" className="hover:underline inline-flex items-center gap-2">
                    <span>{t("layer1_title")}</span>
                    <span className="text-sm font-mono text-orange-400 font-normal">→</span>
                  </TrackedLink>
                </h3>
                <p className="text-zinc-400 leading-relaxed font-light text-justify mb-6">
                  {t("layer1_desc")}
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono">
                <span className="text-orange-400/90 font-medium">{t("layer1_role")}</span>
                <TrackedLink href="/sekurita" targetName="fiskal_arch_sekurita_link" className="text-orange-400 hover:text-orange-300 font-bold underline">
                  Ver Framework →
                </TrackedLink>
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-[#6CD3D3]/60 transition-all duration-300 group">
              <div>
                <span className="text-xs font-mono font-bold text-[#6CD3D3] uppercase tracking-widest block mb-4">
                  {t("layer2_level")}
                </span>
                <div className="w-16 h-16 mb-6 p-2 rounded-xl bg-black/60 border border-[#6CD3D3]/20 flex items-center justify-center text-[#6CD3D3] group-hover:border-[#6CD3D3]/40 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_12px_rgba(108,211,211,0.4)]">
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="M12 12v9" />
                    <path d="m8 17 4 4 4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-[#6CD3D3] transition-colors">
                  {t("layer2_title")}
                </h3>
                <p className="text-zinc-400 leading-relaxed font-light text-justify mb-6">
                  {t("layer2_desc")}
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-900 text-xs font-mono text-[#6CD3D3]/90 font-medium">
                {t("layer2_role")}
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-[#7B2CBF]/70 transition-all duration-300 group">
              <div>
                <span className="text-xs font-mono font-bold text-[#7B2CBF] uppercase tracking-widest block mb-4">
                  {t("layer3_level")}
                </span>
                <div className="w-16 h-16 mb-6 p-2 rounded-xl bg-black/60 border border-[#7B2CBF]/30 flex items-center justify-center group-hover:border-[#7B2CBF]/60 group-hover:scale-110 transition-all duration-300">
                  <img src="/logos/logikont_logo.svg" alt="LogiKont Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(123,44,191,0.5)]" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {t("layer3_title")}
                </h3>
                <p className="text-zinc-400 leading-relaxed font-light text-justify mb-6">
                  {t("layer3_desc")}
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-900 text-xs font-mono text-purple-400 font-medium">
                {t("layer3_role")}
              </div>
            </div>
          </div>
        </section>

        {/* 03. FICHA TÉCNICA Y COMPONENTES */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-[#7B2CBF] tracking-widest uppercase">
              {t("section3_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            {t("section3_title")}
          </h2>

          <div className="overflow-x-auto border border-zinc-800 rounded-2xl bg-zinc-950/90 shadow-2xl">
            <table className="w-full text-left border-collapse text-sm md:text-base">
              <thead>
                <tr className="border-b border-zinc-800 bg-black/60 text-xs font-mono uppercase tracking-wider text-zinc-400">
                  <th className="py-5 px-6 font-bold">{t("table_col_module")}</th>
                  <th className="py-5 px-6 font-bold">{t("table_col_stack")}</th>
                  <th className="py-5 px-6 font-bold">{t("table_col_persistence")}</th>
                  <th className="py-5 px-6 font-bold">{t("table_col_security")}</th>
                  <th className="py-5 px-6 font-bold">{t("table_col_role")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-black text-orange-400 text-lg">
                    <TrackedLink href="/sekurita" targetName="fiskal_tech_sekurita" className="hover:underline inline-flex items-center gap-1.5 group/link">
                      <span>SeKurita</span>
                      <span className="text-xs font-mono text-zinc-400 group-hover/link:text-orange-400 transition-colors">↗</span>
                    </TrackedLink>
                  </td>
                  <td className="py-6 px-6 font-mono text-xs md:text-sm">{t("sekurita_stack")}</td>
                  <td className="py-6 px-6 font-mono text-xs md:text-sm">{t("sekurita_persistence")}</td>
                  <td className="py-6 px-6 text-xs md:text-sm">{t("sekurita_security")}</td>
                  <td className="py-6 px-6 text-xs md:text-sm text-zinc-400 font-medium">{t("sekurita_role")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-black text-[#6CD3D3] text-lg">FisKalApi</td>
                  <td className="py-6 px-6 font-mono text-xs md:text-sm">{t("fiskalapi_stack")}</td>
                  <td className="py-6 px-6 font-mono text-xs md:text-sm">{t("fiskalapi_persistence")}</td>
                  <td className="py-6 px-6 text-xs md:text-sm">{t("fiskalapi_security")}</td>
                  <td className="py-6 px-6 text-xs md:text-sm text-zinc-400 font-medium">{t("fiskalapi_role")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-black text-[#7B2CBF] text-lg">LogiKont</td>
                  <td className="py-6 px-6 font-mono text-xs md:text-sm">{t("logikont_stack")}</td>
                  <td className="py-6 px-6 font-mono text-xs md:text-sm">{t("logikont_persistence")}</td>
                  <td className="py-6 px-6 text-xs md:text-sm">{t("logikont_security")}</td>
                  <td className="py-6 px-6 text-xs md:text-sm text-zinc-400 font-medium">{t("logikont_role")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 04. VENTAJA COMPETITIVA */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-orange-400 tracking-widest uppercase">
              {t("section4_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            {t("section4_title")}
          </h2>

          <div className="overflow-x-auto border border-zinc-800 rounded-2xl bg-zinc-950/90 shadow-2xl">
            <table className="w-full text-left border-collapse text-sm md:text-base">
              <thead>
                <tr className="border-b border-zinc-800 bg-black/60 text-xs font-mono uppercase tracking-wider">
                  <th className="py-5 px-6 font-bold text-zinc-400 w-1/4">{t("comp_col_vector")}</th>
                  <th className="py-5 px-6 font-bold text-red-400 w-3/8">{t("comp_col_traditional")}</th>
                  <th className="py-5 px-6 font-bold text-emerald-400 w-3/8">{t("comp_col_logikafiskal")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">{t("comp_row1_vector")}</td>
                  <td className="py-6 px-6 text-zinc-400 font-light">{t("comp_row1_trad")}</td>
                  <td className="py-6 px-6 text-emerald-300 font-medium bg-emerald-950/10">
                    <TrackedLink href="/sekurita" targetName="fiskal_comp_sekurita" className="text-orange-400 hover:text-orange-300 underline font-bold mr-1">
                      SeKurita:
                    </TrackedLink>
                    <span>{t("comp_row1_lf").replace(/^SeKurita:\s*/, "")}</span>
                  </td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">{t("comp_row2_vector")}</td>
                  <td className="py-6 px-6 text-zinc-400 font-light">{t("comp_row2_trad")}</td>
                  <td className="py-6 px-6 text-emerald-300 font-medium bg-emerald-950/10">{t("comp_row2_lf")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">{t("comp_row3_vector")}</td>
                  <td className="py-6 px-6 text-zinc-400 font-light">{t("comp_row3_trad")}</td>
                  <td className="py-6 px-6 text-emerald-300 font-medium bg-emerald-950/10">{t("comp_row3_lf")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">{t("comp_row4_vector")}</td>
                  <td className="py-6 px-6 text-zinc-400 font-light">{t("comp_row4_trad")}</td>
                  <td className="py-6 px-6 text-emerald-300 font-medium bg-emerald-950/10">{t("comp_row4_lf")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 05. INGENIERÍA EN DETALLE */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-[#6CD3D3] tracking-widest uppercase">
              {t("section5_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-16 tracking-tight">
            {t("section5_title")}
          </h2>

          {/* Module 1: SeKurita */}
          <div className="mb-20 bg-zinc-950/60 border border-zinc-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div className="flex items-center gap-5">
                <TrackedLink href="/sekurita" targetName="fiskal_detail_sekurita_logo" className="w-16 h-16 md:w-20 md:h-20 p-2.5 rounded-2xl bg-black/80 border border-orange-500/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:border-orange-500 transition-all hover:scale-105">
                  <img src="/logos/sekurita_logo.svg" alt="SeKurita Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
                </TrackedLink>
                <div>
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block mr-2"></span>
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">MÓDULO DE SEGURIDAD CRIPTOGRÁFICA</span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
                    <TrackedLink href="/sekurita" targetName="fiskal_detail_sekurita_title" className="hover:text-orange-400 transition-colors">
                      SeKurita
                    </TrackedLink>: <span className="text-orange-400 font-light">Cimientos de Grado Militar (ISO/IEC 27001:2022)</span>
                  </h3>
                </div>
              </div>
              <TrackedLink 
                href="/sekurita" 
                targetName="fiskal_detail_sekurita_btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 text-xs font-mono tracking-wider transition-all self-start md:self-auto font-bold shrink-0"
              >
                <span>Dossier SeKurita</span>
                <span>→</span>
              </TrackedLink>
            </div>
            <p className="text-orange-400/90 italic font-mono text-sm md:text-base mb-10 pl-6 border-l-2 border-orange-500">
              {t("sekurita_quote")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-black/60 border border-zinc-900 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{t("sekurita_feat1_title")}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">{t("sekurita_feat1_desc")}</p>
              </div>

              <div className="p-6 bg-black/60 border border-zinc-900 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{t("sekurita_feat2_title")}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">{t("sekurita_feat2_desc")}</p>
              </div>

              <div className="p-6 bg-black/60 border border-zinc-900 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{t("sekurita_feat3_title")}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">{t("sekurita_feat3_desc")}</p>
              </div>

              <div className="p-6 bg-black/60 border border-zinc-900 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{t("sekurita_feat4_title")}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">{t("sekurita_feat4_desc")}</p>
              </div>
            </div>
          </div>

          {/* Module 2: FisKalApi */}
          <div className="mb-20 bg-zinc-950/60 border border-zinc-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#6CD3D3]"></span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                FisKalApi: <span className="text-[#6CD3D3] font-light">Ingeniería de Alta Velocidad y Extracción SAT</span>
              </h3>
            </div>
            <p className="text-[#6CD3D3]/90 italic font-mono text-sm md:text-base mb-10 pl-6 border-l-2 border-[#6CD3D3]">
              {t("fiskalapi_quote")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-black/60 border border-zinc-900 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{t("fiskalapi_feat1_title")}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">{t("fiskalapi_feat1_desc")}</p>
              </div>

              <div className="p-6 bg-black/60 border border-zinc-900 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{t("fiskalapi_feat2_title")}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">{t("fiskalapi_feat2_desc")}</p>
              </div>

              <div className="p-6 bg-black/60 border border-zinc-900 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{t("fiskalapi_feat3_title")}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">{t("fiskalapi_feat3_desc")}</p>
              </div>

              <div className="p-6 bg-black/60 border border-zinc-900 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{t("fiskalapi_feat4_title")}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">{t("fiskalapi_feat4_desc")}</p>
              </div>
            </div>
          </div>

          {/* Module 3: LogiKont */}
          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 p-2.5 rounded-2xl bg-black/80 border border-[#7B2CBF]/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(123,44,191,0.3)]">
                <img src="/logos/logikont_logo.svg" alt="LogiKont Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(123,44,191,0.5)]" />
              </div>
              <div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#7B2CBF] inline-block mr-2"></span>
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">ERP MULTI-TENANT CON IA</span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
                  LogiKont: <span className="text-purple-300 font-light">Acabados de Lujo, Multi-Tenant e Inteligencia Artificial</span>
                </h3>
              </div>
            </div>
            <p className="text-purple-300/90 italic font-mono text-sm md:text-base mb-10 pl-6 border-l-2 border-[#7B2CBF]">
              {t("logikont_quote")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-black/60 border border-zinc-900 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{t("logikont_feat1_title")}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">{t("logikont_feat1_desc")}</p>
              </div>

              <div className="p-6 bg-black/60 border border-zinc-900 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{t("logikont_feat2_title")}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">{t("logikont_feat2_desc")}</p>
              </div>

              <div className="p-6 bg-black/60 border border-zinc-900 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">{t("logikont_feat3_title")}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">{t("logikont_feat3_desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 06. FLUJO OPERATIVO TRANSVERSAL */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-orange-400 tracking-widest uppercase">
              {t("section6_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            {t("section6_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/50 border border-zinc-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-orange-500/60 transition-colors">
              <span className="text-3xl font-mono font-black text-orange-500/50 block mb-4 group-hover:text-orange-400 transition-colors">01</span>
              <h3 className="text-xl font-bold text-white mb-3">{t("flow_step1_title")}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{t("flow_step1_desc")}</p>
            </div>

            <div className="bg-black/50 border border-zinc-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-[#6CD3D3]/60 transition-colors">
              <span className="text-3xl font-mono font-black text-[#6CD3D3]/50 block mb-4 group-hover:text-[#6CD3D3] transition-colors">02</span>
              <h3 className="text-xl font-bold text-white mb-3">{t("flow_step2_title")}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{t("flow_step2_desc")}</p>
            </div>

            <div className="bg-black/50 border border-zinc-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-[#7B2CBF]/70 transition-colors">
              <span className="text-3xl font-mono font-black text-[#7B2CBF]/50 block mb-4 group-hover:text-purple-400 transition-colors">03</span>
              <h3 className="text-xl font-bold text-white mb-3">{t("flow_step3_title")}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{t("flow_step3_desc")}</p>
            </div>

            <div className="bg-black/50 border border-zinc-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-orange-500/60 transition-colors">
              <span className="text-3xl font-mono font-black text-orange-500/50 block mb-4 group-hover:text-orange-400 transition-colors">04</span>
              <h3 className="text-xl font-bold text-white mb-3">{t("flow_step4_title")}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{t("flow_step4_desc")}</p>
            </div>

            <div className="bg-black/50 border border-zinc-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-[#6CD3D3]/60 transition-colors">
              <span className="text-3xl font-mono font-black text-[#6CD3D3]/50 block mb-4 group-hover:text-[#6CD3D3] transition-colors">05</span>
              <h3 className="text-xl font-bold text-white mb-3">{t("flow_step5_title")}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{t("flow_step5_desc")}</p>
            </div>

            <div className="bg-black/50 border border-zinc-800/80 p-8 rounded-2xl relative overflow-hidden group hover:border-[#7B2CBF]/70 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-3xl font-mono font-black text-[#7B2CBF]/50 block mb-4 group-hover:text-purple-400 transition-colors">06</span>
                <h3 className="text-xl font-bold text-white mb-3">{t("flow_step6_title")}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">{t("flow_step6_desc")}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-900">
                <TrackedLink href="/sekurita" targetName="fiskal_flow_sekurita" className="text-xs font-mono text-orange-400 hover:text-orange-300 underline font-bold inline-flex items-center gap-1">
                  <span>AuditLedgerEngine en SeKurita →</span>
                </TrackedLink>
              </div>
            </div>
          </div>
        </section>

        {/* 07. MATRIZ DE COMERCIALIZACIÓN */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-[#7B2CBF] tracking-widest uppercase">
              {t("section7_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            {t("section7_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-orange-500/60 transition-colors">
              <div>
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block mb-4">
                  {t("comm_row1_profile")}
                </span>
                <h3 className="text-2xl font-black text-white mb-4">
                  {t("comm_row1_modal")}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">
                  {t("comm_row1_arg")}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-zinc-900">
                <TrackedLink href="/sekurita" targetName="fiskal_comm_sekurita_card1" className="text-xs font-mono text-orange-400 hover:text-orange-300 underline font-bold inline-flex items-center gap-1">
                  <span>Capa Criptográfica SeKurita →</span>
                </TrackedLink>
              </div>
            </div>

            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-[#6CD3D3]/60 transition-colors">
              <div>
                <span className="text-xs font-mono font-bold text-[#6CD3D3] uppercase tracking-widest block mb-4">
                  {t("comm_row2_profile")}
                </span>
                <h3 className="text-2xl font-black text-white mb-4">
                  {t("comm_row2_modal")}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">
                  {t("comm_row2_arg")}
                </p>
              </div>
            </div>

            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-[#7B2CBF]/70 transition-colors">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-4">
                  {t("comm_row3_profile")}
                </span>
                <h3 className="text-2xl font-black text-white mb-4">
                  {t("comm_row3_modal")}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">
                  {t("comm_row3_arg")}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-zinc-900">
                <TrackedLink href="/sekurita" targetName="fiskal_comm_sekurita_card3" className="text-xs font-mono text-orange-400 hover:text-orange-300 underline font-bold inline-flex items-center gap-1">
                  <span>Adquirir SeKurita SDK B2B →</span>
                </TrackedLink>
              </div>
            </div>
          </div>
        </section>

        {/* 08. MATRIZ DE CUMPLIMIENTO REGULATORIO */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-emerald-400 tracking-widest uppercase">
              {t("section8_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            {t("section8_title")}
          </h2>

          <div className="overflow-x-auto border border-zinc-800 rounded-2xl bg-zinc-950/90 shadow-2xl">
            <table className="w-full text-left border-collapse text-sm md:text-base">
              <thead>
                <tr className="border-b border-zinc-800 bg-black/60 text-xs font-mono uppercase tracking-wider text-zinc-400">
                  <th className="py-5 px-6 font-bold w-1/5">{t("norm_col_control")}</th>
                  <th className="py-5 px-6 font-bold w-1/5">{t("norm_col_entity")}</th>
                  <th className="py-5 px-6 font-bold w-3/5">{t("norm_col_mechanism")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-orange-400">{t("norm_row1_control")}</td>
                  <td className="py-5 px-6 font-mono text-xs">{t("norm_row1_entity")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("norm_row1_mech")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-orange-400">{t("norm_row2_control")}</td>
                  <td className="py-5 px-6 font-mono text-xs">{t("norm_row2_entity")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("norm_row2_mech")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-orange-400">{t("norm_row3_control")}</td>
                  <td className="py-5 px-6 font-mono text-xs">{t("norm_row3_entity")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("norm_row3_mech")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-orange-400">{t("norm_row4_control")}</td>
                  <td className="py-5 px-6 font-mono text-xs">{t("norm_row4_entity")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("norm_row4_mech")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-orange-400">{t("norm_row5_control")}</td>
                  <td className="py-5 px-6 font-mono text-xs">{t("norm_row5_entity")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("norm_row5_mech")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-orange-400">{t("norm_row6_control")}</td>
                  <td className="py-5 px-6 font-mono text-xs">{t("norm_row6_entity")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("norm_row6_mech")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-[#6CD3D3]">{t("norm_row7_control")}</td>
                  <td className="py-5 px-6 font-mono text-xs">{t("norm_row7_entity")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("norm_row7_mech")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-[#7B2CBF]">{t("norm_row8_control")}</td>
                  <td className="py-5 px-6 font-mono text-xs">{t("norm_row8_entity")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("norm_row8_mech")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section className="bg-gradient-to-r from-zinc-950 via-black to-zinc-950 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-[0_0_60px_rgba(249,115,22,0.1)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7B2CBF]/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              {t("cta_banner_title")}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-10 leading-relaxed">
              {t("cta_banner_subtitle")}
            </p>
            <TrackedLink 
              href="/#contact" 
              targetName="fiskal_bottom_contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold tracking-widest uppercase text-base rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.7)] hover:scale-105"
            >
              <span>{t("btn_contact")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </TrackedLink>
          </div>
        </section>

      </div>
    </article>
  );
}
