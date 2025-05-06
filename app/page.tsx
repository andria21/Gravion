import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { HudContainer } from "@/components/ui/hud-container";
import { UseCaseCard } from "@/components/use-case-card";
import { Shield, Mountain, Search, Database } from "lucide-react";

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
          <div className="mb-8 inline-block">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-primary/30 text-primary mb-4">
              PATENT PENDING
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 max-w-4xl mx-auto">
            AI-powered reconnaissance system
            <span className="text-primary">.</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            For rescue, defense, and mining
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/map">GET STARTED</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/about">LEARN MORE</Link>
            </Button>
          </div>
        </div>

        {/* Tactical targeting overlay effect */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div className="w-6 h-6 relative">
            <div className="absolute inset-0 border-2 border-primary rounded-full opacity-30 animate-ping"></div>
            <div className="absolute inset-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="INTERACTIVE DEMO"
            description="Experience Gravion AI in action. No signup required."
            align="center"
            className="mb-10"
          />

          <HudContainer className="mx-auto max-w-4xl">
            <div className="aspect-video relative overflow-hidden rounded bg-black">
              <Image
                src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg"
                alt="Mission demonstration"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background/40 backdrop-blur"
                >
                  Watch Demo
                </Button>
              </div>

              {/* HUD overlay elements */}
              <div className="absolute top-4 left-4 text-xs text-primary font-orbitron opacity-80">
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
              </div>
            </div>
          </HudContainer>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="APPLICATIONS"
            description="Gravion's technology serves critical missions across multiple domains."
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UseCaseCard
              title="Military"
              description="Advanced submarine detection and tracking using thermal anomalies and intelligent algorithmic processing for enhanced defense intelligence."
              icon={Shield}
              variant="primary"
            />
            <UseCaseCard
              title="Mining"
              description="Identify mineral deposits and gold anomalies with precision, reducing exploration costs and environmental impact through targeted operations."
              icon={Mountain}
              variant="secondary"
            />
            <UseCaseCard
              title="Search & Rescue"
              description="Rapid thermal scanning in wilderness areas to locate missing persons, delivering crucial time advantages in life-saving operations."
              icon={Search}
              variant="accent"
            />
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
                description="Our technology is generating significant interest across sectors."
                className="mb-6"
              />

              <p className="text-lg mb-8">
                Pilots in discussion with SAR teams and exploration firms.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="border border-primary/20 rounded p-4">
                  <div className="text-3xl font-orbitron text-primary mb-1">
                    93%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Detection accuracy
                  </div>
                </div>
                <div className="border border-primary/20 rounded p-4">
                  <div className="text-3xl font-orbitron text-primary mb-1">
                    5+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Pilot programs
                  </div>
                </div>
                <div className="border border-primary/20 rounded p-4">
                  <div className="text-3xl font-orbitron text-primary mb-1">
                    3
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Global sectors
                  </div>
                </div>
                <div className="border border-primary/20 rounded p-4">
                  <div className="text-3xl font-orbitron text-primary mb-1">
                    2x
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Detection speed
                  </div>
                </div>
              </div>
            </div>

            <HudContainer variant="secondary" className="h-full">
              <SectionHeader title="PATENT-PENDING SYSTEM" className="mb-6" />

              <p className="mb-4">
                Gravion AI Core combines satellite, thermal, and terrain data
                for real-time intelligence.
              </p>

              <div className="relative py-4">
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
              </div>
            </HudContainer>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="OUR TEAM"
            description="Built by operators with deep field and technical experience."
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
            description="Be among the first to access Gravion's groundbreaking technology."
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
