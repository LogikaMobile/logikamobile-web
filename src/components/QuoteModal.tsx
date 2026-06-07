"use client";

import { useState, useEffect } from "react";

type ProjectOrigin = "scratch" | "legacy" | null;
type ProjectType = "app" | "web" | "cloud";
type Complexity = "basic" | "intermediate" | "advanced" | null;
type UxUiStatus = "ready" | "from_scratch" | null;
type Integrations = "isolated" | "critical" | null;
type Urgency = "normal" | "fast" | "urgent" | null;

interface QuoteModalProps {
  trigger?: React.ReactNode;
}

export default function QuoteModal({ trigger }: QuoteModalProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6 | "result" | "contact" | "success">(1);
  
  const [origin, setOrigin] = useState<ProjectOrigin>(null);
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
  const [isSending, setIsSending] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("");
      return false;
    }
    if (!regex.test(email)) {
      setEmailError("Por favor ingresa un correo válido.");
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

    // 2. Cálculo del Factor de Riesgo
    const originMult = origin === "legacy" ? 1.4 : 1.0;
    
    let compMult = 1.0;
    if (complexity === "basic") compMult = 1.0;
    if (complexity === "intermediate") compMult = 1.5;
    if (complexity === "advanced") compMult = 2.5;

    let urgMult = 1.0;
    if (urgency === "normal") urgMult = 1.0;
    if (urgency === "fast") urgMult = 1.3;
    if (urgency === "urgent") urgMult = 1.8;

    const intMult = integrations === "critical" ? 1.2 : 1.0;

    const riskTotal = originMult * compMult * urgMult * intMult;

    // 3. Costo Proyectado (Ingreso Neto Deseado)
    const projected = base * riskTotal;

    // 4. Gross-Up (RESICO 2.5%) & Generación de las Bandas
    // Precio_Facturado = Ingreso_Neto_Deseado / (1 - 0.025)
    const grossMin = (projected * 0.85) / 0.975;
    const grossMax = (projected * 1.35) / 0.975;

    const min = Math.round(grossMin / 100) * 100;
    const max = Math.round(grossMax / 100) * 100;

    setQuoteBand({ min, max });
    setStep("result");
  };

  const resetAndClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setOrigin(null);
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

    const typesMap: Record<string, string> = { app: "App Móvil", web: "Sitio Web", cloud: "Cloud" };
    const originMap: Record<string, string> = { scratch: "Proyecto Nuevo", legacy: "Proyecto Existente" };
    const compMap: Record<string, string> = { basic: "Básica", intermediate: "Intermedia", advanced: "Avanzada" };
    const uxuiMap: Record<string, string> = { ready: "Diseño Listo", from_scratch: "Desde Cero" };
    const intMap: Record<string, string> = { isolated: "Sistema Aislado", critical: "Integraciones Externas" };
    const urgMap: Record<string, string> = { normal: "Normal", fast: "Rápida", urgent: "Urgente" };

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
          complexityText: complexity ? compMap[complexity] : "",
          uxuiText: uxui ? uxuiMap[uxui] : "",
          integrationsText: integrations ? intMap[integrations] : "",
          urgencyText: urgency ? urgMap[urgency] : "",
          rangeText
        }),
      });

      if (res.ok) {
        setStep("success");
      } else {
        alert("Hubo un error al enviar la solicitud. Intenta de nuevo.");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un error de conexión al enviar la solicitud.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {trigger ? (
        <div className="inline-block cursor-pointer" onClick={() => setIsOpen(true)}>
          {trigger}
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-full sm:w-auto px-12 py-6 bg-orange-600 hover:bg-orange-500 text-[#7B2CBF]  text-xl font-bold uppercase tracking-widest rounded-none transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.3)] hover:shadow-[0_0_60px_rgba(234,88,12,0.5)] hover:-translate-y-1"
        >
          Iniciar Cotización
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
                    Paso {step} de 6
                  </h3>
                  <div className="w-full h-1 bg-zinc-900">
                    <div className="h-full bg-orange-500 transition-all duration-500" style={{ width: `${(step as number / 6) * 100}%` }}></div>
                  </div>
                </div>

                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      Origen del Código
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { id: "scratch", title: "Proyecto Nuevo", desc: "Empezamos con una hoja en blanco, desde cero." },
                        { id: "legacy", title: "Proyecto Existente", desc: "Hay que revisar, rescatar o mejorar código que ya tienes." }
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
                      onClick={() => setStep(2)}
                      disabled={!origin}
                      className="mt-12 px-8 py-4 bg-[#7B2CBF] disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest transition-all w-full md:w-auto"
                    >
                      Continuar
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      ¿Qué tipo de proyecto necesitas?
                    </h2>
                    <p className="text-zinc-400 mb-6 font-mono text-sm uppercase tracking-widest">Puedes seleccionar múltiples opciones:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { id: "app", title: "App Móvil", desc: "Desarrollo Nativo o Multiplataforma." },
                        { id: "web", title: "Sitio Web", desc: "Plataformas Web y E-commerce." },
                        { id: "cloud", title: "Cloud", desc: "Arquitectura e infraestructura Cloud." }
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
                        onClick={() => setStep(1)}
                        className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                      >
                        Atrás
                      </button>
                      <button 
                        onClick={() => setStep(3)}
                        disabled={types.length === 0}
                        className="px-8 py-4 bg-[#7B2CBF] disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest transition-all flex-1 md:flex-none"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      Complejidad Técnica
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { id: "basic", title: "Básica", desc: "Informativo, formularios simples, sin cuentas de usuario." },
                        { id: "intermediate", title: "Intermedia", desc: "Perfiles de usuario, panel de administración y pagos." },
                        { id: "advanced", title: "Avanzada", desc: "Operaciones en tiempo real, miles de usuarios o logística compleja." }
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
                        onClick={() => setStep(2)}
                        className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                      >
                        Atrás
                      </button>
                      <button 
                        onClick={() => setStep(4)}
                        disabled={!complexity}
                        className="px-8 py-4 bg-[#7B2CBF] disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest transition-all flex-1 md:flex-none"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      Estado del Diseño UX/UI
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { id: "ready", title: "Diseño Listo", desc: "Tienen flujos y pantallas definidas en Figma." },
                        { id: "from_scratch", title: "Desde Cero", desc: "LogikaMobile debe diseñarlo desde cero." }
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
                        onClick={() => setStep(3)}
                        className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                      >
                        Atrás
                      </button>
                      <button 
                        onClick={() => setStep(5)}
                        disabled={!uxui}
                        className="px-8 py-4 bg-[#7B2CBF] disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest transition-all flex-1 md:flex-none"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      Integraciones Externas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { id: "isolated", title: "Sistema Aislado", desc: "Operará de manera independiente sin conectarse a otros sistemas." },
                        { id: "critical", title: "Integraciones Externas", desc: "Requiere conectar con sistemas de tu empresa, bancos o hardware." }
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
                        onClick={() => setStep(4)}
                        className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                      >
                        Atrás
                      </button>
                      <button 
                        onClick={() => setStep(6)}
                        disabled={!integrations}
                        className="px-8 py-4 bg-[#7B2CBF] disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest transition-all flex-1 md:flex-none"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                      La Urgencia (Triángulo de Hierro)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { id: "normal", title: "Normal", desc: "Tiempos estándar de desarrollo." },
                        { id: "fast", title: "Rápida", desc: "Necesitamos meter el acelerador." },
                        { id: "urgent", title: "Urgente", desc: "Prioridad máxima. Lo necesitas para ayer." }
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
                        onClick={() => setStep(5)}
                        className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                      >
                        Atrás
                      </button>
                      <button 
                        onClick={calculateQuote}
                        disabled={!urgency}
                        className="px-8 py-4 bg-orange-600 disabled:bg-zinc-800 disabled:text-zinc-600 hover:bg-orange-500 text-[#7B2CBF]  font-bold uppercase tracking-widest transition-all flex-1 md:flex-none shadow-[0_0_20px_rgba(234,88,12,0.3)] disabled:shadow-none"
                      >
                        Cotizar
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {step === "result" && quoteBand && (
              <div className="animate-in zoom-in-95 duration-700 flex flex-col items-center text-center">
                <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-6">Estimado de Inversión</span>
                <div className="text-5xl md:text-7xl font-extrabold text-[#7B2CBF]  mb-10 tracking-tighter leading-tight break-all md:break-normal">
                  ${quoteBand.min.toLocaleString()} - ${quoteBand.max.toLocaleString()} <span className="text-2xl text-orange-500 tracking-normal block mt-2 md:inline md:mt-0">USD</span>
                </div>
                <p className="text-zinc-400 text-justify mb-12 max-w-lg font-light text-lg">
                  Ten en cuenta que esta es una estimación rápida. Como aún no conocemos los detalles exactos de tu operación, el precio final podría variar. Cuéntanos tu visión y armaremos una propuesta a tu medida.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                  <button 
                    onClick={() => setStep("contact")}
                    className="w-full sm:w-auto px-12 py-5 bg-[#7B2CBF] hover:bg-purple-700 text-orange-400  font-bold uppercase tracking-widest border border-[#7B2CBF] transition-all"
                  >
                    Contactar Equipo
                  </button>
                  <button 
                    onClick={resetAndClose}
                    className="w-full sm:w-auto px-12 py-5 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 font-bold uppercase tracking-widest transition-all"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}

            {step === "contact" && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#7B2CBF]  mb-8">
                  Hagámoslo realidad
                </h2>
                <p className="text-zinc-400 text-justify mb-8 font-light text-lg">
                  Déjanos tus datos. Generaremos un correo con los detalles técnicos de tu cotización listo para ser enviado.
                </p>
                <div className="flex flex-col gap-6 mb-10">
                  <div>
                    <label className="block text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">Nombre</label>
                    <input 
                      type="text" 
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-black border border-zinc-800 text-white p-4 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Ej. Ana Pérez"
                    />
                  </div>
                  <div>
                    <label className="block text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">Correo Electrónico</label>
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
                      placeholder="ana@empresa.com"
                    />
                    {emailError && <p className="text-red-500 font-mono text-xs mt-2">{emailError}</p>}
                  </div>
                  <div>
                    <label className="block text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full bg-black border border-zinc-800 text-white p-4 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="+52 55 0000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">Medio de Contacto Preferido</label>
                    <select
                      value={contactPreference}
                      onChange={(e) => setContactPreference(e.target.value)}
                      className="w-full bg-black border border-zinc-800 text-zinc-300 p-4 focus:border-orange-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Correo">Correo Electrónico</option>
                      <option value="Llamada">Llamada Telefónica</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">Breve Descripción del Proyecto</label>
                    <textarea 
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      className="w-full bg-black border border-zinc-800 text-white p-4 focus:border-orange-500 focus:outline-none transition-colors min-h-[120px] resize-y"
                      placeholder="Cuéntanos un poco de tu idea, objetivos o requerimientos principales..."
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setStep("result")}
                    className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-400 font-bold uppercase tracking-widest hover:border-zinc-500 transition-all"
                  >
                    Atrás
                  </button>
                  <button 
                    onClick={handleSendEmail}
                    disabled={!contactName || !contactEmail || isSending}
                    className={`px-8 py-4 font-bold uppercase tracking-widest transition-all flex-1 md:flex-none text-center ${(!contactName || !contactEmail || isSending) ? "bg-zinc-800 text-zinc-600 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-500 text-[#7B2CBF] [text-shadow:-1px_-1px_0_#6CD3D3,1px_-1px_0_#6CD3D3,-1px_1px_0_#6CD3D3,1px_1px_0_#6CD3D3] shadow-[0_0_20px_rgba(234,88,12,0.3)]"}`}
                  >
                    {isSending ? "Enviando..." : "Enviar Solicitud"}
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
                  ¡Solicitud Enviada!
                </h2>
                <p className="text-zinc-400 text-justify mb-12 max-w-lg font-light text-lg">
                  Hemos recibido tu información y la estimación técnica de tu proyecto de manera exitosa. Nuestro equipo estratégico la revisará y te contactaremos en breve a tu correo.
                </p>
                <button 
                  onClick={resetAndClose}
                  className="px-12 py-5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold uppercase tracking-widest transition-all"
                >
                  Entendido
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
