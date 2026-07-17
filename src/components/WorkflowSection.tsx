"use client";

import { useTranslations } from "next-intl";
import TrackedLink from "@/components/TrackedLink";

export default function WorkflowSection() {
  const t = useTranslations("Workflow");

  const steps = [
    {
      id: 1,
      title: t("step1_title"),
      desc: t("step1_desc"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 2,
      title: t("step2_title"),
      desc: t("step2_desc"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6CD3D3]">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
          <path d="M14 9h5" />
          <path d="M14 15h5" />
        </svg>
      )
    },
    {
      id: 3,
      title: t("step3_title"),
      desc: t("step3_desc"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7B2CBF]">
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      )
    },
    {
      id: 4,
      title: t("step4_title"),
      desc: t("step4_desc"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    }
  ];

  return (
    <section id="workflow" className="py-32 md:py-48 max-w-7xl mx-auto px-6 relative">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#7B2CBF] mb-6">
          <span className="text-orange-500">{t("title_main")}</span> <span className="text-[#6CD3D3]">//</span> {t("title_highlight")}
        </h2>
        <div className="h-1 w-32 bg-orange-500"></div>
        <div className="h-px w-full bg-zinc-900/80 mt-1"></div>
      </div>

      <div className="mb-20 space-y-6 text-xl md:text-2xl font-light text-zinc-300 text-justify leading-relaxed">
        <p>{t("intro_p1")}</p>
        <p>{t("intro_p2")}</p>
        <p className="font-medium text-zinc-200">{t("intro_p3")}</p>
      </div>

      <div className="relative border-l border-zinc-800/80 ml-6 md:ml-12 pl-10 md:pl-16 space-y-20 pb-20">
        {steps.map((step, index) => (
          <div key={step.id} className="relative group">
            {/* Commercial Milestone (between step 2 and 3) */}
            {index === 2 && (
              <div className="absolute -top-10 left-[-42px] md:left-[-66px] w-[calc(100%+42px)] md:w-[calc(100%+66px)] flex items-center mb-10 z-10">
                <div className="bg-orange-500 text-black font-extrabold text-xs md:text-sm tracking-widest uppercase py-1 px-3 md:px-4 flex items-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.4)] relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                  {t("commercial_milestone")}
                  <div className="absolute top-1/2 -left-2 w-0 h-0 border-y-4 border-y-transparent border-r-8 border-r-orange-500 -translate-y-1/2"></div>
                </div>
                <div className="h-px bg-gradient-to-r from-orange-500 to-transparent flex-grow ml-2 opacity-50"></div>
              </div>
            )}

            {/* Timeline dot */}
            <div className="absolute -left-[58px] md:-left-[82px] top-1 w-12 h-12 rounded-full bg-black border-2 border-zinc-800 group-hover:border-orange-500 flex items-center justify-center transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              {step.icon}
            </div>

            {/* Step content */}
            <div className="bg-black/40 p-8 md:p-12 border border-zinc-900/50 hover:border-zinc-700 transition-colors duration-500 relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(123,44,191,0.15)]">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#7B2CBF] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-widest uppercase mb-4 text-[#7B2CBF] group-hover:text-orange-500 transition-colors duration-300">
                <span className="text-zinc-600 mr-4 font-mono">0{step.id}</span>
                {step.title}
              </h3>
              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-black/60 p-10 md:p-16 border border-zinc-900 shadow-[0_0_50px_rgba(249,115,22,0.1)] text-center mt-10">
        <h3 className="text-2xl md:text-4xl font-extrabold text-[#7B2CBF] mb-6">
          {t("outro_p1")}
        </h3>
        <p className="text-xl md:text-2xl text-orange-500 font-mono tracking-widest mb-10">
          {"{ "}{t("outro_p2")}{" }"}
        </p>
        <p className="text-zinc-300 text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto">
          {t("outro_cta")}
        </p>
        <TrackedLink 
          href="#contact" 
          targetName="workflow_contact"
          className="inline-block px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold tracking-widest uppercase text-sm transition-colors duration-300"
        >
          {t("outro_cta").split(",")[1] || "Hablemos"}
        </TrackedLink>
      </div>
    </section>
  );
}
