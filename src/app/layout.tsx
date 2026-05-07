import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://templateregistry.com'),
  title: {
    default: 'Template Registry — Premium Business & HR Templates',
    template: '%s | Template Registry',
  },
  description: 'Access the global registry of professional SOPs, checklists, and operational frameworks. Engineered for clinical precision and academic integrity to streamline your business workflows.',
  keywords: [
    "HR templates",
    "business templates",
    "onboarding checklist",
    "free templates",
    "SOP templates",
  ],
  authors: [{ name: "Template Registry" }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Template Registry",
  },
};

import SuccessHandler from "./components/SuccessHandler";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body id="outstatic" className="min-h-full flex flex-col" suppressHydrationWarning>
        <Toaster position="bottom-right" />
        <Suspense fallback={null}>
          <SuccessHandler />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
