"use client";

import { useEffect, useState } from "react";
import { app } from "@/lib/firebase";
import { getAnalytics, isSupported, logEvent, Analytics } from "firebase/analytics";
import { trackUserEvent } from "@/lib/trackEvent";
import { usePathname } from "next/navigation";

export default function FirebaseAnalytics() {
  const pathname = usePathname();
  const [analyticsInstance, setAnalyticsInstance] = useState<Analytics | null>(null);

  useEffect(() => {
    // Inicializar Firebase Analytics solo una vez cuando el componente se monta en el cliente
    if (typeof window !== "undefined") {
      isSupported().then((supported) => {
        if (supported) {
          const analytics = getAnalytics(app);
          setAnalyticsInstance(analytics);
        }
      });

      const handleGlobalClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const interactiveElement = target.closest("button, a");
        
        if (interactiveElement) {
          let label = interactiveElement.textContent?.trim() || interactiveElement.getAttribute("aria-label") || "";
          
          // Clean up string
          label = label.replace(/\s+/g, ' ');

          // Truncate if it's too long
          if (label.length > 50) {
             label = label.substring(0, 50) + "...";
          }
          
          const tagName = interactiveElement.tagName.toLowerCase();
          
          if (label) {
            trackUserEvent(tagName === "button" ? "button_clicked" : "link_clicked", {
               label: label,
               id: interactiveElement.id || undefined
            });
          }
        }
      };

      document.addEventListener("click", handleGlobalClick);
      return () => document.removeEventListener("click", handleGlobalClick);
    }
  }, []);

  useEffect(() => {
    if (analyticsInstance && pathname) {
      logEvent(analyticsInstance, "page_view", {
        page_path: pathname,
      });
    }
  }, [pathname, analyticsInstance]);

  return null; // Este componente no renderiza nada en pantalla
}
