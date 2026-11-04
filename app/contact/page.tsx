import { ContactForm } from "@/components/contact-form";
import { HudContainer } from "@/components/ui/hud-container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import {
  ClipboardList,
  Mail,
  MessagesSquare,
  Phone,
  Rocket,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Gravion to request beta access, discuss pilot programs, or explore AI-powered satellite mineral detection for your operations.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Gravion",
    description:
      "Request beta access or speak with Gravion about AI-powered mineral exploration and satellite detection workflows.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Gravion",
    description:
      "Request beta access or speak with Gravion's team about satellite mineral detection.",
  },
};

export default function ContactPage() {
  return (
    <div className="pb-8">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg"
            alt="Communications satellite"
            fill
            priority
            className="object-cover opacity-35"
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
                Contact
                <span className="h-px w-8 bg-primary/60" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider leading-[1.1] mb-6">
                <span className="text-gradient">CONTACT US</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground">
                Request beta access or speak with our team about how Gravion
                Space can enhance your operations
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Channels + form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            <Reveal className="lg:col-span-2">
              <SectionHeader
                eyebrow="01 — Channels"
                title="GET IN TOUCH"
                description="Whether you're interested in joining our beta program or want to learn more about our technology, we're here to help"
                className="mb-8"
              />

              <div className="space-y-4">
                <div className="relative flex items-center gap-4 rounded-lg border border-primary/15 bg-card/40 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/5 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Email
                    </div>
                    {/* select-all: one click selects the whole address for copying */}
                    <div className="text-lg font-medium select-all">
                      info@gravion.space
                    </div>
                  </div>
                </div>
                {/* ivanmolokoedov21@gmail.com */}

                <div className="relative flex items-center gap-4 rounded-lg border border-primary/15 bg-card/40 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/5 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Phone
                    </div>
                    <p className="text-sm text-foreground/85">
                      Schedule a call with our team to discuss your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <HudContainer className="group p-0 overflow-hidden">
                  <div className="aspect-4/3 relative h-full w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Mission control center"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-grid opacity-30"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent flex items-end">
                      <div className="p-6">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 px-3 py-1 backdrop-blur-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
                            Mission Control
                          </span>
                        </div>
                        <p className="text-sm text-foreground/80">
                          Our headquarters features state-of-the-art facilities
                          for satellite data processing and real-time mission
                          coordination.
                        </p>
                      </div>
                    </div>
                  </div>
                </HudContainer>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-3">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pilot program */}
      <section
        id="pilot"
        className="relative overflow-hidden py-24 mt-8 border-t border-white/5"
      >
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none"></div>
        <div className="absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[110px] pointer-events-none"></div>

        <div className="container relative mx-auto px-4 text-center">
          <Reveal>
            <SectionHeader
              eyebrow="02 — Pilot Program"
              title="JOIN OUR PILOT PROGRAM"
              align="center"
              className="mb-6"
            />

            <p className="max-w-2xl mx-auto mb-14 text-muted-foreground">
              Selected organizations will receive early access to our
              technology, direct support from our technical team, and the
              opportunity to help shape the future of anomaly detection from
              space.
            </p>
          </Reveal>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glow-line absolute left-[16%] right-[16%] top-[3.25rem] hidden md:block" />

            {PILOT_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12} className="h-full">
                <HudContainer className="group h-full flex flex-col items-center p-6 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_40px_-15px_rgba(0,255,255,0.4)]">
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]">
                    <span className="absolute -inset-1.5 rounded-full border border-dashed border-primary/20" />
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground mb-2">
                    STEP {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </HudContainer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const PILOT_STEPS = [
  {
    icon: ClipboardList,
    title: "Apply",
    description: "Submit your application through our beta request form.",
  },
  {
    icon: MessagesSquare,
    title: "Consultation",
    description:
      "Meet with our team to discuss your specific needs and use cases.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description:
      "Receive access to our platform and technical support for your pilot.",
  },
];
