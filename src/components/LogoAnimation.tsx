"use client";

import { useState, useEffect } from "react";

export default function LogoAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const runAnimation = () => {
      setStep((prev) => {
        const nextStep = (prev + 1) % 4;
        
        let delay = 1000; // 1 segundo entre vectores
        if (nextStep === 0) {
          // Cuando acaba de mostrar el Logo (paso 3), espera 3 segundos antes de reiniciar
          delay = 3000; 
        }
        
        timeout = setTimeout(runAnimation, delay);
        return nextStep;
      });
    };

    timeout = setTimeout(runAnimation, 1000);
    return () => clearTimeout(timeout);
  }, []);

  let src = "/logos/Vector.svg";

  if (step === 0) src = "/logos/Vector.svg";
  else if (step === 1) src = "/logos/Vector-1.svg";
  else if (step === 2) src = "/logos/Vector-2.svg";
  else if (step === 3) src = "/logos/Logo.svg";

  return (
    <div className="h-24 md:h-32 mb-8 flex items-center justify-center">
      <img
        src={src}
        alt="Animated Logo"
        className="h-full w-auto transition-opacity duration-300"
      />
    </div>
  );
}
