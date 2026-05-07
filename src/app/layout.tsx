import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
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
    default: "Template Registry — Free HR & Business Templates",
    template: "%s | Template Registry",
  },
  description:
    "Download free, expertly crafted HR and business templates. Checklists, SOPs, scorecards, and review templates to streamline your workflows.",
  keywords: [
    "HR templates",
    "business templates",
    "onboarding checklist",
    "free templates",
    "SOP templates",
  ],
  authors: [{ name: "Template Registry" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Template Registry",
  },
};

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
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
