import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
