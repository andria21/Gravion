import { Button } from "@/components/ui/button";
import { HudContainer } from "@/components/ui/hud-container";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import Link from "next/link";
import DM_LOGO from "../../assets/dm-logo-quality.png";
import Andria from "../../assets/team-images/Andria.png";
import Irakli from "../../assets/team-images/Irakli.jpg";
import Aleksandre from "../../assets/team-images/aleksandre.jpg";
import AboutImage from "../../public/app-images/about.jpg";
import AboutImage2 from "../../public/app-images/about2.jpeg";
import AboutImage3 from "../../public/app-images/about3.jpeg";
import Dmitri from "../../assets/team-images/dmitri.jpg";

// Add this style block
import "./team-animations.css";

export default function AboutPage() {
  return (
    <div className="pt-16 pb-20">
      <section className="pt-16 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
          <Image
            src={AboutImage}
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
                src={AboutImage2}
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

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <SectionHeader
            title="FROM THE CEO"
            className="mb-12"
            align="center"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-2xl bg-card/50 backdrop-blur-md border border-primary/10 shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:border-primary/30 group">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-primary"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-primary"></div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-4 border-background/50 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-primary/40">
                    <Image
                      src={"/ceo.png"}
                      alt="CEO portrait"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="text-center md:text-left flex-grow">
                  <h3 className="text-3xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
                    Ivan Molokoedov
                  </h3>
                  <p className="text-primary text-lg font-medium mb-6 uppercase tracking-wider">
                    Founder & CEO
                  </p>

                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif leading-none transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-primary/40">
                      &quot;
                    </span>
                    <p className="text-lg text-muted-foreground italic leading-relaxed relative z-10 pl-6 transition-colors duration-300 group-hover:text-foreground">
                      Gravion isn’t just another ambitious idea — it’s a
                      calculated move toward real-world impact. I identify
                      opportunities where vision meets feasibility, and I build
                      until results are delivered.
                    </p>
                    <span className="absolute -bottom-8 right-0 text-6xl text-primary/20 font-serif leading-none transition-transform duration-500 group-hover:translate-y-2 group-hover:text-primary/40">
                      &quot;
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground mb-6">
                I come from running a home services business — real work,
                managing crews, solving problems in the field. Along the way, I
                learned how different business models operate, and I knew I
                eventually wanted to shift from service work to building
                something that could scale and have deeper impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl pointer-events-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-4">
          <SectionHeader title="DEPARTMENTS" className="mb-6" align="center" />

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

          {/* Technical Department */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-center mb-12 text-primary tracking-wider">
              TECHNICAL DEPARTMENT
            </h2>

            {/* DM Team */}
            <div className="mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Irakli Darsavelidze",
                    role: "Co-Founder / Chief Executive Officer - DM’s AI",
                    bio: "Irakli is the driving force behind DM’s AI — Under his leadership, DM’s AI evolved from an ambitious concept into an operational force. Irakli is the mastermind behind Gravions system level execution. His goal is not only to build products, but to build the right team for the right problems. He states: “I found the right people, we built the right system, and now we’re showing what’s possible when tech actually understands purpose.",
                    image: Irakli,
                  },
                  {
                    name: "Andria Marqarovi",
                    role: "Co-Founder / Chief Technology Officer",
                    bio: "Andria leads the technical aspect of Gravion — a system-level innovation. He ensured to bring the excellence of DM’s AI with a passion for solving the “unsolvable”. Andria shares: Gravion isn’t theory — it’s a deployed logic. Everything we built had to respond fast, endure pressure, and keep people safe. That’s not just engineering — that’s responsibility. And that’s why I’m here.",
                    image: Andria,
                  },
                  {
                    name: "Aleksandre Mirzashvili",
                    role: "Co-Founder / Chief Operating Officer",
                    bio: "Aleksandre is Gravion’s and DM’s AI’s operational compass — the one ensuring that all parts, people, and processes are completed with precision. he bridges the gap between vision and practical execution. Aleksandre stated: “If you want to build something real, you need more than good ideas — you need follow-through. Gravion was the vision. My job was to make sure it never drifted. With DM’s AI and Gravion, we  kept every promise, hit every mark, and turned complexity into clarity.",
                    image: Aleksandre,
                  },
                ].map((member, index) => (
                  <HudContainer key={index} className="h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 targeting-circle group shadow-lg shadow-primary/20">
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

                      <h3 className="text-xl font-medium mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm mb-4">{member.role}</p>
                      <p className="text-muted-foreground text-sm">
                        {member.bio}
                      </p>
                    </div>
                  </HudContainer>
                ))}
              </div>
            </div>

            {/* Convocore Team */}
            <div className="mb-12 relative p-8 ">
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Youssef",
                      role: "Co-Founder - Convocore",
                      bio: "Driving the vision of conversational AI integration within the Gravion ecosystem.",
                      image: "/YOUSUFF.jpg",
                    },
                    {
                      name: "Moe",
                      role: "Co-Founder - Convocore",
                      bio: "Leading the architectural design of intelligent agent systems.",
                      image: "/MOE.png",
                    },
                    {
                      name: "Mohammad Zubi",
                      role: "Co-Founder - Convocore",
                      bio: "Specializing in real-time analytics and seamless deployment strategies.",
                      image: "/zubi.jpg",
                    },
                  ].map((member, index) => (
                    <HudContainer
                      key={index}
                      className="h-full bg-background/50 backdrop-blur-sm"
                    >
                      <div className="flex flex-col items-center text-center h-full">
                        <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 targeting-circle group shadow-lg shadow-primary/20">
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

                        <h3 className="text-xl font-medium mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary text-sm mb-4 font-semibold">
                          {member.role}
                        </p>
                        <p className="text-muted-foreground text-sm flex-grow">
                          {member.bio}
                        </p>
                      </div>
                    </HudContainer>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Department */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-12 text-primary tracking-wider">
              ANALYTICS DEPARTMENT
            </h2>
            <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
              {[
                {
                  name: "Vyacheslav Yuschenko",
                  role: "Lead Analytics",
                  bio: "Expert in data interpretation and pattern recognition algorithms.",
                  image: null,
                },
                // {
                //   name: "Kevin",
                //   role: "Senior Analyst",
                //   bio: "Specializing in predictive modeling and terrain data assessment.",
                //   image: null,
                // },
              ].map((member, index) => (
                <HudContainer key={index} className="h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 targeting-circle group bg-muted flex items-center justify-center">
                      {member.image ? (
                        <div className="team-image-container w-full h-full relative">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover team-image"
                          />
                        </div>
                      ) : (
                        <span className="text-3xl text-muted-foreground font-bold">
                          {member.name[0]}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">
                      {member.bio}
                    </p>
                  </div>
                </HudContainer>
              ))}
            </div>
          </div>

          {/* Chemical Department */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-12 text-primary tracking-wider">
              CHEMICAL DEPARTMENT
            </h2>
            <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
              <HudContainer className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 targeting-circle group bg-muted flex items-center justify-center">
                    <span className="text-3xl text-muted-foreground font-bold">
                      Y
                    </span>
                  </div>

                  <h3 className="text-xl font-medium mb-1">Yuri Pustovoyt</h3>
                  <p className="text-primary text-sm mb-4">
                    Head of Chemical Analysis
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Leading the spectral analysis and chemical composition
                    identification initiatives.
                  </p>
                </div>
              </HudContainer>
            </div>
          </div>

          {/* Media Department */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-12 text-primary tracking-wider">
              MEDIA DEPARTMENT
            </h2>
            <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
              <HudContainer className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 targeting-circle group">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 z-10"></div>
                    <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 targeting-circle group bg-muted flex items-center justify-center">
                      <span className="text-3xl text-muted-foreground font-bold">
                        D
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium mb-1">
                    Novoseltsky Dmitry
                  </h3>
                  <p className="text-primary text-sm mb-4">Media Director</p>
                  <p className="text-muted-foreground text-sm">
                    Constructing the visual and auditory identity of Gravion,
                    ensuring the mission is communicated with clarity and
                    impact.
                  </p>
                </div>
              </HudContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src={AboutImage3}
                alt="Tech innovation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>

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
