# LogikaMobile Web

Plataforma corporativa y landing page principal para **LogikaMobile**, una agencia de desarrollo de software de alto rendimiento y consultoría estratégica B2B.

## 🚀 Características Principales

- **Estética Tech/Terminal (Deep Tech):** Diseño visual audaz, corporativo y moderno utilizando una paleta de colores de alto contraste (Negro Zinc, Naranja Conversión, Morado Corporativo y acentos Cyan).
- **Cotizador Interactivo ("Triángulo de Hierro"):** Un modal dinámico de 6 pasos que gamifica y filtra la captura de leads, calculando un presupuesto estimado (Gross-Up RESICO) con base en la complejidad, origen, diseño, integraciones y urgencia del proyecto.
- **Automatización de Leads:** Integración de un backend Serverless (Route Handlers) conectado vía `nodemailer` para enviar resúmenes técnicos de cotizaciones directamente al correo del CEO.
- **Social Proof Dinámico:** Carrusel infinito de clientes ("Trusted By") integrado con logos vectoriales reales en escala de grises que toman vida al interactuar.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, versión 16)
- **UI Library:** [React 19](https://react.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Email Delivery:** [Nodemailer](https://nodemailer.com/about/)

## ⚙️ Configuración del Entorno (.env.local)

Para que el cotizador y el formulario de contacto puedan enviar correos electrónicos exitosamente, debes crear un archivo `.env.local` en la raíz del proyecto con las siguientes credenciales SMTP:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=tu_correo@gmail.com
SMTP_PASS=tu_contraseña_de_aplicacion
```

*(Nota: Si usas Gmail, asegúrate de habilitar la verificación en dos pasos y generar una "Contraseña de Aplicación" para `SMTP_PASS`).*

## 💻 Desarrollo Local

Para correr la plataforma en tu máquina de forma local:

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Configura tu archivo `.env.local` (ver sección anterior).

3. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la página en vivo.

## 🚀 Construcción y Producción

Para compilar y preparar la aplicación para producción:

```bash
npm run build
npm start
```

## 📐 Estructura Clave del Proyecto

- `src/app/page.tsx`: Landing page principal, orquestación de layout, semblanza corporativa, carruseles y secciones de servicios.
- `src/components/QuoteModal.tsx`: Lógica de React (estados, steps) y UI del cotizador interactivo.
- `src/app/api/contact/route.ts`: Endpoint backend para procesar el payload del formulario y disparar el envío SMTP por Nodemailer.
- `src/app/globals.css`: Archivo de configuración CSS global donde reside la animación `@keyframes marquee`.
- `public/logos/`: Activos gráficos, vectores y SVGs.

---
*Desarrollado para la visión técnica y ejecutiva de Luis Daniel Michel.*
