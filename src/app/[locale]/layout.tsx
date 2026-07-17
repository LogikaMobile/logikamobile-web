import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";
import GclidTracker from "@/components/GclidTracker";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://logikamobile.com.mx'),
  title: "LogikaMobile | Ingeniería de Software",
  description: "Ingeniería de software para escalar tu negocio. Desarrollo móvil y web con arquitecturas robustas y orientadas a resultados.",
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (locale !== 'es' && locale !== 'en') {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} antialiased dark`} suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18314574374"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18314574374');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans text-zinc-300 tracking-tight bg-fixed bg-gradient-to-br from-black via-zinc-900 to-[#3b1a00]">
        <NextIntlClientProvider messages={messages}>
          <FirebaseAnalytics />
          <GclidTracker />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareBusiness",
                "name": "LogikaMobile",
                "url": "https://logikamobile.com.mx",
                "logo": "https://logikamobile.com.mx/logos/Logo.svg",
                "description": "Especialistas en desarrollo de software a la medida y modernización de sistemas legacy.",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "MX"
                }
              })
            }}
          />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
