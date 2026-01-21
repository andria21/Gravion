"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { HudContainer } from "@/components/ui/hud-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Mountain,
  Search,
  Lock,
  ArrowRight,
  Database,
  Globe,
  Zap,
} from "lucide-react";

export default function ApplicationsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionHeader
            title="MISSION APPLICATIONS"
            description="Advanced intelligence across critical operational domains"
            align="center"
            className="mb-8"
          />
        </motion.div>

        <motion.div
          className="space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Mining Section */}
          <motion.section
            id="mining"
            className="scroll-mt-24"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <HudContainer className="h-full" variant="secondary">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-secondary/10 border border-secondary/30">
                      <Mountain className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-wide text-secondary">
                      MINING & EXPLORATION
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    Gravion detects mineral concentrations, gold anomalies, and
                    underground voids by analyzing spectral data and time-lapse
                    satellite imagery.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-secondary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Spectral Analysis
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Identification of surface and sub-surface mineral
                          signatures.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-secondary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Void Detection
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Locating underground cavities and structural
                          anomalies.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-secondary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Cost Reduction
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Focus excavation efforts to reduce environmental
                          impact and operational costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </HudContainer>
              </div>
              <div className="order-1 lg:order-2 relative aspect-video rounded-lg overflow-hidden border border-secondary/20 shadow-[0_0_30px_-10px_rgba(var(--secondary),0.3)] group">
                {/* Placeholder for image/video */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-black/80 flex items-center justify-center">
                  <Mountain className="h-20 w-20 text-secondary/20 transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-60"></div>

                {/* Scanline effect */}
                <div className="absolute top-0 w-full h-1 bg-secondary/50 shadow-[0_0_10px_rgba(var(--secondary),0.8)] animate-[scan_3s_linear_infinite] opacity-30"></div>
              </div>
            </div>
          </motion.section>

          {/* Search & Rescue Section */}
          <motion.section
            id="search-rescue"
            className="scroll-mt-24"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-accent/20 shadow-[0_0_30px_-10px_rgba(var(--accent),0.3)] group">
                {/* Placeholder for image/video */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-black/80 flex items-center justify-center">
                  <Search className="h-20 w-20 text-accent/20 transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-60"></div>

                {/* Scanline effect */}
                <div className="absolute top-0 w-full h-1 bg-accent/50 shadow-[0_0_10px_rgba(var(--accent),0.8)] animate-[scan_4s_linear_infinite] opacity-30"></div>
              </div>
              <div>
                <HudContainer className="h-full" variant="accent">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-accent/10 border border-accent/30">
                      <Search className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-wide text-accent">
                      SEARCH & RESCUE
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    Gravion identifies signs of life and terrain shifts across
                    wide, difficult terrain using thermal and satellite-based
                    anomaly detection.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-accent mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Thermal Detection
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Locate heat signatures in dense cover or adverse
                          weather conditions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-accent mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Terrain Analysis
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Identify recent terrain shifts and potential hazards.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-accent mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Rapid Response
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Faster location of missing persons in time-sensitive
                          scenarios.
                        </p>
                      </div>
                    </div>
                  </div>
                </HudContainer>
              </div>
            </div>
          </motion.section>

          {/* Military Section */}
          <motion.section
            id="military"
            className="scroll-mt-24"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <HudContainer className="h-full" variant="primary">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/30">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-wide text-primary">
                      MILITARY INTELLIGENCE
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    Gravion supports military operations by detecting thermal,
                    spectral, and terrain-based anomalies through satellite
                    comparisons over time.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Threat Detection
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Identify potential threats and concealed assets.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Change Detection
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Track changes in terrain and infrastructure over time.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Strategic Insight
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Evolving battlefield insight across land, sea, and
                          remote areas.
                        </p>
                      </div>
                    </div>
                  </div>
                </HudContainer>
              </div>
              <div className="order-1 lg:order-2 relative aspect-video rounded-lg overflow-hidden border border-primary/20 shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)] group">
                {/* Placeholder for image/video */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-black/80 flex items-center justify-center">
                  <Shield className="h-20 w-20 text-primary/20 transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595183842183-a75727376c8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-60"></div>

                {/* Scanline effect */}
                <div className="absolute top-0 w-full h-1 bg-primary/50 shadow-[0_0_10px_rgba(var(--primary),0.8)] animate-[scan_3s_linear_infinite] opacity-30"></div>
              </div>
            </div>
          </motion.section>

          {/* Security Systems Section */}
          <motion.section
            id="security"
            className="scroll-mt-24"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-accent/20 shadow-[0_0_30px_-10px_rgba(var(--accent),0.3)] group">
                {/* Placeholder for image/video */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-black/80 flex items-center justify-center">
                  <Lock className="h-20 w-20 text-accent/20 transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-60"></div>

                {/* Scanline effect */}
                <div className="absolute top-0 w-full h-1 bg-accent/50 shadow-[0_0_10px_rgba(var(--accent),0.8)] animate-[scan_4s_linear_infinite] opacity-30"></div>
              </div>
              <div>
                <HudContainer className="h-full" variant="accent">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-accent/10 border border-accent/30">
                      <Lock className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-wide text-accent">
                      SECURITY SYSTEMS
                    </h2>
                    <span className="text-xs font-mono py-1 px-2 border border-accent/30 rounded text-accent bg-accent/5">
                      COMING SOON
                    </span>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    Gravion extends its AI-driven anomaly detection to private
                    and commercial security environments, analyzing visual,
                    spectral, and thermal feeds in real time.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-accent mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Intelligent Surveillance
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Automated threat recognition and perimeter monitoring.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-accent mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Autonomous Patrol
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Support for overhead cameras and future drone
                          integration.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-accent mt-1 shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">
                          Situational Awareness
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Continuous monitoring across secured perimeters.
                        </p>
                      </div>
                    </div>
                  </div>
                </HudContainer>
              </div>
            </div>
          </motion.section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Button asChild size="lg" className="group relative overflow-hidden">
            <Link href="/contact">
              <span className="relative z-10 flex items-center">
                CONTACT US{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
