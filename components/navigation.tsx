"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, Satellite, Map, Users, Phone, Globe2 } from 'lucide-react'
import Image from 'next/image'

import LOGO from "../assets/Logo_Emblem.png";
import LOGO_TITLE from "../assets/Logo_Text.png";

import "./navbar/navigation.css";

const routes = [
  {
    name: 'Home',
    path: '/',
    icon: <Satellite className="h-5 w-5" />,
  },
  {
    name: 'Map',
    path: '/map',
    icon: <Map className="h-5 w-5" />,
  },
  {
    name: 'About',
    path: '/about',
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: 'Planets',
    path: '/planets',
    icon: <Globe2 className="h-5 w-5" />,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <Phone className="h-5 w-5" />,
  },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
    )}>
      <div className="px-4 sm:px-6 flex h-16 items-center justify-between w-full">
        <Link href="/" className="flex items-center space-x-2 font-orbitron">
          <div className="relative flex items-center justify-center"> {/* Container for logo and pulse */}
            <div className="radar-pulse-background"></div> {/* Pulsating background */}
            <Image
              src={LOGO}
              alt="Gravion Logo"
              width={40}
              height={100} // Note: If your emblem is more square, you might want to adjust width/height
              className="text-primary relative z-10 opacity-80" // Ensure logo is above pulse, removed old pulsing-logo
            />
          </div>
          <Image
              src={LOGO_TITLE}
              alt="Gravion Logo"
              width={120}
              height={300} // Note: If your emblem is more square, you might want to adjust width/height
              className="[filter:grayscale(1)_brightness(0)] relative z-10" // Ensure logo is above pulse, removed old pulsing-logo [filter:invert(0%)_sepia(0%)_saturate(0%)_hue-rotate(308deg)_brightness(98%)_contrast(101%)]
            />
          {/* <span className="text-xl font-bold tracking-wider">GRAVION</span> */}
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "relative flex items-center text-sm font-medium tracking-wider transition-colors",
                "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300",
                pathname === route.path 
                  ? "text-primary after:w-full" 
                  : "text-muted-foreground hover:text-foreground hover:after:w-full"
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="default" className="relative overflow-hidden">
            <Link href="/contact">
              <span className="z-10 relative">CONTACT US</span>
              <span className="absolute -top-10 left-0 w-full h-40 bg-primary/20 rotate-12 transform translate-x-12 transition-transform duration-700"></span>
            </Link>
          </Button>
        </div>
        
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[280px] sm:w-[350px] bg-card">
            <div className="flex flex-col gap-6 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 rounded-md transition-colors",
                    pathname === route.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {route.icon}
                  <span className="font-medium">{route.name}</span>
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/contact">REQUEST BETA</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}