import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TemplateHub — Free HR & Business Templates",
    template: "%s | TemplateHub",
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
  authors: [{ name: "TemplateHub" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TemplateHub",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
