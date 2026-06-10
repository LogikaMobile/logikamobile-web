import { logEvent } from "firebase/analytics";
import { analytics } from "./firebase";

/**
 * Función centralizada para enviar eventos a Firebase Analytics.
 * Se asegura de que se ejecute solo en el cliente y cuando analytics esté inicializado.
 */
export const trackUserEvent = (eventName: string, eventParams?: Record<string, any>) => {
  try {
    if (typeof window !== "undefined" && analytics) {
      logEvent(analytics, eventName, eventParams);
      console.log(`[Analytics] ${eventName}`, eventParams || "");
    }
  } catch (error) {
    console.warn("Failed to log analytics event", error);
  }
};
