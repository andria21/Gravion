import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { HudContainer } from "@/components/ui/hud-container";
import Irakli from "../../assets/team-images/Irakli.jpg";
import Aleksandre from "../../assets/team-images/aleksandre.jpg";
import Andria from "../../assets/team-images/Andria.png";
import Ivan from "../../assets/team-images/Ivan.jpg";

// Add this style block
import "./team-animations.css";

export default function AboutPage() {
  return (
    <div className="pt-16 pb-20">
      <section className="pt-16 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
          <Image
            src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Satellite in orbit"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-6">
              ABOUT GRAVION SPACE
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Pioneering the future of space-based detection technology for
              critical missions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="OUR MISSION" className="mb-6" />

              <p className="mb-4">
                Gravion’s mission is to build a new layer of planetary awareness
                — one that prevents loss of life, uncovers hidden dangers, and
                reveals untapped opportunities beneath the surface of our world.
              </p>

              <p className="mb-4">
                We combine satellite imagery, terrain intelligence, and advanced
                sensing technologies — including spectral, thermal, and
                geophysical instruments — into a single system capable of
                detecting what humans and machines alone cannot.
              </p>

              <p className="mb-4">
                Gravion exists to bridge the gap between chaos and clarity,
                between what we know and what we’ve never been able to see. It’s
                built not just to respond to emergencies, but to prevent them.
                Not just to explore, but to protect.
              </p>

              <p className="mb-4">
                This is more than innovation — it’s the responsibility to use
                technology for life, fairness, and the future.
              </p>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">CONTACT US</Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src="https://images.pexels.com/photos/4644812/pexels-photo-4644812.jpeg"
                alt="Satellite control room"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>

              {/* Targeting overlay */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
            <div className="relative rounded-lg overflow-hidden h-[500px] w-[430px] mx-auto">
              <Image
                src={Ivan}
                alt="CEO working"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>

              {/* Targeting overlay */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
            </div>

            <div>
              <SectionHeader title="FROM THE CEO" className="mb-6" />

              <div className="space-y-4 text-lg">
                <p className="text-muted-foreground">
                  I come from running a home services business — real work,
                  managing crews, solving problems in the field. Along the way,
                  I learned how different business models operate, and I knew I
                  eventually wanted to shift from service work to building
                  something that could scale and have deeper impact.
                </p>

                <p className="text-muted-foreground">
                  Gravion didn’t come out of nowhere. It started with my
                  interest in treasure hunting, trying to find what’s hidden
                  underground. That obsession grew into learning about terrain
                  scanning, satellite imaging, and AI detection — and it became
                  clear there was a bigger opportunity here. Not just for
                  hobbyists, but for law enforcement, search and rescue teams,
                  military operations, mining, and even planetary analysis.
                </p>

                <p className="text-muted-foreground">
                  I’m not here to sell a quick startup. I love what Gravion does
                  — and I’m building it with full focus and passion. This is my
                  first serious project in the production space, and I’m
                  determined to make it deliver real results. Gravion is just
                  the beginning of a much larger path I’m committed to walking.
                </p>
              </div>

              <div className="mt-8 flex items-center">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src={Ivan}
                    alt="CEO portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Ivan Molokoedov</div>
                  <div className="text-sm text-primary">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <SectionHeader title="OUR TEAM" className="mb-6" align="center" />

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground mb-4">
              Curiosity may have killed the cat—but it also sparked the future.
              Gravion was born from a random thought, a moment of clarity, and a
              team driven by a shared vision. What started as a single idea
              quickly evolved through late-night discussions and
              cross-discipline collaboration into something much larger: a new
              perception of what technology can be.
            </p>

            <p className="text-muted-foreground mb-4">
              Gravion is the Earth&apos;s X-ray—capable of revealing natural
              resources, hidden terrains, and, most importantly, human lives in
              danger. From marine drones scanning the ocean floor to cave-rescue
              operators saving those trapped in hostile environments, Gravion is
              the next step in intelligent exploration and humanitarian
              technology.
            </p>

            <p className="text-muted-foreground">
              Meet the dedicated team members below who are building Gravion for
              something greater than themselves.
            </p>
          </div>
          <SectionHeader title="DM'S AI TEAM" className="mb-6" align="center" />

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground mb-4">
              DM’s AI was built to simplify — to give companies the tools to
              move faster, serve better, and think bigger. It is an automation
              company focused on building AI-powered support bots, but also a
              company which builds modern websites - powered with their
              innovative support bots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Irakli Darsavelidze",
                role: "Chief Executive Officer - DM’s AI",
                bio: "Irakli is the driving force behind DM’s AI — Under his leadership, DM’s AI evolved from an ambitious concept into an operational force. Irakli is the mastermind behind Gravions system level execution. His goal is not only to build products, but to build the right team for the right problems. He states: “I found the right people, we built the right system, and now we’re showing what’s possible when tech actually understands purpose.",
                image: Irakli,
              },
              {
                name: "Andria Marqarovi",
                role: "Chief Technology Officer",
                bio: "Andria leads the technical aspect of Gravion — a system-level innovation. He ensured to bring the excellence of DM’s AI with a passion for solving the “unsolvable”. Andria shares: Gravion isn’t theory — it’s a deployed logic. Everything we built had to respond fast, endure pressure, and keep people safe. That’s not just engineering — that’s responsibility. And that’s why I’m here.",
                image: Andria,
              },
              {
                name: "Aleksandre Mirzashvili",
                role: "Chief Operating Officer",
                bio: "Aleksandre is Gravion’s and DM’s AI’s operational compass — the one ensuring that all parts, people, and processes are completed with precision. he bridges the gap between vision and practical execution. Aleksandre stated: “If you want to build something real, you need more than good ideas — you need follow-through. Gravion was the vision. My job was to make sure it never drifted. With DM’s AI and Gravion, we  kept every promise, hit every mark, and turned complexity into clarity.",
                image: Aleksandre,
              },
            ].map((member, index) => (
              <HudContainer key={index} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 targeting-circle group">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 z-10"></div>
                    <div className="team-image-container">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover team-image"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </HudContainer>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="ONDE TEAM" className="mb-6" align="center" />

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground mb-4">
              Onde is a creative design studio specializing in high-impact
              animation, cinematic effects, and sound design. Their team brought
              Gravion’s vision to life through a precise blend of storytelling
              and technical execution — not just building visuals, but
              constructing a tone, a rhythm, and an identity that matched the
              system’s depth and mission. With specialists covering everything
              from motion design to sound atmospheres and dynamic transitions,
              Onde helped shape the way Gravion is experienced, not just seen.
            </p>

            <p className="text-muted-foreground">
              Let&apos;s make it together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-md mx-auto">
            <HudContainer className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 targeting-circle group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 z-10"></div>
                  <div className="team-image-container">
                    <Image
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                      alt="James Turner"
                      fill
                      className="object-cover team-image"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-medium mb-1">Dmitrii</h3>
                <p className="text-primary text-sm mb-4">Creative Director</p>
                <p className="text-muted-foreground text-sm">
                  At first, I thought Gravion was just another sci-fi pitch —
                  flashy, distant, maybe even exaggerated. I almost turned it
                  down. But as I learned what it really was — a platform built
                  to save lives, locate what others can’t, and turn chaos into
                  clarity — something changed. It wasn’t fiction. It was
                  necessary. And I knew we had to be the ones to tell that story
                </p>
              </div>
            </HudContainer>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="Tech innovation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>

              {/* Targeting overlay */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
            </div>

            <div>
              <SectionHeader title="OUR TECHNOLOGY" className="mb-6" />

              <div className="space-y-6">
                <div className="border border-primary/20 rounded p-4">
                  <h3 className="text-lg font-medium mb-2">Gravion AI Core</h3>
                  <p className="text-muted-foreground text-sm">
                    Our proprietary AI system processes and correlates
                    multi-source data in real-time, detecting patterns and
                    anomalies with unprecedented accuracy.
                  </p>
                </div>

                <div className="border border-primary/20 rounded p-4">
                  <h3 className="text-lg font-medium mb-2">
                    Multi-Spectral Analysis
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Advanced imaging capabilities across multiple wavelengths
                    enable detection in diverse conditions and environments.
                  </p>
                </div>

                <div className="border border-primary/20 rounded p-4">
                  <h3 className="text-lg font-medium mb-2">
                    Tactical Integration
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Seamless integration with existing systems and field
                    operations for immediate practical application and response.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/map">VIEW CAPABILITY MAP</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="JOIN OUR MISSION"
            align="center"
            className="mb-8"
          />

          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            Whether you&apos;re interested in our technology for defense
            applications, search and rescue operations, or resource exploration,
            we&apos;re ready to discuss how Gravion Space can transform your
            capabilities
          </p>

          <Button asChild size="lg">
            <Link href="/contact">CONTACT US</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
