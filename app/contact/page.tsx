import { ContactForm } from "@/components/contact-form";
import { HudContainer } from "@/components/ui/hud-container";
import { SectionHeader } from "@/components/ui/section-header";
import { Mail, Phone } from "lucide-react";
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
    <div className="pt-16 pb-20">
      <section className="pt-16 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background to-background"></div>
          <Image
            src="https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg"
            alt="Communications satellite"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-6">
              CONTACT US
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Request beta access or speak with our team about how Gravion Space
              can enhance your operations
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="GET IN TOUCH"
                description="Whether you're interested in joining our beta program or want to learn more about our technology, we're here to help"
                className="mb-8"
              />

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-muted-foreground">info@gravion.space</p>
                  </div>
                </div>
                {/* ivanmolokoedov21@gmail.com */}
                <div className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-muted-foreground">
                      Schedule a call with our team to discuss your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <HudContainer className="p-0 overflow-hidden">
                  <div className="aspect-square relative h-full w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Mission control center"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-xl font-medium mb-2">
                          Mission Control
                        </h3>
                        <p className="text-sm text-gray-300">
                          Our headquarters features state-of-the-art facilities
                          for satellite data processing and real-time mission
                          coordination.
                        </p>
                      </div>
                    </div>
                  </div>
                </HudContainer>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="JOIN OUR PILOT PROGRAM"
            align="center"
            className="mb-6"
          />

          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            Selected organizations will receive early access to our technology,
            direct support from our technical team, and the opportunity to help
            shape the future of anomaly detection from space.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="border border-primary/20 rounded p-6 bg-card/50">
              <div className="text-3xl font-orbitron text-primary mb-2">01</div>
              <h3 className="text-lg font-medium mb-2">Apply</h3>
              <p className="text-sm text-muted-foreground">
                Submit your application through our beta request form.
              </p>
            </div>

            <div className="border border-primary/20 rounded p-6 bg-card/50">
              <div className="text-3xl font-orbitron text-primary mb-2">02</div>
              <h3 className="text-lg font-medium mb-2">Consultation</h3>
              <p className="text-sm text-muted-foreground">
                Meet with our team to discuss your specific needs and use cases.
              </p>
            </div>

            <div className="border border-primary/20 rounded p-6 bg-card/50">
              <div className="text-3xl font-orbitron text-primary mb-2">03</div>
              <h3 className="text-lg font-medium mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Receive access to our platform and technical support for your
                pilot.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
