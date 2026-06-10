"use client";

import { useEffect } from "react";
import { app } from "@/lib/firebase";
import { getAnalytics, isSupported } from "firebase/analytics";

export default function FirebaseAnalytics() {
  useEffect(() => {
    // Inicializar Firebase Analytics solo una vez cuando el componente se monta en el cliente
    if (typeof window !== "undefined") {
      isSupported().then((supported) => {
        if (supported) {
          getAnalytics(app);
        }
      });
    }
  }, []);

  return null; // Este componente no renderiza nada en pantalla
}
