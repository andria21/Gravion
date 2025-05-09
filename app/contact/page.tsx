"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { SectionHeader } from '@/components/ui/section-header'
import { HudContainer } from '@/components/ui/hud-container'
import { Satellite, Mail, MapPin, Phone } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import LOGO from "../../assets/Logo_Emblem.png";

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Request Submitted",
        description: "We've received your beta request. Our team will be in touch shortly.",
      })
      setFormData({
        name: '',
        email: '',
        organization: '',
        interest: '',
        message: ''
      })
    }, 1500)
  }
  
  return (
    <div className="pt-16 pb-20">
      <section className="pt-16 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
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
              Request beta access or speak with our team about how Gravion Space can enhance your operations
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
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-muted-foreground">info@gravionspace.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <HudContainer className="p-0 overflow-hidden">
                  <div className="aspect-square relative h-full w-full">
                    <Image 
                      src="https://images.pexels.com/photos/3769135/pexels-photo-3769135.jpeg" 
                      alt="Mission control center"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-xl font-medium mb-2">Mission Control</h3>
                        <p className="text-sm text-gray-300">
                          Our headquarters features state-of-the-art facilities for satellite data processing and real-time mission coordination.
                        </p>
                      </div>
                    </div>
                  </div>
                </HudContainer>
              </div>
            </div>
            
            <div>
              <HudContainer className="h-full">
                <div className="flex items-center mb-6">
                <Image
                    src={LOGO}
                    alt="Gravion Logo"
                    width={40}
                    height={100}
                    className="h-7 w-7 text-primary mr-2"
                  />
                  <h2 className="text-xl font-bold tracking-wider">GET IN TOUCH</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Your company or organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="bg-card/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest</Label>
                    <Select value={formData.interest} onValueChange={handleSelectChange} required>
                      <SelectTrigger id="interest" className="bg-card/50">
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="defense">Defense & Intelligence</SelectItem>
                        <SelectItem value="search">Search & Rescue</SelectItem>
                        <SelectItem value="mining">Mining & Resource Exploration</SelectItem>
                        <SelectItem value="research">Research & Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your specific needs or applications"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-card/50"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "SUBMIT"}
                  </Button>
                </form>
              </HudContainer>
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
            Selected organizations will receive early access to our technology, direct support from our technical team, and the opportunity to help shape the future of anomaly detection from space.
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
                Receive access to our platform and technical support for your pilot.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}