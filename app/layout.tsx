import type { Metadata } from "next";
import "../styles/globals.css";
import { Provider } from "./provider";
import NavbarComponent from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VIP IA Community - Plataforma SaaS para Comunidades VIP",
  description: "Automatiza, monetiza y escala tu comunidad VIP con la herramienta más completa del mercado. Gestiona miembros, pagos y contenido exclusivo desde un solo dashboard.",
  keywords: "SaaS, comunidad VIP, monetización, pagos automatizados, contenido exclusivo, dashboard, creadores",
  authors: [{ name: "VIP IA Community" }],
  openGraph: {
    title: "VIP IA Community - Plataforma SaaS para Comunidades VIP",
    description: "Automatiza, monetiza y escala tu comunidad VIP con la herramienta más completa del mercado.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIP IA Community - Plataforma SaaS para Comunidades VIP",
    description: "Automatiza, monetiza y escala tu comunidad VIP con la herramienta más completa del mercado.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased max-w-screen dark bg-black text-white">
        <Provider>
          <NavbarComponent />
          <main>
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
