"use client";

import { useState, useEffect } from "react";
import { trackUserEvent } from "@/lib/trackEvent";
import { useTranslations } from "next-intl";

type ProjectOrigin = "scratch" | "legacy" | null;
type CompanySize = "startup" | "sme" | "enterprise" | null;
type ProjectType = "app" | "web" | "cloud";
type Complexity = "basic" | "intermediate" | "advanced" | null;
type UxUiStatus = "ready" | "from_scratch" | null;
type Integrations = "isolated" | "critical" | null;
type Urgency = "normal" | "fast" | "urgent" | null;

interface QuoteModalProps {
  trigger?: React.ReactNode;
}

export default function QuoteModal({ trigger }: QuoteModalProps = {}) {
  const t = useTranslations('QuoteModal');

  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7 | "result" | "contact" | "success">(1);
  
  const [origin, setOrigin] = useState<ProjectOrigin>(null);
  const [companySize, setCompanySize] = useState<CompanySize>(null);
  const [types, setTypes] = useState<ProjectType[]>([]);
  const [complexity, setComplexity] = useState<Complexity>(null);
  const [uxui, setUxui] = useState<UxUiStatus>(null);
  const [integrations, setIntegrations] = useState<Integrations>(null);
  const [urgency, setUrgency] = useState<Urgency>(null);
  
  const [quoteBand, setQuoteBand] = useState<{min: number, max: number} | null>(null);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [contactPreference, setContactPreference] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState(""); // Honeypot field
  const [isSending, setIsSending] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setEmailError("");
      return false;
    }
    if (!regex.test(email)) {
      setEmailError(t('form_email_err'));
      return false;
    }
    setEmailError("");
    return true;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOpenModal = () => {
    trackUserEvent("custom_funnel_started", { source: trigger ? "footer_link" : "hero_button" });
    setIsOpen(true);
  };

  const advanceStep = (currentStepNum: number, nextStep: any, stepName: string, selectionValue: any) => {
    trackUserEvent("custom_funnel_step_completed", { 
      step: currentStepNum, 
      step_name: stepName, 
      selection: Array.isArray(selectionValue) ? selectionValue.join(",") : selectionValue 
    });
    setStep(nextStep);
  };

  const toggleType = (type: ProjectType) => {
    if (types.includes(type)) {
      setTypes(types.filter(t => t !== type));
    } else {
      setTypes([...types, type]);
    }
  };

  const calculateQuote = () => {
    // 1. Suma Base
    let base = 0;
    if (types.includes("web")) base += 3000;
    if (types.includes("app")) base += 5000;
    if (types.includes("cloud")) base += 4000;
    
    if (uxui === "from_scratch") base += 1500;

    // 2. Cálculo del Factor de Riesgo y Escala
    const originMult = origin === "legacy" ? 1.4 : 1.0;
    
    let sizeMult = 1.0;
    if (companySize === "startup") sizeMult = 0.5;
    if (companySize === "sme") sizeMult = 0.7;
    if (companySize === "enterprise") sizeMult = 1.25;

    let compMult = 1.0;
    if (complexity === "basic") compMult = 1.0;
    if (complexity === "intermediate") compMult = 1.5;
    if (complexity === "advanced") compMult = 2.5;

    let urgMult = 1.0;
    if (urgency === "normal") urgMult = 1.0;
    if (urgency === "fast") urgMult = 1.3;
    if (urgency === "urgent") urgMult = 1.8;

    const intMult = integrations === "critical" ? 1.2 : 1.0;

    const riskTotal = originMult * sizeMult * compMult * urgMult * intMult;

    // 3. Costo Proyectado (Ingreso Neto Deseado)
    const projected = base * riskTotal;

    // 4. Gross-Up (RESICO 2.5%) & Generación de las Bandas
    // Precio_Facturado = Ingreso_Neto_Deseado / (1 - 0.025)
    const grossMin = (projected * 0.85) / 0.975;
    const grossMax = (projected * 1.35) / 0.975;

    const min = Math.round(grossMin / 100) * 100;
    const max = Math.round(grossMax / 100) * 100;

    trackUserEvent("custom_quote_calculated", { min_price: min, max_price: max, urgency: urgency });

    setQuoteBand({ min, max });
    setStep("contact");
  };

  const resetAndClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setOrigin(null);
      setCompanySize(null);
      setTypes([]);
      setComplexity(null);
      setUxui(null);
      setIntegrations(null);
      setUrgency(null);
      setQuoteBand(null);
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setContactPreference("");
      setProjectDescription("");
      setIsSending(false);
      setEmailError("");
    }, 300);
  };

  const handleSendEmail = async () => {
    if (!contactName || !contactEmail) return;
    if (!validateEmail(contactEmail)) return;
    setIsSending(true);

    const typesMap: Record<string, string> = { app: t('step3_app'), web: t('step3_web'), cloud: t('step3_cloud') };
    const originMap: Record<string, string> = { scratch: t('step1_new'), legacy: t('step1_legacy') };
    const sizeMap: Record<string, string> = { startup: t('step2_startup'), sme: t('step2_sme'), enterprise: t('step2_enterprise') };
    const compMap: Record<string, string> = { basic: t('step4_basic'), intermediate: t('step4_intermediate'), advanced: t('step4_advanced') };
    const uxuiMap: Record<string, string> = { ready: t('step5_ready'), from_scratch: t('step5_scratch') };
    const intMap: Record<string, string> = { isolated: t('step6_isolated'), critical: t('step6_critical') };
    const urgMap: Record<string, string> = { normal: t('step7_normal'), fast: t('step7_fast'), urgent: t('step7_urgent') };

    const selectedTypes = types.map(t => typesMap[t]).join(", ");
    const rangeText = quoteBand ? `$${quoteBand.min.toLocaleString()} - $${quoteBand.max.toLocaleString()} USD` : "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactName,
          contactEmail,
          contactPhone,
          contactPreference,
          projectDescription,
          typesText: selectedTypes,
          originText: origin ? originMap[origin] : "",
          companySizeText: companySize ? sizeMap[companySize] : "",
          complexityText: complexity ? compMap[complexity] : "",
          uxuiText: uxui ? uxuiMap[uxui] : "",
          integrationsText: integrations ? intMap[integrations] : "",
          urgencyText: urgency ? urgMap[urgency] : "",
          rangeText,
          websiteUrl
        }),
      });

      if (res.ok) {
        trackUserEvent("generate_lead", { product: "custom_software", preference: contactPreference });
        window.location.href = '/informationSent?type=custom&min=' + (quoteBand?.min || '') + '&max=' + (quoteBand?.max || '');
      } else {
        alert(t('err_send'));
      }
    } catch (error) {
      console.error(error);
      alert(t('err_conn'));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {trigger ? (
        <div className="inline-block cursor-pointer" onClick={handleOpenModal}>
          {trigger}
        </div>
      ) : (
        <button 
          onClick={handleOpenModal}
          className="w-full sm:w-auto px-12 py-6 bg-orange-600 hover:bg-orange-500 text-[#7B2CBF]  text-xl font-bold uppercase tracking-widest rounded-none transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.3)] hover:shadow-[0_0_60px_rgba(234,88,12,0.5)] hover:-translate-y-1"
        >
          {t('start_quote')}
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg p-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 blur-[150px] pointer-events-none rounded-full"></div>
          
          <div className="relative z-10 w-full max-w-4xl bg-zinc-950 border border-zinc-800 p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-y-auto max-h-[90vh]">
            <button 
              onClick={resetAndClose}
              className="absolute top-6 right-6 text-zinc-500 hover:text-orange-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {step !== "result" && step !== "contact" && step !== "success" && (
              <>
                <div className="mb-12">
                  <h3 className="text-orange-500  font-mono text-sm tracking-widest uppercase mb-4">
                    {t('step_x_of_7', { step })}
                  </h3>
                  <div className="w-full h-1 bg-zinc-900">
                    <div className="h-full bg-orange-500 transition-all duration-500" style={{ width: `${(step as number / 7) * 100}%` }}></div>
                  </div>
                </div>

                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      {t('step1_title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { id: "scratch", title: t('step1_new'), desc: t('step1_new_desc') },
                        { id: "legacy", title: t('step1_legacy'), desc: t('step1_legacy_desc') }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setOrigin(item.id as ProjectOrigin)}
                          className={`p-6 border text-left transition-all duration-300 ${origin === item.id ? "border-orange-500 bg-orange-500/10 scale-105" : "border-zinc-800 bg-black hover:border-zinc-600"}`}
                        >
                          <div className={`text-xl font-bold mb-2 ${origin === item.id ? "text-orange-500 " : "text-zinc-300"}`}>{item.title}</div>
                          <div className="text-sm font-mono text-zinc-500">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                    <button 
                      onClick={() => advanceStep(1, 2, "origen", origin)}
                      disabled={!origin}
                      className="mt-12 px-8 py-4 bg-[#7B2CBF] disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest transition-all w-full md:w-auto"
                    >
                      {t('continue')}
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      {t('step2_title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { id: "startup", title: t('step2_startup'), desc: t('step2_startup_desc') },
                        { id: "sme", title: t('step2_sme'), desc: t('step2_sme_desc') },
                        { id: "enterprise", title: t('step2_enterprise'), desc: t('step2_enterprise_desc') }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setCompanySize(item.id as CompanySize)}
                          className={`p-6 border text-left transition-all duration-300 ${companySize === item.id ? "border-orange-500 bg-orange-500/10 scale-105" : "border-zinc-800 bg-black hover:border-zinc-600"}`}
                        >
                          <div className={`text-xl font-bold mb-2 ${companySize === item.id ? "text-orange-500 " : "text-zinc-300"}`}>{item.title}</div>
                          <div className="text-sm font-mono text-zinc-500">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-12">
                      <button 
                        onClick={() => setStep(1)}
                        className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                      >
                        {t('back')}
                      </button>
                      <button 
                        onClick={() => advanceStep(2, 3, "tamano", companySize)}
                        disabled={!companySize}
                        className="px-8 py-4 bg-[#7B2CBF] disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest transition-all flex-1 md:flex-none"
                      >
                        {t('continue')}
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      {t('step3_title')}
                    </h2>
                    <p className="text-zinc-400 mb-6 font-mono text-sm uppercase tracking-widest">{t('step3_subtitle')}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { id: "app", title: t('step3_app'), desc: t('step3_app_desc') },
                        { id: "web", title: t('step3_web'), desc: t('step3_web_desc') },
                        { id: "cloud", title: t('step3_cloud'), desc: t('step3_cloud_desc') }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => toggleType(item.id as ProjectType)}
                          className={`p-6 border text-left transition-all duration-300 ${types.includes(item.id as ProjectType) ? "border-orange-500 bg-orange-500/10 scale-105" : "border-zinc-800 bg-black hover:border-zinc-600"}`}
                        >
                          <div className={`text-xl font-bold mb-2 ${types.includes(item.id as ProjectType) ? "text-orange-500 " : "text-zinc-300"}`}>{item.title}</div>
                          <div className="text-sm font-mono text-zinc-500">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-12">
                      <button 
                        onClick={() => setStep(2)}
                        className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                      >
                        {t('back')}
                      </button>
                      <button 
                        onClick={() => advanceStep(3, 4, "tipo", types)}
                        disabled={types.length === 0}
                        className="px-8 py-4 bg-[#7B2CBF] disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest transition-all flex-1 md:flex-none"
                      >
                        {t('continue')}
                      </button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      {t('step4_title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { id: "basic", title: t('step4_basic'), desc: t('step4_basic_desc') },
                        { id: "intermediate", title: t('step4_intermediate'), desc: t('step4_intermediate_desc') },
                        { id: "advanced", title: t('step4_advanced'), desc: t('step4_advanced_desc') }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setComplexity(item.id as Complexity)}
                          className={`p-6 border text-left transition-all duration-300 ${complexity === item.id ? "border-orange-500 bg-orange-500/10 scale-105" : "border-zinc-800 bg-black hover:border-zinc-600"}`}
                        >
                          <div className={`text-xl font-bold mb-2 ${complexity === item.id ? "text-orange-500 " : "text-zinc-300"}`}>{item.title}</div>
                          <div className="text-sm font-mono text-zinc-500">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-12">
                      <button 
                        onClick={() => setStep(3)}
                        className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                      >
                        {t('back')}
                      </button>
                      <button 
                        onClick={() => advanceStep(4, 5, "complejidad", complexity)}
                        disabled={!complexity}
                        className="px-8 py-4 bg-[#7B2CBF] disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest transition-all flex-1 md:flex-none"
                      >
                        {t('continue')}
                      </button>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      {t('step5_title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { id: "ready", title: t('step5_ready'), desc: t('step5_ready_desc') },
                        { id: "from_scratch", title: t('step5_scratch'), desc: t('step5_scratch_desc') }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setUxui(item.id as UxUiStatus)}
                          className={`p-6 border text-left transition-all duration-300 ${uxui === item.id ? "border-orange-500 bg-orange-500/10 scale-105" : "border-zinc-800 bg-black hover:border-zinc-600"}`}
                        >
                          <div className={`text-xl font-bold mb-2 ${uxui === item.id ? "text-orange-500 " : "text-zinc-300"}`}>{item.title}</div>
                          <div className="text-sm font-mono text-zinc-500">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-12">
                      <button 
                        onClick={() => setStep(4)}
                        className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                      >
                        {t('back')}
                      </button>
                      <button 
                        onClick={() => advanceStep(5, 6, "uxui", uxui)}
                        disabled={!uxui}
                        className="px-8 py-4 bg-[#7B2CBF] disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest transition-all flex-1 md:flex-none"
                      >
                        {t('continue')}
                      </button>
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      {t('step6_title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { id: "isolated", title: t('step6_isolated'), desc: t('step6_isolated_desc') },
                        { id: "critical", title: t('step6_critical'), desc: t('step6_critical_desc') }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setIntegrations(item.id as Integrations)}
                          className={`p-6 border text-left transition-all duration-300 ${integrations === item.id ? "border-orange-500 bg-orange-500/10 scale-105" : "border-zinc-800 bg-black hover:border-zinc-600"}`}
                        >
                          <div className={`text-xl font-bold mb-2 ${integrations === item.id ? "text-orange-500 " : "text-zinc-300"}`}>{item.title}</div>
                          <div className="text-sm font-mono text-zinc-500">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-12">
                      <button 
                        onClick={() => setStep(5)}
                        className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                      >
                        {t('back')}
                      </button>
                      <button 
                        onClick={() => advanceStep(6, 7, "integraciones", integrations)}
                        disabled={!integrations}
                        className="px-8 py-4 bg-[#7B2CBF] disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest transition-all flex-1 md:flex-none"
                      >
                        {t('continue')}
                      </button>
                    </div>
                  </div>
                )}

                {step === 7 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      {t('step7_title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { id: "normal", title: t('step7_normal'), desc: t('step7_normal_desc') },
                        { id: "fast", title: t('step7_fast'), desc: t('step7_fast_desc') },
                        { id: "urgent", title: t('step7_urgent'), desc: t('step7_urgent_desc') }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setUrgency(item.id as Urgency)}
                          className={`p-6 border text-left transition-all duration-300 ${urgency === item.id ? "border-orange-500 bg-orange-500/10 scale-105" : "border-zinc-800 bg-black hover:border-zinc-600"}`}
                        >
                          <div className={`text-xl font-bold mb-2 ${urgency === item.id ? "text-orange-500 " : "text-zinc-300"}`}>{item.title}</div>
                          <div className="text-sm font-mono text-zinc-500">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-12">
                      <button 
                        onClick={() => setStep(6)}
                        className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                      >
                        {t('back')}
                      </button>
                      <button 
                        onClick={calculateQuote}
                        disabled={!urgency}
                        className="px-8 py-4 bg-orange-600 disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-orange-500 text-[#7B2CBF]  font-bold uppercase tracking-widest transition-all flex-1 md:flex-none shadow-[0_0_20px_rgba(234,88,12,0.3)] disabled:shadow-none"
                      >
                        {t('quote_btn')}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {step === "result" && quoteBand && (
              <div className="animate-in zoom-in-95 duration-700 flex flex-col items-center text-center">
                <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-6">{t('result_title')}</span>
                <div className="text-5xl md:text-7xl font-extrabold text-[#7B2CBF]  mb-10 tracking-tighter leading-tight break-all md:break-normal">
                  ${quoteBand.min.toLocaleString()} - ${quoteBand.max.toLocaleString()} <span className="text-2xl text-orange-500 tracking-normal block mt-2 md:inline md:mt-0">{t('result_currency')}</span>
                </div>
                <p className="text-zinc-400 text-justify mb-12 max-w-lg font-light text-lg">
                  {t('result_desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                  <button 
                    onClick={() => {
                      trackUserEvent("custom_funnel_contact_intent");
                      setStep("contact");
                    }}
                    className="w-full sm:w-auto px-12 py-5 bg-[#7B2CBF] hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest border border-[#7B2CBF] transition-all"
                  >
                    {t('contact_team')}
                  </button>
                  <button 
                    onClick={resetAndClose}
                    className="w-full sm:w-auto px-12 py-5 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 font-bold uppercase tracking-widest transition-all"
                  >
                    {t('close')}
                  </button>
                </div>
              </div>
            )}

            {step === "contact" && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                  {t('contact_title')}
                </h2>
                <p className="text-zinc-400 text-justify mb-8 font-light text-lg">
                  {t('contact_desc')}
                </p>
                <div className="flex flex-col gap-6 mb-10">
                  <div>
                    <label className="block text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">{t('form_name')}</label>
                    <input 
                      type="text" 
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-black border border-zinc-800 text-white p-4 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder={t('form_name_ph')}
                    />
                  </div>
                  <div>
                    <label className="block text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">{t('form_email')}</label>
                    <input 
                      type="email" 
                      value={contactEmail}
                      onChange={(e) => {
                        setContactEmail(e.target.value);
                        if (emailError) {
                          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                          if (regex.test(e.target.value)) setEmailError("");
                        }
                      }}
                      onBlur={(e) => validateEmail(e.target.value)}
                      className={`w-full bg-black border ${emailError ? 'border-red-500' : 'border-zinc-800'} text-white p-4 focus:border-orange-500 focus:outline-none transition-colors`}
                      placeholder={t('form_email_ph')}
                    />
                    {emailError && <p className="text-red-500 font-mono text-xs mt-2">{emailError}</p>}
                  </div>
                  
                  {/* Honeypot Field */}
                  <div style={{ opacity: 0, position: 'absolute', top: '-9999px', left: '-9999px' }} aria-hidden="true">
                    <label>Website</label>
                    <input 
                      type="text" 
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      tabIndex={-1} 
                      autoComplete="off" 
                    />
                  </div>

                  <div>
                    <label className="block text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">{t('form_phone')}</label>
                    <input 
                      type="tel" 
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full bg-black border border-zinc-800 text-white p-4 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="+52 55 0000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">{t('form_pref')}</label>
                    <select
                      value={contactPreference}
                      onChange={(e) => setContactPreference(e.target.value)}
                      className="w-full bg-black border border-zinc-800 text-zinc-300 p-4 focus:border-orange-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>{t('form_pref_opt_default')}</option>
                      <option value="WhatsApp">{t('form_pref_opt_whatsapp')}</option>
                      <option value="Correo">{t('form_pref_opt_email')}</option>
                      <option value="Llamada">{t('form_pref_opt_call')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">
                      {t('form_desc')} <span className="text-zinc-500 text-xs ml-2">(Mínimo 50 caracteres)</span>
                    </label>
                    <textarea 
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      minLength={50}
                      className="w-full bg-black border border-zinc-800 text-white p-4 focus:border-orange-500 focus:outline-none transition-colors min-h-[120px] resize-y"
                      placeholder={t('form_desc_ph')}
                    />
                    <div className="text-right mt-1">
                      <span className={`text-xs font-mono ${projectDescription.trim().length >= 50 ? 'text-green-500' : 'text-zinc-500'}`}>
                        {projectDescription.trim().length} / 50
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setStep("result")}
                    className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                  >
                    {t('back')}
                  </button>
                  <button 
                    onClick={handleSendEmail}
                    disabled={!contactName || !contactEmail || !!emailError || projectDescription.trim().length < 50 || isSending}
                    className={`px-8 py-4 font-bold uppercase tracking-widest transition-all flex-1 md:flex-none text-center ${(!contactName || !contactEmail || !!emailError || projectDescription.trim().length < 50 || isSending) ? "bg-zinc-800 text-zinc-600 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-500 text-[#7B2CBF] [text-shadow:-1px_-1px_0_#6CD3D3,1px_-1px_0_#6CD3D3,-1px_1px_0_#6CD3D3,1px_1px_0_#6CD3D3] shadow-[0_0_20px_rgba(234,88,12,0.3)]"}`}
                  >
                    {isSending ? t('btn_sending') : t('btn_send')}
                  </button>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className="animate-in zoom-in-95 duration-700 flex flex-col items-center text-center py-12">
                <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                  {t('success_title')}
                </h2>
                <p className="text-zinc-400 text-justify mb-12 max-w-lg font-light text-lg">
                  {t('success_desc')}
                </p>
                <button 
                  onClick={resetAndClose}
                  className="px-12 py-5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold uppercase tracking-widest transition-all"
                >
                  {t('understood')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
