import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0c",
};

export const metadata: Metadata = {
  title: "WiA Omni-Control™ — Controle Operacional em Tempo Real",
  description:
    "Rastreabilidade, previsibilidade e memória decisória para operações acima de R$400k/mês. Sistema de controle estrutural para empresários de alto faturamento.",
  keywords: [
    "controle operacional",
    "rastreabilidade",
    "previsibilidade",
    "gestão empresarial",
    "auditoria operacional",
  ],
  robots: "index, follow",
  openGraph: {
    title: "WiA Omni-Control™ — Controle Operacional em Tempo Real",
    description:
      "Sistema de controle estrutural para operações de alto faturamento.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
