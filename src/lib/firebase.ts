import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

// Configuración pública de Firebase. Es 100% seguro tener esto en el código cliente.
const firebaseConfig = {
  apiKey: "AIzaSyBX4pYoJ5JvzxYmrQxC2M7luhD7V2ae2X8",
  authDomain: "ac-manager-19e26.firebaseapp.com",
  projectId: "ac-manager-19e26",
  storageBucket: "ac-manager-19e26.firebasestorage.app",
  messagingSenderId: "807649393897",
  appId: "1:807649393897:web:47cf39a54b173503cc4478",
  measurementId: "G-6VG3MV0G31" // ID del flujo LogikaMobile-web
};

// Singleton pattern para Next.js: Solo inicializar si no existe ya una app.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let analytics: Analytics | null = null;

// Analytics solo puede correr del lado del cliente (navegador)
if (typeof window !== "undefined") {
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
