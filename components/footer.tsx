import Link from 'next/link'
import { Satellite } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card/50 backdrop-blur-sm">
      <div className="container py-8 md:py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-orbitron justify-center">
              <Satellite className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold tracking-wider">GRAVION SPACE</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered anomaly detection from space — for rescue, defense, and mining.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Gravion Space. All rights reserved.
            </p>
          </div>
          
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-sm font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-muted-foreground hover:text-foreground transition-colors">
                  Map
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/planets" className="text-muted-foreground hover:text-foreground transition-colors">
                  Planets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-center">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Interested in our technology or want to join our beta?
              Reach out to us.
            </p>
            <Link 
              href="/contact" 
              className="inline-block text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Request Beta Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}