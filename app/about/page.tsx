import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import { HudContainer } from '@/components/ui/hud-container'

export default function AboutPage() {
  return (
    <div className="pt-16 pb-20">
      <section className="pt-16 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
          <Image 
            src="https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg" 
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
              Pioneering the future of space-based detection technology for critical missions.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="OUR MISSION" 
                className="mb-6"
              />
              
              <p className="mb-4">
                Gravion Space was founded with a singular mission: to revolutionize how we detect and respond to anomalies using satellite technology.
              </p>
              
              <p className="mb-4">
                Our patent-pending AI system represents a quantum leap in detection capabilities, enabling unprecedented accuracy in identifying objects and patterns invisible to conventional systems.
              </p>
              
              <p className="mb-4">
                By combining advanced thermal analysis, multi-spectral imaging, and proprietary AI algorithms, we're creating technology that saves lives, enhances defense capabilities, and transforms resource exploration.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image 
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg" 
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
              <SectionHeader 
                title="FROM THE CEO" 
                className="mb-6"
              />
              
              <div className="space-y-4 text-lg">
                <p className="text-muted-foreground">
                  I'm a builder and operator with a background in field operations, technical service, and high-pressure logistics. I founded a successful appliance service business from scratch, scaled it profitably, and I've since launched Gravion — an AI reconnaissance and anomaly detection platform designed for real-world deployment.
                </p>
                
                <p className="text-muted-foreground">
                  While I'm not a coder, I drive execution: organizing development, defining system logic, and translating mission needs into software features. I move fast — Gravion already has a working prototype, mission video, and demo-ready website.
                </p>
                
                <p className="text-muted-foreground">
                  I'm obsessed with building tools that make a real-world impact, especially in rescue, defense, and mineral exploration.
                </p>
              </div>
              
              <div className="mt-8 flex items-center">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                    alt="CEO portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">James Turner</div>
                  <div className="text-sm text-primary">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="OUR TEAM" 
            description="Built by operators with deep field and technical experience."
            className="mb-10"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Elara Vega",
                role: "Chief Technical Officer",
                bio: "Former NASA AI research lead with 15+ years specializing in satellite imagery analysis and machine learning applications for remote sensing.",
                image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg"
              },
              {
                name: "Col. Marcus Reid (Ret.)",
                role: "Director of Operations",
                bio: "30 years of military experience with expertise in defense intelligence and mission-critical field operations in challenging environments.",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
              },
              {
                name: "Dr. Sophia Chen",
                role: "Lead Data Scientist",
                bio: "Pioneering researcher in thermal imaging analysis with multiple patents in anomaly detection algorithms and real-time data processing.",
                image: "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg"
              }
            ].map((member, index) => (
              <HudContainer key={index} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 targeting-circle">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </HudContainer>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                name: "James Turner",
                role: "Chief of Search Operations",
                bio: "Former search and rescue coordinator with extensive experience in wilderness operations and emergency response coordination.",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              },
              {
                name: "Dr. Aisha Patel",
                role: "Resource Detection Specialist",
                bio: "Geologist with expertise in mineral exploration and development of remote sensing techniques for identifying resource deposits.",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
              },
              {
                name: "Leo Nakamura",
                role: "Systems Architect",
                bio: "Software engineer specializing in real-time data processing systems and satellite communications infrastructure.",
                image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg"
              }
            ].map((member, index) => (
              <HudContainer key={index} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 targeting-circle">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
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
              <SectionHeader 
                title="OUR TECHNOLOGY" 
                className="mb-6"
              />
              
              <div className="space-y-6">
                <div className="border border-primary/20 rounded p-4">
                  <h3 className="text-lg font-medium mb-2">Gravion AI Core</h3>
                  <p className="text-muted-foreground text-sm">
                    Our proprietary AI system processes and correlates multi-source data in real-time, detecting patterns and anomalies with unprecedented accuracy.
                  </p>
                </div>
                
                <div className="border border-primary/20 rounded p-4">
                  <h3 className="text-lg font-medium mb-2">Multi-Spectral Analysis</h3>
                  <p className="text-muted-foreground text-sm">
                    Advanced imaging capabilities across multiple wavelengths enable detection in diverse conditions and environments.
                  </p>
                </div>
                
                <div className="border border-primary/20 rounded p-4">
                  <h3 className="text-lg font-medium mb-2">Tactical Integration</h3>
                  <p className="text-muted-foreground text-sm">
                    Seamless integration with existing systems and field operations for immediate practical application and response.
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
            Whether you're interested in our technology for defense applications, search and rescue operations, or resource exploration, we're ready to discuss how Gravion Space can transform your capabilities.
          </p>
          
          <Button asChild size="lg">
            <Link href="/contact">CONTACT US</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}