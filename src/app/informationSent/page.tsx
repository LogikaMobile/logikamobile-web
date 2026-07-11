"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function InformationSentContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const min = searchParams.get('min');
  const max = searchParams.get('max');
  const price = searchParams.get('price');
  const billing = searchParams.get('billing');

  const formatCurrency = (val: string | null) => {
    if (!val) return "";
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(val));
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-600/10 blur-[150px] pointer-events-none rounded-full"></div>
      
      <div className="relative z-10 max-w-3xl bg-zinc-950 border border-zinc-800 p-12 rounded-3xl shadow-[0_0_50px_rgba(249,115,22,0.1)] w-full">
        <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">¡Información Recibida!</h1>
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-light">
          Hemos recibido tus datos de contacto correctamente. Nuestro equipo revisará tu solicitud y se comunicará contigo a la brevedad.
        </p>

        {/* Dynamic Quote Display */}
        {type === 'custom' && min && max && (
          <div className="bg-black/50 border border-[#7B2CBF]/30 p-8 rounded-2xl mb-10">
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-4">Estimación de Inversión Inicial</p>
            <div className="text-4xl md:text-5xl font-extrabold text-[#7B2CBF] drop-shadow-[0_0_15px_rgba(123,44,191,0.3)]">
              {formatCurrency(min)} - {formatCurrency(max)}
            </div>
            <p className="text-zinc-500 text-sm mt-4">* Esta es una cotización preliminar sujeta a análisis detallado de requerimientos.</p>
          </div>
        )}

        {type === 'lmaas' && price && (
          <div className="bg-black/50 border border-orange-500/30 p-8 rounded-2xl mb-10">
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-4">Suscripción LMaaS (Calculada)</p>
            <div className="text-4xl md:text-5xl font-extrabold text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              {formatCurrency(price)} <span className="text-2xl text-zinc-400 font-medium">USD / {billing === 'ANNUAL' ? 'año' : 'mes'}</span>
            </div>
          </div>
        )}

        <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-800 text-white font-bold rounded-lg hover:bg-zinc-700 transition-colors">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

export default function InformationSentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white font-mono text-xl">Procesando información...</div>}>
      <InformationSentContent />
    </Suspense>
  );
}
