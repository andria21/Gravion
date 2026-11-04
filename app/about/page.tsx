import { Button } from "@/components/ui/button";
import { HudContainer } from "@/components/ui/hud-container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import {
  ArrowRight,
  Cpu,
  Eye,
  HeartPulse,
  Layers,
  Network,
  Quote,
  ShieldAlert,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Gravion's mission to build planetary awareness with satellite imagery, terrain intelligence, and AI-powered detection technology.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Gravion",
    description:
      "Meet the team building Gravion's space-based detection technology for mineral exploration, risk awareness, and critical missions.",
    url: "/about",
  },
  twitter: {
    title: "About Gravion",
    description:
      "The mission, team, and technology behind Gravion's AI-powered satellite detection platform.",
  },
};

export default function AboutPage() {
  return (
    <div className="pb-8">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/app-images/about.jpg"}
            alt="Satellite in orbit"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-grid opacity-60"></div>
          <div className="absolute left-1/2 top-1/3 h-[480px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"></div>
          <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/70 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="eyebrow mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-primary/60" />
                About Gravion
                <span className="h-px w-8 bg-primary/60" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider leading-[1.1] mb-6">
                <span className="text-gradient">ABOUT GRAVION SPACE</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground">
                Pioneering the future of space-based detection technology for
                critical missions
              </p>
            </Reveal>
          </div>

          {/* At a glance */}
          <Reveal delay={0.3}>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 backdrop-blur-md">
              {GLANCE.map((item) => (
                <div
                  key={item.label}
                  className="bg-background/80 px-5 py-6 text-center"
                >
                  <div className="text-gradient-primary font-heading text-2xl md:text-3xl font-bold">
                    {item.value}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <SectionHeader
                eyebrow="01 — Mission"
                title="OUR MISSION"
                className="mb-8"
              />

              <p className="mb-6 text-xl leading-relaxed text-foreground">
                Gravion’s mission is to build a new layer of planetary awareness
                — one that prevents loss of life, uncovers hidden dangers, and
                reveals untapped opportunities beneath the surface of our world.
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We combine satellite imagery, terrain intelligence, and
                  advanced sensing technologies — including spectral, thermal,
                  and geophysical instruments — into a single system capable of
                  detecting what humans and machines alone cannot.
                </p>

                <p>
                  Gravion exists to bridge the gap between chaos and clarity,
                  between what we know and what we’ve never been able to see.
                  It’s built not just to respond to emergencies, but to prevent
                  them. Not just to explore, but to protect.
                </p>

                <p className="border-l-2 border-primary/60 pl-4 text-foreground/90">
                  This is more than innovation — it’s the responsibility to use
                  technology for life, fairness, and the future.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PILLARS.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="flex items-center gap-3 rounded-md border border-primary/15 bg-primary/5 px-3 py-3"
                  >
                    <pillar.icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-semibold">
                      {pillar.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="btn-shine group h-11 px-6 font-semibold tracking-wider shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,255,0.55)]"
                >
                  <Link href="/contact">
                    CONTACT US
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <ImageFrame
                src="/app-images/about2.jpeg"
                alt="Satellite control room"
                label="Planetary Awareness"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="py-24 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/5"></div>
          <div className="absolute inset-0 bg-grid opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <Reveal>
            <SectionHeader
              eyebrow="02 — Leadership"
              title="FROM THE CEO"
              className="mb-12"
              align="center"
            />
          </Reveal>

          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/60 p-8 md:p-12 backdrop-blur-md shadow-[0_30px_80px_-30px_rgba(0,255,255,0.3)] transition-colors duration-500 hover:border-primary/35">
                <div className="absolute inset-x-0 top-0 glow-line"></div>
                <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="relative shrink-0">
                    <span className="absolute -inset-3 rounded-full border border-dashed border-primary/40 animate-[spin_30s_linear_infinite] motion-reduce:animate-none" />
                    <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-primary/30 shadow-[0_0_40px_rgba(0,255,255,0.25)]">
                      <Image
                        src={"/team-images/ceo.png"}
                        alt="CEO portrait"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="text-center md:text-left grow">
                    <h3 className="text-3xl font-bold mb-2">
                      Ivan Molokoedov
                    </h3>
                    <p className="eyebrow mb-6">Founder & CEO</p>

                    <p className="text-lg text-foreground/85 italic leading-relaxed">
                      “Gravion isn’t just another ambitious idea — it’s a
                      calculated move toward real-world impact. I identify
                      opportunities where vision meets feasibility, and I build
                      until results are delivered.”
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <p className="mt-10 text-center max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                I come from running a home services business — real work,
                managing crews, solving problems in the field. Along the way, I
                learned how different business models operate, and I knew I
                eventually wanted to shift from service work to building
                something that could scale and have deeper impact.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="relative overflow-hidden py-24 bg-linear-to-br from-primary/5 to-transparent">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 blur-[90px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 blur-[90px] rounded-full"></div>
        </div>

        <div className="container relative mx-auto px-4">
          <Reveal>
            <SectionHeader
              eyebrow="03 — Team"
              title="DEPARTMENTS"
              className="mb-6"
              align="center"
            />

            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-muted-foreground">
                Gravion was founded to solve one of the oldest problems in
                mineral exploration: finding what&apos;s underground without
                digging first. Our team combines experience in defense
                operations, AI development, and field geology to build
                satellite-based detection technology that identifies mineral
                targets from orbit.
              </p>
            </div>
          </Reveal>

          {/* Technical Department */}
          <DepartmentLabel title="TECHNICAL DEPARTMENT" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {LEADERSHIP.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1} className="h-full">
                <TeamCard {...member} />
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
            {AI_TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1} className="h-full">
                <TeamCard {...member} />
              </Reveal>
            ))}
          </div>

          {/* Advisory & Media */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <DepartmentLabel title="STRATEGIC ADVISOR" />
              <Reveal className="h-full">
                <TeamCard
                  name="Vyacheslav Yuschenko"
                  role="Strategic Advisor"
                  bio="Expert in data interpretation and pattern recognition algorithms."
                  image="/team-images/slavanew.jpeg"
                />
              </Reveal>
            </div>

            <div className="flex flex-col">
              <DepartmentLabel title="MEDIA DEPARTMENT" />
              <Reveal delay={0.1} className="h-full">
                <TeamCard
                  name="Novoseltsky Dmitry"
                  role="Creative Lead"
                  bio="Constructing the visual and auditory identity of Gravion, ensuring the mission is communicated with clarity and impact."
                  image="/team-images/dmitrii.jpg"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal className="order-2 lg:order-1">
              <ImageFrame
                src="/app-images/nasamoon.jpg"
                alt="Tech innovation"
                label="Orbital Intelligence"
              />
            </Reveal>

            <Reveal delay={0.15} className="order-1 lg:order-2">
              <SectionHeader
                eyebrow="04 — Technology"
                title="OUR TECHNOLOGY"
                className="mb-8"
              />

              <div className="space-y-4">
                {TECHNOLOGY.map((tech, i) => (
                  <div
                    key={tech.title}
                    className="group relative flex gap-4 overflow-hidden rounded-lg border border-primary/15 bg-card/40 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-card/70"
                  >
                    <span className="absolute left-0 top-0 h-full w-0.5 bg-linear-to-b from-primary to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/5 text-primary">
                      <tech.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="mb-1 flex items-baseline gap-3">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-lg font-medium">{tech.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="group h-11 px-6 tracking-wider border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-primary/60 hover:text-white"
                >
                  <Link href="/map">
                    VIEW CAPABILITY MAP
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <Reveal className="container mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card px-6 py-20 text-center shadow-[0_0_80px_-20px_rgba(0,255,255,0.25)]">
            <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none"></div>
            <div className="absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] pointer-events-none"></div>
            <div className="absolute inset-x-0 top-0 glow-line"></div>

            <div className="relative">
              <SectionHeader
                eyebrow="Get Involved"
                title="JOIN OUR MISSION"
                align="center"
                className="mb-6"
              />

              <p className="max-w-2xl mx-auto mb-10 text-muted-foreground">
                Whether you&apos;re interested in our technology for defense
                applications, search and rescue operations, or resource
                exploration, we&apos;re ready to discuss how Gravion Space can
                transform your capabilities
              </p>

              <Button
                asChild
                size="lg"
                className="btn-shine group h-12 px-8 font-semibold tracking-wider shadow-[0_0_25px_rgba(0,255,255,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]"
              >
                <Link href="/contact">
                  CONTACT US
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function ImageFrame({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="group relative h-100 overflow-hidden rounded-lg ring-1 ring-white/10 shadow-[0_30px_80px_-30px_rgba(0,255,255,0.35)]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background/80 via-primary/5 to-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-30"></div>

      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-primary"></div>

      <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 px-3 py-1 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
          {label}
        </span>
      </div>
    </div>
  );
}

function DepartmentLabel({ title }: { title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="h-px flex-1 bg-linear-to-r from-transparent to-primary/40" />
      <h2 className="text-lg md:text-xl font-bold tracking-[0.2em] text-primary">
        {title}
      </h2>
      <span className="h-px flex-1 bg-linear-to-l from-transparent to-primary/40" />
    </div>
  );
}

function TeamCard({
  name,
  role,
  bio,
  image,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
}) {
  return (
    <HudContainer className="group h-full bg-background/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_10px_40px_-15px_rgba(0,255,255,0.4)]">
      <div className="flex h-full flex-col items-center text-center">
        <div className="relative mb-5 mt-2">
          <span className="absolute -inset-2 rounded-full border border-dashed border-primary/30 transition-colors duration-300 group-hover:border-primary/70" />
          <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-primary/20 shadow-lg shadow-primary/20">
            <Image
              src={image}
              alt={name}
              fill
              sizes="112px"
              className="object-cover grayscale-[35%] transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
            />
          </div>
        </div>

        <h3 className="text-xl font-medium mb-1">{name}</h3>
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
          {role}
        </p>
        <div className="mb-4 h-px w-12 bg-primary/30" />
        <p className="grow text-sm leading-relaxed text-muted-foreground">
          {bio}
        </p>
      </div>
    </HudContainer>
  );
}

const GLANCE = [
  { value: "43", label: "Minerals from orbit" },
  { value: "8", label: "AI engines" },
  { value: "NVIDIA", label: "Inception member" },
  { value: "Patent", label: "Pending" },
];

const PILLARS = [
  { icon: HeartPulse, title: "Prevent loss of life" },
  { icon: ShieldAlert, title: "Uncover hidden dangers" },
  { icon: Eye, title: "Reveal opportunities" },
];

const LEADERSHIP = [
  {
    name: "Irakli Darsavelidze",
    role: "Co-Founder / Chief Executive Officer",
    bio: "Irakli is the driving force behind the team’s vision and execution. Under his leadership, ambitious ideas turned into real, working systems. He focuses not only on building products but on bringing together the right people to solve the right problems. He states: “I found the right people, we built the right system, and now we’re showing what’s possible when tech actually understands purpose.”",
    image: "/team-images/darsa.png",
  },
  {
    name: "Andria Marqarovi",
    role: "Co-Founder / Chief Technology Officer",
    bio: "Andria leads the technical development of Gravion — a system-level innovation. He focuses on solving complex problems and turning ideas into reliable systems. Andria shares: “Gravion isn’t theory — it’s deployed logic. Everything we built had to respond fast, endure pressure, and keep people safe. That’s not just engineering — that’s responsibility. And that’s why I’m here.”",
    image: "/team-images/Andria.png",
  },
  {
    name: "Aleksandre Mirzashvili",
    role: "Co-Founder / Chief Operating Officer",
    bio: "Aleksandre is Gravion’s operational compass — ensuring that people, processes, and execution stay aligned with precision. He bridges the gap between vision and practical results. Aleksandre stated: “If you want to build something real, you need more than good ideas — you need follow-through. Gravion was the vision. My job was to make sure it never drifted. We kept every promise, hit every mark, and turned complexity into clarity.”",
    image: "/team-images/aleksandre.jpg",
  },
];

const AI_TEAM = [
  {
    name: "Youssef",
    role: "Co-Founder / AI Engineer",
    bio: "Driving the vision of conversational AI integration within the Gravion ecosystem.",
    image: "/team-images/YOUSUFF.jpg",
  },
  {
    name: "Moe",
    role: "Co-Founder / AI Engineer",
    bio: "Leading the architectural design of intelligent agent systems.",
    image: "/team-images/moe.jpeg",
  },
];

const TECHNOLOGY = [
  {
    icon: Cpu,
    title: "Gravion AI Core",
    description:
      "Our proprietary AI system processes and correlates multi-source data in real-time, detecting patterns and anomalies with unprecedented accuracy.",
  },
  {
    icon: Layers,
    title: "Multi-Spectral Analysis",
    description:
      "Advanced imaging capabilities across multiple wavelengths enable detection in diverse conditions and environments.",
  },
  {
    icon: Network,
    title: "Tactical Integration",
    description:
      "Seamless integration with existing systems and field operations for immediate practical application and response.",
  },
];
