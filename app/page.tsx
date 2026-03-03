import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { HudContainer } from "@/components/ui/hud-container";
import { UseCaseCard } from "@/components/use-case-card";
import {
  Shield,
  Mountain,
  Search,
  Database,
  Lock,
  Compass,
  Globe,
  Satellite,
  Cpu,
  Crosshair,
  ClipboardCheck,
  Radio,
  Activity,
  FlaskConical,
  Plane,
  ShieldCheck,
} from "lucide-react";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import GeologicalReports from "@/components/GeologicalReports";

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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-32 text-center">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-medium text-primary tracking-wider uppercase shadow-[0_0_10px_rgba(0,255,255,0.15)]">
              <ShieldCheck className="w-3 h-3" />
              <span>PATENT PENDING - 63/791, 903</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-medium text-primary tracking-wider uppercase shadow-[0_0_10px_rgba(0,255,255,0.15)]">
              <ClipboardCheck className="w-3 h-3" />
              <span>CONFIRMATION - 4990</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-medium text-primary tracking-wider uppercase shadow-[0_0_10px_rgba(0,255,255,0.15)]">
              <Database className="w-3 h-3" />
              <span>PATENT CENTER - 70089816</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 max-w-4xl mx-auto">
            AI-Powered Mineral Exploration
            <span className="text-primary">.</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            43 minerals detected from orbit. From satellite data to staked
            claims.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-auto group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105"
            >
              <Link href="/map" className="relative z-10">
                <span className="relative z-10">SEE OUR TARGETS</span>
                <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-auto group relative overflow-hidden transition-all duration-300 hover:border-primary hover:text-white"
            >
              <Link href="/about" className="relative z-10">
                <span className="relative z-10">LEARN MORE</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Tactical targeting overlay effect */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div className="w-6 h-6 relative">
            <div className="absolute inset-0 border-2 border-primary rounded-full opacity-30 animate-[ping_4s_ease-out_infinite]"></div>
            <div className="absolute inset-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* By the Numbers Section */}
      <section className="py-20 bg-background/70">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="BY THE NUMBERS"
            description="Key metrics that highlight the power of Gravion's AI-driven approach."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <HudContainer
              variant="secondary"
              className="flex flex-col items-center justify-center p-6 h-full"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">43</h3>
              <p className="text-muted-foreground text-xs">
                minerals detectable from orbit
              </p>
            </HudContainer>
            <HudContainer
              variant="secondary"
              className="flex flex-col items-center justify-center p-6 h-full"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">4</h3>
              <p className="text-muted-foreground text-xs">
                independent AI engines (spectral, structural, alteration,
                anomaly)
              </p>
            </HudContainer>
            <HudContainer
              variant="secondary"
              className="flex flex-col items-center justify-center p-6 h-full"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">$300-800</h3>
              <p className="text-muted-foreground text-xs">
                per target vs. $50,000-500,000 traditional exploration
              </p>
            </HudContainer>
            <HudContainer
              variant="secondary"
              className="flex flex-col items-center justify-center p-6 h-full"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
              <p className="text-muted-foreground text-xs">
                active exploration targets in Wyoming
              </p>
            </HudContainer>
            <HudContainer
              variant="secondary"
              className="flex flex-col items-center justify-center p-6 h-full"
            >
              <Globe className="h-8 w-8 text-primary mb-3" />
              <p className="text-muted-foreground text-xs">
                Lithium model calibrated against known US deposits
              </p>
            </HudContainer>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="HOW IT WORKS"
            description="From orbit to extraction: our streamlined exploration process."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <HudContainer className="h-full flex flex-col items-center text-center p-6 bg-card/40 backdrop-blur-sm border-primary/20">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/30 text-primary shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <Satellite className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Step 1</h3>
              <h4 className="font-semibold text-primary mb-3">
                Satellite Acquisition
              </h4>
              <p className="text-sm text-muted-foreground">
                Multi-spectral data ingested across target region
              </p>
            </HudContainer>

            {/* Step 2 */}
            <HudContainer className="h-full flex flex-col items-center text-center p-6 bg-card/40 backdrop-blur-sm border-primary/20">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/30 text-primary shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Step 2</h3>
              <h4 className="font-semibold text-primary mb-3">AI Analysis</h4>
              <p className="text-sm text-muted-foreground">
                4 engines analyze spectral, structural, alteration, anomaly
                signals
              </p>
            </HudContainer>

            {/* Step 3 */}
            <HudContainer className="h-full flex flex-col items-center text-center p-6 bg-card/40 backdrop-blur-sm border-primary/20">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/30 text-primary shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <Crosshair className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Step 3</h3>
              <h4 className="font-semibold text-primary mb-3">
                Target Generation
              </h4>
              <p className="text-sm text-muted-foreground">
                Convergent signals identify high-priority targets with GPS
                coordinates
              </p>
            </HudContainer>

            {/* Step 4 */}
            <HudContainer className="h-full flex flex-col items-center text-center p-6 bg-card/40 backdrop-blur-sm border-primary/20">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/30 text-primary shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Step 4</h3>
              <h4 className="font-semibold text-primary mb-3">
                Validation & Claims
              </h4>
              <p className="text-sm text-muted-foreground">
                Field sampling, lab analysis
              </p>
            </HudContainer>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="INTERACTIVE DEMO"
            description="Experience Gravion AI in action. No signup required"
            align="center"
            className="mb-10"
          />

          {/* <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background/40 backdrop-blur"
                >
                  Watch Demo
                </Button>
              </div> */}

          <HudContainer className="mx-auto max-w-4xl">
            <div className="aspect-video relative overflow-hidden rounded bg-black">
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
        </div>
      </section>

      {/* Primary Application Section - Mining */}
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
                description="Gravion detects mineral concentrations, gold anomalies, and underground voids by analyzing spectral data and time-lapse satellite imagery. It enables smarter exploration with reduced environmental impact — helping teams focus excavation efforts, cut costs, and improve discovery rates across active or prospective sites."
                icon={<Mountain />}
                variant="secondary"
                index={0}
                className="h-full border-primary/50 shadow-[0_0_30px_rgba(0,255,255,0.1)]"
              />
            </Link>
          </div>

          {/* Future Applications Compact Section */}
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

              {/* <Link href="/applications#security" className="block h-full">
                <UseCaseCard
                  title="Security Systems"
                  description="AI-driven anomaly detection for private and commercial security environments, analyzing visual, spectral, and thermal feeds."
                  icon={<Lock />}
                  variant="accent"
                  comingSoon={true}
                  index={3}
                  className="h-full text-sm"
                />
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Patent Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="TRACTION"
                description="Our technology is gaining momentum and proving its capabilities in real-world scenarios."
                className="mb-6"
              />
              <p className="text-lg text-muted-foreground mb-8">
                Gravion is in advanced development with early access granted to
                professionals in search and rescue, exploration, and technical
                operations. We’re collaborating with SAR personnel, geotech
                operators, and drone experts to prepare for live mission trials,
                simulator rollouts, and deployment-ready integration.
              </p>
            </div>

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
            </HudContainer>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-background/40">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="TECHNOLOGY ROADMAP"
            description="Expanding our sensor fusion capabilities for comprehensive subterranean intelligence."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HudContainer className="p-6 h-full flex flex-col items-center text-center hover:border-primary/50 transition-colors">
              <Radio className="h-10 w-10 text-primary mb-4 opacity-80" />
              <h3 className="font-bold mb-2">Advanced Sensor Fusion</h3>
              <p className="text-sm text-muted-foreground">
                Integration of ground-penetrating radar (GPR), magnetometers,
                and gravimeters for deeper subsurface validation.
              </p>
            </HudContainer>

            <HudContainer className="p-6 h-full flex flex-col items-center text-center hover:border-primary/50 transition-colors">
              <Activity className="h-10 w-10 text-primary mb-4 opacity-80" />
              <h3 className="font-bold mb-2">Subterranean Acoustics</h3>
              <p className="text-sm text-muted-foreground">
                Void detection and geological mapping via acoustic visualization
                and terrain vibration analysis.
              </p>
            </HudContainer>

            <HudContainer className="p-6 h-full flex flex-col items-center text-center hover:border-primary/50 transition-colors">
              <FlaskConical className="h-10 w-10 text-primary mb-4 opacity-80" />
              <h3 className="font-bold mb-2">Chemical Sensing</h3>
              <p className="text-sm text-muted-foreground">
                Remote chemical detection for atmospheric and ground-level trace
                elements indicating buried resources.
              </p>
            </HudContainer>

            <HudContainer className="p-6 h-full flex flex-col items-center text-center hover:border-primary/50 transition-colors">
              <Plane className="h-10 w-10 text-primary mb-4 opacity-80" />
              <h3 className="font-bold mb-2">Autonomous Deployment</h3>
              <p className="text-sm text-muted-foreground">
                Drone-mounted sensor arrays for low-altitude, high-resolution
                scanning of difficult terrain.
              </p>
            </HudContainer>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="OUR TEAM"
            description="Built by operators with deep field and technical experience"
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    World-class AI researchers and satellite data specialists
                    with publications in leading journals and patents in remote
                    sensing technology.
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
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="UNLOCK GRAVION"
            description="Be among the first to access Gravion's groundbreaking technology"
            align="center"
            className="mb-8"
          />

          <Button asChild size="lg">
            <Link href="/contact">Schedule a Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
