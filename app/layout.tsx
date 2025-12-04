import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { MonitorWrapper } from "@/components/retro/monitor-wrapper";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GK | Full Stack Developer",
  description: "Full Stack Developer con más de 3 años de experiencia en React, Next.js, Node.js y TypeScript. Portfolio profesional con proyectos de e-commerce, aplicaciones web y backend.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Gerardo Kohatus", "Portfolio", "Desarrollador Web"],
  authors: [{ name: "Gerardo Kohatus" }],
  openGraph: {
    title: "Gerardo Kohatus | Full Stack Developer",
    description: "Full Stack Developer con más de 3 años de experiencia",
    type: "website",
    locale: "es_AR",
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
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider defaultLanguage="es">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <MonitorWrapper>
            <Navbar />
            <main>{children}</main>
            <Toaster />
            </MonitorWrapper>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
