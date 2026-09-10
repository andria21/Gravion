import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Orbitron, Titillium_Web } from "next/font/google";
import "./globals.css";

import ChatBot from "@/components/chatbot/chatbot";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { Toaster } from "@/components/ui/sonner";

// const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const titiliumWeb = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gravion.space"),
  title: {
    default: "Gravion | AI-Powered Mineral Exploration",
    template: "%s | Gravion",
  },
  description:
    "AI-powered satellite mineral exploration. Gravion detects gold, copper, lithium and 43 minerals from orbit. NVIDIA Inception member.",
  applicationName: "Gravion",
  creator: "Gravion",
  publisher: "Gravion",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  keywords: [
    // Brand
    "Gravion",
    "Gravion Inc",
    "Gravion AI",
    "gravion",

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
    url: "/",
    siteName: "Gravion",
    type: "website",
    locale: "en_US",
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
    images: ["https://gravion.space/Logo_Emblem4.png"],
  },
  authors: [
    {
      name: "Gravion",
      url: "https://gravion.space",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        titiliumWeb.variable,
        orbitron.variable,
        "font-sans dark"
      )}
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-titillium antialiased" suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster richColors position="top-right" />
        <ChatBot />
      </body>
    </html>
  );
}
