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
} from "lucide-react";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import GeologicalReports from "@/components/GeologicalReports";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
          <Image
            src="https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg"
            alt="Earth from space"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-32 text-center">
          <div className="mb-8 flex flex-col items-center justify-center">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-primary/30 text-primary mb-4">
              PATENT PENDING - 63/791, 903
            </span>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-primary/30 text-primary mb-4">
              CONFIRMATION - 4990
            </span>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-primary/30 text-primary mb-4">
              PATENT CENTER - 70089816
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 max-w-4xl mx-auto">
            AI-powered reconnaissance system
            <span className="text-primary">.</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Eyes in the sky. Intelligence underground.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105"
            >
              <Link href="/map" className="relative z-10">
                <span className="relative z-10">GET STARTED</span>
                <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto group relative overflow-hidden transition-all duration-300 hover:border-primary hover:text-black"
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

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="APPLICATIONS"
            description="Gravion's technology serves critical missions across multiple domains"
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UseCaseCard
              title="Mining"
              description="Gravion detects mineral concentrations, gold anomalies, and underground voids by analyzing spectral data and time-lapse satellite imagery. It enables smarter exploration with reduced environmental impact — helping teams focus excavation efforts, cut costs, and improve discovery rates across active or prospective sites."
              icon={<Mountain />}
              variant="secondary"
              index={0}
            />
            <UseCaseCard
              title="Search & Rescue"
              description="Gravion identifies signs of life and terrain shifts across wide, difficult terrain using thermal and satellite-based anomaly detection. By comparing recent and historical environmental data, it helps rescue teams locate missing persons faster and respond more effectively in time-sensitive or hazardous conditions."
              icon={<Search />}
              variant="accent"
              index={1}
            />
            <UseCaseCard
              title="Military"
              description="Gravion supports military operations of all scales by detecting thermal, spectral, and terrain-based anomalies through satellite comparisons over time. It delivers evolving battlefield insight across land, sea, and remote areas — helping teams identify threats, track changes, and adapt strategies with greater speed and precision."
              icon={<Shield />}
              variant="primary"
              index={2}
            />

            <UseCaseCard
              title="Security Systems"
              description="Gravion extends its AI-driven anomaly detection to private and commercial security environments, analyzing visual, spectral, and thermal feeds in real time. Designed to support evolving technologies — such as full-property overhead cameras and future autonomous patrol drones — it offers intelligent surveillance, threat recognition, and continuous situational awareness across secured perimeters."
              icon={<Lock />}
              variant="accent"
              comingSoon={true}
              index={3}
            />
            {/* <UseCaseCard
              title="Law Enforcement"
              description="Gravion cross-references multiple 911 calls and analyzes ambient audio to detect background cues that may be missed by human listeners. By comparing sound patterns, caller environments, and incident timing, it reconstructs a clearer operational picture — helping responders prioritize threats and deploy with greater precision."
              icon={Shield}
              variant="secondary"
              comingSoon={true}
            /> */}
            {/* Geological Reports - Custom Implementation */}

            {/* <UseCaseCard
              title="Discovery Mode"
              description="Gravion empowers everyday explorers with access to satellite-based terrain scanning, anomaly detection, and time-lapse environmental analysis. From uncovering buried structures and cave systems to identifying fault lines and early signs of natural disasters, Discovery Mode is built for those who seek the unseen — whether for treasure hunting, geological curiosity, or safer hiking through remote terrain"
              icon={Compass}
              variant="primary"
              comingSoon={true}
            /> */}
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
                title="PATENT-PENDING SYSTEM"
                className="mb-6 text-center"
              />

              <p className="mb-4">
                Gravion AI Core combines satellite, thermal, and terrain data
                for real-time intelligence.
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                Gravion’s core system fuses satellite imaging with inputs from
                an array of advanced instruments — including ground-penetrating
                radar, spectrometers, magnetometers, radiometers, gravimeters,
                and thermal sensors. It leverages acoustic visualization,
                chemical detection, and terrain vibration analysis to identify
                voids, buried objects, mineral signatures, radiological
                anomalies, and underground water sources. Designed for modular
                deployment, Gravion adapts to diverse field conditions across
                land, sea, and subterranean environments.
              </p>

              {/* <div className="relative py-4">
                <div className="flex items-center mb-4">
                  <Database className="h-5 w-5 text-secondary mr-2" />
                  <span className="font-medium">
                    Satellite Data Integration
                  </span>
                </div>
                <div className="ml-7 pl-4 border-l border-secondary/30 text-muted-foreground text-sm">
                  Our proprietary algorithms process multi-spectral satellite
                  imagery in real-time, detecting subtle anomalies invisible to
                  conventional systems.
                </div>
              </div>

              <div className="relative py-4">
                <div className="flex items-center mb-4">
                  <Database className="h-5 w-5 text-secondary mr-2" />
                  <span className="font-medium">Thermal Analysis</span>
                </div>
                <div className="ml-7 pl-4 border-l border-secondary/30 text-muted-foreground text-sm">
                  Advanced thermal imaging capabilities allow detection through
                  dense cover and adverse conditions, with exceptional accuracy.
                </div>
              </div>

              <div className="relative py-4">
                <div className="flex items-center mb-4">
                  <Database className="h-5 w-5 text-secondary mr-2" />
                  <span className="font-medium">AI Correlation Engine</span>
                </div>
                <div className="ml-7 pl-4 border-l border-secondary/30 text-muted-foreground text-sm">
                  Machine learning models trained on millions of data points
                  deliver intelligence that grows more accurate with each
                  deployment.
                </div>
              </div> */}
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
            title="JOIN THE BETA"
            description="Be among the first to access Gravion's groundbreaking technology"
            align="center"
            className="mb-8"
          />

          <Button asChild size="lg">
            <Link href="/contact">REQUEST BETA ACCESS</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
