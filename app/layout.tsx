import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

import ChatBot from "@/components/chatbot/chatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://gravion.space"),
  title: "Gravion | AI-Powered Mineral Exploration",
  description:
    "AI-powered satellite mineral exploration. Gravion detects gold, copper, lithium and 43 minerals from orbit. NVIDIA Inception member.",
  applicationName: "Gravion",
  keywords: [
    // Brand
    "Gravion",
    "Gravion Inc",
    "Gravion AI",

    // Core offering (high intent)
    "AI mineral exploration",
    "satellite mineral detection",
    "mineral exploration technology",
    "AI mining solutions",
    "remote sensing minerals",
    "earth observation mining",

    // Mining industry (clients)
    "gold exploration technology",
    "copper exploration AI",
    "lithium discovery technology",
    "mining data analytics",
    "geological survey AI",
    "resource discovery platform",

    // Tech / AI audience
    "geospatial AI",
    "satellite data analytics",
    "AI for earth observation",
    "machine learning geology",
    "space-based analytics",

    // Investor / startup positioning
    "mining tech startup",
    "AI startup mining industry",
    "NVIDIA Inception AI",
    "deep tech earth intelligence",

    // Long-tail (underrated but powerful)
    "find minerals using satellite",
    "detect gold from space",
    "AI-powered resource exploration",
    "mineral detection without drilling",
  ],
  openGraph: {
    title: "Gravion | AI-Powered Mineral Exploration",
    description:
      "AI-powered satellite mineral exploration. Gravion detects gold, copper, lithium and 43 minerals from orbit. NVIDIA Inception member.",
    url: "https://gravion.space",
    siteName: "Gravion",
    type: "website",
    images: [
      {
        url: "https://gravion.space/Logo_Emblem4.png",
        width: 1200,
        height: 530,
        alt: "Gravion AI Mineral Exploration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gravion | AI-Powered Mineral Exploration",
    description:
      "AI-powered satellite mineral exploration. Gravion detects gold, copper, lithium and 43 minerals from orbit. NVIDIA Inception member.",
    images: ["https://gravion.space/Logo_Emblem4.png"]
  },
  authors: [
    {
      name: "Gravion",
      url: "https://gravion.space",
    },
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Titillium+Web:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen bg-background font-titillium antialiased"
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <ChatBot />
      </body>
    </html>
  );
}
