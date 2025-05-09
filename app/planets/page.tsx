"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { HudContainer } from "@/components/ui/hud-container";
import { Globe2, Info } from "lucide-react";

interface PlanetData {
  id: string;
  name: string;
  description: string;
  image: string;
  distance: string;
  type: string;
  rotation: string;
  atmosphere: string;
}

const planets: PlanetData[] = [
  {
    id: "mars",
    name: "Mars",
    description:
      "The Red Planet will be our first expansion target for anomaly detection technology, supporting future colonization efforts.",
    image:
      "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg",
    distance: "54.6 million km",
    type: "Terrestrial",
    rotation: "24.6 hours",
    atmosphere: "CO2, Nitrogen, Argon",
  },
  {
    id: "europa",
    name: "Europa",
    description:
      "Jupiter's icy moon is a prime target for subsurface ocean exploration and possible signs of extraterrestrial life.",
    image:
      "https://images-ext-1.discordapp.net/external/6lU7GFvw6yo_sQI-qPEB07IDm19folvH-ER7X6naiaI/https/2.bp.blogspot.com/-ymnOyqj0q5k/TfBtzbE3A6I/AAAAAAAAAi0/b7sgh-7XLOQ/s1600/Jupiter%252Bwith%252Btwo%252Bof%252Bits%252Bmany%252Bmoons%25252C%252BEuropa%252Bup%252Bclose%252Band%252BIo%252Bin-between.png?format=webp&quality=lossless&width=933&height=544",
    distance: "628.3 million km",
    type: "Ice moon",
    rotation: "3.55 days",
    atmosphere: "Thin oxygen",
  },
  {
    id: "titan",
    name: "Titan",
    description:
      "Saturn's largest moon features liquid methane lakes and a thick atmosphere, ideal for resource identification.",
    image:
      "https://images-ext-1.discordapp.net/external/rmXUdVSjlsjbyEioyHylznZEaSmLVKhpaTfiz3uFSq8/https/sos.noaa.gov/ftp_mirror/astronomy/titan/color/media/thumbnail_big.jpg?format=webp&width=648&height=648",
    distance: "1.2 billion km",
    type: "Gas moon",
    rotation: "15.9 days",
    atmosphere: "Nitrogen, methane",
  },
  {
    id: "venus",
    name: "Venus",
    description:
      "Despite hostile surface conditions, Venus's upper atmosphere could support cloud-based anomaly detection.",
    image:
      "https://images-ext-1.discordapp.net/external/aRH-pY9qKRDCFosiShN86WSxyoZtfWOkixujtfl5zVQ/%3Fse%3D2025-05-06T19%253A19%253A16Z%26sp%3Dr%26sv%3D2024-08-04%26sr%3Db%26scid%3D57fef9b3-055e-5bac-a851-76f9ca1964bf%26skoid%3Da3336399-497e-45e5-8f28-4b88ecca3d1f%26sktid%3Da48cca56-e6da-484e-a814-9c849652bcb3%26skt%3D2025-05-06T03%253A13%253A58Z%26ske%3D2025-05-07T03%253A13%253A58Z%26sks%3Db%26skv%3D2024-08-04%26sig%3DQop0FGv80VosqwTNKgPC3aJ98rJm%252Bq88lvgvA2s%252BKmY%253D/https/sdmntprnorthcentralus.oaiusercontent.com/files/00000000-ef3c-622f-abc5-27df3483d84f/raw?format=webp&width=648&height=648",
    distance: "41 million km",
    type: "Terrestrial",
    rotation: "243 days",
    atmosphere: "CO2, Nitrogen, Sulfuric acid",
  },
  {
    id: "enceladus",
    name: "Enceladus",
    description:
      "Saturn's icy moon with water geysers makes it a key target for subsurface liquid detection technology.",
    image:
      "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-c264-622f-9ca6-be8afa561242/raw?se=2025-05-06T19%3A21%3A15Z&sp=r&sv=2024-08-04&sr=b&scid=36db340f-e69f-53e8-b0e0-10bfe43b1faf&skoid=a3336399-497e-45e5-8f28-4b88ecca3d1f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-06T03%3A17%3A43Z&ske=2025-05-07T03%3A17%3A43Z&sks=b&skv=2024-08-04&sig=UuZNgTsbTkHupLX1o7J2i5uGFUCaFxZokzj4rhLfXvs%3D",
    distance: "1.272 billion km",
    type: "Ice moon",
    rotation: "32.9 hours",
    atmosphere: "Water vapor, CO2, nitrogen",
  },
  {
    id: "mercury",
    name: "Mercury",
    description:
      "The closest planet to the Sun offers unique opportunities for testing extreme thermal scanning capabilities.",
    image:
      "https://images-ext-1.discordapp.net/external/rVJ3zzkx7NGg4DFf3k3zl-u2Yj4ENLupBfaJwIQkfTU/https/i.pinimg.com/originals/e3/53/9c/e3539cce25382d900d140f889db17b6a.jpg?format=webp&width=519&height=648",
    distance: "77 million km",
    type: "Terrestrial",
    rotation: "58.6 days",
    atmosphere: "Minimal - sodium, potassium",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    description: "The largest planet in our solar system, a gas giant with a Great Red Spot, a storm larger than Earth.",
    image: "https://images-assets.nasa.gov/image/PIA02852/PIA02852~orig.jpg?w=863&h=629&fit=clip&crop=faces%2Cfocalpoint",
    distance: "588 million km",
    type: "Gas Giant",
    rotation: "9.9 hours",
    atmosphere: "Hydrogen, Helium",
  },
  {
    id: "saturn",
    name: "Saturn",
    description: "Known for its stunning ring system, Saturn is another gas giant in our solar system.",
    image: "https://images-assets.nasa.gov/image/PIA04913/PIA04913~orig.jpg?w=1016&h=1011&fit=clip&crop=faces%2Cfocalpoint",
    distance: "1.2 billion km",
    type: "Gas Giant",
    rotation: "10.7 hours",
    atmosphere: "Hydrogen, Helium",
  },
];

export default function PlanetsPage() {
  const [activePlanet, setActivePlanet] = useState<PlanetData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setActivePlanet(planets[0]);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16 pb-20">
      <section className="pt-16 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
          <Image
            src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg"
            alt="Stars in space"
            fill
            className="object-cover opacity-50"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-6">
              PLANETARY EXPLORATION
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              The future of Gravion Space technology beyond Earth&apos;s boundaries
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <HudContainer className="h-full">
                <div className="flex items-center mb-6">
                  <Globe2 className="h-5 w-5 text-primary mr-2" />
                  <h2 className="text-xl font-bold tracking-wider">
                    CELESTIAL BODIES
                  </h2>
                </div>

                <div className="space-y-3">
                  {planets.map((planet) => (
                    <button
                      key={planet.id}
                      className={`w-full p-2 text-left rounded-md transition-colors ${
                        activePlanet?.id === planet.id
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                      onClick={() => setActivePlanet(planet)}
                    >
                      <span className="font-medium">{planet.name}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-primary/20">
                  <div className="flex items-center mb-4">
                    <Info className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm font-medium">Coming Soon</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gravion&apos;s interplanetary anomaly detection capabilities are
                    currently in development. Stay tuned for updates on our
                    planetary exploration program.
                  </p>
                </div>
              </HudContainer>
            </div>

            <div className="lg:col-span-3">
              {isLoading ? (
                <HudContainer className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block relative w-16 h-16 mb-4">
                      <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-full h-full border-t-4 border-primary rounded-full animate-spin"></div>
                    </div>
                    <p className="text-sm font-mono">
                      LOADING PLANETARY DATA...
                    </p>
                  </div>
                </HudContainer>
              ) : activePlanet ? (
                <HudContainer className="h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative h-[300px] md:h-full rounded-md overflow-hidden">
                      <Image
                        src={activePlanet.image}
                        alt={activePlanet.name}
                        fill
                        className="object-cover"
                      />

                      {/* HUD overlay elements */}
                      <div className="absolute top-4 left-4 text-xs text-primary font-orbitron opacity-80">
                        TARGET: {activePlanet.name.toUpperCase()}
                      </div>
                      <div className="absolute top-4 right-4 text-xs text-primary font-orbitron opacity-80">
                        DISTANCE: {activePlanet.distance}
                      </div>

                      {/* Targeting overlays */}
                      <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary"></div>
                      <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary"></div>
                      <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-primary"></div>
                      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary"></div>
                    </div>

                    <div>
                      <SectionHeader
                        title={activePlanet.name}
                        className="mb-4"
                      />

                      <p className="mb-6 text-muted-foreground">
                        {activePlanet.description}
                      </p>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-card/70 border border-primary/20 rounded">
                            <div className="text-xs text-muted-foreground">
                              Type
                            </div>
                            <div className="text-sm font-medium">
                              {activePlanet.type}
                            </div>
                          </div>
                          <div className="p-3 bg-card/70 border border-primary/20 rounded">
                            <div className="text-xs text-muted-foreground">
                              Rotation Period
                            </div>
                            <div className="text-sm font-medium">
                              {activePlanet.rotation}
                            </div>
                          </div>
                        </div>

                        <div className="p-3 bg-card/70 border border-primary/20 rounded">
                          <div className="text-xs text-muted-foreground">
                            Atmosphere
                          </div>
                          <div className="text-sm font-medium">
                            {activePlanet.atmosphere}
                          </div>
                        </div>

                        <div className="p-3 bg-card/70 border border-primary/20 rounded">
                          <div className="text-xs text-muted-foreground">
                            Gravion Detection Focus
                          </div>
                          <div className="text-sm font-medium">
                            {activePlanet.id === "mars" &&
                              "Surface mapping, resource location"}
                            {activePlanet.id === "europa" &&
                              "Subsurface ocean detection"}
                            {activePlanet.id === "titan" &&
                              "Methane lake analysis"}
                            {activePlanet.id === "venus" &&
                              "Atmospheric composition scanning"}
                            {activePlanet.id === "enceladus" &&
                              "Water plume detection"}
                            {activePlanet.id === "mercury" &&
                              "Extreme temperature variation mapping"}
                            {activePlanet.id === "jupiter" &&
                              "Great Red Spot monitoring, atmospheric dynamics"}
                            {activePlanet.id === "saturn" &&
                              "Ring system stability, moon interactions"}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-8 p-4 border border-primary/20 rounded-md bg-primary/5">
                        <div className="flex items-center">
                          <div className="animate-pulse mr-3">
                            <Globe2 className="h-6 w-6 text-primary opacity-70" />
                          </div>
                          <div className="text-lg font-orbitron tracking-widest">
                            COMING SOON
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </HudContainer>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="INTERPLANETARY CAPABILITIES"
            description="The future of Gravion Space technology extends beyond Earth, bringing our detection capabilities to new worlds"
            className="mb-10"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <HudContainer className="h-full">
              <h3 className="text-xl font-medium mb-4">
                Harsh Environment Adaptation
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our technology is being adapted to function in the extreme
                conditions of other planets, from the freezing cold of Mars to
                the crushing pressure of Venus&apos;s atmosphere.
              </p>
              <div className="mt-auto pt-4 border-t border-primary/20 text-primary text-sm">
                Research Phase: Advanced
              </div>
            </HudContainer>

            <HudContainer className="h-full">
              <h3 className="text-xl font-medium mb-4">Subsurface Detection</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Enhanced radar and thermal imaging capabilities are being
                developed to penetrate ice sheets on moons like Europa and
                Enceladus to detect potential subsurface oceans and thermal
                vents.
              </p>
              <div className="mt-auto pt-4 border-t border-primary/20 text-primary text-sm">
                Research Phase: Mid-stage
              </div>
            </HudContainer>

            <HudContainer className="h-full">
              <h3 className="text-xl font-medium mb-4">Resource Mapping</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Advanced spectral analysis tools are being calibrated to
                identify valuable resources on Mars and other planetary bodies
                to support human exploration and colonization efforts.
              </p>
              <div className="mt-auto pt-4 border-t border-primary/20 text-primary text-sm">
                Research Phase: Early Development
              </div>
            </HudContainer>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/821644/pexels-photo-821644.jpeg"
              alt="Space exploration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl p-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-4">
                  THE NEXT FRONTIER
                </h2>
                <p className="text-lg mb-6">
                  Join us on our mission to expand humanity&apos;s reach into the
                  solar system with cutting-edge detection technology
                </p>
                <div className="inline-block relative">
                  <div className="relative z-10 px-8 py-3 font-orbitron tracking-widest border-2 border-primary text-primary bg-background/80 backdrop-blur-sm">
                    COMING SOON
                  </div>
                  <div className="absolute -inset-1 border border-primary/30 z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
