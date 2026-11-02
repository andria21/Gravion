import { Button } from "@/components/ui/button";
import { HomeUseCases } from "@/components/home-use-cases";
import { HudContainer } from "@/components/ui/hud-container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import type { Metadata } from "next";
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  Compass,
  Cpu,
  Crosshair,
  Database,
  FlaskConical,
  Globe,
  Radio,
  Satellite,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI-Powered Mineral Exploration",
  description:
    "Gravion detects 43 minerals from orbit using AI-powered satellite data, helping teams move from remote sensing signals to staked exploration targets.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gravion | AI-Powered Mineral Exploration",
    description:
      "Detect gold, copper, lithium, and 43 minerals from orbit with Gravion's AI-powered satellite exploration platform.",
    url: "/",
  },
  twitter: {
    title: "Gravion | AI-Powered Mineral Exploration",
    description:
      "AI-powered satellite mineral exploration for faster, lower-risk resource discovery.",
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <video
            src="https://res.cloudinary.com/djynatwlg/video/upload/f_auto:video,q_auto/gravionv9"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-grid opacity-60"></div>
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] md:h-[720px] md:w-[720px] rounded-full bg-primary/10 blur-[120px] animate-[float-glow_8s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65)_100%)]"></div>
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background"></div>
        </div>

        {/* HUD frame corners */}
        <div className="pointer-events-none absolute inset-x-4 top-24 bottom-6 md:inset-x-10 z-10 hidden sm:block">
          <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-primary/40" />
          <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-primary/40" />
          <span className="absolute left-0 bottom-0 h-6 w-6 border-l border-b border-primary/40" />
          <span className="absolute right-0 bottom-0 h-6 w-6 border-r border-b border-primary/40" />
          <span className="eyebrow absolute left-4 top-3 text-primary/60 hidden lg:block">
            Gravion // Orbital Mineral Intelligence
          </span>
          <span className="eyebrow absolute right-4 top-3 text-primary/60 hidden lg:block">
            43 Signatures · 4 Engines
          </span>
          <span className="eyebrow absolute left-4 bottom-3 text-primary/60 hidden lg:inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Field Campaign 01 · Wyoming · Complete
          </span>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-32 text-center">
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-[1.1] mb-6 max-w-5xl mx-auto">
              <span className="text-gradient">AI-Powered Mineral Exploration</span>
              <span className="text-primary drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              43 minerals detected from orbit. From satellite data to staked
              claims.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="btn-shine w-auto group h-12 px-8 font-semibold tracking-wider shadow-[0_0_25px_rgba(0,255,255,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]"
              >
                <Link href="/map">
                  SEE OUR TARGETS
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-auto group h-12 px-8 tracking-wider border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-primary/60 hover:text-white"
              >
                <Link href="/about">LEARN ABOUT GRAVION</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-primary" />
                Patent Pending - 63/791, 903
              </span>
              <span className="hidden sm:inline text-primary/30">/</span>
              <span className="inline-flex items-center gap-1.5">
                <ClipboardCheck className="w-3 h-3 text-primary" />
                Confirmation - 4990
              </span>
              <span className="hidden sm:inline text-primary/30">/</span>
              <span className="inline-flex items-center gap-1.5">
                <Database className="w-3 h-3 text-primary" />
                Patent Center - 70089816
              </span>
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/70">
            Scroll
          </span>
          <div className="relative h-10 w-px overflow-hidden bg-primary/15">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-transparent to-primary animate-[scroll-cue_2s_ease-in-out_infinite]"></span>
          </div>
        </div>
      </section>

      {/* Partner strip */}
      <section className="relative border-y border-white/5 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14">
          <span className="eyebrow text-muted-foreground">Program &amp; Compute Partners</span>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            <Image
              src="/nvidia-logos/nvidia-inception-program-badge-rgb-1c-blk-for-screen.png"
              alt="NVIDIA Inception Program"
              width={130}
              height={46}
              className="h-10 w-auto invert grayscale mix-blend-screen opacity-60 transition-opacity duration-300 hover:opacity-100"
            />
            <Image
              src="/lambda-logos/lambda_logo_horizontal_white-2000px.png"
              alt="Lambda GPU Cloud"
              width={130}
              height={30}
              className="h-6 w-auto opacity-60 transition-opacity duration-300 hover:opacity-100"
            />
          </div>
        </div>
      </section>

      {/* By the Numbers Section */}
      <section className="py-24 bg-background/70">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionHeader
              eyebrow="01 — Metrics"
              title="BY THE NUMBERS"
              description="Key metrics that highlight the power of Gravion's AI-driven approach."
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
            {STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className="group relative flex flex-col justify-between gap-6 bg-background p-6 text-left transition-colors duration-300 hover:bg-card"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {stat.value ? (
                  <div className="text-gradient-primary font-heading text-3xl lg:text-2xl xl:text-[1.75rem] 2xl:text-4xl font-bold tracking-tight whitespace-nowrap">
                    {stat.value}
                  </div>
                ) : (
                  <Globe className="h-9 w-9 text-primary" />
                )}
                <p className="text-muted-foreground text-sm leading-snug">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <SectionHeader
              eyebrow="02 — Process"
              title="HOW IT WORKS"
              description="From orbit to extraction: our streamlined exploration process."
              align="center"
              className="mb-16"
            />
          </Reveal>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Connector line between step icons */}
            <div className="glow-line absolute left-[10%] right-[10%] top-[3.5rem] hidden lg:block" />

            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1} className="h-full">
                <HudContainer className="group h-full flex flex-col items-center text-center p-6 bg-card/40 backdrop-blur-sm border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_40px_-15px_rgba(0,255,255,0.4)]">
                  <div className="relative w-16 h-16 rounded-full bg-background flex items-center justify-center mb-6 border border-primary/30 text-primary shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]">
                    <span className="absolute -inset-1.5 rounded-full border border-dashed border-primary/20" />
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground mb-2">
                    STEP {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </HudContainer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-linear-to-b from-background to-card/20 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[80%] max-w-4xl rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <Reveal>
            <SectionHeader
              eyebrow="03 — Live Demo"
              title="INTERACTIVE DEMO"
              description="Experience Gravion AI in action. No signup required"
              align="center"
              className="mb-10"
            />
          </Reveal>

          {/* <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background/40 backdrop-blur"
                >
                  Watch Demo
                </Button>
              </div> */}

          <Reveal>
          <HudContainer className="mx-auto max-w-4xl shadow-[0_30px_80px_-30px_rgba(0,255,255,0.35)]">
            <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Gravion Platform
              </span>
              <span>No Signup Required</span>
            </div>
            <div className="aspect-video relative overflow-hidden rounded bg-black ring-1 ring-white/10">
              {/* <video
                src="https://res.cloudinary.com/djynatwlg/video/upload/v1747128968/xy5m2b6uhckarhqk0vy9.mp4"
                controls={true}
                className="w-full h-full object-cover"
                preload="metadata"
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video> */}

              <VideoPlayer />

              {/* HUD overlay elements */}
              {/* <div className="absolute top-4 left-4 text-xs text-primary font-orbitron opacity-80">
                MISSION: THERMAL SCAN
              </div>
              <div className="absolute top-4 right-4 text-xs text-primary font-orbitron opacity-80">
                STATUS: ACTIVE
              </div>
              <div className="absolute bottom-4 left-4 text-xs text-primary font-orbitron opacity-80">
                LAT: 41.8781° N | LONG: 87.6298° W
              </div>
              <div className="absolute bottom-4 right-4 text-xs text-primary font-orbitron opacity-80">
                SENSORS: ONLINE
              </div> */}
            </div>
          </HudContainer>
          </Reveal>
        </div>
      </section>

      <HomeUseCases />
      {/* Stats & Patent Section */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <SectionHeader
                eyebrow="05 — Traction"
                title="TRACTION"
                description="Our technology is gaining momentum and proving its capabilities in real-world scenarios."
                className="mb-6"
              />
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Gravion has completed its first field validation campaign in
                  southern Wyoming. AI-predicted targets were visited, sampled,
                  and assessed. Hydrothermal alteration signatures and
                  geophysical anomalies were confirmed at multiple locations.
                  Multi-element laboratory geochemistry is currently in progress
                  at ALS Geochemistry (Reno, NV). Ground magnetic survey planned
                  for Q2 2026.
                </p>

                <div className="relative overflow-hidden bg-primary/5 border border-primary/20 rounded-lg p-5 pl-6 shadow-[0_0_15px_rgba(0,255,255,0.05)] transition-colors duration-300 hover:border-primary/40">
                  <span className="absolute left-0 top-0 h-full w-0.5 bg-linear-to-b from-primary to-primary/0" />
                  <div className="flex items-start gap-3">
                    <div className="mt-1 shrink-0 w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">
                        NVIDIA Inception Program — Accepted March 2026
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Access to GPU compute infrastructure, AI training
                        resources, and the NVIDIA partner and investor network.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden bg-primary/5 border border-primary/20 rounded-lg p-5 pl-6 shadow-[0_0_15px_rgba(0,255,255,0.05)] transition-colors duration-300 hover:border-primary/40">
                  <span className="absolute left-0 top-0 h-full w-0.5 bg-linear-to-b from-primary to-primary/0" />
                  <div className="flex items-start gap-3">
                    <div className="mt-1 shrink-0 w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">
                        Lambda GPU Cloud — Active Infrastructure Partner
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        High-performance GPU compute access for training and
                        inference of Gravion&apos;s multi-engine spectral
                        analysis models.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-md overflow-hidden border border-primary/20 shadow-[0_0_10px_rgba(0,255,255,0.1)] group"
                  >
                    <Image
                      src={`/field-photos/field${i}.jpg`}
                      alt={`Gravion field sampling at Target 11, Sierra Madre, Wyoming 2026 ${i}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="h-full">
            <HudContainer variant="secondary" className="h-full text-center">
              <SectionHeader
                title="AI & COMPUTE ARCHITECTURE"
                className="mb-6 text-center"
              />

              <p className="mb-4 font-medium text-primary">
                Multi-engine spectral and structural analysis of satellite
                imagery.
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                Gravion&apos;s core technology utilizes proprietary machine
                learning models to analyze multi-spectral satellite data. Our
                system is currently calibrated to detect, identify, and map 43
                distinct mineral signatures from orbit, delivering
                high-precision targets without the need for initial ground
                crews.
              </p>

              <div className="grid grid-cols-2 gap-4 text-left mt-8">
                <div className="bg-background/30 p-3 rounded border border-primary/20">
                  <div className="text-xs text-primary font-bold mb-1">
                    COMPUTE
                  </div>
                  <div className="text-xs text-muted-foreground">
                    High-performance GPU clusters for parallelized spectral
                    inference.
                  </div>
                </div>
                <div className="bg-background/30 p-3 rounded border border-primary/20">
                  <div className="text-xs text-primary font-bold mb-1">
                    TRAINING DATA
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Calibrated against confirmed deposits and US geological
                    surveys.
                  </div>
                </div>
              </div>

              {/* NVIDIA Recognition Block */}
              <div className="mt-8 pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center gap-6 text-left">
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                    Recognized by NVIDIA
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Gravion is an accepted member of the NVIDIA Inception
                    Program — a global initiative supporting the most promising
                    AI startups. Our compute infrastructure leverages
                    GPU-accelerated inference for parallelized spectral analysis
                    of satellite imagery.
                  </p>
                </div>
                <div className="shrink-0 self-start md:self-center">
                  <Image
                    src="/nvidia-logos/nvidia-inception-program-badge-rgb-1c-blk-for-screen.png"
                    alt="NVIDIA Inception Program Member"
                    width={140}
                    height={50}
                    className="hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Lambda Recognition Block */}
              <div className="mt-6 pt-6 border-t border-primary/10 flex flex-col md:flex-row items-center gap-6 text-left">
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                    Lambda GPU Cloud Partner
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Gravion leverages Lambda GPU Cloud infrastructure to
                    accelerate training and inference of our proprietary
                    multi-engine AI pipeline. Our compute backend uses Lambda
                    GPU clusters for parallelized spectral processing of
                    satellite imagery.
                  </p>
                </div>
                <div className="shrink-0 self-start md:self-center mr-2">
                  <Image
                    src="/lambda-logos/lambda_logo_horizontal_white-2000px.png"
                    alt="Lambda GPU Cloud Partner"
                    width={140}
                    height={60}
                    className="hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </HudContainer>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-background/40">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionHeader
              eyebrow="06 — Technology"
              title="TECHNOLOGY ROADMAP"
              description="Our proprietary deep learning models driving discovery."
              align="center"
              className="mb-14"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGINES.map((engine, i) => (
              <Reveal key={engine.title} delay={i * 0.1} className="h-full">
                <HudContainer className="group p-6 h-full flex flex-col text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_40px_-15px_rgba(0,255,255,0.4)]">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/25 bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                      <engine.icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/70">
                      ENGINE {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2">{engine.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {engine.description}
                  </p>
                </HudContainer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <SectionHeader
              eyebrow="07 — Team"
              title="OUR TEAM"
              description="Built by operators with deep field and technical experience"
              align="center"
              className="mb-10"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Link href="/about" className="group">
              <HudContainer className="h-full transition-all duration-300 group-hover:border-primary/40">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-4">Field Operations</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors mb-6">
                    Our team combines decades of experience in defense, search
                    and rescue, and mineral exploration operations.
                  </p>
                  <div className="text-primary mt-auto group-hover:translate-x-2 transition-transform">
                    Meet the team →
                  </div>
                </div>
              </HudContainer>
            </Link>

            <Link href="/about" className="group">
              <HudContainer className="h-full transition-all duration-300 group-hover:border-primary/40">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-4">
                    Technical Expertise
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors mb-6">
                    AI and satellite data specialists building proprietary
                    detection models for mineral exploration.
                  </p>
                  <div className="text-primary mt-auto group-hover:translate-x-2 transition-transform">
                    Meet the team →
                  </div>
                </div>
              </HudContainer>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <Reveal className="container mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card px-6 py-20 text-center shadow-[0_0_80px_-20px_rgba(0,255,255,0.25)]">
            <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none"></div>
            <div className="absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] pointer-events-none"></div>
            <div className="absolute inset-x-0 top-0 glow-line"></div>

            <div className="relative">
              <SectionHeader
                eyebrow="Get Started"
                title="UNLOCK GRAVION"
                description="Be among the first to access Gravion's groundbreaking technology"
                align="center"
                className="mb-10"
              />

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="btn-shine group h-12 px-8 font-semibold tracking-wider shadow-[0_0_25px_rgba(0,255,255,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]"
                >
                  <Link href="/contact">
                    SCHEDULE A CALL
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 tracking-wider border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-primary/60 hover:text-white"
                >
                  <Link href="/map">EXPLORE THE MAP</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

const STATS = [
  { value: "43", label: "minerals detectable from orbit" },
  {
    value: "4",
    label: "independent AI engines (spectral, structural, alteration, anomaly)",
  },
  {
    value: "$300-800",
    label: "per target vs. $50,000-500,000 traditional exploration",
  },
  { value: "10+", label: "active exploration targets in Wyoming" },
  {
    value: null,
    label:
      "Multi-commodity detection calibrated against known deposits of gold, copper, lithium, and other minerals",
  },
];

const STEPS = [
  {
    icon: Satellite,
    title: "Satellite Acquisition",
    description: "Multi-spectral data ingested across target region",
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description:
      "4 engines analyze spectral, structural, alteration, anomaly signals",
  },
  {
    icon: Crosshair,
    title: "Target Generation",
    description:
      "Convergent signals identify high-priority targets with GPS coordinates",
  },
  {
    icon: ClipboardCheck,
    title: "Validation & Claims",
    description: "Field sampling, lab analysis",
  },
  {
    icon: Globe,
    title: "Partner & Scale",
    description:
      "Joint venture structuring and claim development with industry partners.",
  },
];

const ENGINES = [
  {
    icon: Activity,
    title: "Spectral Analysis",
    description:
      "Convolutional networks trained to identify specific mineral reflectance signatures across hundreds of spectral bands.",
  },
  {
    icon: Compass,
    title: "Structural Geology",
    description:
      "Computer vision models that map faults, fractures, and lineaments to understand trap dynamics and geological context.",
  },
  {
    icon: FlaskConical,
    title: "Alteration Mapping",
    description:
      "Detects subtle hydrothermal alteration zones indicative of mineral deposits using chemical ratios and thermal data.",
  },
  {
    icon: Radio,
    title: "Anomaly Detection",
    description:
      "Unsupervised learning algorithms that flag statistical deviations and unique geological signatures from background noise.",
  },
];
