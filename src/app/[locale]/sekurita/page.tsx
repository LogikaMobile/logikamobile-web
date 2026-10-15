import React from "react";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import TrackedLink from "@/components/TrackedLink";

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SeKurita" });
  return {
    title: t("metadata_title"),
    description: t("metadata_desc"),
    alternates: {
      canonical: `/${locale}/sekurita`,
      languages: {
        es: "/es/sekurita",
        en: "/en/sekurita",
      },
    },
  };
}

export default function SeKuritaPage() {
  const t = useTranslations("SeKurita");

  return (
    <article className="min-h-screen pt-28 pb-48 px-6 max-w-7xl mx-auto selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[#003B5C]/25 blur-[160px] rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-[550px] h-[400px] bg-[#42C8C6]/15 blur-[170px] rounded-full"></div>
      </div>

      <div className="relative z-10">

        {/* HERO HEADER */}
        <header className="text-center max-w-5xl mx-auto mb-28">
          
          {/* SeKurita Shield Logo */}
          <div className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-10 p-4 rounded-3xl bg-black/80 border border-orange-500/30 flex items-center justify-center shadow-[0_0_60px_rgba(249,115,22,0.3)] hover:scale-105 transition-transform duration-300">
            <img src="/logos/sekurita_logo.svg" alt="SeKurita Logo" className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(249,115,22,0.5)]" />
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2 rounded-full bg-zinc-900/80 border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-mono tracking-wider mb-8 shadow-[0_0_25px_rgba(66,200,198,0.15)]">
            <span>{t("badge_iso")}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 hidden sm:inline-block"></span>
            <span className="text-orange-400 font-bold">{t("badge_monorepo")}</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6">
            <span className="text-[#7B2CBF]">{t("title_main")}</span>
            <span className="text-orange-500">{t("title_highlight")}</span>
            <span className="text-[#6CD3D3]">{t("title_dot")}</span>
          </h1>

          <p className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            {t("subtitle")}
          </p>

          <p className="text-xl md:text-2xl text-orange-400 font-medium max-w-4xl mx-auto mb-8 tracking-tight">
            {t("tagline")}
          </p>

          <p className="text-lg md:text-xl text-zinc-300 font-light max-w-4xl mx-auto leading-relaxed mb-12">
            {t("sub_description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <TrackedLink 
              href="/#contact" 
              targetName="sekurita_page_contact"
              className="px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>{t("btn_contact")}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </TrackedLink>

            <TrackedLink 
              href="/logikafiskal" 
              targetName="sekurita_page_to_fiskal"
              className="px-8 py-4 border border-[#7B2CBF] text-purple-300 hover:bg-[#7B2CBF]/10 font-bold tracking-widest uppercase text-sm transition-colors duration-300 w-full sm:w-auto text-center"
            >
              {t("btn_fiskal")}
            </TrackedLink>
          </div>
        </header>

        {/* 01. VISIÓN GENERAL Y PROPÓSITO DEL FRAMEWORK */}
        <section className="mb-32 bg-zinc-950/70 border border-zinc-800/80 rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-cyan-400 tracking-widest uppercase">
              {t("section1_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
            {t("section1_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg md:text-xl text-zinc-300 font-light leading-relaxed text-justify">
            <div className="p-6 bg-cyan-950/15 border-l-4 border-cyan-500/80 rounded-r-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-3">
                [✓] Estándar Internacional
              </span>
              <p>{t("section1_p1")}</p>
            </div>

            <div className="p-6 bg-orange-950/15 border-l-4 border-orange-500/80 rounded-r-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 block mb-3">
                [⚙] Embebible y Multiplataforma
              </span>
              <p>{t("section1_p2")}</p>
            </div>
          </div>
        </section>

        {/* 02. ESTRUCTURA DEL MONOREPO Y DISTRIBUCIÓN DE MÓDULOS */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Module 1 */}
            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 group">
              <div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 block w-max mb-4">
                  {t("mod1_tag")}
                </span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {t("mod1_title")}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light text-justify">
                  {t("mod1_desc")}
                </p>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-500/60 transition-all duration-300 group">
              <div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 block w-max mb-4">
                  {t("mod2_tag")}
                </span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {t("mod2_title")}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light text-justify">
                  {t("mod2_desc")}
                </p>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-purple-500/60 transition-all duration-300 group">
              <div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 block w-max mb-4">
                  {t("mod3_tag")}
                </span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {t("mod3_title")}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light text-justify">
                  {t("mod3_desc")}
                </p>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-emerald-500/60 transition-all duration-300 group">
              <div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 block w-max mb-4">
                  {t("mod4_tag")}
                </span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {t("mod4_title")}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light text-justify">
                  {t("mod4_desc")}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 03. CAPACIDADES CRIPTOGRÁFICAS Y FICHA TÉCNICA */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-cyan-400 tracking-widest uppercase">
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
                  <th className="py-5 px-6 font-bold w-1/4">{t("cap_col_component")}</th>
                  <th className="py-5 px-6 font-bold w-1/3">{t("cap_col_tech")}</th>
                  <th className="py-5 px-6 font-bold w-5/12">{t("cap_col_purpose")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">{t("cap1_comp")}</td>
                  <td className="py-6 px-6 font-mono text-xs md:text-sm text-cyan-400">{t("cap1_tech")}</td>
                  <td className="py-6 px-6 text-sm text-zinc-300 leading-relaxed">{t("cap1_purpose")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">{t("cap2_comp")}</td>
                  <td className="py-6 px-6 font-mono text-xs md:text-sm text-orange-400">{t("cap2_tech")}</td>
                  <td className="py-6 px-6 text-sm text-zinc-300 leading-relaxed">{t("cap2_purpose")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">{t("cap3_comp")}</td>
                  <td className="py-6 px-6 font-mono text-xs md:text-sm text-purple-400">{t("cap3_tech")}</td>
                  <td className="py-6 px-6 text-sm text-zinc-300 leading-relaxed">{t("cap3_purpose")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">{t("cap4_comp")}</td>
                  <td className="py-6 px-6 font-mono text-xs md:text-sm text-emerald-400">{t("cap4_tech")}</td>
                  <td className="py-6 px-6 text-sm text-zinc-300 leading-relaxed">{t("cap4_purpose")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">{t("cap5_comp")}</td>
                  <td className="py-6 px-6 font-mono text-xs md:text-sm text-cyan-400">{t("cap5_tech")}</td>
                  <td className="py-6 px-6 text-sm text-zinc-300 leading-relaxed">{t("cap5_purpose")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 04. MECANISMOS DE INGENIERÍA PROFUNDA */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-orange-400 tracking-widest uppercase">
              {t("section4_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            {t("section4_title")}
          </h2>

          <p className="text-orange-400/90 italic font-mono text-base md:text-lg mb-12 pl-6 border-l-2 border-orange-500">
            {t("deep_quote")}
          </p>

          <div className="space-y-8">
            <div className="p-8 bg-zinc-950/70 border border-zinc-800 rounded-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-2.5 py-1 rounded bg-cyan-950/30 border border-cyan-500/20">Vulnerabilidad Crítica</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">{t("deep1_title")}</h3>
              </div>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed text-justify font-light">{t("deep1_desc")}</p>
            </div>

            <div className="p-8 bg-zinc-950/70 border border-zinc-800 rounded-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-2.5 py-1 rounded bg-orange-950/30 border border-orange-500/20">Higiene Estricta</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">{t("deep2_title")}</h3>
              </div>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed text-justify font-light">{t("deep2_desc")}</p>
            </div>

            <div className="p-8 bg-zinc-950/70 border border-zinc-800 rounded-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest px-2.5 py-1 rounded bg-purple-950/30 border border-purple-500/20">Inmutabilidad Criptográfica</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">{t("deep3_title")}</h3>
              </div>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed text-justify font-light">{t("deep3_desc")}</p>
            </div>
          </div>
        </section>

        {/* 05. MATRIZ DE CUMPLIMIENTO ISO/IEC 27001:2022 */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-emerald-400 tracking-widest uppercase">
              {t("section5_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            {t("section5_title")}
          </h2>

          <div className="overflow-x-auto border border-zinc-800 rounded-2xl bg-zinc-950/90 shadow-2xl">
            <table className="w-full text-left border-collapse text-sm md:text-base">
              <thead>
                <tr className="border-b border-zinc-800 bg-black/60 text-xs font-mono uppercase tracking-wider text-zinc-400">
                  <th className="py-5 px-6 font-bold w-1/6">{t("iso_col_control")}</th>
                  <th className="py-5 px-6 font-bold w-1/4">{t("iso_col_name")}</th>
                  <th className="py-5 px-6 font-bold w-7/12">{t("iso_col_impl")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-cyan-400">{t("iso1_ctrl")}</td>
                  <td className="py-5 px-6 font-bold text-white">{t("iso1_name")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("iso1_impl")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-cyan-400">{t("iso2_ctrl")}</td>
                  <td className="py-5 px-6 font-bold text-white">{t("iso2_name")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("iso2_impl")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-cyan-400">{t("iso3_ctrl")}</td>
                  <td className="py-5 px-6 font-bold text-white">{t("iso3_name")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("iso3_impl")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-cyan-400">{t("iso4_ctrl")}</td>
                  <td className="py-5 px-6 font-bold text-white">{t("iso4_name")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("iso4_impl")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-cyan-400">{t("iso5_ctrl")}</td>
                  <td className="py-5 px-6 font-bold text-white">{t("iso5_name")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("iso5_impl")}</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-5 px-6 font-mono font-bold text-cyan-400">{t("iso6_ctrl")}</td>
                  <td className="py-5 px-6 font-bold text-white">{t("iso6_name")}</td>
                  <td className="py-5 px-6 text-sm leading-relaxed text-zinc-300">{t("iso6_impl")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 06. MODELOS DE ADQUISICIÓN E INTEGRACIÓN B2B */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs md:text-sm font-mono font-bold text-purple-400 tracking-widest uppercase">
              {t("section6_badge")}
            </span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tight">
            {t("section6_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-orange-500/60 transition-colors">
              <div>
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block mb-4">
                  {t("b2b1_tag")}
                </span>
                <h3 className="text-2xl font-black text-white mb-4">
                  {t("b2b1_title")}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">
                  {t("b2b1_desc")}
                </p>
              </div>
            </div>

            <div className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-500/60 transition-colors">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-4">
                  {t("b2b2_tag")}
                </span>
                <h3 className="text-2xl font-black text-white mb-4">
                  {t("b2b2_title")}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify font-light">
                  {t("b2b2_desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section className="bg-gradient-to-r from-zinc-950 via-black to-zinc-950 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-[0_0_60px_rgba(66,200,198,0.1)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              {t("cta_title")}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-10 leading-relaxed">
              {t("cta_desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <TrackedLink 
                href="/#contact" 
                targetName="sekurita_bottom_contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold tracking-widest uppercase text-base rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.7)] hover:scale-105"
              >
                <span>{t("btn_contact")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </TrackedLink>

              <TrackedLink 
                href="/logikafiskal" 
                targetName="sekurita_bottom_to_fiskal"
                className="inline-flex items-center gap-3 px-8 py-5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-bold tracking-widest uppercase text-base rounded-full transition-all duration-300"
              >
                <span>{t("btn_fiskal")}</span>
              </TrackedLink>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
