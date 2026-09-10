import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Map",
  description:
    "View Gravion's interactive capability map for AI-powered satellite target detection, terrain intelligence, and mineral exploration workflows.",
  alternates: {
    canonical: "/map",
  },
  openGraph: {
    title: "Gravion Capability Map",
    description:
      "Explore target detection and geospatial intelligence workflows powered by Gravion's satellite analysis platform.",
    url: "/map",
  },
  twitter: {
    title: "Gravion Capability Map",
    description:
      "Interactive satellite intelligence and target detection from Gravion.",
  },
};

export default function MapLayout({ children }: LayoutProps<"/map">) {
  return children;
}
