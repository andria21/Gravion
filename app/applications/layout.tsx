import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Explore Gravion applications for mineral exploration, search and rescue, defense intelligence, geospatial analysis, and critical field operations.",
  alternates: {
    canonical: "/applications",
  },
  openGraph: {
    title: "Gravion Applications",
    description:
      "Advanced AI and satellite intelligence across mineral exploration, search and rescue, and critical operational domains.",
    url: "/applications",
  },
  twitter: {
    title: "Gravion Applications",
    description:
      "See how Gravion applies satellite intelligence across high-impact operational domains.",
  },
};

export default function ApplicationsLayout({
  children,
}: LayoutProps<"/applications">) {
  return children;
}
