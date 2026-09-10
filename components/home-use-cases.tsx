"use client";

import Link from "next/link";
import { Mountain, Search, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { UseCaseCard } from "@/components/use-case-card";

export function HomeUseCases() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <SectionHeader
          title="PRIMARY APPLICATION: MINING"
          description="Revolutionizing mineral exploration with AI-driven spectral analysis and anomaly detection."
          align="center"
          className="mb-10"
        />

        <div className="max-w-4xl mx-auto mb-20">
          <Link href="/applications#mining" className="block h-full">
            <UseCaseCard
              title="Mining & Mineral Exploration"
              description="Gravion detects mineral concentrations, gold anomalies, and underground voids by analyzing spectral data and time-lapse satellite imagery. It enables smarter exploration with reduced environmental impact â€” helping teams focus excavation efforts, cut costs, and improve discovery rates across active or prospective sites."
              icon={<Mountain />}
              variant="secondary"
              index={0}
              className="h-full border-primary/50 shadow-[0_0_30px_rgba(0,255,255,0.1)]"
            />
          </Link>
        </div>

        <div className="max-w-6xl mx-auto border-t border-border/40 pt-16">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground uppercase tracking-widest">
            Future Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80 hover:opacity-100 transition-opacity">
            <Link href="/applications#search-rescue" className="block h-full">
              <UseCaseCard
                title="Search & Rescue"
                description="Identifying signs of life and terrain shifts across difficult terrain using thermal and satellite-based anomaly detection."
                icon={<Search />}
                variant="accent"
                index={1}
                className="h-full text-sm"
              />
            </Link>
            <Link href="/applications#military" className="block h-full">
              <UseCaseCard
                title="Military"
                description="Supporting operations by detecting thermal, spectral, and terrain-based anomalies through satellite comparisons over time."
                icon={<Shield />}
                variant="primary"
                index={2}
                className="h-full text-sm"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
