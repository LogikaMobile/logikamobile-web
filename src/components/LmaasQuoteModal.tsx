"use client";

import { useState, useEffect } from "react";
import { trackUserEvent } from "@/lib/trackEvent";
import { useTranslations } from "next-intl";

type Tier = "STARTUP" | "PYME" | "CORP" | null;
type BillingCycle = "MONTHLY" | "ANNUAL" | null;

interface LmaasQuoteModalProps {
  trigger?: React.ReactNode;
}

export default function LmaasQuoteModal({ trigger }: LmaasQuoteModalProps = {}) {
  const t = useTranslations('LmaasQuoteModal');

  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | "contact" | "result">(1);
  
  const [tier, setTier] = useState<Tier>(null);
  const [infraAddon, setInfraAddon] = useState<boolean>(false);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(null);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactPreference, setContactPreference] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState(""); // Honeypot
  const [isSending, setIsSending] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [finalPrice, setFinalPrice] = useState<number>(0);

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
    trackUserEvent("lmaas_funnel_started", { source: "lmaas_landing" });
    setIsOpen(true);
  };

  const advanceStep = (currentStepNum: number | string, nextStep: any, stepName: string, selectionValue: any) => {
    trackUserEvent("lmaas_funnel_step_completed", { 
      step: currentStepNum, 
      step_name: stepName, 
      selection: selectionValue 
    });
    setStep(nextStep);
  };

  const calculateFinalPrice = () => {
    let basePrice = 0;
    let infraPrice = 0;

    if (tier === "STARTUP") {
      basePrice = 2000;
      infraPrice = 800;
    } else if (tier === "PYME") {
      basePrice = 4000;
      infraPrice = 1500;
    } else if (tier === "CORP") {
      basePrice = 7000;
      infraPrice = 3000;
    }

    let cmb = basePrice + (infraAddon ? infraPrice : 0);
    let total = billingCycle === "ANNUAL" ? (cmb * 12 * 0.85) : cmb;
    setFinalPrice(Math.round(total));
  };

  const handleLeadSubmit = async () => {
    if (!contactName || !contactEmail) return;
    if (!validateEmail(contactEmail)) return;

    setIsSending(true);
    
    // Primero calculamos el precio final en estado
    calculateFinalPrice();

    // Necesitamos el precio en tiempo real para mandarlo por correo
    let basePrice = 0;
    let infraPrice = 0;
    if (tier === "STARTUP") { basePrice = 2000; infraPrice = 800; }
    else if (tier === "PYME") { basePrice = 4000; infraPrice = 1500; }
    else if (tier === "CORP") { basePrice = 7000; infraPrice = 3000; }

    let cmb = basePrice + (infraAddon ? infraPrice : 0);
    let realTimeTotal = billingCycle === "ANNUAL" ? (cmb * 12 * 0.85) : cmb;
    realTimeTotal = Math.round(realTimeTotal);

    try {
      const response = await fetch("/api/contact-lmaas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactName,
          contactEmail,
          contactPhone,
          contactPreference,
          companySizeText: tier,
          infraAddon,
          billingCycle,
          finalPrice: realTimeTotal,
          websiteUrl,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        if (json.isBot) {
          resetAndClose();
          return;
        }
        trackUserEvent("generate_lead", { product: "lmaas", value: realTimeTotal });
        window.location.href = '/informationSent?type=lmaas&price=' + realTimeTotal + '&billing=' + billingCycle;
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

  if (!isOpen) {
    return trigger ? (
      <div onClick={handleOpenModal} className="cursor-pointer inline-block">
        {trigger}
      </div>
    ) : (
      <button onClick={handleOpenModal} className="px-6 py-3 bg-[#7B2CBF] text-white rounded-lg hover:bg-[#6CD3D3] transition-colors font-semibold">
        {t('trigger_btn')}
      </button>
    );
  }

  const renderProgressBar = (current: number, total: number = 3) => {
    return (
      <div className="w-full bg-zinc-900 h-1 mt-6 mb-8 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#7B2CBF] to-[#6CD3D3] transition-all duration-500 ease-out"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
      
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-zinc-800 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-900 p-2 rounded-full transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="p-8 md:p-12">
          {/* STEP 1: Tamaño de Empresa */}
          {step === 1 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <div className="mb-2">
                <span className="text-[#6CD3D3] font-mono text-sm tracking-widest uppercase">{t('step_x_of_3', { step: 1 })}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('step1_title')}</h2>
              <p className="text-zinc-400 mb-8">{t('step1_desc')}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "STARTUP", label: t('step1_startup'), desc: t('step1_startup_desc') },
                  { id: "PYME", label: t('step1_pyme'), desc: t('step1_pyme_desc') },
                  { id: "CORP", label: t('step1_corp'), desc: t('step1_corp_desc') },
                ].map((tierItem) => (
                  <button
                    key={tierItem.id}
                    onClick={() => {
                      setTier(tierItem.id as Tier);
                      advanceStep(1, 2, "Company Size", tierItem.id);
                    }}
                    className={`p-6 border rounded-xl text-left transition-all duration-300 ${tier === tierItem.id ? 'bg-[#7B2CBF]/10 border-[#7B2CBF] shadow-[0_0_15px_rgba(123,44,191,0.2)]' : 'border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:bg-zinc-900'}`}
                  >
                    <div className={`font-bold text-lg mb-2 ${tier === tierItem.id ? 'text-[#7B2CBF]' : 'text-zinc-300'}`}>{tierItem.label}</div>
                    <div className="text-zinc-500 text-sm font-mono">{tierItem.desc}</div>
                  </button>
                ))}
              </div>
              {renderProgressBar(1)}
            </div>
          )}

          {/* STEP 2: Infra Add-on */}
          {step === 2 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <div className="flex items-center gap-4 mb-2">
                <button onClick={() => setStep(1)} className="text-zinc-500 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <span className="text-[#6CD3D3] font-mono text-sm tracking-widest uppercase">{t('step_x_of_3', { step: 2 })}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('step2_title')}</h2>
              <p className="text-zinc-400 mb-8">{t('step2_desc')}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setInfraAddon(true);
                    advanceStep(2, 3, "Infra Addon", "Yes");
                  }}
                  className={`p-6 border rounded-xl text-left transition-all duration-300 ${infraAddon === true ? 'bg-orange-500/10 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]' : 'border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:bg-zinc-900'}`}
                >
                  <div className="font-bold text-lg mb-2 text-white">{t('step2_yes')}</div>
                  <div className="text-zinc-500 text-sm">{t('step2_yes_desc')}</div>
                </button>
                <button
                  onClick={() => {
                    setInfraAddon(false);
                    advanceStep(2, 3, "Infra Addon", "No");
                  }}
                  className={`p-6 border rounded-xl text-left transition-all duration-300 ${infraAddon === false && tier !== null ? 'bg-zinc-800/50 border-zinc-500' : 'border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:bg-zinc-900'}`}
                >
                  <div className="font-bold text-lg mb-2 text-white">{t('step2_no')}</div>
                  <div className="text-zinc-500 text-sm">{t('step2_no_desc')}</div>
                </button>
              </div>
              {renderProgressBar(2)}
            </div>
          )}

          {/* STEP 3: Ciclo de Facturación */}
          {step === 3 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <div className="flex items-center gap-4 mb-2">
                <button onClick={() => setStep(2)} className="text-zinc-500 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <span className="text-[#6CD3D3] font-mono text-sm tracking-widest uppercase">{t('step_x_of_3', { step: 3 })}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('step3_title')}</h2>
              <p className="text-zinc-400 mb-8">{t('step3_desc')}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setBillingCycle("MONTHLY");
                    advanceStep(3, "contact", "Billing Cycle", "MONTHLY");
                  }}
                  className={`p-6 border rounded-xl text-center transition-all duration-300 ${billingCycle === 'MONTHLY' ? 'bg-[#6CD3D3]/10 border-[#6CD3D3] shadow-[0_0_15px_rgba(108,211,211,0.2)]' : 'border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:bg-zinc-900'}`}
                >
                  <div className="font-bold text-2xl mb-2 text-white">{t('step3_monthly')}</div>
                  <div className="text-zinc-500 text-sm">{t('step3_monthly_desc')}</div>
                </button>
                
                <button
                  onClick={() => {
                    setBillingCycle("ANNUAL");
                    advanceStep(3, "contact", "Billing Cycle", "ANNUAL");
                  }}
                  className={`p-6 border rounded-xl text-center transition-all duration-300 relative overflow-hidden ${billingCycle === 'ANNUAL' ? 'bg-[#7B2CBF]/20 border-[#7B2CBF] shadow-[0_0_20px_rgba(123,44,191,0.4)]' : 'border-[#7B2CBF]/30 bg-[#7B2CBF]/5 hover:border-[#7B2CBF]/80 hover:bg-[#7B2CBF]/10'}`}
                >
                  <div className="absolute top-0 right-0 bg-[#7B2CBF] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg tracking-wider">{t('step3_save')}</div>
                  <div className="font-bold text-2xl mb-2 text-white">{t('step3_annual')}</div>
                  <div className="text-zinc-400 text-sm">{t('step3_annual_desc')}</div>
                </button>
              </div>
              {renderProgressBar(3)}
            </div>
          )}

          {/* STEP 4: Gating / Lead Capture */}
          {step === "contact" && (
            <div className="animate-in slide-in-from-bottom-4 fade-in duration-300">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setStep(3)} className="text-zinc-500 hover:text-white transition-colors" disabled={isSending}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
              </div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#7B2CBF]/10 border border-[#7B2CBF]/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7B2CBF]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-2">{t('contact_title')}</h2>
                <p className="text-zinc-400 max-w-md mx-auto">{t('contact_desc')}</p>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">{t('form_name')}</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] transition-all"
                    placeholder={t('form_name_ph')}
                    disabled={isSending}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">{t('form_email')}</label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => {
                      setContactEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                    onBlur={(e) => validateEmail(e.target.value)}
                    className={`w-full bg-zinc-950 border ${emailError ? 'border-red-500' : 'border-zinc-800'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] transition-all`}
                    placeholder={t('form_email_ph')}
                    disabled={isSending}
                  />
                  {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
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
                  <label className="block text-sm font-medium text-zinc-400 mb-1">{t('form_phone')}</label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] transition-all"
                    placeholder={t('form_phone_ph')}
                    disabled={isSending}
                  />
                </div>
                
                <button
                  onClick={handleLeadSubmit}
                  disabled={!contactName || !contactEmail || !!emailError || isSending}
                  className="w-full mt-6 bg-gradient-to-r from-[#7B2CBF] to-[#6CD3D3] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(123,44,191,0.3)] flex justify-center items-center gap-2"
                >
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      {t('btn_generating')}
                    </>
                  ) : (
                    t('btn_submit')
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Resultado de Cotización */}
          {step === "result" && (
            <div className="text-center animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-500/10 border border-green-500/50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-4">{t('result_title')}</h2>
              <p className="text-zinc-400 max-w-md mx-auto mb-8">
                {t('result_desc')}
              </p>
              
              <div className="bg-zinc-950 border border-[#7B2CBF]/30 p-8 rounded-2xl inline-block w-full max-w-md mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7B2CBF] to-orange-500"></div>
                
                <div className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-2">{t('result_cost')}</div>
                <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#ea580c] mb-2">
                  ${finalPrice.toLocaleString('en-US')} <span className="text-xl text-zinc-500 font-medium">{t('result_currency')}</span>
                </div>
                <div className="text-zinc-400 text-sm">
                  {billingCycle === 'ANNUAL' ? t('result_annual') : t('result_monthly')}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors border border-zinc-700"
                >
                  {t('btn_close')}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
