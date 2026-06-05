import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LogikaMobile | Ingeniería de Software",
  description: "Ingeniería de software para escalar tu negocio. Desarrollo móvil y web con arquitecturas robustas y orientadas a resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased dark`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans text-zinc-300 tracking-tight bg-fixed bg-gradient-to-br from-black via-zinc-900 to-[#3b1a00]">
        {children}
      </body>
    </html>
  );
}
